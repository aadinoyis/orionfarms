'use client'
import React, { useEffect, useState } from 'react'
import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '@/utils/initFirebase'; // Import your initialized auth instance
import { useRouter } from 'next/navigation';
import Toast from '@/app/components/toast';
import { useAuth } from '@/context/authContext';

// Auth
// Dashboard
// Blog
// Product
// 

const Page = () => {
 const router = useRouter();
  const { user } = useAuth();

  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [data, setData] = useState({
    email: "",
    password: ""
  })

  const signIn = async () => {
    setError(null);
    setMessage(null);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
      const user = userCredential.user;
      setMessage(user?.email + ' signed in successfully!');
      router.push("/dashboard")
    } catch (error: any) {
      console.log(error)
      setError(error.message);
    }
  }

  const forgotPassword = async () => {
    setMessage(null);
    setError(null);

    try {
      await sendPasswordResetEmail(auth, data.email);
      setMessage('Password reset email sent! Check your inbox.');
    } catch (error: any) {
      setError(error.message);
    }
  };

  
  useEffect(() => {
    if (user) {
      router.push("/dashboard"); // Redirect if not logged in
    }
  }, [user, router]);


  return (
    <div className="w-full min-h-screen px-4 gap-16 sm:px-20 font-[family-name:var(--lexend)]">
      <main className="py-8 w-full flex flex-col gap-24">
        <section className="flex flex-col gap-8">
          <div className="w-full">  
            <h1 className="sm:text-6xl text-4xl">
              <strong>Welcome </strong><em>Admin </em>
            </h1>
            <h3>Please sign in to continue</h3>
          </div>

          <section>
            <div className='w-full max-w-md flex flex-col gap-2 rounded-sm'>
              <div className='flex flex-col'>
                <label htmlFor="name" className='text-[#2d2df1] text-sm'>Email</label>
                <input type="email" className="border-b-1 border-[#2d2df1] p-2 w-full" placeholder='Email Address' value={data.email} onChange={(e)=>setData({...data, email: e.target.value})}/>
              </div>
              <div className='flex flex-col'>
                <label htmlFor="name" className='text-[#2d2df1] text-sm'>Password</label>
                <input type="password" className="border-b-1 border-[#2d2df1] p-2" placeholder='Password' value={data.password} onChange={(e)=>setData({...data, password: e.target.value})}/>
              </div>
              
              <button className="px-4 py-2 border-1 bg-[#2d2df1] rounded-full text-[#ffffff]" onClick={signIn}>Sign In</button>
              <button className="px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1]" onClick={forgotPassword}>Forget Password?</button>
            </div>
          </section>
        </section>
      </main>

      {error && <Toast message={error}/>}
      {message && <Toast message={message}/>}
    </div>
  )
}

export default Page