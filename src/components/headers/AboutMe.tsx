import { File, Globe, Mail } from "lucide-react";
import React from "react";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {
  aboutme: {
    name: string;
    role: string;
    availability: "available" | "open" | "unavailable";
    location: string;
    email: string;
    image: string;
    currentCompany: { name: string; role: string; duration: string };
    resume: string;
  };
};

export default function AboutMe({ aboutme }: Props) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-start gap-4 p-2 px-4 space-y-4">
      <div className="w-full flex justify-between items-center">
        {/* Role, availability */}
        <div className="inline-flex gap-1 justify-center items-center text-sm">
          <Globe scale={0.75} />
          {aboutme.role}
        </div>
        <div className="inline-flex gap-1 justify-center items-center text-sm">
          <Badge
            className={cn(
              aboutme.availability === "available"
                ? "bg-green-500 text-green-100"
                : aboutme.availability === "open"
                ? "bg-yellow-500 text-yellow-100"
                : "bg-red-500 text-red-100"
            )}>
            {aboutme.availability === "available"
              ? "Available"
              : aboutme.availability === "open"
              ? "Open to opportuntities"
              : "Unavailable"}
          </Badge>
        </div>
      </div>
      <div className="w-full flex justify-between items-center">
        {/* name, location, currentCompany */}
        <div className="flex flex-col justify-start items-start">
          <h1 className="text-3xl font-bold">Hello, I&apos;m {aboutme.name}</h1>
          <p>
            {aboutme.role} based in {aboutme.location}
          </p>
          <p>
            Currently {aboutme.currentCompany.role} @{" "}
            {aboutme.currentCompany.name} for {aboutme.currentCompany.duration}
          </p>
        </div>
        <img
          src={aboutme.image}
          alt={aboutme.name}
          className="h-24 w-24 obejct-cover rounded-lg"
        />
      </div>
      <div className="flex justify-center items-center gap-2 mb-4">
        {/* Resume, email */}
        <Link href={`mailto:${aboutme.email}`}>
          <Button
            variant="outline"
            className="flex justify-center items-center gap-2">
            <Mail size="18" />
            Email Me
          </Button>
        </Link>
        <Link href={aboutme.resume}>
          <Button
            variant="outline"
            className="flex justify-center items-center gap-2">
            <File size="18" />
            Resume
          </Button>
        </Link>
      </div>
    </div>
  );
}
