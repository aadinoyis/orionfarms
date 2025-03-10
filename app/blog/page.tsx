import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Page = () => {
  return (
    <div className="w-full min-h-screen px-4 gap-16 sm:px-20 font-[family-name:var(--lexend)]">
      <main className="py-8 w-full flex flex-col gap-24">
        <section className="flex flex-col gap-8" id="blog">
          <div className="w-full">  
            <h1 className="sm:text-6xl text-4xl">
              <strong>Sustainable Farming Excellence Award</strong>
            </h1>
          </div>

          <div>
            <h2 className="text-xl">Sustainable Farming Excellence Award</h2>
            <span className="text-sm">Posted: <strong>Thursday, 24 Jan, 2025</strong></span>
          </div>

          <div className="flex flex-col gap-8 w-full max-w-[800px]">
            <div className="w-full h-[400px] shrink-0 bg-[#2d2df1] rounded-sm">
              <Image
                src={"/images/hens-1528984922.jpg"} 
                alt={"Orion Farms"}
                width={2750}
                height={1536}
                className="w-[100%] h-[100%] object-cover object-top rounded-sm shrink-0"
              />
            </div>

            <div className='text-xl'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est at maxime soluta nulla molestias quisquam, 
              nobis deserunt molestiae ab! Ducimus fugiat exercitationem ex illum labore quasi officia voluptate culpa 
              nobis cum, velit, perspiciatis eum id neque, porro non deserunt molestias odit. Tempore, expedita ratione corporis recusandae eius aut. 
              Doloremque magni quae, expedita praesentium suscipit voluptatem veniam modi excepturi 
              nemo pariatur odit, nam consequatur optio repudiandae omnis repellat. Possimus rem qui facilis, fugit alias iusto adipisci voluptatem 
              repudiandae tenetur natus optio dolor soluta labore ab obcaecati nesciunt quibusdam minus ipsa ipsum cupiditate blanditiis consequuntur 
              facere, minima magni! Minima sapiente accusamus nulla.

              <br /><br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est at maxime soluta nulla molestias quisquam, 
              nobis deserunt molestiae ab! Ducimus fugiat exercitationem ex illum labore quasi officia voluptate culpa 
              nobis cum, velit, perspiciatis eum id neque, porro non deserunt molestias odit. Tempore, expedita ratione corporis recusandae eius aut. 
              Doloremque magni quae, expedita praesentium suscipit voluptatem veniam modi excepturi 
              nemo pariatur odit, nam consequatur optio repudiandae omnis repellat. Possimus rem qui facilis, fugit alias iusto adipisci voluptatem 
              repudiandae tenetur natus optio dolor soluta labore ab obcaecati nesciunt quibusdam minus ipsa ipsum cupiditate blanditiis consequuntur 
              facere, minima magni! Minima sapiente accusamus nulla.

              <br />
            </div>
            
          </div>
        </section>

        <section className="flex flex-col gap-8" id="blog">
          <div className="w-full">  
            <h1 className="sm:text-6xl text-4xl">
              <strong>News & </strong>
              <em>Blog </em>
            </h1>
          </div>
          
          <div className="flex flex-col gap-8">
            <ul className="flex flex-col sm:flex-row gap-8">
              <li className="flex gap-2">
                <div>
                  <h2 className="text-xl">Sustainable Farming Excellence Award</h2>
                  <span className="text-sm">Posted: <strong>Thursday, 24 Jan, 2025</strong></span>
                </div>

                <div className="w-[100px] h-[100px] shrink-0 bg-[#2d2df1] rounded-sm p-2">
                  <Image
                    src={"/images/hens-1528984922.jpg"} 
                    alt={"Orion Farms"}
                    width={2750}
                    height={1536}
                    className="w-[100%] h-[100%] object-cover object-top rounded-sm shrink-0"
                  />
                </div>
              </li>
              <li className="flex gap-2">
                <div>
                  <h2 className="text-xl">Sustainable Farming Excellence Award</h2>
                  <span className="text-sm">Posted: <strong>Thursday, 24 Jan, 2025</strong></span>
                </div>

                <div className="w-[100px] h-[100px] shrink-0 bg-[#2d2df1] rounded-sm p-2">
                  <Image
                    src={"/images/hens-1528984922.jpg"} 
                    alt={"Orion Farms"}
                    width={2750}
                    height={1536}
                    className="w-[100%] h-[100%] object-cover object-top rounded-sm shrink-0"
                  />
                </div>
              </li>
              <li className="flex gap-2">
                <div>
                  <h2 className="text-xl">Sustainable Farming Excellence Award</h2>
                  <span className="text-sm">Posted: <strong>Thursday, 24 Jan, 2025</strong></span>
                </div>

                <div className="w-[100px] h-[100px] shrink-0 bg-[#2d2df1] rounded-sm p-2">
                  <Image
                    src={"/images/hens-1528984922.jpg"} 
                    alt={"Orion Farms"}
                    width={2750}
                    height={1536}
                    className="w-[100%] h-[100%] object-cover object-top rounded-sm shrink-0"
                  />
                </div>
              </li>
            </ul>
            
            <Link href="/blog"  className="max-w-[500px] px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1] text-center">Load More</Link>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Page