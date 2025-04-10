'use client'
import { useEffect, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

const item = {
  id: "159",
  date: "26/05/2025",
  customer: "Abdulwahab Salihu",
  phone: "08104723945",
  email: "abdulwahabadinoyis@gmail.com",
  address: "58, Onumoh street, Nagazi, Adavi, Kogi state, Nigeria",
  total: "10000",
  status: "Shipped",
  payment: "Received",
  items: [
    {
      id: "129",
      title: "Item 3",
      category: ["Restaurant", "Meal"].join(', '),
      images: ["/images/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table.jpg"],
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est at maxime soluta nulla molestias quisquam, nobis deserunt molestiae ab! Ducimus fugiat exercitationem ex illum labore quasi officia voluptate culpa nobis cum, velit, perspiciatis eum id neque, porro non deserunt molestias odit. Tempore, expedita ratione corporis recusandae eius aut. Doloremque magni quae, expedita praesentium suscipit voluptatem veniam modi excepturi nemo pariatur odit, nam consequatur optio repudiandae omnis repellat. Possimus rem qui facilis, fugit alias iusto adipisci voluptatem facere, minima magni! Minima sapiente accusamus nulla.",
      price: "30000",
      currency: "NGN",
      unit: "kg",
      quantity: "10",
    }
  ]
}

const CreateInvoice = () => {
  const router = useRouter()
  const [data, setData] = useState({
    id: "",
    date: "",
    customer: "",
    phone: "",
    email: "",
    address: "",
    total: "",
    status: "",
    payment: "",
  })

  useEffect(()=>{
    if (item) {
      setData(item)
    }
  }, [])

  return (
    <div className='w-screen h-full fixed top-0 left-0 grid items-center justify-center p-2 py-8 overflow-y-scroll z-10'>
      <div className='w-screen max-w-sm flex flex-col gap-2 rounded-sm bg-white p-4'>
        <div className="text-bold text-[#2d2df1] p-2 border border-gray-400">{item.id}</div>

        <div className="text-bold text-[#2d2df1] p-2 border border-gray-400">{item.date}</div>

        <div className="text-bold text-[#2d2df1] p-2 border border-gray-400">{item.customer}</div>

        <div className="text-sm text-bold text-[#2d2df1] p-2 border border-gray-400">{item.phone}</div>

        <div className="text-sm text-bold text-[#2d2df1] p-2 border border-gray-400">{item.email}</div>

        <div className='p-2 border border-gray-400'>{item.address}</div>

        <div className="text-bold text-[#2d2df1] p-2 border border-gray-400">{item.total}</div>
        <div className="text-bold text-[#2d2df1] p-2 border border-gray-400">{item.status}</div>

        
        <button className="px-4 py-2 border-1 bg-[#2d2df1] rounded-full text-[#ffffff]">Confirm</button>
        <button className="px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1]" onClick={()=>router.back()}>Cancel</button>
      </div>
    </div>
  )
}

export default CreateInvoice