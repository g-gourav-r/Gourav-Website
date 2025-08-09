from fastapi import FastAPI, Request, HTTPException
from pydantic import BaseModel, EmailStr, Field
import smtplib
import ssl
import os

# Create a FastAPI application instance
app = FastAPI()

# --- 1. Define the data model for Pydantic (Python's Zod equivalent) ---
# This ensures that all incoming data is correctly typed and validated.
class ContactForm(BaseModel):
    name: str = Field(..., min_length=2)
    email: EmailStr
    phone: str = Field(None, regex=r'^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$', description="Optional, but must be a valid phone number format.")
    message: str = Field(..., min_length=10)

# --- 2. Define the serverless function to handle POST requests ---
# The endpoint URL for this function will be your-site.com/api/contact
@app.post("/api/contact")
async def handle_contact_form(form_data: ContactForm):
    """
    Handles a POST request from the contact form, validates the data,
    and sends a notification email.
    """
    try:
        # Get email credentials from environment variables
        email_user = os.getenv("EMAIL_USER")
        email_pass = os.getenv("EMAIL_PASS")

        if not email_user or not email_pass:
            raise ValueError("Email credentials not set in environment variables.")

        smtp_server = "smtp.gmail.com"
        port = 465  # For SSL

        # Create a secure SSL context
        context = ssl.create_default_context()

        # Build the email message
        message = f"""
            Subject: New Contact Form Submission from {form_data.name}

            Name: {form_data.name}
            Email: {form_data.email}
            Phone: {form_data.phone if form_data.phone else 'N/A'}
            Message:
            {form_data.message}
        """

        # Send the email via Gmail's SMTP server
        with smtplib.SMTP_SSL(smtp_server, port, context=context) as server:
            server.login(email_user, email_pass)
            server.sendmail(email_user, "gourav.getonline@gmail.com", message)

        return {"message": "Email sent successfully!"}

    except Exception as e:
        print(f"Error sending email: {e}")
        raise HTTPException(status_code=500, detail="Failed to send email.")
