import { starterProjects } from "@/contants"
import { ProjectGrid } from "@/components/project-grid"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-gray-100 flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-indigo-950 to-indigo-950 z-0" />
      
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:14px_24px] z-10" 
      />
      
      <div className="absolute inset-0 bg-radial-gradient from-violet-500/10 via-transparent to-transparent z-20" />

      <div className="relative z-30 flex-grow">
        <main className="flex-grow">
          <Header />
          <ProjectGrid projects={starterProjects} />
        </main>
        <Footer />
      </div>
    </div>
  )
}