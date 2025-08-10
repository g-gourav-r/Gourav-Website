import React, { forwardRef } from "react";
import { Mail } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import AnimatedTitle from "./animated-title";
import { Spotlight } from "@/components/ui/spotlight-new";
import { motion, useAnimation, useInView } from "framer-motion";

export interface HeroProps {
  name: string;
  title: string;
  githubLink: string;
  linkedinLink: string;
  email: string;
  isLightOn: boolean;
}

const Hero = forwardRef<HTMLDivElement, HeroProps>(
  ({ name, title, githubLink, linkedinLink, email }, ref) => {
    const controls = useAnimation();

    const localRef = React.useRef<HTMLDivElement>(null);

    const isInView = useInView(localRef, { once: true });

    React.useEffect(() => {
      if (!ref) return;

      const currentElement = localRef.current;

      if (typeof ref === "function") {
        ref(currentElement);
      } else if (ref) {
        ref.current = currentElement;
      }
    }, [ref, localRef]);

    React.useEffect(() => {
      if (isInView) {
        controls.start({
          color: [
            "#9CA3AF",
            "#a5e12d",
            "#9CA3AF",
            "#a5e12d",
            "#9CA3AF",
            "#a5e12d",
          ],
          textShadow: [
            "0 0 0px #a5e12d",
            "0 0 0px #a5e12d",
            "0 0 0px #a5e12d",
            "0 0 0px #a5e12d",
            "0 0 0px #a5e12d",
            "0 0 120px #a5e12d",
          ],
          transition: {
            color: { times: [0, 0.1, 0.2, 0.3, 0.4, 1], duration: 1.5 },
            textShadow: { times: [0, 0.5, 0.7, 0.9, 1], duration: 1.5 },
          },
        });
      }
    }, [controls, isInView]);

    return (
      <section
        ref={localRef}
        id="hero"
        className="py-12 md:py-24 lg:py-32 flex items-center justify-center min-h-screen text-center"
      >
        <Spotlight />
        <div className="mx-auto max-w-3xl space-y-10 relative z-10">
          <small className="text-sm font-semibold text-gray-500 dark:text-gray-400">
            Hey there, I&apos;m
          </small>
          <motion.h1
            animate={controls}
            className="text-5xl font-brush leading-relaxed font-extrabold tracking-tight sm:text-6xl lg:text-7xl"
          >
            {name}
          </motion.h1>
          <div className="flex justify-center mb-6 ">
            <AnimatedTitle />
          </div>
          <p className="text-xl font-medium text-gray-500 dark:text-gray-400 mb-6">
            {title}
          </p>
          <div className="flex justify-center space-x-4 py-2">
            {githubLink && (
              <Link href={githubLink} target="_blank">
                <Button variant="outline" size="icon">
                  <SiGithub className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
            )}
            {linkedinLink && (
              <Link href={linkedinLink} target="_blank">
                <Button variant="outline" size="icon">
                  <SiLinkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
            )}
            {email && (
              <Link href={`mailto:${email}`}>
                <Button variant="outline" size="icon">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            )}
          </div>
        </div>
      </section>
    );
  }
);

Hero.displayName = "Hero";

export default Hero;
