import { NextResponse } from "next/server";
import { db } from "@/utils/initFirebase"; // Import Firestore
import { doc, setDoc } from "firebase/firestore";

export async function POST(req: Request) {
  try {
    const { phone, email, amount, customer, address, items, deliveryFee } = await req.json();

    if (!email || !amount) {
      return new Response(JSON.stringify({ error: 'Email and amount are required' }), { status: 400 });
    }

    const orderDetails = {
      orderId: "order_" + Date.now(),
      phone, 
      email, 
      amount, 
      customer, 
      address, 
      items, 
      deliveryFee,
      createdAt: new Date(),
    };

    

    await setDoc(doc(db, "orders", orderDetails.orderId), orderDetails);

    return NextResponse.json({ success: true, message: "Order saved!" });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
