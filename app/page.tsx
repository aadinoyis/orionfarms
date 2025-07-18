"use client"
import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client"
import { useItemsContext } from '@/context/itemsContext'
import { useEffect, useState } from "react";
import { CartDocker } from "./components/cart";


interface Item {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  imageUrl: string[];
  category: string[];
  unit: string;
}


const faq = [
  {
    question: "Do you ship internationally?",
    answer: "Yes, we are pleased to confirm that we offer worldwide shipping! Please note that we are unable to deliver to some countries and we apologize for any inconvenience caused."
  },
  {
    question: "Where do you ship from?",
    answer: "We ship all of our orders from the Abuja, Lagos, Kogi where our warehouse is based."
  },
  {
    question: "Can I return an item free of charge?",
    answer: "We offer a refund on any items returned to us within 14 days of the delivery date, excluding any delivery costs. To request a return, go to Order Management."
  }
]

export default function Home() {
  const {items, addItem, categories} = useItemsContext()
  const [isCart, setIsCart] = useState(false)  
  const updateItem = (id:string) => {
    addItem(id)
    setIsCart(true)
  }

  const images = [
    '/images/student-service-1.png',
    '/images/student-service-2.png',
    '/images/hero-image.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change the slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <div className="w-full min-h-screen px-4 gap-16 sm:px-20 font-[family-name:var(--lexend)]">
      <main className="py-8 w-full flex flex-col gap-24">
        <section className="flex flex-col gap-8 w-full">
          <div className="w-full flex flex-col gap-8">
            
           
            {/* <div>
              <h3 className="text-4xl text-[#2d2df1]">
                Orion farms is your strategic partner in farming and agro-allied business, Experience The Future of Agriculture Through Our Farm.
              </h3>
              </div> */}
            {/* <h1 className="text-6xl">
              Farm Experience Like no <span className="bg-[#2d2df1] text-[#ddddf2]">other</span>
            </h1> */}
            <motion.div initial={{width: 0}} animate={{width: "100%"}} transition={{duration: 2}} className="text-6xl overflow-hidden">
            <h1 className="text-6xl overflow-hidden">
              Shaping the future of <span className="bg-[#2d2df1] text-[#ddddf2]">Agriculture</span>
            </h1>
            </motion.div>
            <p>
              Orion farms is your strategic partner in farming and agro-allied business, Experience The Future of Agriculture Through Our Farm.
            </p>

            <div className="flex gap-4">
              <Link href="/about" className="px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1]">Learn More</Link>
              <Link href="/shop" className="px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1]">Shop Now</Link>
            </div>

          </div>
          <div className="banner_img">
            <div className="slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {images.map((src, index) => (
                <div key={index} className="slide">
                  <Image alt={`Slide ${index + 1}`} src={src} width={2000} height={1000} />
                </div>
              ))}
            </div>
          </div>
          {/* <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2.5 }} className="relative w-full h-[500px] rounded-xl bg-[#2d2df1]">
            <Image
              src={"/images/logo-transparent.png"} 
              alt={"Orion Farms"}
              width={2750}
              height={1536}
              className="w-[150px] h-auto shrink-0 absolute top-0 left-0"
            />
            <Image
              src={"/images/hero-image.jpg"} 
              alt={"Orion Farms"}
              width={2750}
              height={1536}
              className="w-[100%] h-[100%] object-cover shrink-0 rounded-xl border-1 border-[#2d2df1]"
            />
          </motion.div> */}
        </section>

        <section className="flex flex-col gap-4">
          <div>
            <span className="px-2 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1] text-sm">Did you know?</span>
          </div>

          <div>
            <h3 className="text-2xl text-[#2d2df1]">
              Goat meat contains CLA, a fatty acid that is known to prevent cancer and helps avoid inflammation. Eating Goat meat may also stabilize the heartbeat and lower the risk of inflammation in the blood vessels.
            </h3>
          </div>
        </section>

        <section className="w-full" id="services">
          <div className="w-full">  
            <h1 className="text-6xl">
              Shop from us.
            </h1>
            <br />
            <p>At Orions Farms, it is&apos;t just about production of farm produce, it is making sure you get the best experience.</p>
            <br />
          </div>

          <div className="grid-view">
            {
              items?.map(item => (
                <div key={item.id} className="flex flex-col gap-2 shrink-0 p-2 rounded-xl border-1 border-[#2d2df1] border-dashed">
                    <Link href={`/shop/${item.id}`}  className="w-full max-w-full flex gap-8">
                      <div className="w-full flex items-end justify-end h-[150px] sm:h-[200px] overflow-hidden rounded-xl bg-[#2d2df1]">
                        <Image
                          src={item.imageUrl[0]} 
                          alt={"Orion Farms"}
                          width={2750}
                          height={1536}
                          className="w-[100%] max-w-full h-[100%] object-cover rounded-xl shrink-0"
                        />
                      </div>  
                    </Link>
                    <div className="flex flex-col gap-2">
                      <div className="text-sm text-bold text-[#2d2df1] capitalize">
                        {
                          item.category
                          // item.category.join(', ')
                        }
                      </div>
                      <p className="max-h-[30px] text-xs overflow-hidden">
                        {item.description}
                      </p>
  
                      <div className='flex items-center justify-between'>
                        <div className="text-bold text-sm text-[#2d2df1]">NGN {item.price}</div>
                        <div>
                          <button className="px-2 py-1 border-1 border-[#2d2df1] rounded-full text-[#2d2df1] text-sm" onClick={() => updateItem(item.id)}>Add +</button>
                        </div>
                      </div>
                    </div>
                </div>
              ))
            }
          </div>

          {
            isCart &&
            <CartDocker/>
          }
        </section>
        

        {/* <section className="w-full flex flex-col gap-8">
          <div className="w-full">  
            <h1 className="sm:text-6xl text-4xl">
              <strong>What We Create <br /> Through </strong> <em>Our Impact </em>
            </h1>
          </div>

          <div className="w-full flex gap-8 overflow-x-scroll">
              <div className="min-w-[240px] h-[320px] rounded-xl bg-[#2d2df1]">
                <Image
                  src={"/images/snail-gal.jpg"} 
                  alt={"Orion Farms"}
                  width={2750}
                  height={1536}
                  className="w-[100%] h-[100%] object-cover rounded-xl shrink-0"
                />
              </div>
              <div className="min-w-[240px] h-[320px] rounded-xl bg-[#2d2df1]">
                <Image
                  src={"/images/difference-between-a-goat-and-a-ram.jpg"} 
                  alt={"Orion Farms"}
                  width={2750}
                  height={1536}
                  className="w-[100%] h-[100%] object-cover rounded-xl shrink-0"
                />
              </div>
              <div className="min-w-[240px] h-[320px] rounded-xl bg-[#2d2df1]">
                <Image
                  src={"/images/hens-1528984922.jpg"} 
                  alt={"Orion Farms"}
                  width={2750}
                  height={1536}
                  className="w-[100%] h-[100%] object-cover rounded-xl shrink-0"
                />
              </div>
              <div className="min-w-[240px] h-[320px] rounded-xl bg-[#2d2df1]">
                <Image
                  src={"/images/ram.jpg"} 
                  alt={"Orion Farms"}
                  width={2750}
                  height={1536}
                  className="w-[100%] h-[100%] object-cover rounded-xl shrink-0"
                />
              </div>
          </div>
        </section> */}

        <section className="flex flex-col gap-4">
          <div>
            <span className="px-2 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1] text-sm">Did you know?</span>
          </div>

          <div>
            <h3 className="text-2xl text-[#2d2df1]">
              Our livestock is fed with grass and sustainable spent grain - never compromising our gold standard as the custodians of livestock.
            </h3>
          </div>
        </section>

        <section className="w-full p-8 border-1 border-[#2d2df1] rounded-xl border-dashed" id="services">
        
          <div className="w-full flex flex-col sm:items-center sm:flex-row gap-4">
            <div className="w-full ">  
              <h1 className="text-6xl">
                Our restaurant.
              </h1>
              <br />
              <p>
                Join us for breakfast or lunch in our farm style restaurant.
                The Hatchery offers fresh food and beautiful settings. Enjoy your lunch overlooking the ostriches.
              </p>
              <br />
              <div>
                <Link href="/shop" className="px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1]">Book Now</Link>
              </div>
            </div>

        
            <div className="w-full flex items-center justify-center overflow-hidden rounded-xl bg-[#2d2df1]">
              <Image
                src={"/images/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table.jpg"} 
                alt={"Orion Farms"}
                width={2750}
                height={1536}
                className=" w-full h-[400px] object-cover shrink-0 border-[1px] border-[#ddddf2]"
              />
            </div>  
          </div>
        </section>

        {/* <aside className="flex flex-col gap-4 rounded-xl p-8 bg-black text-[#2d2df1] sm:text-6xl text-4xl text-center">
          <div>
            Enjoy 10% Discount When You Shop From Our Website
          </div>
          <div>
            <Link href="/shop" className="px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1]">Shop Now</Link>
          </div>
        </aside> */}

        {/* <section className="w-full flex flex-col gap-8">
          <div className="w-full">  
            <h1 className="sm:text-6xl text-4xl">
              <strong>Explore our <br />Farm In </strong> <em>Details</em>
            </h1>
          </div>

          <div className="w-full flex flex-col gap-4">
            <h3 className="text-4xl text-[#2d2df1]">Cows</h3>
            <div className="w-full sm:h-[600px] h-[400px] rounded-xl bg-[#2d2df1] flex justify-center items-end">
              <Image
                src={"/images/cowww.jpg"} 
                alt={"Orion Farms"}
                width={2750}
                height={1536}
                className="w-[80%] h-[80%] object-cover object-top rounded-xl shrink-0"
              />
            </div>
            
            <div className="w-full flex flex-col gap-2">
              <p>
                We offer a premium selection of grass-fed steaks, beef tenderloins, roasts and ground meat for hamburger patties. Our beef is delicious because we consistently make sure it meets the farming specifications of consumers who know premium quality meats.
              </p>

              <p>
                <strong>Sokoto Gudali</strong><br />
                Sokoto Gudali cattle also known as Bokolo are one of the most popular native breeds in Nigeria. Gudali is a Hausa word for “short-horned and short-legged animals”. In West and Central African, Gudali is otherwise referred to as Fulbe or Peuhl zebu. The Sokoto Gudali cattle are known for their quality beef.
              </p>
              <p>
                <strong>Bunaji</strong><br />
                Also referred to as White Fulani cattle, Bunaji are characterized by their well-developed dewlaps and humps with a white coat, black eyes, a long tail and hooves. The adult Bunaji cattle has an average height of 130cm.
              </p>
            </div>
            <div>
              <Link href="/shop" className="px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1]">Explore</Link>
            </div>
          </div>

          <div className="w-full flex flex-col gap-4">
            <h3 className="text-4xl text-[#2d2df1]">Goats & Rams</h3>
            <div className="w-full sm:h-[600px] h-[400px] rounded-xl bg-[#2d2df1] flex justify-center items-end">
              <Image
                src={"/images/difference-between-a-goat-and-a-ram.jpg"} 
                alt={"Orion Farms"}
                width={2750}
                height={1536}
                className="w-[80%] h-[80%] object-cover object-top rounded-xl shrink-0"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <p>
                Orion 4s Farms sells 100% grass fed beef that is high in healthy Omega 3 fatty acids, Vitamin A and nutrient-rich. Our livestock farmers increase the production scale for goats and rams during festive holidays. We consistently meet the farming specifications of our consumers who want premium quality meats.
              </p>

              <p>
                <strong>Goats</strong><br />
                Hausa Goats, Local Native Goats (Obuko- Yoruba; Mkpi- Igbo). 
              </p>
              <p>
                <strong>Rams</strong><br />
                Balami Local Rams, Alake
              </p>

              <p>
                We chop our ram into different portion sizes. Place your order at Orion 4s Farms Kogi. Our customers are guaranteed secure online shopping. You also have the option for pick up or delivery.
              </p>
            </div>
            <div>
              <Link href="/shop" className="px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1]">Explore</Link>
            </div>
          </div>

          <div className="w-full flex flex-col gap-4">
            <h3 className="text-4xl text-[#2d2df1]">Chicken, Turkey & Guinea Fowl</h3>
            <div className="w-full sm:h-[600px] h-[400px] rounded-xl bg-[#2d2df1] flex justify-center items-end">
              <Image
                src={"/images/hens-1528984922.jpg"} 
                alt={"Orion Farms"}
                width={2750}
                height={1536}
                className="w-[80%] h-[80%] object-cover object-top rounded-xl shrink-0"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <p>
                We operate a wholesale poultry farm, 
                offering live birds and chicken produce for high-value supply chains and the end-consumer. 
                Our product range includes chicken, turkey and guinea fowl.
              </p>

              <p>
                These birds are sourced from larger farms in Nigeria that impose strict hygiene 
                practices to ensure the health and safety of the animals.
              </p>
            </div>
            <div>
              <Link href="/shop" className="px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1]">Explore</Link>
            </div>
          </div>

          <div className="w-full flex flex-col gap-4">
            <h3 className="text-4xl text-[#2d2df1]">Fresh Bush Jumbo Snails</h3>
            <div className="w-full sm:h-[600px] h-[400px] rounded-xl bg-[#2d2df1] flex justify-center items-end">
              <Image
                src={"/images/giant-african-land-snail-achatina-fulica-1372538221-7df6f8096ced45079873fa51f98c1c16.jpg"} 
                alt={"Orion Farms"}
                width={2750}
                height={1536}
                className="w-[80%] h-[80%] object-cover object-top rounded-xl shrink-0"
              />
            </div>

            <div className="w-full flex flex-col gap-2">
              <p>
                We source our snails from the snail farmers across Nigeria. 
                Our farm offers the Bush Jumbo Snails for customers and meal service vendors. 
                We wash and clean for free and for easier consumption.
              </p>
            </div>
            <div>
              <Link href="/shop" className="px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1]">Explore</Link>
            </div>
          </div>
        </section> */}

        {/* <aside className="flex flex-col gap-4 rounded-xl p-8 bg-black text-[#2d2df1] sm:text-6xl text-4xl text-center">
          <div>
            Enjoy 10% Discount When You Shop From Our Website
          </div>
          <div>
            <Link href="/shop" className="px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1]">Shop Now</Link>
          </div>
        </aside> */}

        <section className="flex flex-col gap-4">
          <div>
            <span className="px-2 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1] text-sm">Did you know?</span>
          </div>

          <div>
            <h3 className="text-2xl text-[#2d2df1]">
              Snails multiply during the rainy season and thrive in cooler temperatures and on wet surfaces.
            </h3>
          </div>
        </section>

        {/* <section className="flex flex-col gap-8 bg-[#2d2df1] text-[#f0f0ff] p-8 rounded-xl" id="about">
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
            <br /><br />
            <Link href="/about"  className="max-w-[500px] px-4 py-2 border-1 border-[#f0f0ff] rounded-full text-[#f0f0ff] text-center">Learn More</Link>
          </div>
        </section> */}

        
        <section className="flex flex-col gap-8 bg-[#2d2df1] text-[#f0f0ff] p-8 rounded-xl" id="about">
          <div className="w-[100%]">  
            <h1 className="text-6xl">
              Initiatives and Support
            </h1>
          </div>

          <div>
            <p>
              At Orion Farms, we believe that every child deserves access to quality education and resources that foster their growth and development. As a responsible and caring member of our community, we are committed to supporting the educational journey of our children in need.

              Our mission is to provide essential educational materials and resources to children, empowering them to reach their full potential. We believe that education is the key to unlocking a brighter future, and we are dedicted to making a positive impact in the lives of young people.

              Our farm suppot and initiative for children focuses on providing essential educational materials, such as Books, Writing materials and other Education resources.
            </p>
          </div>

          <div className="w-full flex flex-col sm:flex-row h-[auto] rounded-xl bg-[#2d2df1] gap-2 overflow-hidden">
            {/* <Image
              src={"/images/student-service-1.png"} 
              alt={"Orion Farms"}
              width={2750}
              height={1536}
              className="grow w-full sm:w-[50%] h-[500px] object-cover shrink-0 rounded-xl"
            /> */}
            <Image
              src={"/images/student-service-2.png"} 
              alt={"Orion Farms"}
              width={2750}
              height={1536}
              className="grow w-full sm:w-[50%] h-[500px] object-cover shrink-0 rounded-xl"
            />
          </div>
        </section>
        <section className="flex flex-col gap-4">
          <div>
            <span className="px-2 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1] text-sm">About Us</span>
          </div>

          <div>
            <h3 className="text-2xl text-[#2d2df1]">
             Our vision is to systematically establish major poultry production facilities in different local communities, such that these networks of communities will become meaningful stakeholders and contributors to the Nigerian global food system.
            </h3>
          </div>
        </section>
        <section className="w-full flex flex-col gap-8 rounded-xl p-8 bg-black text-[#ddddf2]">
          <div className="w-full">  
            <h1 className="sm:text-6xl text-4xl">
              <strong>We Create Farms </strong><br />
              <em>that works </em>
            </h1>

            
          </div>

          <div className="w-full">
            <ul className="w-full flex flex-col sm:flex-row justify-between gap-8">
              <li>
                <h3 className="text-8xl text-[#2d2df1]">100+</h3>
                <p>Served consumer</p>
              </li>
              <li>
                <h3 className="text-8xl text-[#2d2df1]">95%</h3>
                <p>Nationwide delivery</p>
              </li>
              <li>
                <h3 className="text-8xl text-[#2d2df1]">2.2 M+</h3>
                <p>Yearly produce</p>
              </li>
            </ul>
          </div>
        </section>

        {/* <aside className="flex flex-col gap-4 rounded-xl p-8 bg-black text-[#2d2df1] sm:text-6xl text-4xl text-center">
          <div>
            Enjoy 10% Discount When You Shop From Our Website
          </div>
          <div>
            <Link href="/shop" className="px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1]">Shop Now</Link>
          </div>
        </aside> */}

        {/* <section className="flex flex-col gap-8" id="faq">
          <div className="w-full">  
            <h1 className="sm:text-6xl text-4xl">
              <strong>Frequently Asked </strong><br />
              <em>Questions </em>
            </h1>
          </div>

          <div>
            <ul>
              {
                faq.map(single  => (
                  <li key={single.question}>
                    <div className="text-2xl p-4 border-b border-[#2d2df1]">{single.question}</div>
                    <div className="p-4">{single.answer}</div>
                  </li>
                ))
              }
            </ul>
          </div>
        </section> */}

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

                <div className="w-[100px] h-[100px] shrink-0 bg-[#2d2df1] rounded-xl p-2">
                  <Image
                    src={"/images/hens-1528984922.jpg"} 
                    alt={"Orion Farms"}
                    width={2750}
                    height={1536}
                    className="w-[100%] h-[100%] object-cover object-top rounded-xl shrink-0"
                  />
                </div>
              </li>
              <li className="flex gap-2">
                <div>
                  <h2 className="text-xl">Sustainable Farming Excellence Award</h2>
                  <span className="text-sm">Posted: <strong>Thursday, 24 Jan, 2025</strong></span>
                </div>

                <div className="w-[100px] h-[100px] shrink-0 bg-[#2d2df1] rounded-xl p-2">
                  <Image
                    src={"/images/hens-1528984922.jpg"} 
                    alt={"Orion Farms"}
                    width={2750}
                    height={1536}
                    className="w-[100%] h-[100%] object-cover object-top rounded-xl shrink-0"
                  />
                </div>
              </li>
              <li className="flex gap-2">
                <div>
                  <h2 className="text-xl">Sustainable Farming Excellence Award</h2>
                  <span className="text-sm">Posted: <strong>Thursday, 24 Jan, 2025</strong></span>
                </div>

                <div className="w-[100px] h-[100px] shrink-0 bg-[#2d2df1] rounded-xl p-2">
                  <Image
                    src={"/images/hens-1528984922.jpg"} 
                    alt={"Orion Farms"}
                    width={2750}
                    height={1536}
                    className="w-[100%] h-[100%] object-cover object-top rounded-xl shrink-0"
                  />
                </div>
              </li>
            </ul>
            
            <Link href="/blog"  className="max-w-[500px] px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1] text-center">Read More</Link>
          </div>
        </section>
      </main>
    </div>
  );
}
