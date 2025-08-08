import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <BackgroundBeamsWithCollision>
      <footer className="bg-background py-10 text-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-xl font-semibold mb-4">Your Company Name</h3>
              <p>
                Empowering businesses with top-notch website development and SEO
                services.
              </p>
              <p className="mt-2">
                © {new Date().getFullYear()} Your Company. All rights reserved.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="hover:text-highlight transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-highlight transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-highlight transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-highlight transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Email Subscription */}
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Subscribe to Our Newsletter
              </h3>
              <form className="flex flex-col space-y-4">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="px-4 py-2 rounded-lg border border-muted focus:outline-none focus:border-highlight"
                  required
                />
                <button
                  type="submit"
                  className="bg-highlight text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="mt-8 flex justify-center space-x-4">
            <Link
              href="https://facebook.com"
              target="_blank"
              className="hover:text-highlight transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              className="hover:text-highlight transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              className="hover:text-highlight transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-highlight transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </footer>
    </BackgroundBeamsWithCollision>
  );
};

export default Footer;
