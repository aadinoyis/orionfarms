'use client'
import Image from 'next/image'
import { CartDocker } from '../../components/cart'
import { useState } from 'react'
import { useItemsContext } from '@/context/itemsContext'
import { use } from 'react'

type Params = Promise<{ itemId: string }>

const Page = ({ params }: { params: Params }) => {
  const {itemId} = use(params)
  const {items, addItem, updateQuantity} = useItemsContext()

  const [isCart, setIsCart] = useState(false)
  const [qty, setQty] = useState(1)
  
  const updateItem = (id:string, qty:number) => {
    addItem(id)
    updateQuantity(id, qty)
    setIsCart(true)
  }

  return (
    <div className="w-full min-h-screen px-4 gap-16 sm:px-20 font-[family-name:var(--lexend)]">
      <main className="py-8 w-full flex flex-col gap-24">
        <section>
          {
            items.map(item => 
              item.id == itemId ?
              (
                <div key={item.id} className="flex flex-col gap-8 w-full max-w-[800px]">
                  <div className="w-full h-[400px] shrink-0 bg-[#2d2df1] rounded-sm">
                    <Image
                      src={item.imageUrl[0]} 
                      alt={"Orion Farms"}
                      width={2750}
                      height={1536}
                      className="w-[100%] h-[100%] object-cover object-top rounded-sm shrink-0"
                    />
                  </div>
      
                  <div className="w-full">  
                    <h1 className="sm:text-6xl text-4xl">
                      <strong>{item.name}</strong>
                    </h1>
                  </div>
      
                  <div>
                    <h2 className="text-xl">
                      {
                        item.category.join(', ')
                      }
                    </h2>
                    <span className="text-sm">NGN {item.price}<strong>/{item.unit}</strong></span>
                  </div>
      
                  <div>
                    {
                      item.description
                    }
                  </div>
      
                  <div className="w-full flex flex-col gap-8 py-4">
                    <div className="flex flex-col gap-4">
                      
                      <h4 className="text-sm">Quantity:</h4>
                      <div className='flex items-center gap-2'>
                        <input type='number' placeholder='1' min={1} value={qty} onChange={(e)=>setQty(parseInt(e.target.value))}
                        className="shrink-0 px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1] max-w-[100px]"/>
                        <button className="shrink-0 px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1]" onClick={() => updateItem(item.id, qty)}>Add to cart</button>
                      </div>
                      {/* <h4 className="text-sm">Subtotal: </h4>
                      <div>
                        <strong>NGN 24,000</strong>
                      </div> */}
                    </div>
                  </div>
                </div>
              )
              : null
            )
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