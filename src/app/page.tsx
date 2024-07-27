import AboutMe from "@/components/headers/AboutMe";
import ItemCard from "@/components/ItemCard";
import Section from "@/components/Section";
import { Briefcase, Folder, GraduationCap } from "lucide-react";
import Image from "next/image";
import { data } from "@/lib/data";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24">
      <div className="bg-primary-foreground bg-opacity-20 p-2 rounded-2xl flex w-full min-h-screen flex-col items-center justify-between gap-4 py-8 border">
        <AboutMe aboutme={data.aboutme} />
        <Section
          title="Projects"
          icon={<Folder />}>
          {data.projects.map((project) => {
            return (
              <ItemCard
                image={project.image}
                title={project.title}
                description={project.description}
                tags={project.tags}
                href={project.href}
                key={project.title}></ItemCard>
            );
          })}
        </Section>
        <Section
          title="Experience"
          icon={<Briefcase />}>
          {data.experience.map((experience) => {
            return (
              <ItemCard
                image={experience.image}
                title={experience.title}
                description={experience.description}
                tags={experience.tags}
                href={experience.href}
                key={experience.title}></ItemCard>
            );
          })}
        </Section>
        <Section
          title="Education"
          icon={<GraduationCap />}>
          {data.education.map((education) => {
            return (
              <ItemCard
                image={education.image}
                title={education.title}
                description={education.description}
                tags={education.tags}
                href={education.href}
                key={education.title}></ItemCard>
            );
          })}
        </Section>
      </div>
    </main>
  );
}
