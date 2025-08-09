"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z
    .string()
    .regex(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, {
      message: "Invalid phone number format.",
    })
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

interface RequestFormProps {
  onClose: () => void;
}

export default function RequestForm({ onClose }: RequestFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    try {
      // Send the form data to the new API endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Form submitted successfully:", result);

      // Use a custom message box instead of alert
      // You can implement a UI component to display this message
      alert("Thank you for your message! I'll get back to you shortly.");

      form.reset();
      onClose(); // Close the modal after successful submission
    } catch (error) {
      console.error("Error submitting form:", error);
      // Use a custom message box instead of alert
      alert("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Name <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Your Name"
                  {...field}
                  className="w-full p-3 bg-gray-800 border border-neon-yellow/50 rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-neon-yellow/50 focus:border-transparent outline-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Email <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="your.email@example.com"
                  {...field}
                  className="w-full p-3 bg-gray-800 border border-neon-yellow/50 rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-neon-yellow/50 focus:border-transparent outline-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input
                  placeholder="e.g., +1 555-555-5555"
                  {...field}
                  className="w-full p-3 bg-gray-800 border border-neon-yellow/50 rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-neon-yellow/50 focus:border-transparent outline-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Message <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <textarea
                  placeholder="Tell me about your project or what you need help with."
                  rows={4}
                  {...field}
                  className="w-full p-3 bg-gray-800 border border-neon-yellow/50 rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-neon-yellow/50 focus:border-transparent outline-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full bg-neon-yellow px-6 font-medium text-black transition-transform hover:scale-105"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Get a Free Consultation"}
        </Button>
      </form>
    </Form>
  );
}
