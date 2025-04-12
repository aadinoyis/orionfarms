export async function POST(req: Request) {
  try {
    const { phone, email, amount, customer, address, items, deliveryFee } = await req.json();

    if (!email || !amount) {
      return new Response(JSON.stringify({ error: 'Email and amount are required' }), { status: 400 });
    }

    const body = {
      email,
      amount,
      metadata: {
        custom_fields: [
          {
            display_name: "Full Name",
            variable_name: "full_name",
            value: customer,
          },
          {
            display_name: "Phone Number",
            variable_name: "phone_number",
            value: phone,
          },
          {
            display_name: "Delivery Fee",
            variable_name: "delivery_fee",
            value: deliveryFee,
          },
          {
            display_name: "Address",
            variable_name: "address",
            value: address,
          },
          {
            display_name: "Items",
            variable_name: "items",
            value: items,
          },
        ],
      },
    };

    const res = await fetch('https://api.paystack.co/transaction/initialize', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    if (!res.ok) {
      return new Response(JSON.stringify({ error: data.message || 'Failed to initiate transaction' }), { status: res.status });
    }

    return new Response(JSON.stringify(data), { status: 200 });

  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
