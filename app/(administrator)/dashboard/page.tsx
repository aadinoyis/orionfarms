'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Suspense } from 'react'
// import useAuth from '@/hooks/getUser'
import { useAuth } from "@/context/authContext";
import { auth } from '@/utils/initFirebase';



const Profile = () => {
  const router = useRouter();
  const { user, loading, signOut } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth"); // Redirect if not logged in
    }
  }, [user, loading, router]);

  
  if (loading) return <p>Loading...</p>;

  return (
    <section className="w-full overflow-x-scroll"> 
      <div className='flex gap-4'>
        <div className="shrink-0 w-[125px] h-[125px] sm:w-[200px] sm:h-[200px] min-w-[125px] min-h-[125px] rounded-full bg-[#2d2df1]">
          <Image
            src={"/images/hero-image.jpg"} 
            alt={"Orion Farms"}
            width={2750}
            height={1536}
            className="w-[100%] h-[100%] object-cover shrink-0 rounded-sm"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl text-bold">Olusoga Orion</h3>
          <div className="text-sm">Founder &amp; CEO</div>
          <button onClick={signOut} className="px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1] whitespace-nowrap">Sign Out</button>

          {/* <p className='text-2xl text-[#2d2df1]'>
            Our collected eggs from our healthy birds are always within your reach.
            We make sure to give our birds the best treatment so that they can produce
            a good, healthy and big eggs for consumption.
          </p> */}
        </div>
      </div>
    </section>     
  )
}

const Page = () => {
  return (
    
      <Profile/>
  )
}

export default Page