"use client"

import React, {createContext, useContext, useState, ReactNode} from "react"
import {getAllBlogs} from "@/utils/blog"


interface BlogType {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  imageUrl: string[];
  category: string;
  reads: number;
}

type BlogContextType = {
  blogs: BlogType[],
}

// Sample Blog Data
const blogsData: BlogType[] = await getAllBlogs();

// Initialize blog context
const BlogsContext = createContext<BlogContextType | undefined>(undefined)

// Context Provider
export const BlogsProvider = ({ children }: { children: ReactNode }) => {
  const [blogs] = useState<BlogType[]>(blogsData)
  
  return (
    <BlogsContext.Provider value={{
      blogs
    }}>
      {children}
    </BlogsContext.Provider>
  )
}

export const useBlogsContext = () => {
  const context = useContext(BlogsContext)
  if (!context) {
    throw new Error("You need to set a provider for blog")
  }
  return context;
}