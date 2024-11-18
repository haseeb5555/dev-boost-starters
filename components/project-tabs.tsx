import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const ProjectTabs = ({ activeTab, onTabChange }:{
  activeTab: string,
  onTabChange: (value:string) => void
}) => {
  return (
    <Tabs 
      defaultValue="all" 
      className="w-full mb-8" 
      onValueChange={onTabChange}
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
  )
}

export default ProjectTabs; 