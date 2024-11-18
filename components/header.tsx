import { Github } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <section className="container px-4 py-24 mx-auto text-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/20 rounded-full blur-3xl" />
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-100/80">
        Save Weeks of Development Time
      </h1>
      <p className="max-w-[700px] mx-auto mt-4 text-gray-400 text-lg">
        Jump-start your next project with collection of production-ready
        starter templates. Built with modern tools and best practices.
      </p>
      <Button 
        size="lg" 
        className="mt-8 bg-violet-600 hover:bg-violet-700 transition-colors duration-300"
        asChild
      >
        <Link
          href="https://github.com/haseeb5555/dev-boost-starters"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center"
        >
          <Github className="mr-2 h-4 w-4" />
          View on GitHub
        </Link>
      </Button>

    </section>
  )
}
