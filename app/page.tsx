import {starterProjects } from "@/contants";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
const colors = [
  "bg-[#f8f9fa]",
  "bg-[#2f5446]",
  "bg-[#ffd6e0]",
  "bg-[#c3c98d]",
  "bg-[#e9ecef]",
  "bg-[#386641]",
];

const textColors = {
  "bg-[#f8f9fa]": "text-gray-900",
  "bg-[#2f5446]": "text-white",
  "bg-[#ffd6e0]": "text-gray-900",
  "bg-[#c3c98d]": "text-gray-900",
  "bg-[#e9ecef]": "text-gray-900",
  "bg-[#386641]": "text-white",
};
export default function Page() {
  return (
    <div className="min-h-screen bg-background bg-black text-white flex flex-col">
      <main className="flex-grow">
        <section className="container px-4 py-24 mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Save Weeks of Development Time
          </h1>
          <p className="max-w-[700px] mx-auto mt-4 text-muted-foreground text-lg">
            Jump-start your next project with collection of production-ready
            starter templates. Built with modern tools and best practices.
          </p>
          <Button size="lg" className="mt-8 bg-emerald-800" asChild>
            <Link
              href="https://github.com/haseeb5555/dev-boost-starters"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              View on GitHub
            </Link>
          </Button>
        </section>

        <section className="container px-4 pb-24 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 [&>*:nth-child(3n+2)]:translate-y-12 [&>*:nth-child(3n+3)]:translate-y-24">
            {starterProjects.map((project, index) => {
              const bgColor = colors[
                index % colors.length
              ] as keyof typeof textColors;
              const textColor = textColors[bgColor];

              return (
                <div
                  key={project.name}
                  className={`group relative rounded-3xl p-6 ${bgColor} ${textColor} transition-all duration-300 hover:shadow-xl`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-sm opacity-60">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <Link
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="size-12 rounded-full border flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity"
                      aria-label={`View ${project.name} on GitHub`}
                    >
                      <ArrowUpRight className="size-5" />
                    </Link>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-2xl font-medium">{project.name}</h3>
                    <p className="opacity-80">{project.description}</p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm opacity-60">
                        By {project.creator}
                      </span>
                      <span className="text-sm opacity-60">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <footer className="container mx-auto px-4 py-8 mt-auto">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-2xl font-bold">DevBoost Starters</span>
          <div className="flex justify-center items-center space-x-4">
            <span className="text-muted-foreground">Created by</span>
            <Link
              href="https://github.com/haseeb5555"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-emerald-500 transition-colors"
            >
              <Github className="mr-2 h-4 w-4" />
              Muhammad Haseeb
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
