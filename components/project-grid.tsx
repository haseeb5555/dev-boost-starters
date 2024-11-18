'use client'

import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import Link from "next/link"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion, AnimatePresence } from 'framer-motion'
import type { StarterProject } from '@/types'

const colors = [
  "bg-slate-800",
  "bg-indigo-900",
  "bg-purple-900",
  "bg-slate-900",
  "bg-blue-900",
  "bg-violet-900",
]

const textColors = {
  "bg-slate-800": "text-gray-100",
  "bg-indigo-900": "text-gray-100",
  "bg-purple-900": "text-gray-100",
  "bg-slate-900": "text-gray-100",
  "bg-blue-900": "text-gray-100",
  "bg-violet-900": "text-gray-100",
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const getYOffset = (index: number) => {
  if (index % 3 === 1) return 48; 
  if (index % 3 === 2) return 96; 
  return 0;
};

const getProjectVariants = (index: number) => ({
  hidden: { 
    opacity: 0,
    y: getYOffset(index),
    scale: 0.95
  },
  visible: { 
    opacity: 1,
    y: getYOffset(index),
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  },
  exit: { 
    opacity: 0,
    y: getYOffset(index) - 20,
    scale: 0.95,
    transition: {
      duration: 0.2
    }
  }
});

interface ProjectGridProps {
  projects: StarterProject[]
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  const [activeTab, setActiveTab] = useState('all')

  const filteredProjects = projects.filter(project => {
    if (activeTab === 'all') return true;
    return project.category.toLowerCase() === activeTab.toLowerCase();
  });

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <section className="container px-4 pb-24 mx-auto">
      <Tabs 
        defaultValue="all" 
        className="w-full mb-8" 
        onValueChange={handleTabChange}
        value={activeTab}
      >
        <TabsList className="w-full max-w-[400px] mx-auto grid grid-cols-4 bg-slate-800/50 backdrop-blur-sm">
          <TabsTrigger 
            value="all"
            className="data-[state=active]:bg-violet-600 data-[state=active]:text-white"
          >
            All
          </TabsTrigger>
          <TabsTrigger 
            value="frontend"
            className="data-[state=active]:bg-violet-600 data-[state=active]:text-white"
          >
            Frontend
          </TabsTrigger>
          <TabsTrigger 
            value="backend"
            className="data-[state=active]:bg-violet-600 data-[state=active]:text-white"
          >
            Backend
          </TabsTrigger>
          <TabsTrigger 
            value="fullstack"
            className="data-[state=active]:bg-violet-600 data-[state=active]:text-white"
          >
            Full Stack
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => {
            const bgColor = colors[
              index % colors.length
            ] as keyof typeof textColors
            const textColor = textColors[bgColor]

            return (
              <motion.div
                key={project.name}
                custom={index}
                variants={getProjectVariants(index)}
                className={`group relative rounded-3xl p-6 ${bgColor} ${textColor} hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/20 backdrop-blur-sm border border-gray-800`}
                style={{
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <motion.span 
                    className="text-sm text-gray-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </motion.span>
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="size-12 rounded-full border border-gray-700 flex items-center justify-center opacity-60 hover:opacity-100 transition-all duration-300 hover:border-violet-500 hover:text-violet-500"
                    aria-label={`View ${project.name} on GitHub`}
                  >
                    <ArrowUpRight className="size-5" />
                  </Link>
                </div>

                <motion.div 
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-2xl font-medium">{project.name}</h3>
                  <p className="text-gray-400">{project.description}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">
                      By {project.creator}
                    </span>
                    <span className="text-sm text-gray-400">
                      {project.category}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </AnimatePresence>
    </section>
  )
}