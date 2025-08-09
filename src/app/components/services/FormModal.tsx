// src/components/request-demo-modal.tsx
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

const DynamicRequestForm = dynamic(() => import("./RequestForm"), {
  ssr: false,
});

export default function FormModal({
  buttonClassName,
  buttonText,
}: {
  buttonClassName?: string;
  buttonText?: string;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // The 'cn' function is now imported from utils.
  // The previous manual definition of 'cn' is no longer needed.

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogTrigger asChild>
        <Button
          variant="default"
          size="lg"
          className={cn(
            "mt-6 w-50 mx-auto sm:text-sm  h-12 border bg-neon-yellow/50 text-white hover:bg-neon-yellow  border-neon-yellow  text-xs flex justify-center items-center rounded-2xl hover:shadow-lg transition duration-200 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
            buttonClassName
          )}
        >
          {buttonText || "Request a Demo"}
        </Button>
      </DialogTrigger>
      {isModalOpen && (
        <DialogContent className="sm:max-w-[425px] bg-gray-900 text-gray-50 border-neon-yellow/50 border-1 rounded-lg shadow-lg">
          <DialogHeader>
            <DialogTitle className="text-center">
              Request a Consulting
            </DialogTitle>
            <DialogDescription className="text-gray-400 text-center">
              Fill out the form below and I&apos;ll get in touch to discuss and
              brainstorm your project needs.
            </DialogDescription>
          </DialogHeader>
          <DynamicRequestForm onClose={() => setIsModalOpen(false)} />
        </DialogContent>
      )}
    </Dialog>
  );
}
