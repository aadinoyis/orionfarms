'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Toast from "./toast";
import { getOrder } from "@/utils/invoice";


interface Invoice {
  customer: string;
  phone: string;
  email: string;
  address: string;
  amount: number;
  deliveryFee: number;
  createdAt: Date;
  items: Item[];
  status: string;
}

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

interface Params {
  id?: string;
}

const GetOrders = ({ id }: Params) => {
  const router = useRouter()
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const [data, setData] = useState<Invoice>();

  // Fetch item if `id` exists (edit mode)
  useEffect(() => {
    if (id) {
      const fetchItem = async () => {
        setLoading(true);
        try {
          const order = await getOrder(id); // Ensure this returns a full `Item` object
          if (order) {
            const { id, ...orderData } = order; // Remove id from the object
            setData(orderData as Invoice);
          }
        } catch (error) {
          console.error("Error fetching order:", error);
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
              {/* <th className='p-2 border border-gray-400'>Id</th> */}
              {/* <th className='p-2 border border-gray-400'>Image</th> */}
              <th className='p-2 border border-gray-400'>Item</th>
              <th className='p-2 border border-gray-400'>Price</th>
              <th className='p-2 border border-gray-400'>Qty</th>
              <th className='p-2 border border-gray-400'>Subtotal</th>
            </tr>
          </thead>
          <tbody className='text-sm'>
            {
              data &&
              data.items.map(item => (
                <tr key={item.id} className="w-full border p-2 border-gray-400">
                  {/* <td className="text-bold p-2 border border-gray-400">{item.id}</td> */}
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
                  
                  <td className="text-bold p-2 border border-gray-400">{item.quantity}</td>
                  <td className="text-bold p-2 border border-gray-400">NGN {item.price * item.quantity}</td>
                </tr>
              ))
            }
              <tr>
                <td className="text-bold p-2 border-b border-gray-400">Delivery</td>
                <td className="text-bold p-2 border-b border-gray-400" colSpan={2}></td>
                <td className="text-bold p-2 border-b border-gray-400">NGN {data?.deliveryFee}</td>
              </tr>
              <tr>
                <td className="text-bold p-2 border-b border-gray-400">Total</td>
                <td className="text-bold p-2 border-b border-gray-400" colSpan={2}></td>
                <td className="text-bold p-2 border-b border-gray-400">NGN {data?.amount}</td>
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
