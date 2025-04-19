'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Toast from "./toast";
import { addInventoryItem, getInventoryItem, updateInventoryItem, } from "@/utils/inventory";

interface Item {
  name: string;
  description?: string;
  price: number;
  quantity: number;
  imageUrl?: string[];
  category?: string;
  unit: string;
}

interface Params {
  id?: string;
}

const CreateItem = ({ id }: Params) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [files, setFiles] = useState<FileList | null>(null);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(e.target.files);
      const urls = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
      setPreviewUrls(urls);
    }
  };

  const [data, setData] = useState<Item>({
    name: '',
    description: '',
    price: 0,
    quantity: 0,
    imageUrl: [''],
    category: '',
    unit: '',
  });

  // Fetch item if `id` exists (edit mode)
  useEffect(() => {
    if (id) {
      const fetchItem = async () => {
        setLoading(true);
        try {
          const item = await getInventoryItem(id); // Ensure this returns a full `Item` object
          if (item) {
            const { id, ...itemData } = item; // Remove id from the object
            setData(itemData as Item);
          }
        } catch (error) {
          console.error("Error fetching item:", error);
        }
        setLoading(false);
      };
      fetchItem();
    }
  }, [id]);

  const uploadImages = async (files: FileList) => {
    const urls: string[] = [];
  
    for (const file of Array.from(files)) {
      const formData = new FormData();
      formData.append('file', file);
  
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
  
      const data = await res.json();
      if (data.secure_url) {
        urls.push(data.secure_url);
      }
    }
  
    return urls;
  };
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);


    try {
      if (id) {
        const imageUrls = files ? await uploadImages(files) : [];

        await updateInventoryItem(id, {
          ...data,
          imageUrl: imageUrls.length > 0 ? imageUrls : data.imageUrl,
          category: data.category?.toString().split(',')?.map((item) => item.trim()),
        });
        setMessage("Item updated!");
        router.push('/dashboard/inventory');
      } else {
        const imageUrls = files ? await uploadImages(files) : [];

        await addInventoryItem({
          ...data,
          imageUrl: imageUrls.length > 0 ? imageUrls : data.imageUrl,
          category: data.category?.toString().split(',').map((item) => item.trim()),
        });
        setMessage("Item added!");
        setData({
          name: '',
          description: '',
          price: 0,
          quantity: 0,
          imageUrl: [''],
          category: '',
          unit: '',
        });
      }
      router.push('/dashboard/inventory');
    } catch (error) {
      console.error("Error adding/updating item:", error);
      setMessage("Couldn't complete the operation!");
    }

    setLoading(false);
  };

  return (
    <div className='w-screen h-full fixed top-0 left-0 grid items-center justify-center p-2 py-8 overflow-y-scroll'>
      <div className='w-screen max-w-xl flex flex-col gap-2 rounded-sm bg-white p-4'>
      {(previewUrls.length > 0 ? previewUrls : data.imageUrl)?.map((url, index) => (
        <div key={index} className="h-[80px] w-[80px] rounded-sm p-2 border border-gray-400">
          <Image
            src={url}
            alt="Item Image"
            width={80}
            height={80}
            className="w-[100%] h-[100%] object-cover rounded-sm shrink-0"
          />
        </div>
      ))}

      <input type="file" multiple onChange={handleFileChange} />


        <div className='flex flex-col'>
          <label htmlFor="name" className='text-[#2d2df1] text-sm'>Title</label>
          <input type="text" className="border-b-1 border-[#2d2df1] p-2" placeholder='title'
            value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
        </div>

        <div className='flex flex-col'>
          <label htmlFor="description" className='text-[#2d2df1] text-sm'>Description</label>
          <textarea id="description" className="border-b-1 border-[#2d2df1] p-2 h-[150px]" placeholder='description'
            value={data.description} onChange={(e) => setData({ ...data, description: e.target.value })}></textarea>
        </div>

        <div className='flex flex-col'>
          <label htmlFor="category" className='text-[#2d2df1] text-sm'>Category</label>
          <input type="text" className="border-b-1 border-[#2d2df1] p-2" placeholder='category'
            value={data.category} onChange={(e) => setData({ ...data, category: e.target.value })} />
        </div>

        <div className='flex flex-col'>
          <label htmlFor="unit" className='text-[#2d2df1] text-sm'>Unit</label>
          <input type="text" className="border-b-1 border-[#2d2df1] p-2" placeholder='unit (kg/bag/plate)'
            value={data.unit} onChange={(e) => setData({ ...data, unit: e.target.value })} />
        </div>

        <div className='flex flex-col'>
          <label htmlFor="quantity" className='text-[#2d2df1] text-sm'>Quantity</label>
          <input type="number" className="border-b-1 border-[#2d2df1] p-2" min={0} placeholder='quantity'
            value={data.quantity} onChange={(e) => setData({ ...data, quantity: Number(e.target.value) })} />
        </div>

        <div className='flex flex-col'>
          <label htmlFor="price" className='text-[#2d2df1] text-sm'>Price</label>
          <input type="number" className="border-b-1 border-[#2d2df1] p-2" placeholder='price'
            value={data.price} onChange={(e) => setData({ ...data, price: Number(e.target.value) })} />
        </div>

        <button className="px-4 py-2 border-1 bg-[#2d2df1] rounded-full text-[#ffffff]"
          onClick={handleSubmit} disabled={loading}>
          {loading ? "Processing..." : id ? "Update Item" : "Add Item"}
        </button>
        <button className="px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1]"
          onClick={() => router.back()}>
          Cancel
        </button>
      </div>

      {message && <Toast message={message} />}
    </div>
  );
};

export default CreateItem;
