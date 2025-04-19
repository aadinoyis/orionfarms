'use client'
import { useEffect, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { getAllBlogs, getBlog, addBlog, updateBlog } from "@/utils/blog";


// const item = {
//   id: "123",
//   title: "Sustainable Farming Excellence Award",
//   category: "Business",
//   date: "Thursday, 24 Jan, 2025",
//   imageUrl: ["/images/hens-1528984922.jpg"],
//   description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est at maxime soluta nulla molestias quisquam, nobis deserunt molestiae ab! Ducimus fugiat exercitationem ex illum labore quasi officia voluptate culpa nobis cum, velit, perspiciatis eum id neque, porro non deserunt molestias odit. Tempore, expedita ratione corporis recusandae eius aut. Doloremque magni quae, expedita praesentium suscipit voluptatem veniam modi excepturi nemo pariatur odit, nam consequatur optio repudiandae omnis repellat. Possimus rem qui facilis, fugit alias iusto adipisci voluptatem facere, minima magni! Minima sapiente accusamus nulla.",
// }
interface Blog {
  title: string;
  description: string;
  imageUrl: string[];
  category: string;
  reads: number;
}

interface Params {
  id?: string;
}

const CreateBlog = ({ id }:Params) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [files, setFiles] = useState<FileList | null>(null);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  const [data, setData] = useState<Blog>({
    title: "",
    description: "",
    imageUrl: [""],
    category: "",
    reads: 0,
  })
  


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(e.target.files);
      const urls = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
      setPreviewUrls(urls);
    }
  };

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

        await updateBlog(id, {
          ...data,
          imageUrl: imageUrls.length > 0 ? imageUrls : data.imageUrl,
        });
        setMessage("Blog updated!");
        router.push('/dashboard/blogs');
      } else {
        const imageUrls = files ? await uploadImages(files) : [];

        await addBlog({
          ...data,
          imageUrl: imageUrls.length > 0 ? imageUrls : data.imageUrl,
        });
        setMessage("Blog added!");
        setData({
          title: "",
          description: "",
          imageUrl: [""],
          category: "",
          reads: 0,
        });
      }
      router.push('/dashboard/blogs');
    } catch (error) {
      console.error("Error adding/updating blog:", error);
      setMessage("Couldn't complete the operation!");
    }

    setLoading(false);
  };

  // Fetch blog if `id` exists (edit mode)
  useEffect(() => {
    if (id) {
      const fetchBlog = async () => {
        setLoading(true);
        try {
          const blog = await getBlog(id); // Ensure this returns a full `Item` object
          if (blog) {
            const { id, ...blogData } = blog; // Remove id from the object
            setData(blogData as Blog);
          }
        } catch (error) {
          console.error("Error fetching blog:", error);
        }
        setLoading(false);
      };
      fetchBlog();
    }
  }, [id]);



  return (
    <div className='w-screen h-full fixed top-0 left-0 grid items-center justify-center p-2 py-8 overflow-y-scroll'>
      <div className='w-screen max-w-xl flex flex-col gap-2 rounded-sm bg-white p-4'>
      {(previewUrls.length > 0 ? previewUrls : data.imageUrl)?.map((url, index) => (
        <div key={index} className="h-[80px] w-[80px] rounded-sm p-2 border border-gray-400">
          <Image
            src={url}
            alt="Blog Image"
            width={80}
            height={80}
            className="w-[100%] h-[100%] object-cover rounded-sm shrink-0"
          />
        </div>
      ))}
       
        <input type="file" multiple onChange={handleFileChange} />

        <div className='flex flex-col'>
          <label htmlFor="name" className='text-[#2d2df1] text-sm'>Title</label>
          <input type="text" className="border-b-1 border-[#2d2df1] p-2" placeholder='title' value={data.title} onChange={(e)=>setData({...data, title: e.target.value})}/>
        </div>
        <div className='flex flex-col'>
          <label htmlFor="name" className='text-[#2d2df1] text-sm'>Description</label>
          <textarea name="description" id="description" className="border-b-1 border-[#2d2df1] p-2 h-[150px]" placeholder='description' value={data.description} onChange={(e)=>setData({...data, description: e.target.value})}></textarea>
        </div>
        <div className='flex flex-col'>
          <label htmlFor="name" className='text-[#2d2df1] text-sm'>Category</label>
          <input type="text" className="border-b-1 border-[#2d2df1] p-2" placeholder='category' value={data.category} onChange={(e)=>setData({...data, category: e.target.value})}/>
        </div>
        
        <button className="px-4 py-2 border-1 bg-[#2d2df1] rounded-full text-[#ffffff]"
          onClick={handleSubmit} disabled={loading}>
          {loading ? "Processing..." : id ? "Update Blog" : "Create Blog"}
        </button>
        <button className="px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1]" onClick={()=>router.back()}>Cancel</button>
      </div>
    </div>
  )
}

export default CreateBlog