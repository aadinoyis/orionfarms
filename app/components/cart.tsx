import Link from 'next/link'
import React from 'react'

export const CartDocker = () => {
  return (
    <div className='fixed bottom-0 left-0 w-full flex flex-row items-center gap-8 bg-[#2d2df1] text-[#f0f0ff] px-8 py-4 rounded-sm'>
      <div className='grow'>Items Added to Cart</div>
      <Link href='/checkout' className="px-4 py-2 border-1 border-[#f0f0ff] rounded-full text-[#f0f0ff] whitespace-nowrap">Checkout</Link>
    </div>
  )
}

export const CartScreen = () => {
  return (
    <div>Cart Screen</div>
  )
}

