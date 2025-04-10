'use client'
import { useEffect, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

const item = {
  id: "123",
  title: "Sustainable Farming Excellence Award",
  category: "Business",
  date: "Thursday, 24 Jan, 2025",
  images: ["/images/hens-1528984922.jpg"],
  description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est at maxime soluta nulla molestias quisquam, nobis deserunt molestiae ab! Ducimus fugiat exercitationem ex illum labore quasi officia voluptate culpa nobis cum, velit, perspiciatis eum id neque, porro non deserunt molestias odit. Tempore, expedita ratione corporis recusandae eius aut. Doloremque magni quae, expedita praesentium suscipit voluptatem veniam modi excepturi nemo pariatur odit, nam consequatur optio repudiandae omnis repellat. Possimus rem qui facilis, fugit alias iusto adipisci voluptatem facere, minima magni! Minima sapiente accusamus nulla.",
}

const CreateBlog = () => {
  const router = useRouter()
  const [data, setData] = useState({
    id: "",
    title: "",
    category: "",
    date: "",
    images: [""],
    description: "",
  })

  useEffect(()=>{
    if (item) {
      setData(item)
    }
  }, [])

  return (
    <div className='w-screen h-full fixed top-0 left-0 grid items-center justify-center p-2 py-8 overflow-y-scroll'>
      <div className='w-screen max-w-xl flex flex-col gap-2 rounded-sm bg-white p-4'>
        <div className="h-[80px] w-[80px] rounded-sm p-2 border border-gray-400">
          <Image
            src={item.images[0]} 
            alt={"Orion Farms"}
            width={2750}
            height={1536}
            className="w-[100%] h-[100%] object-cover rounded-sm shrink-0"
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor="name" className='text-[#2d2df1] text-sm'>Title</label>
          <input type="text" className="border-b-1 border-[#2d2df1] p-2" placeholder='title' value={data.title} onChange={(e)=>setData({...data, title: e.target.value})}/>
        </div>
        <div className='flex flex-col'>
          <label htmlFor="name" className='text-[#2d2df1] text-sm'>Description</label>
          <textarea name="description" id="description" className="border-b-1 border-[#2d2df1] p-2 h-[150px]" placeholder='description' value={data.description} onChange={(e)=>setData({...data, description: e.target.value})}></textarea>
        </div>
        <div className='flex flex-col'>
          <label htmlFor="name" className='text-[#2d2df1] text-sm'>Category</label>
          <input type="text" className="border-b-1 border-[#2d2df1] p-2" placeholder='category' value={data.category} onChange={(e)=>setData({...data, category: e.target.value})}/>
        </div>
        
        <button className="px-4 py-2 border-1 bg-[#2d2df1] rounded-full text-[#ffffff]">Confirm</button>
        <button className="px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1]" onClick={()=>router.back()}>Cancel</button>
      </div>
    </div>
  )
}

export default CreateBlog