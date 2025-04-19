import { v2 as cloudinary } from 'cloudinary';
import { NextResponse } from 'next/server';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export async function POST(req: Request) {
  const data = await req.formData();
  const file = data.get('file') as File;

  if (!file) {
    return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());

  const res = await new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream({ folder: 'ecommerce' }, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    }).end(buffer);
  });

  return NextResponse.json(res);
}
