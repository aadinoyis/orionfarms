'use client'
import {useState} from 'react'
import Image from 'next/image'
import { useItemsContext } from '@/context/itemsContext'
// import PaystackPop from '@paystack/inline-js'

const Page = () => {
  const {cart, removeItem, updateQuantity} = useItemsContext()

  const subTotal = cart.reduce((sum, item) => sum + item.total, 0);

  const deliveryFee = 25000;

  const total = subTotal + deliveryFee

  const [customerDetails, setCustomerDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    country: "",
    state: "",
    city: "",
    address: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handlePayment = async () => {
    setLoading(true);
    setError("");

    // console.log(customerDetails.phone, total)

    try {
      // const response = await fetch("/api/complete-checkout", {
        const response = await fetch("/api/initiate-transaction", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          phone: customerDetails.phone, 
          email: customerDetails.email, 
          customer: `${customerDetails.firstname} ${customerDetails.lastname}`, 
          address: `${customerDetails.address} ${customerDetails.city} ${customerDetails.state} ${customerDetails.country}`,
          items: cart,
          deliveryFee: deliveryFee,
          amount: Number(total) * 100,
        }), // Convert to kobo
      });

      const {data} = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to initialize transaction");
      }

      if (data) {
        console.log(data.access_code)
        if (data) {
          const { default: PaystackPop } = await import("@paystack/inline-js"); // 👈 only import on client
          const popup = new PaystackPop();
          popup.resumeTransaction(data.access_code);
        }
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen px-4 gap-16 sm:px-20 font-[family-name:var(--lexend)]">
      <main className="py-8 w-full flex flex-col gap-24">
        <section className="flex flex-col gap-8 overflow-x-scroll">
          <div className="w-full">  
            <h1 className="sm:text-6xl text-4xl">
              <strong>Items in your </strong>
              <em>Cart </em>
            </h1>
          </div>

          <table className="w-full max-w-sm border border-gray-400 text-nowrap">
            <thead className='w-full border border-gray-400 border-collapse'>
              <tr>
                <th className='p-2 border border-gray-400'>S/N</th>
                <th className='p-2 border border-gray-400'>Item</th>
                <th className='p-2 border border-gray-400'>Description</th>
                <th className='p-2 border border-gray-400'>Price</th>
                <th className='p-2 border border-gray-400'>Qty</th>
                <th className='p-2 border border-gray-400'>Subtotal</th>
              </tr>
            </thead>
            <tbody className='text-xs'>
              {
                cart.map((item, index) => (
                  <tr key={item.id} className="w-full border p-2 border-gray-400">
                    <td className="text-bold p-2 border border-gray-400">{index + 1}</td>
                    <td className="h-[60px] w-[80px] rounded-sm p-2 border border-gray-400">
                      <Image
                        src={item.imageUrl[0]} 
                        alt={"Orion Farms"}
                        width={2750}
                        height={1536}
                        className="w-[100%] h-[100%] object-cover object-top rounded-sm shrink-0"
                      />
                    </td>
                    <td className="text-bold p-2 border border-gray-400">{item.name}</td>
                    <td className="text-bold p-2 border border-gray-400">NGN {item.price}/{item.unit}</td>
                    <td className="text-bold p-2 border border-gray-400">
                      <div className='flex items-center gap-2'>
                        <input type='number' placeholder='1' value={item.quantity} onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                        className="px-4 py-2 border-1 border-[#2d2df1]  text-[#2d2df1] rounded-full max-w-[100px]"/>
                      </div>
                    </td>
                    <td className="text-bold p-2 border border-gray-400">NGN {item.total}</td>
                    <td className="text-bold p-2 border border-gray-400"><button className="px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1] max-w-[100px]" onClick={() => removeItem(item.id)}>Remove</button></td>
                  </tr>
                ))
              }
            </tbody>
          </table>
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
              <div className='flex flex-col'>
                <label htmlFor="name" className='text-[#2d2df1] text-sm'>Firstname</label>
                <input type="text" name="firstname" id="firstname" className="border-b-1 border-[#2d2df1] p-2" placeholder="Firstname" value={customerDetails.firstname} onChange={e => setCustomerDetails({...customerDetails, firstname: e.target.value})}/>
              </div>
              <div className='flex flex-col'>
                <label htmlFor="name" className='text-[#2d2df1] text-sm'>Lastname</label>
                <input type="text" name="lastname" id="lastname" className="border-b-1 border-[#2d2df1] p-2" placeholder="Lastname" value={customerDetails.lastname} onChange={e => setCustomerDetails({...customerDetails, lastname: e.target.value})}/>
              </div>
              <div className='flex flex-col'>
                <label htmlFor="name" className='text-[#2d2df1] text-sm'>Email</label>
                <input type="text" name="email" id="email" className="border-b-1 border-[#2d2df1] p-2" placeholder="Email" value={customerDetails.email} onChange={e => setCustomerDetails({...customerDetails, email: e.target.value})}/>
              </div>
              <div className='flex flex-col'>
                <label htmlFor="name" className='text-[#2d2df1] text-sm'>Phone</label>
                <input type="text" name="phone" id="phone" className="border-b-1 border-[#2d2df1] p-2" placeholder="Phone" value={customerDetails.phone} onChange={e => setCustomerDetails({...customerDetails, phone: e.target.value})}/>
              </div>
              <div className='flex flex-col'>
                <label htmlFor="name" className='text-[#2d2df1] text-sm'>Country</label>
                <input type="text" name="country" id="country" className="border-b-1 border-[#2d2df1] p-2" placeholder="Country" value={customerDetails.country} onChange={e => setCustomerDetails({...customerDetails, country: e.target.value})}/>
              </div>
              <div className='flex flex-col'>
                <label htmlFor="name" className='text-[#2d2df1] text-sm'>State</label>
                <input type="text" name="state" id="state" className="border-b-1 border-[#2d2df1] p-2" placeholder="State" value={customerDetails.state} onChange={e => setCustomerDetails({...customerDetails, state: e.target.value})}/>
              </div>
              <div className='flex flex-col'>
                <label htmlFor="name" className='text-[#2d2df1] text-sm'>City</label>
                <input type="text" name="city" id="city" className="border-b-1 border-[#2d2df1] p-2" placeholder="City" value={customerDetails.city} onChange={e => setCustomerDetails({...customerDetails, city: e.target.value})}/>
              </div>
              <div className='flex flex-col'>
                <label htmlFor="name" className='text-[#2d2df1] text-sm'>Address</label>
                <input type="text" name="address" id="address" className="border-b-1 border-[#2d2df1] p-2" placeholder="Delivery Address" value={customerDetails.address} onChange={e => setCustomerDetails({...customerDetails, address: e.target.value})}/>
              </div>
              {/* <textarea name="message" id="message" className="border-b-1 border-[#2d2df1] p-2" placeholder="Message"></textarea> */}
              <button className="px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1]" onClick={handlePayment}>{loading ? 'Loading' : 'Checkout'}</button>
              {error && <p className="text-red-500">{error}</p>}
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