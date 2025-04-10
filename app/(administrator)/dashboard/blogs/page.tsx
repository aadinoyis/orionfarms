'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useSearchParams, useRouter } from 'next/navigation'
import { Suspense } from 'react'
import CreateBlog from '@/app/components/create-blog'

const blogs = [
  {
    id: "127",
    title: "Importance of saving cash",
    category: ["Finance"],
    date: "Thursday, 14 Feb, 2025",
    images: ["/images/founder.jpg"],
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est at maxime soluta nulla molestias quisquam, nobis deserunt molestiae ab! Ducimus fugiat exercitationem ex illum labore quasi officia voluptate culpa nobis cum, velit, perspiciatis eum id neque, porro non deserunt molestias odit. Tempore, expedita ratione corporis recusandae eius aut. Doloremque magni quae, expedita praesentium suscipit voluptatem veniam modi excepturi nemo pariatur odit, nam consequatur optio repudiandae omnis repellat. Possimus rem qui facilis, fugit alias iusto adipisci voluptatem facere, minima magni! Minima sapiente accusamus nulla.",
    read: "0",
  },
  {
    id: "143",
    title: "Impact of Orion Farms on Education",
    category: ["Story"],
    date: "Thursday, 10 March, 2025",
    images: ["/images/student-service-1.png"],
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est at maxime soluta nulla molestias quisquam, nobis deserunt molestiae ab! Ducimus fugiat exercitationem ex illum labore quasi officia voluptate culpa nobis cum, velit, perspiciatis eum id neque, porro non deserunt molestias odit. Tempore, expedita ratione corporis recusandae eius aut. Doloremque magni quae, expedita praesentium suscipit voluptatem veniam modi excepturi nemo pariatur odit, nam consequatur optio repudiandae omnis repellat. Possimus rem qui facilis, fugit alias iusto adipisci voluptatem facere, minima magni! Minima sapiente accusamus nulla.",
    read: "0",
  },
]

const Inventory = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const query = searchParams.get('query')

  return (
    <section className="w-full overflow-x-scroll"> 
      <table className="min-w-full border border-gray-400 text-nowrap">
        <thead className='w-full border border-gray-400 border-collapse'>
          <tr>
            <th className='p-2 border border-gray-400'>Title</th>
            <th className='p-2 border border-gray-400'>Image</th>
            <th className='p-2 border border-gray-400'>Description</th>
            <th className='p-2 border border-gray-400'>Categories</th>
            <th className='p-2 border border-gray-400'>Date</th>
            <th className='p-2 border border-gray-400'>Reads</th>
            <th className='p-2 border border-gray-400'>
              <Link href={'/dashboard/blogs?query=new'} className="px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1]">Add New</Link>
            </th>
          </tr>
        </thead>
        <tbody className='text-sm'>
        {
          blogs.map(blog => (
            <tr key={blog.id} className="w-full border p-2 border-gray-400">
              <td className='p-2 max-w-[300px] overflow-x-scroll border border-gray-400'>
                <p className="text-sm">{blog.title}</p>
              </td>

              <td className="h-[80px] w-[80px] rounded-sm p-2 border border-gray-400">
                <Image
                  src={blog.images[0]} 
                  alt={"Orion Farms"}
                  width={2750}
                  height={1536}
                  className="w-[100%] h-[100%] object-cover rounded-sm shrink-0"
                />
              </td>  

              <td className='p-2 max-w-[300px] overflow-x-scroll border border-gray-400'>
                <p className="text-sm">{blog.description}</p>
              </td>

              <td className="text-sm text-bold text-[#2d2df1] p-2 border border-gray-400">
                {
                  blog.category.join(', ')
                }
              </td>

              <td className="text-bold text-[#2d2df1] p-2 border border-gray-400">{blog.date}</td>
              <td className="text-bold text-[#2d2df1] p-2 border border-gray-400">{blog.read}</td>

              <td className='p-2 border border-gray-400 text-center'>
                <Link href={`/dashboard/blogs?query=edit&prod=${blog.id}`} className="px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1]">Update</Link>
              </td>

            </tr>
          ))
        }
        </tbody>
      </table>
      
      {
        query == 'new' && 
        <CreateBlog/>
      }

      {
        query == 'edit' &&
        <CreateBlog/>
      }
    </section>     
  )
}

const Page = () => {
  return (
    <Suspense>
      <Inventory/>
    </Suspense>
  )
}

export default Page