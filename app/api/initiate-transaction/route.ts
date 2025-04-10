import https from 'https';

export async function POST(req: Request) {
  try {
    const { phone, email, amount, customer, address, items, deliveryFee } = await req.json();

    if (!email || !amount) {
      return new Response(JSON.stringify({ error: 'Email and amount are required' }), { status: 400 });
    }

    const params = JSON.stringify({
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
    });

    const options = {
      hostname: 'api.paystack.co',
      port: 443,
      path: '/transaction/initialize',
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        'Content-Type': 'application/json',
      },
    };

    return new Promise((resolve, reject) => {
      const paystackReq = https.request(options, (paystackRes) => {
        let data = '';

        paystackRes.on('data', (chunk) => {
          data += chunk;
        });

        paystackRes.on('end', () => {
          try {
            const response = JSON.parse(data);
            resolve(new Response(JSON.stringify(response), { status: 200 }));
          } catch (error) {
            resolve(new Response(JSON.stringify({ error: 'Invalid response from Paystack' }), { status: 500 }));
          }
        });
      });

      paystackReq.on('error', (error) => {
        reject(new Response(JSON.stringify({ error: error.message }), { status: 500 }));
      });

      paystackReq.write(params);
      paystackReq.end();
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
