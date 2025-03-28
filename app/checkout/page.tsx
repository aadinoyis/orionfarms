'use client'
import React from 'react'
import Image from 'next/image'
import { useItemsContext } from '@/context/itemsContext'

const Page = () => {
  const {cart, removeItem, updateQuantity} = useItemsContext()

  const subTotal = cart.reduce((sum, item) => sum + item.total, 0);

  const deliveryFee = 25000;

  const total = subTotal + deliveryFee

  return (
    <div className="w-full min-h-screen px-4 gap-16 sm:px-20 font-[family-name:var(--lexend)]">
      <main className="py-8 w-full flex flex-col gap-24">
        <section className="flex flex-col gap-8" id="blog">
          <div className="w-full">  
            <h1 className="sm:text-6xl text-4xl">
              <strong>Items in your </strong>
              <em>Cart </em>
            </h1>
          </div>

          <div className="flex flex-col gap-8">
            <ul className="flex flex-col sm:flex-row gap-8">
              {
                cart.map(item => (
                  <li key={item.id} className="flex gap-2">
                    <div className="w-[100px] h-[100px] shrink-0 bg-[#2d2df1] rounded-sm p-2">
                      <Image
                        src={item.images[0]} 
                        alt={"Orion Farms"}
                        width={2750}
                        height={1536}
                        className="w-[100%] h-[100%] object-cover object-top rounded-sm shrink-0"
                      />
                    </div>
                    <div className='flex flex-col gap-2'>
                      <h2 className="text-xl">{item.title}</h2>
                      <h4 className="text-sm">Price: <br /><strong>{item.currency} {item.price}/{item.unit}</strong></h4>
                      <h4 className="text-sm">Qty: 
                        <div className='flex items-center gap-2'>
                          <input type='number' placeholder='1' value={item.quantity} onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                          className="px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1] max-w-[100px]"/><div onClick={() => removeItem(item.id)}>Remove</div>
                        </div>
                      </h4>
                      <h4 className="text-sm">Subtotal: <br /><strong>NGN {item.total}</strong></h4>
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>
        </section>
        <section className="flex flex-col gap-8 w-full">
          <div className="w-[100%]">  
            <h1 className="sm:text-6xl text-4xl">
              <strong>Enter your </strong><br />
              <em>Shipping details </em>
            </h1>
          </div>
          <div className='max-w-[500px] bg-[#2d2df1] text-[#ffffff] p-2'>
            <h3>Order Summary</h3>

            <ul>
              <li className='flex justify-between'>
                <span className='font-bold'>Items:</span>
                <span>{cart.length}</span>
              </li>
              <li className='flex justify-between'>
                <span className='font-bold'>Sub total:</span>
                <span>NGN {subTotal}</span>
              </li>
              <li className='flex justify-between'>
                <span className='font-bold'>Delivery:</span>
                <span>NGN {deliveryFee}</span>
              </li>
              <li className='flex justify-between'>
                <span className='font-bold'>Total:</span>
                <span>NGN {total}</span>
              </li>

            </ul>
          </div>

          <div className="flex flex-col gap-8 max-w-[500px]">
            <p>Complete your details to get your products delivered to you.</p>

            <div className="flex flex-col gap-4">
              <input type="text" name="firstname" id="firstname" className="border-b-1 border-[#2d2df1] p-2" placeholder="Firstname" />
              <input type="text" name="lastname" id="lastname" className="border-b-1 border-[#2d2df1] p-2" placeholder="Lastname" />
              <input type="text" name="email" id="email" className="border-b-1 border-[#2d2df1] p-2" placeholder="Email" />
              <input type="text" name="phone" id="phone" className="border-b-1 border-[#2d2df1] p-2" placeholder="Phone" />
              <input type="text" name="country" id="country" className="border-b-1 border-[#2d2df1] p-2" placeholder="Country" />
              <input type="text" name="state" id="state" className="border-b-1 border-[#2d2df1] p-2" placeholder="State" />
              <input type="text" name="city" id="city" className="border-b-1 border-[#2d2df1] p-2" placeholder="City" />
              <input type="text" name="address" id="address" className="border-b-1 border-[#2d2df1] p-2" placeholder="Delivery Address" />
              <textarea name="message" id="message" className="border-b-1 border-[#2d2df1] p-2" placeholder="Message"></textarea>
              <button className="px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1]">Checkout</button>
            </div>
          </div>

          <div>
            {/* We will make sure to get back to you for any request or issue,
            We will try our best to not spam your email. */}
          </div>
        </section>
      </main>
    </div>
  )
}

export default Page