import {
  Briefcase,
  DiamondPlus,
  Folder,
  GraduationCap,
  House,
  Mail,
} from "lucide-react";
import React from "react";
import { ModeToggle } from "../ui/ModeToggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { data } from "@/lib/data";

type Props = {};

export default function navbar({}: Props) {
  return (
    <div
      className="w-full h-full max-w-lg bg-primary-foreground flex justify-between 
    items-center px-4 py-2 rounded-xl border m-4">
      <div className="flex justify-center items-center gap-4">
        {/* Home */}
        <Link href="#home">
          <Button
            variant="ghost"
            size="icon">
            <House />
          </Button>
        </Link>
        {/* Projects */}
        <Link href="#projects">
          <Button
            variant="ghost"
            size="icon">
            <Folder />
          </Button>
        </Link>
        {/* Experience */}
        <Link href="#experience">
          <Button
            variant="ghost"
            size="icon">
            <Briefcase />
          </Button>
        </Link>
        {/* Education Section */}
        <Link href="#education">
          <Button
            variant="ghost"
            size="icon">
            <GraduationCap />
          </Button>
        </Link>
        {/* Contact Us Section */}
        <Link href="#home">
          <Button
            variant="ghost"
            size="icon">
            <Mail />
          </Button>
        </Link>
      </div>

      <div className="flex justify-center items-center gap-2">
        <ModeToggle />
        {/* Hire Me */}
        <Link href={data.aboutme.resume}>
          <Button
            className="flex justify-center items-center gap-2"
            variant="outline">
            <DiamondPlus className="" />
            Hire me
          </Button>
        </Link>
      </div>
    </div>
  );
}
