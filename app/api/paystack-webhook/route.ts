import { NextRequest, NextResponse } from "next/server";
import { db } from "@/utils/initFirebase"; // Import Firestore
import { doc, setDoc } from "firebase/firestore";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  const secret = process.env.PAYSTACK_SECRET_KEY!;
  const signature = req.headers.get("x-paystack-signature");

  const rawBody = await req.text(); // Read raw request body
  const hash = crypto.createHmac("sha512", secret).update(rawBody).digest("hex");

  if (signature !== hash) {
    return NextResponse.json({ success: false, message: "Invalid signature" }, { status: 401 });
  }

  const event = JSON.parse(rawBody);

  if (event.event === "charge.success") {
    const paymentData = event.data;


    // Extract Order Details
    const orderDetails = {
      // userId: paymentData.metadata.userId, // Pass user ID from metadata
      // status: "paid",
      orderId: paymentData.reference,
      amount: paymentData.amount / 100, // Convert kobo to currency
      // paymentMethod: paymentData.channel,
      createdAt: new Date(),
      phone: paymentData.metadata.phone_number,
      email: paymentData.email,
      customer: paymentData.metadata.full_name,
      address: paymentData.metadata.address,
      items: paymentData.metadata.items,
      deliveryFee: paymentData.metadata.delivery_fee,
      // orderId: paymentData.metadata.orderId, // Pass order ID from metadata
    };

    // Save Order to Firebase (Firestore)
    await setDoc(doc(db, "orders", paymentData.reference), orderDetails);

    return NextResponse.json({ success: true, message: "Order saved!" });
  }

  return NextResponse.json({ success: false, message: "Event not handled" });
}
