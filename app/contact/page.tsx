import React from 'react'

const page = () => {
  return (
    <div className="w-full min-h-screen px-4 gap-16 sm:px-20 font-[family-name:var(--lexend)]">
      <main className="py-8 w-full flex flex-col sm:flex-row gap-24">
        <section className="w-full flex flex-col gap-8">
          <div className="w-full">  
              <h1 className="sm:text-6xl text-4xl">
              <strong>Want to </strong><br />
              <em>Reach us? </em>
            </h1>
          </div>
          <div className='flex flex-col gap-1'>
            <span className="text-2xl">Address</span>
            <span>Km 48 Ayewa Ogali Kabbah Expressway, Ijumu LGA, Kogi State.</span>
          </div>

          <div className='flex flex-col gap-1'>
            <span className="text-2xl">Email</span>
            <span>orion4sfarms@gmail.com</span>
          </div>

          <div className='flex flex-col gap-1'>
            <span className="text-2xl">Phone</span>
            <span>+234 912 847 0704</span>
            <span>+234 807 821 8187</span>
          </div>
        </section>

        <section className="flex flex-col gap-8 w-full">
          <div className="w-full">  
            <h1 className="sm:text-6xl text-4xl">
              <strong>Send us a </strong><br />
              <em>Message </em>
            </h1>
          </div>

          <div className="flex flex-col gap-8 max-w-[500px]">
            <p>You can send us a message by completing this contact form</p>

            <div className="flex flex-col gap-4">
              <div className='flex flex-col'>
                <label htmlFor="name" className='text-[#2d2df1] text-sm'>Full Name</label>
                <input type="text" name="name" id="name" className="border-b-1 border-[#2d2df1] p-2" placeholder="Firstname Lastname" />
              </div>
              <div className='flex flex-col'>
                <label htmlFor="name" className='text-[#2d2df1] text-sm'>Email Address</label>
                <input type="text" name="email" id="email" className="border-b-1 border-[#2d2df1] p-2" placeholder="User@mail.com" />
              </div>
              <div className='flex flex-col'>
                <label htmlFor="name" className='text-[#2d2df1] text-sm'>Message</label>
                <textarea name="message" id="message" className="border-b-1 border-[#2d2df1] p-2" placeholder="Message"></textarea>
              </div>
              <button className="px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1]">Message us</button>
            </div>
          </div>

          <div>
            We will make sure to get back to you for any request or issue.
          </div>
        </section>

        
      </main>
    </div>
  )
}

export default page