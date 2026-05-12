"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

const ROUTE_BREADCRUMBS: Record<string, string[]> = {
  "/": ["PORTFOLIO"],
  "/home": ["PORTFOLIO", "Frontend", "Home.tsx"],
  "/skills": ["PORTFOLIO", "Frontend", "Skills.tsx"],
  "/projects": ["PORTFOLIO", "Frontend", "Projects.tsx"],
  "/contact": ["PORTFOLIO", "Frontend", "Contact.tsx"],
  "/blogs": ["PORTFOLIO", "Frontend", "Blogs.tsx"],
  "/github": ["PORTFOLIO", "Frontend", "Github.tsx"],
  "/experience": ["PORTFOLIO", "Frontend", "Experience.tsx"],
};

export default function Breadcrumbs() {
  const pathname = usePathname();
  const router = useRouter();
  const crumbs = ROUTE_BREADCRUMBS[pathname] || ["PORTFOLIO"];

  return (
    <motion.div
      className="breadcrumbs"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      {crumbs.map((crumb, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <ChevronRight size={12} className="breadcrumb-separator" />
          )}
          <button
            className={`breadcrumb-item ${index === crumbs.length - 1 ? "breadcrumb-item--active" : ""}`}
            onClick={() => {
              if (index === 0) router.push("/");
            }}
          >
            {crumb}
          </button>
        </React.Fragment>
      ))}
    </motion.div>
  );
}
