"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const showFooter = !pathname.includes("/about");

  if (!showFooter) return null;

  return (
    <footer className="border-t mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Dr. James Wilson</p>
              <a
                href="mailto:james.wilson@stanford.edu"
                className="text-sm text-primary hover:underline flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                james.wilson@stanford.edu
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link
                href="/materials"
                className="block text-sm text-muted-foreground hover:text-primary"
              >
                Materials
              </Link>
              <Link
                href="/publications"
                className="block text-sm text-muted-foreground hover:text-primary"
              >
                Publications
              </Link>
              <Link
                href="/schedule"
                className="block text-sm text-muted-foreground hover:text-primary"
              >
                Schedule
              </Link>
              <Link
                href="/about"
                className="block text-sm text-muted-foreground hover:text-primary"
              >
                About
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Dr. James Wilson. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
