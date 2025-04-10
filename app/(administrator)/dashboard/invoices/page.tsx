'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useSearchParams, useRouter } from 'next/navigation'
import { Suspense } from 'react'
import GetOrders from '@/app/components/get-orders'

const orders = [
  {
    id: "129",
    date: "26/05/2025",
    customer: "Abdulwahab Salihu",
    phone: "08104723945",
    email: "abdulwahabadinoyis@gmail.com",
    address: "58, Onumoh street, Nagazi, Adavi, Kogi state, Nigeria",
    total: "10000",
    status: "failed",
  },
  {
    id: "159",
    date: "26/05/2025",
    customer: "Abdulwahab Salihu",
    phone: "08104723945",
    email: "abdulwahabadinoyis@gmail.com",
    address: "58, Onumoh street, Nagazi, Adavi, Kogi state, Nigeria",
    total: "10000",
    status: "paid",
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
            <th className='p-2 border border-gray-400'>Id</th>
            <th className='p-2 border border-gray-400'>Date</th>
            <th className='p-2 border border-gray-400'>Customer</th>
            <th className='p-2 border border-gray-400'>Phone</th>
            <th className='p-2 border border-gray-400'>Email</th>
            <th className='p-2 border border-gray-400'>Address</th>
            <th className='p-2 border border-gray-400'>Total</th>
            <th className='p-2 border border-gray-400'>Status</th>
            <th className='p-2 border border-gray-400'>
              {/* <Link href={'/dashboard?query=new'} className="px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1]">Add New</Link> */}
            </th>
          </tr>
        </thead>
        <tbody className='text-sm'>
        {
          orders.map(item => (
            <tr key={item.id} className="w-full border p-2 border-gray-400">
              <td className="text-bold text-[#2d2df1] max-w-[200px] overflow-x-scroll p-2 border border-gray-400">{item.id}</td>

              <td className="text-bold text-[#2d2df1] max-w-[200px] overflow-x-scroll p-2 border border-gray-400">{item.date}</td>

              <td className="text-bold text-[#2d2df1] max-w-[200px] overflow-x-scroll p-2 border border-gray-400">{item.customer}</td>

              <td className="text-sm text-bold text-[#2d2df1] max-w-[200px] overflow-x-scroll p-2 border border-gray-400">{item.phone}</td>
              
              <td className="text-sm text-bold text-[#2d2df1] max-w-[200px] overflow-x-scroll p-2 border border-gray-400">{item.email}</td>

              <td className='p-2 max-w-[200px] overflow-x-scroll border border-gray-400'>{item.address}</td>

              <td className="text-bold text-[#2d2df1] max-w-[200px] overflow-x-scroll p-2 border border-gray-400">{item.total}</td>
              <td className="text-bold text-[#2d2df1] max-w-[200px] overflow-x-scroll p-2 border border-gray-400">
                <p className="px-2 py-1 border-1 border-[#2d2df1] rounded-full text-[#2d2df1]">{item.status}</p>
              </td>
              <td className='p-2 border border-gray-400 text-center'>
                <Link href={`/dashboard/invoices?query=order`} className="px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1]">Orders</Link>
              </td>
            </tr>
          ))
        }
        </tbody>
      </table>
      
      {
        query == 'order' &&
        <GetOrders/>
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