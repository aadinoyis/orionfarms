'use client'
import Image from 'next/image'
import { CartDocker } from '../components/cart'
import { useState } from 'react'
import Link from 'next/link'
import { useItemsContext } from '@/context/itemsContext'


const Page = () => {
  const {items, addItem} = useItemsContext()

  const [isCart, setIsCart] = useState(false)
  const updateItem = (id:string) => {
    addItem(id)
    setIsCart(true)
  }

  return (
    <div className="w-full min-h-screen px-4 gap-16 sm:px-20 font-[family-name:var(--lexend)]">
      <main className="py-8 w-full flex flex-col gap-24">
        <section className="flex flex-col gap-8">
          <div className="w-full">  
            <h1 className="sm:text-6xl text-4xl">
              <strong>Shop from our </strong><em>Farm </em>
            </h1>
          </div>
          <div className="flex gap-4 py-8 overflow-x-scroll">
            <button className="px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1] whitespace-nowrap">Explore all</button>
            <button className="px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1] whitespace-nowrap">Birds</button>
            <button className="px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1] whitespace-nowrap">Eggs</button>
            <button className="px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1] whitespace-nowrap">Goat</button>
            <button className="px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1] whitespace-nowrap">Ram</button>
            <button className="px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1] whitespace-nowrap">Snail</button>
            <button className="px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1] whitespace-nowrap">Leather</button>
          </div>
        </section>

        <section className='flex flex-col sm:flex-row gap-4'>
          {
            items.map(item => (
              <div key={item.id} className="max-w-[300px]">
                <div className="w-full flex flex-col gap-4 py-4">
                  <Link href={`/shop/${item.id}`}  className="w-full flex gap-8">
                    <div className="w-full flex items-end justify-end h-[200px] overflow-hidden rounded-sm bg-[#2d2df1]">
                      <Image
                        src={item.imageUrl[0]} 
                        alt={"Orion Farms"}
                        width={2750}
                        height={1536}
                        className="w-[100%] h-[100%] object-cover rounded-sm shrink-0"
                      />
                    </div>  
                  </Link>
                  <div className="flex flex-col gap-4">
                    <div className="text-sm text-bold text-[#2d2df1]">
                      {
                        item.category.join(', ')
                      }
                    </div>
                    <p className="max-h-[40px] text-sm overflow-hidden">
                      {item.description}
                    </p>
                    {/* <h3 className="text-3xl text-bolder">NGN 24,000</h3> */}
                    <div className="text-bold text-[#2d2df1]">NGN {item.price}</div>
                    <div>
                      <button className="px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1]" onClick={() => updateItem(item.id)}>Add to cart</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </section>
        {
          isCart &&
          <CartDocker/>
        }
      </main>
    </div>
  )
}

export default Page