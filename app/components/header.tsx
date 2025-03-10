"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import {FaBars} from "react-icons/fa"
import {FaTimes} from "react-icons/fa"

const Header = () => {
  const [isMenu, setIsMenu] = useState(false)

  return (
    <header className="flex items-center px-4 sm:px-20 justify-between gap-2 py-8">
      <Link href="/">
        <Image
          src={"/images/logo-transparent.png"} 
          alt={"Orion Farms"}
          width={2750}
          height={1536}
          className="w-[150px] h-auto shrink-0"
        />
      </Link>
      <nav>
        <ul className="sm:flex gap-4 hidden">
          <li><Link href="/">Home</Link></li>
          {/* <li><Link href="/#services">Services</Link></li> */}
          <li><Link href="/shop">Shop</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/faq">Faq</Link></li>
        </ul>
      </nav>

      <Link href="/shop" className="shrink-0 px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1]">Shop here</Link>
      <button onClick={()=>setIsMenu(true)} className="shrink-0 sm:hidden block px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1]"><FaBars size={24}/></button>

      {
        isMenu ?
        <nav className="sm:hidden block fixed top-0 z-50 left-0 w-screen h-screen bg-[#f0f0ff] text-[#2d2df1] p-4">
          <ul className="flex flex-col items-center gap-4">
            <li>
              <Image
                src={"/images/logo-transparent.png"} 
                alt={"Orion Farms"}
                width={2750}
                height={1536}
                className="w-[150px] h-auto shrink-0"
              />
            </li>
            <li><Link href="/" onClick={()=>setIsMenu(false)}>Home</Link></li>
            {/* <li><Link href="/#services" onClick={()=>setIsMenu(false)}>Services</Link></li> */}
            <li><Link href="/shop" onClick={()=>setIsMenu(false)}>Shop</Link></li>
            <li><Link href="/about" onClick={()=>setIsMenu(false)}>About</Link></li>
            <li><Link href="/contact" onClick={()=>setIsMenu(false)}>Contact</Link></li>
            <li><Link href="/blog" onClick={()=>setIsMenu(false)}>Blog</Link></li>
            <li><Link href="/faq" onClick={()=>setIsMenu(false)}>Faq</Link></li>
            <li>
              <button 
                onClick={()=>setIsMenu(false)}
                className="shrink-0 flex gap-2 px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1]">
                  <span>Back</span> <FaTimes size={24}/>
                  </button>
              </li>
          </ul>  
        </nav> :
        null
      }
    </header>
  )
}

export default Header