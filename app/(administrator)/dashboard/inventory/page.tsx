'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useSearchParams, useRouter } from 'next/navigation'
import { Suspense } from 'react'
import CreateItem from '@/app/components/create-item'
import { getInventoryItems, deleteInventoryItem } from "@/utils/inventory";
import Toast from '@/app/components/toast'

interface Item {
  id: string;
  name: string;
  description?: string;
  price: number;
  quantity: number;
  imageUrl: string[];
  category: string[];
  unit: string;
}

const Inventory = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const query = searchParams.get('query')
  const [message, setMessage] = useState<string | null>(null);

  const [items, setItems] = useState<Item[] | null>(null)

  const handleDelete = async (id: string) => {
    try {
      await deleteInventoryItem(id)
      setMessage('Item deleted successfully')
      router.refresh()
    }
    catch (error) {
      setMessage('Error deleting item')
      router.refresh()
    }
  }

  useEffect(() => {
    const fetchItems = async () => {
      const data = await getInventoryItems();
      const formattedData = data.map((item) => ({
        id: item.id,
        name: item.name || "Unknown Item",
        price: item.price || 0,
        quantity: item.quantity || 1,
        unit: item.unit || "pcs", // Default unit
        description: item.description || "",
        imageUrl: item.imageUrl || null,
        category: item.category || null,
      }));

      setItems(formattedData);
    };

    fetchItems();
  }, []);
  
  return (
    <section className="w-full overflow-x-scroll"> 
      <table className="min-w-full border border-gray-400 text-nowrap">
        <thead className='w-full border border-gray-400 border-collapse'>
          <tr>
            <th className='p-2 border border-gray-400'>Title</th>
            <th className='p-2 border border-gray-400'>Image</th>
            <th className='p-2 border border-gray-400'>Description</th>
            <th className='p-2 border border-gray-400'>Categories</th>
            <th className='p-2 border border-gray-400'>Unit</th>
            <th className='p-2 border border-gray-400'>Qty</th>
            <th className='p-2 border border-gray-400'>Price</th>
            <th className='p-2 border border-gray-400'>
              <Link href={'/dashboard/inventory?query=new'} className="px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1]">Add New</Link>
            </th>
          </tr>
        </thead>
        <tbody className='text-sm'>
        {
          items?
          items.map(item => (
            <tr key={item.id} className="w-full border border-gray-400">
              <td className="text-bold text-[#2d2df1] p-1 border border-gray-400">{item.name}</td>

              <td className="h-[45px] w-[45px] rounded-sm p-1 border border-gray-400">
                <Image
                  src={item.imageUrl[0]} 
                  alt={"Orion Farms"}
                  width={2750}
                  height={1536}
                  className="w-[100%] h-[100%] object-cover rounded-sm shrink-0"
                />
              </td>  

              <td className='p-1 max-w-[300px] overflow-x-scroll border border-gray-400'>
                <p className="text-sm">{item.description}</p>
              </td>

              <td className="text-sm text-bold text-[#2d2df1] p-1 border border-gray-400">
                {
                  item.category
                }
              </td>

              <td className="text-bold text-[#2d2df1] p-1 border border-gray-400">{item.unit}</td>
              <td className="text-bold text-[#2d2df1] p-1 border border-gray-400">{item.quantity}</td>
              <td className="text-bold text-[#2d2df1] p-1 border border-gray-400">{item.price}</td>

              <td className='p-1 border border-gray-400 text-center'>
                <Link href={`/dashboard/inventory?query=edit`} className="px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1]">Update</Link>
              </td>
              <td className='p-1 border border-gray-400 text-center'>
                <button onClick={() => handleDelete(item.id)} className="px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1]">Delete</button>
              </td>
              
              {
                query == 'edit' &&
                <CreateItem id={item.id}/>
              }
            </tr>
          ))
          :
          <tr>
            <td colSpan={8} className='text-center'>No items found</td>
          </tr>
        }
        </tbody>
      </table>
      {
        query == 'new' &&
        <CreateItem />
      }
      {
         message && <Toast message={message}/>
      }


    </section>     
  )
}

const Page = () => {
  return (
    <Suspense>
      <Inventory/>
    </Suspense>
  )
}

export default Page