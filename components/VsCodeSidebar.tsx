"use client";
import React, { useState } from "react";
import {
  FileText,
  Search,
  LayoutDashboard,
  Code,
  User,
  Mail,
  ChevronRight,
  ChevronDown,
  ExternalLink,
  LucideIcon,
  GitBranch,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";


interface IconItem {
  id: string;
  icon: LucideIcon;
  label: string;
}

interface IconSidebarProps {
  activeIcon: string;
  setActiveIcon: (id: string) => void;
  isPanelOpen: boolean;
  setIsPanelOpen: (isOpen: boolean) => void;
}

interface PanelSidebarProps {
  activeIcon: string;
}

interface ExpandedFolders {
  [key: string]: boolean;
}

export const VsCodeSidebar: React.FC = () => {
  const [activeIcon, setActiveIcon] = useState<string>("file");
  const [isPanelOpen, setIsPanelOpen] = useState<boolean>(true);

  return (
    <div className="flex h-screen">
      {/* Fixed icon sidebar */}
      <IconSidebar
        activeIcon={activeIcon}
        setActiveIcon={setActiveIcon}
        isPanelOpen={isPanelOpen}
        setIsPanelOpen={setIsPanelOpen}
      />

      {/* Collapsible panel sidebar */}
      {isPanelOpen && <PanelSidebar activeIcon={activeIcon} />}
    </div>
  );
};


const IconSidebar: React.FC<IconSidebarProps> = ({
  activeIcon,
  setActiveIcon,
  isPanelOpen,
  setIsPanelOpen,
}) => {
  const icons: IconItem[] = [
    { id: "file", icon: FileText, label: "Projects" },
    { id: "search", icon: Search, label: "Search" },
    { id: "git", icon: GitBranch, label: "Source Control" },
    { id: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { id: "skills", icon: Code, label: "Skills" },
    { id: "about", icon: User, label: "About Me" },
    { id: "contact", icon: Mail, label: "Contact" },
  ];

  const handleIconClick = (id: string): void => {
    if (activeIcon === id && isPanelOpen) {
      setIsPanelOpen(!isPanelOpen);
    } else {
      setActiveIcon(id);
      setIsPanelOpen(true);
    }
  };

  return (
    <div
      className="bg-[#23242f
] w-12 flex flex-col items-center pt-2"
    >
      {icons.map((item) => (
        <button
          key={item.id}
          className={`flex justify-center items-center w-full h-12 relative ${
            activeIcon === item.id ? "text-white" : "text-gray-400"
          } hover:text-white`}
          onClick={() => handleIconClick(item.id)}
          title={item.label}
        >
          {activeIcon === item.id && isPanelOpen && (
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-white"></div>
          )}
          <item.icon size={24} />
        </button>
      ))}
    </div>
  );
};

// The collapsible panel sidebar that changes content based on active icon
const PanelSidebar: React.FC<PanelSidebarProps> = ({ activeIcon }) => {
  // Panel content changes based on which icon is active
  const renderPanelContent = (): React.ReactNode => {
    switch (activeIcon) {
      case "file":
        return <FilesPanel />;
      case "search":
        return <SearchPanel />;
      case "git":
        return <GitPanel />;
      case "about":
        return <AboutPanel />;
      case "contact":
        return <ContactPanel />;
      case "skills":
        return <SkillsPanel />;
      case "dashboard":
        return <DashboardPanel />;
      default:
        return <FilesPanel />;
    }
  };

  return (
    <div className="bg-[#1e1f29] w-47 h-full overflow-y-auto">
      {renderPanelContent()}
    </div>
  );
};

// Individual panel components
const FilesPanel: React.FC = () => {
  const [expandedFolders, setExpandedFolders] = useState<ExpandedFolders>({
    projects: true,
    frontend: false,
    backend: false,
  });

  const router = useRouter();

  const toggleFolder = (folder: string): void => {
    setExpandedFolders((prev) => ({
      ...prev,
      [folder]: !prev[folder],
    }));
  };

  return (
    <div className="p-2">
      <div className="flex justify-between items-center p-2 text-sm font-medium text-gray-300">
        EXPLORER
      </div>

      <div className="mt-2">
        {/* Portfolio folder structure */}
        <div>
          <div
            className="flex items-center p-1 cursor-pointer hover:bg-[#2a2d2e] hover:rounded-2xl"
            onClick={() => toggleFolder("projects")}
          >
            {expandedFolders.projects ? (
              <ChevronDown size={16} />
            ) : (
              <ChevronRight size={16} />
            )}
            <span className="ml-1 text-sm">
              <button onClick={()=>{
                router.push("/");
              }}>
              PORTFOLIO
              </button>
            </span>
          </div>

          {expandedFolders.projects && (
            <div className="ml-4">
              <div
                className="flex items-center p-1 cursor-pointer hover:bg-[#2a2d2e] hover:rounded-2xl"
                onClick={() => toggleFolder("frontend")}
              >
                {expandedFolders.frontend ? (
                  <ChevronDown size={16} />
                ) : (
                  <ChevronRight size={16} />
                )}
                <span className="ml-1 text-sm">Frontend</span>
              </div>

              {expandedFolders.frontend && (
                <div className="ml-4">
                  <div className="flex items-center p-1 cursor-pointer hover:bg-[#2a2d2e] hover:rounded-2xl">
                    <Image src={"/react.png"} alt="react image" width={20} height={20}/>
                    <span className="ml-1 text-sm">
                    <button onClick={
                        ()=>{
                          router.push("/home");
                        }
                      }>
                        Home.tsx
                      </button>
                    </span>
                  </div>
                  <div className="flex items-center p-1 cursor-pointer hover:bg-[#2a2d2e] hover:rounded-2xl">
                    <Image src={"/react.png"} alt="react image" width={20} height={20}/>
                    <span className="ml-1 text-sm">
                      <button onClick={()=>{
                        router.push("/contact");
                      }}>
                      Contact.tsx
                      </button>
                    </span>
                  </div>
                  <div className="flex items-center p-1 cursor-pointer hover:bg-[#2a2d2e] hover:rounded-2xl">
                    <Image src={"/react.png"} alt="react image" width={20} height={20}/>
                    <span className="ml-1 text-sm">
                      <button onClick={
                        ()=>{
                          router.push("/skills")
                        }
                      }>
                        Skills.tsx
                      </button>
                    </span>
                  </div>

                  <div className="flex items-center p-1 cursor-pointer hover:bg-[#2a2d2e] hover:rounded-2xl">
                    <Image src={"/react.png"} alt="react image" width={20} height={20}/>
                    <span className="ml-1 text-sm">
                      <button onClick={
                        ()=>{
                          router.push("/experience/")
                        }
                      }>
                        Experience.tsx
                      </button>
                    </span>
                  </div>
                 
                  <div className="flex items-center p-1 cursor-pointer hover:bg-[#2a2d2e] hover:rounded-2xl">
                    <Image src={"/react.png"} alt="react image" width={20} height={20}/>
                    <span className="ml-1 text-sm">
                      <button onClick={
                        ()=>{
                          router.push("/github")
                        }
                      }>
                        Github.tsx
                      </button>
                    </span>
                  </div>

                  <div className="flex items-center p-1 cursor-pointer hover:bg-[#2a2d2e] hover:rounded-2xl">
                    <Image src={"/react.png"} alt="react image" width={20} height={20}/>
                    <span className="ml-1 text-sm">
                      <button onClick={
                        ()=>{
                          router.push("/blogs")
                        }
                      }>
                        Blogs.tsx
                      </button>
                    </span>
                  </div>


                  <div
                className="flex items-center p-1 cursor-pointer hover:bg-[#2a2d2e]"
                onClick={() => toggleFolder("backend")}
              >
                {expandedFolders.backend ? (
                  <ChevronDown size={16} />
                ) : (
                  <ChevronRight size={16} />
                )}
                <span className="ml-1 text-sm">Projects</span>
              </div>

              {expandedFolders.backend && (
                <div className="ml-4">
                   <div className="flex items-center p-1 cursor-pointer hover:bg-[#2a2d2e] hover:rounded-2xl">
                    <Image src={"/react.png"} alt="react image" width={20} height={20}/>
                    <span className="ml-1 text-sm">
                      <button onClick={
                        ()=>{
                          router.push("/projects/upcoming/")
                        }
                      }>
                        Upcoming.tsx
                      </button>
                    </span>
                  </div>
                  <div className="flex items-center p-1 cursor-pointer hover:bg-[#2a2d2e] hover:rounded-2xl">
                    <Image src={"/react.png"} alt="react image" width={20} height={20}/>
                    <span className="ml-1 text-sm">
                      <button onClick={
                        ()=>{
                          router.push("/projects/completed/")
                        }
                      }>
                        Completed.tsx
                      </button>
                    </span>
                  </div>
                </div>
              )}




                </div>


              


              )}

           

            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const SearchPanel: React.FC = () => {
  return (
    <div className="p-2">
      <div className="flex justify-between items-center p-2 text-sm font-medium text-gray-300">
        SEARCH
      </div>
      <div className="p-2">
        <input
          type="text"
          placeholder="Search in portfolio"
          className="w-full bg-[#3c3c3c] text-white border-none p-1 text-sm rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>
      <div className="text-xs text-gray-400 px-2">
        Use regex patterns to find specific items in the portfolio
      </div>
    </div>
  );
};

const GitPanel: React.FC = () => {
  return (
    <div className="p-2">
      <div className="flex justify-between items-center p-2 text-sm font-medium text-gray-300">
        SOURCE CONTROL
      </div>
      <div className="p-2 text-sm">
        <div className="flex items-center mb-2">
          <GitBranch size={16} className="mr-2" />
          <span>main</span>
        </div>
        <div className="text-blue-400 flex items-center hover:underline">
          <ExternalLink size={14} className="mr-1" />
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
};

const AboutPanel: React.FC = () => {
  return (
    <div className="p-2">
      <div className="flex justify-between items-center p-2 text-sm font-medium text-gray-300">
        ABOUT ME
      </div>
      <div className="p-2 text-sm text-gray-300">
        <p className="mb-2">Full Stack Developer</p>
        <p className="mb-2">Based in [Your Location]</p>
        <p>Passionate about building exceptional web experiences</p>
      </div>
    </div>
  );
};

const ContactPanel: React.FC = () => {
  return (
    <div className="p-2">
      <div className="flex justify-between items-center p-2 text-sm font-medium text-gray-300">
        CONTACT
      </div>
      <div className="p-2 text-sm">
        <div className="mb-2">
          <div className="text-gray-400">Email</div>
          <div className="text-blue-400">your.email@example.com</div>
        </div>
        <div className="mb-2">
          <div className="text-gray-400">LinkedIn</div>
          <div className="text-blue-400 hover:underline">
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/yourusername
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillsPanel: React.FC = () => {
  return (
    <div className="p-2">
      <div className="flex justify-between items-center p-2 text-sm font-medium text-gray-300">
        SKILLS
      </div>
      <div className="p-2">
        <div className="mb-3">
          <div className="text-sm font-medium mb-1">Frontend</div>
          <div className="flex flex-wrap gap-1">
            <span className="bg-blue-900 text-blue-300 text-xs px-2 py-1 rounded">
              React
            </span>
            <span className="bg-black text-white text-xs px-2 py-1 rounded">
              Next.js
            </span>
            <span className="bg-sky-900 text-sky-300 text-xs px-2 py-1 rounded">
              Tailwind
            </span>
          </div>
        </div>
        <div className="mb-3">
          <div className="text-sm font-medium mb-1">Backend</div>
          <div className="flex flex-wrap gap-1">
            <span className="bg-green-900 text-green-300 text-xs px-2 py-1 rounded">
              Node.js
            </span>
            <span className="bg-yellow-900 text-yellow-300 text-xs px-2 py-1 rounded">
              Express
            </span>
            <span className="bg-blue-900 text-blue-300 text-xs px-2 py-1 rounded">
              MongoDB
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const DashboardPanel: React.FC = () => {
  return (
    <div className="p-2">
      <div className="flex justify-between items-center p-2 text-sm font-medium text-gray-300">
        DASHBOARD
      </div>
      <div className="p-2 text-sm">
        <div className="flex items-center justify-between mb-2 p-1 hover:bg-[#2a2d2e]">
          <span>Recent Projects</span>
          <span className="text-gray-400">3</span>
        </div>
        <div className="flex items-center justify-between mb-2 p-1 hover:bg-[#2a2d2e]">
          <span>Ongoing Tasks</span>
          <span className="text-gray-400">2</span>
        </div>
        <div className="flex items-center justify-between mb-2 p-1 hover:bg-[#2a2d2e]">
          <span>Completed</span>
          <span className="text-gray-400">7</span>
        </div>
      </div>
    </div>
  );
};

export default VsCodeSidebar;
