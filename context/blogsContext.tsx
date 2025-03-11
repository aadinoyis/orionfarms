"use client"

import React, {createContext, useContext, useState, ReactNode} from "react"
import { blogs } from "@/data/blogs"


type BlogType = {
  id: string,
  title: string,
  category: string,
  date: string,
  images: string[],
  description: string,
  read: string,
}

type BlogContextType = {
  blogs: BlogType[],
}

// Sample Blog Data
const sampleBlog: BlogType[] = blogs;

// Initialize blog context
const BlogsContext = createContext<BlogContextType | undefined>(undefined)

// Context Provider
export const BlogsProvider = ({ children }: { children: ReactNode }) => {
  const [blogs] = useState<BlogType[]>(sampleBlog)
  
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