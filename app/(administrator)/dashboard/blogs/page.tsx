'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useSearchParams, useRouter } from 'next/navigation'
import { Suspense } from 'react'
import CreateBlog from '@/app/components/create-blog'
import { getAllBlogs, deleteBlog } from '@/utils/blog'
import { format } from 'date-fns'


interface Blog {
  id: string;
  title: string;
  description: string;
  imageUrl: string[];
  category: string;
  reads: number;
  createdAt: Date;
}

const Inventory = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [message, setMessage] = useState<string | null>(null);
  const query = searchParams.get('query')

  const [blogs, setBlogs] = useState<Blog[] | null>(null)

  const handleDelete = async (id: string) => {
    try {
      await deleteBlog(id)
      setMessage('Blog deleted successfully')
      router.refresh()
    }
    catch (error) {
      setMessage('Error deleting blog')
      router.refresh()
    }
  }

  useEffect(() => {
    const fetchItems = async () => {
      const data = await getAllBlogs();
      const formattedData = data.map((blog) => ({
        id: blog.id,
        title: blog.title,
        reads: blog.reads,
        description: blog.description,
        imageUrl: blog.imageUrl,
        category: blog.category,
        createdAt: blog.createdAt,
      }));

      setBlogs(formattedData);
    };

    fetchItems();
  }, []);

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
          blogs ?
          blogs.map(blog => (
            <tr key={blog.id} className="w-full border p-2 border-gray-400">
              <td className='p-2 max-w-[300px] overflow-x-scroll border border-gray-400'>
                <p className="text-sm">{blog.title}</p>
              </td>

              <td className="h-[80px] w-[80px] rounded-sm p-2 border border-gray-400">
                <Image
                  src={blog.imageUrl[0]} 
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
                  blog.category
                }
              </td>

              <td className="text-bold text-[#2d2df1] p-2 border border-gray-400">{blog.createdAt ? format(blog.createdAt, "dd MMM yyyy") : "No date"}</td>
              <td className="text-bold text-[#2d2df1] p-2 border border-gray-400">{blog.reads}</td>

              <td className='p-2 border border-gray-400 text-center'>
                <Link href={`/dashboard/blogs?query=edit&prod=${blog.id}`} className="px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1]">Update</Link>
              </td>
              
              <td className='p-2 border border-gray-400 text-center'>
                <button onClick={() => handleDelete(blog.id)} className="px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1]">Delete</button>
              </td>
              {
                query == 'edit' &&
                <CreateBlog id={blog.id}/>
              }
            </tr>
          ))
          :
          <tr>
            <td colSpan={8} className='text-center'>No blog yet</td>
          </tr>
        }
        </tbody>
      </table>
      
      {
        query == 'new' && 
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