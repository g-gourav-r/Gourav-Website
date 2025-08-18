"use client";

import { useState } from "react";

interface ChecklistItem {
  label: string;
  subItems: string[];
}

interface ChecklistProps {
  data: ChecklistItem[];
}

export default function Checklist({ data }: ChecklistProps) {
  return (
    <section className="py-12 md:py-24" id="checklist">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto">
          <div className="space-y-4 text-center mb-12">
            <h2 className="text-3xl text-neon-yellow font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Complete SEO Action Plan
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Covers on-page, technical, and off-page strategies to help you
              rank higher
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.map((item, index) => (
              <div
                key={index}
                className="rounded-lg border bg-card shadow-sm p-6 flex flex-col h-full"
              >
                {/* Category Title */}
                <h3 className="text-2xl text-center font-bold text-gray-900 dark:text-gray-50 mb-4">
                  {item.label}
                </h3>
                {/* Checklist Items */}
                <ul className="list-none space-y-2 text-gray-700 dark:text-gray-300">
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex} className="flex items-start">
                      {/* Checkmark icon for visual appeal */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-neon-yellow mr-2 flex-shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {subItem}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
