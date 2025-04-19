'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useBlogsContext } from '@/context/blogsContext'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import { format } from 'date-fns'


const Blog = () => {
  const searchParams = useSearchParams()
  const {blogs} = useBlogsContext()
  const current = searchParams.get('current')

  return (
    <div className="w-full min-h-screen px-4 gap-16 sm:px-20 font-[family-name:var(--lexend)]">
      <main className="py-8 w-full flex flex-col gap-24">
        {
          blogs.map(blog => (
            blog.id == current ?
            <section key={blog.id} className="flex flex-col gap-8" id="blog">
              <div className="w-full">  
                <h1 className="sm:text-6xl text-4xl">
                  <strong>{blog.title}</strong>
                </h1>
              </div>

              <div>
                <h2 className="text-xl">{blog.category}</h2>
                <span className="text-sm">Posted: <strong>{blog.createdAt ? format(blog.createdAt, "dd MMM yyyy") : "No date"}</strong></span>
              </div>

              <div className="flex flex-col gap-8 w-full max-w-[800px]">
                <div className="w-full h-[400px] shrink-0 bg-[#2d2df1] rounded-sm">
                  <Image
                    src={blog.imageUrl[0]} 
                    alt={"Orion Farms"}
                    width={2750}
                    height={1536}
                    className="w-[100%] h-[100%] object-cover object-top rounded-sm shrink-0"
                  />
                </div>

                <div>
                  {
                    blog.description
                  }
                </div>
                
              </div>
            </section>
          : ""
          ))
        }

        <section className="flex flex-col gap-8" id="blog">
          <div className="w-full">  
            <h1 className="sm:text-6xl text-4xl">
              <strong>News & </strong>
              <em>Blog </em>
            </h1>
          </div>
          
          <div className="flex flex-col gap-8">
            <ul className="flex flex-wrap flex-col sm:flex-row gap-8">
              {
                blogs.map(blog => (
                <li key={blog.id} className="shrink-0 flex gap-2 max-w-[400px]">
                  <div>
                    <h2 className="text-xl">{blog.title}</h2>
                    <span className="text-sm">Posted: <strong>{blog.createdAt ? format(blog.createdAt, "dd MMM yyyy") : "No date"}</strong></span>
                  </div>

                  <Link href={`/blog?current=${blog.id}`} className="w-[100px] h-[100px] shrink-0 bg-[#2d2df1] rounded-sm p-2">
                    <Image
                      src={blog.imageUrl[0]} 
                      alt={"Orion Farms"}
                      width={2750}
                      height={1536}
                      className="w-[100%] h-[100%] object-cover object-top rounded-sm shrink-0"
                    />
                  </Link>
                </li>
                ))
              }
              
            </ul>
            
            <Link href="/blog"  className="max-w-[500px] px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1] text-center">Load More</Link>
          </div>
        </section>
      </main>
    </div>
  )
}

const Page = () => {

  return (
    <Suspense>
      <Blog/>
    </Suspense>
  )
}

export default Page