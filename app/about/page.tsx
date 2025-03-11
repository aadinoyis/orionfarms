import React from 'react'
import Image from 'next/image'

const Page = () => {
  return (
    <div className="w-full min-h-screen px-4 gap-16 sm:px-20 font-[family-name:var(--lexend)]">
      <main className="py-8 w-full flex flex-col gap-24">
        <section className="flex flex-col gap-8" id="blog">
          <div className="w-full">  
            <h1 className="sm:text-6xl text-4xl">
              <strong>About </strong>
              <em>Us </em>
            </h1>
          </div>
        </section>
        <section className="flex flex-col gap-8 bg-[#2d2df1] text-[#f0f0ff] p-8 rounded-sm" id="about">
          <div className="w-[100%]">  
            <h1 className="sm:text-6xl text-4xl">
              <strong>Who Are </strong>
              <em>We</em>
            </h1>
          </div>

          <div className="pl-8">
            <p>
              The idea for Orion 4s Farms was born in 2020 at the early stages of the COVID 19 pandemic. Our Co-founder Olusoga Orion & Olusoga Aina, who after graduation from the university was unable to secure appropriate employment, became inspired  after visiting his friend who was working at an egg depot. That simple interaction at an egg depot with deep introspection that followed thereafter became the genesis of Orion 4s Farms.

              The current focus on commercial table egg layer operations is due to the unmet demand in Nigeria. The vision is to systematically establish major poultry production facilities in different local communities, such that these networks of communities will become meaningful stakeholders and contributors to the Nigerian global food system.

              Due to the high unemployment rate and minimal to zero opportunities for employment in our local communities, the Co-founders of Orion 4s Farms believe that a sustained commercial agricultural investment in these communities will gradually accelerate the improvement of their respective local economies; reduce unemployment rate and elevate the standard of living. That is the future we aspire.
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-8 bg-[#2d2df1] text-[#f0f0ff] p-8 rounded-sm">
          <div className="w-[100%]">  
            <h1 className="sm:text-6xl text-4xl">
              <strong>Our </strong>
              <em>Vision</em>
            </h1>
          </div>

          <div className="pl-8">
            <p>
              Our vision is to stand as the foremost provider of strategic solutions, consistently delivering exceptional and personalized services. We believe that success lies not only in providing top-notch services, but also in building long-lasting relationships with our clients. With a solid track record of helping businesses achieve their goals, we are confident in our ability to support you in every step of your journey.

              Whether you&apos;re starting a new venture or poised for expansion, our commitment is to collaborate and propel you towards your goals. We understand that every business is unique, with its own set of challenges and aspirations. That&apos;s why we take the time to truly understand your needs and tailor our solutions to meet them effectively.

              Our team of experts is dedicated to staying ahead of the curve and constantly exploring innovative strategies to keep your business ahead of the competition. By leveraging our industry knowledge and expertise, we are able to offer insights and guidance that will help you make informed decisions and maximize your growth potential.

              At Orion 4s Farms, we believe in going the extra mile for our clients. We strive to exceed your expectations by not only providing exceptional services but by also building strong partnerships based on trust and mutual success. Our client-focused approach ensures that your unique goals and objectives are at the forefront of everything we do.

              No matter the size or complexity of your project, we have the resources and expertise to deliver results. From comprehensive market research to strategic planning and implementation, our team is equipped with the skills necessary to take your business to the next level.

              Choose Orion 4s Farms as your strategic solutions provider and experience the difference of working with a dedicated and passionate team who genuinely cares about your success. With us by your side, you can rest assured that your vision will be turned into reality, driving your business towards unprecedented growth and achievements.
            </p>
          </div>
        </section>
        <section className="flex flex-col gap-8 bg-[#2d2df1] text-[#f0f0ff] p-8 rounded-sm" id="about">
          <div className="w-[100%]">  
            <h1 className="sm:text-6xl text-4xl">
              <strong>Initiatives and Support</strong>
              <em>For Children</em>
            </h1>
          </div>

          <div className="pl-8">
            <p>
              At Orion Farms, we believe that every child deserves access to quality education and resources that foster their growth and development. As a responsible and caring member of our community, we are committed to supporting the educational journey of our children in need.

              Our mission is to provide essential educational materials and resources to children, empowering them to reach their full potential. We believe that education is the key to unlocking a brighter future, and we are dedicted to making a positive impact in the lives of young people.

              Our farm suppot and initiative for children focuses on providing essential educational materials, such as Books, Writing materials and other Education resources.
            </p>
          </div>

          <div className="w-full flex flex-col sm:flex-row h-[auto] rounded-sm bg-[#2d2df1] gap-2 overflow-hidden">
            <Image
              src={"/images/student-service-1.png"} 
              alt={"Orion Farms"}
              width={2750}
              height={1536}
              className="grow w-full sm:w-[50%] h-[500px] object-cover shrink-0 rounded-sm"
            />
            <Image
              src={"/images/student-service-2.png"} 
              alt={"Orion Farms"}
              width={2750}
              height={1536}
              className="grow w-full sm:w-[50%] h-[500px] object-cover shrink-0 rounded-sm"
            />
          </div>
        </section>

        <section className='flex flex-col gap-8'>
          <div className="w-[100%]">  
            <h1 className="sm:text-6xl text-4xl">
              <strong>Meet our </strong>
              <em>Founder</em>
            </h1>
          </div>

          <div className='flex gap-4'>
            <div className="shrink-0 w-[125px] h-[125px] sm:w-[200px] sm:h-[200px] min-w-[125px] min-h-[125px] rounded-full bg-[#2d2df1]">
              <Image
                src={"/images/hero-image.jpg"} 
                alt={"Orion Farms"}
                width={2750}
                height={1536}
                className="w-[100%] h-[100%] object-cover shrink-0 rounded-sm"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-3xl text-bold">Olusoga Orion</h3>
              <div className="text-sm">Founder &amp; CEO</div>
              {/* <p className='text-2xl text-[#2d2df1]'>
                Our collected eggs from our healthy birds are always within your reach.
                We make sure to give our birds the best treatment so that they can produce
                a good, healthy and big eggs for consumption.
              </p> */}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Page