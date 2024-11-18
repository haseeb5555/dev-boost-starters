import { Github } from 'lucide-react'
import Link from "next/link"

export function Footer() {
  return (
    <footer className="container mx-auto px-4 py-8 mt-auto border-t border-gray-800">
      <div className="flex flex-col items-center space-y-2">
        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-400">
          DevBoost Starters
        </span>
        <div className="flex justify-center items-center space-x-4">
          <span className="text-gray-400">Created by</span>
          <Link
            href="https://github.com/haseeb5555"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-300 hover:text-violet-400 transition-colors"
          >
            <Github className="mr-2 h-4 w-4" />
            Muhammad Haseeb
          </Link>
        </div>
      </div>
    </footer>
  )
}