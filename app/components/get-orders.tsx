'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Toast from "./toast";
import { addInventoryItem, getInventoryItem, updateInventoryItem, uploadImages } from "@/utils/inventory";

interface Item {
  id: string;
  name: string;
  price: number;
  unit: string;
  quantity: number;
  imageUrl?: string[];
  total: string;
}

interface Params {
  id?: string;
}

const GetOrders = ({ id }: Params) => {
  const router = useRouter()
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const [data, setData] = useState<Item[]>([]);

  // Fetch item if `id` exists (edit mode)
  useEffect(() => {
    if (id) {
      const fetchItem = async () => {
        setLoading(true);
        try {
          const item = await getInventoryItem(id); // Ensure this returns a full `Item` object
          if (item) {
            const { id, ...itemData } = item; // Remove id from the object
            setData([itemData as Item]);
          }
        } catch (error) {
          console.error("Error fetching item:", error);
        }
        setLoading(false);
      };
      fetchItem();
    }
  }, [id]);

  return (
    <div className='w-screen h-full fixed top-0 left-0 grid items-center justify-center p-2 py-8 overflow-y-scroll'>
      <div className='w-screen max-w-xl flex flex-col gap-2 rounded-sm bg-white p-4'>
        <table className="w-full border border-gray-400 text-nowrap">
          <thead className='w-full border border-gray-400 border-collapse'>
            <tr>
              <th className='p-2 border border-gray-400'>Id</th>
              {/* <th className='p-2 border border-gray-400'>Image</th> */}
              <th className='p-2 border border-gray-400'>Title</th>
              <th className='p-2 border border-gray-400'>Price</th>
              <th className='p-2 border border-gray-400'>Qty</th>
              <th className='p-2 border border-gray-400'>Subtotal</th>
            </tr>
          </thead>
          <tbody className='text-sm'>
            {
              data.map(item => (
                <tr key={item.id} className="w-full border p-2 border-gray-400">
                  <td className="text-bold p-2 border border-gray-400">{item.id}</td>
                  {/* <td className="h-[80px] w-[80px] rounded-sm p-2 border border-gray-400">
                    <Image
                      src={item.imageUrl[0]} 
                      alt={"Orion Farms"}
                      width={2750}
                      height={1536}
                      className="w-[100%] h-[100%] object-cover object-top rounded-sm shrink-0"
                    />
                  </td> */}
                  <td className="text-bold p-2 border border-gray-400">{item.name}</td>
                  <td className="text-bold p-2 border border-gray-400">NGN {item.price}/{item.unit}</td>
                  
                  <td className="text-bold p-2 border border-gray-400">NGN {item.total}</td>
                  <td className="text-bold p-2 border border-gray-400">{item.quantity}</td>
                </tr>
              ))
            }
              <tr>
                <td className="text-bold p-2 border-b border-gray-400">Delivery</td>
                <td className="text-bold p-2 border-b border-gray-400" colSpan={3}></td>
                <td className="text-bold p-2 border-b border-gray-400">20,000</td>
              </tr>
              <tr>
                <td className="text-bold p-2 border-b border-gray-400">Total</td>
                <td className="text-bold p-2 border-b border-gray-400" colSpan={3}></td>
                <td className="text-bold p-2 border-b border-gray-400">40,0000</td>
              </tr>
          </tbody>
        </table>
        <button className="px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1]"
          onClick={() => router.back()}>
          Close
        </button>
      </div>
      {message && <Toast message={message} />}
    </div>
  );
};

export default GetOrders;
