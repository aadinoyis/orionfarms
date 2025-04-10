'use client'
import {FaFacebook} from "react-icons/fa"
import {FaWhatsapp} from "react-icons/fa"
import Image from "next/image"
import Toast from "./toast"
import { useState } from "react"


const Footer = () => {
  const [isToast, setIsToast] = useState(false)
  const [message, setMessage] = useState('')
  const [notification, setNotification] = useState('')

  const submitForm = () => {
    console.log('hurray')
    setIsToast(true)
    if (message.length !== 0) {
      setNotification('Message sent successfully')
      setTimeout(()=>{
        setIsToast(false)
      }, 1500)
    } else {
      setNotification('Please write a message')
      setTimeout(()=>{
        setIsToast(false)
      }, 1500)
    }
  }
  
  return (
    <div className="px-4 sm:px-20 py-24  w-full flex flex-col sm:flex-row-reverse gap-24">
    
      <section className="flex flex-col gap-8 w-full">
        <div className="w-[100%]">  
          <h1 className="sm:text-6xl text-4xl">
            <strong>Subscribe to </strong><br />
            <em>our Newsletter </em>
          </h1>
        </div>

        <div className="flex flex-col gap-8 max-w-[500px]">
          <p>Receive latest updates about our products, discounts and events</p>

          <div className="flex flex-col gap-4">
              <div className='flex flex-col'>
                <label htmlFor="name" className='text-[#2d2df1] text-sm'>Email</label>
                <input type="text" value={message} onChange={e => setMessage(e.target.value)} className="border-b-1 border-[#2d2df1] p-2" placeholder="User@mail.com" />
              </div>
            <button onClick={() => submitForm()} className="px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1]">Subscribe</button>
          </div>
        </div>

        <div>
          By Subscribing, you agree to receive information and marketing updates from us.
          We will try our best to not spam your email. You can unsubscribe anytime.
        </div>
      </section>

      <footer className="flex flex-col justify-between gap-8 w-full" id="contact">
        <div className="w-full">
          <Image
            src={"/images/logo-transparent.png"} 
            alt={"Orion Farms"}
            width={2750}
            height={1536}
            className="w-[320px] h-auto"
          />
        </div>

        <div>
          &copy; {new Date().getFullYear()}, Orion Farms
        </div>
        
        <div className="w-full flex flex-col gap-2">
          <div className="text-2xl">
            Km 48 Ayewa Ogali Kabbah Expressway, Ijumu LGA, Kogi State.
          </div>

          <div>
            orion4sfarms@gmail.com
          </div>

          <div>
            +234 912 847 0704
          </div>

          <div>
            +234 807 821 8187
          </div>

          <div className="flex gap-4">
            <a href="https://www.facebook.com/olusogaGodWordsLivesForever" className="w-12 h-12 border-1 border-[#2d2df1] rounded-full text-[#2d2df1] flex items-center justify-center">
              <FaFacebook size={24}/>
            </a>
            <a href="https://wa.me/2348078218187" className="w-12 h-12 border-1 border-[#2d2df1] rounded-full text-[#2d2df1] flex items-center justify-center">
              <FaWhatsapp size={24}/>
            </a>
          </div>
        {
          isToast && <Toast message={notification}/>
        }
        </div>
      </footer>
    </div>
  )
}

export default Footer