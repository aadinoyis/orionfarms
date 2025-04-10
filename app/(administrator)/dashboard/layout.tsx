'use client'
import React from 'react'
import Link from 'next/link';

const DashboardLayout = ({children}: Readonly<{children: React.ReactNode;}>) => {

  

  return (
    <div className="w-full min-h-screen px-4 gap-16 sm:px-20 font-[family-name:var(--lexend)]">
      <main className="py-8 w-full flex flex-col gap-24">
        <section className="flex flex-col gap-8">
          <div className="w-full">  
            <h1 className="sm:text-6xl text-4xl">
              <strong>Inventory</strong>
            </h1>
          </div>
          <div className="flex gap-4 py-8 overflow-x-scroll">
            <Link href={'/dashboard'} className="px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1] whitespace-nowrap">Profile</Link>
            <Link href={'/dashboard/inventory'} className="px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1] whitespace-nowrap">Inventory</Link>
            <Link href={'/dashboard/blogs'} className="px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1] whitespace-nowrap">Blogs</Link>
            <Link href={'/dashboard/invoices'} className="px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1] whitespace-nowrap">Invoices</Link>
          </div>
        </section>
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout