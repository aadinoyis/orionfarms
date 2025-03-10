'use client'
import Image from 'next/image'
// import { CartDocker } from '../components/cart'
// import { useSearchParams } from 'next/navigation'

const Page = () => {
  // const router = useRouter()

  // const searchParams = useSearchParams()
  // const qty = searchParams.get('qty')
  // const item = searchParams.get('item')
  // const price = searchParams.get('price')

  // const addToCart = router.push('/?')
  // const [isCart, setIsCart] = useState(true)

  return (
    <div className="w-full min-h-screen px-4 gap-16 sm:px-20 font-[family-name:var(--lexend)]">
      <main className="py-8 w-full flex flex-col gap-24">
        <section className="flex flex-col gap-8">
          <div className="w-full">  
            <h1 className="sm:text-6xl text-4xl">
              <strong>Shop from our </strong><em>Farm </em>
            </h1>
          </div>
          <div className="flex gap-4 py-8 overflow-x-scroll">
            <button className="px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1] whitespace-nowrap">Explore all</button>
            <button className="px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1] whitespace-nowrap">Birds</button>
            <button className="px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1] whitespace-nowrap">Eggs</button>
            <button className="px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1] whitespace-nowrap">Goat</button>
            <button className="px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1] whitespace-nowrap">Ram</button>
            <button className="px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1] whitespace-nowrap">Snail</button>
            <button className="px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1] whitespace-nowrap">Leather</button>
          </div>
        </section>

        <section>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <li className="w-full flex flex-col gap-8 py-4">
              <div className="max-w-[300px] flex gap-4">
                <div className="text-sm">NGN 24,000</div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-3xl text-bolder text-[#2d2df1]">Meat</h3>
              
                  <p className="h-[200px] max-h-[200px] overflow-y-scroll">
                    Please join us for breakfast or lunch in our farm style restaurant.
                    The Hatchery offers fresh food and beautiful settings. Enjoy your lunch overlooking the ostriches.
                  </p>

                  <div>
                    <button className="px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1]">Add to cart</button>
                  </div>
                </div>
              </div>

              <div className="w-full flex gap-8">
                <div className="w-full flex items-end justify-end h-[400px] overflow-hidden rounded-sm bg-[#2d2df1]">
                  <Image
                    src={"/images/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table.jpg"} 
                    alt={"Orion Farms"}
                    width={2750}
                    height={1536}
                    className="w-[70%] h-[70%] object-cover rounded-sm shrink-0"
                  />
                </div>  
              </div>
            </li>
            <li className="w-full flex flex-col gap-8 py-4">
              <div className="max-w-[300px] flex gap-4">
                <div className="text-sm">NGN 200,000</div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-3xl text-bolder text-[#2d2df1]">Egg</h3>
              
                  <p className="h-[200px] max-h-[200px] overflow-y-scroll">
                    Our collected eggs from our healthy birds are always within your reach.
                    We make sure to give our birds the best treatment so that they can produce
                    a good, healthy and big eggs for consumption.
                  </p>

                  <div>
                    <button className="px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1]">Add to cart</button>
                    {/* <a target="_blank" href="https://wa.me/2348078218187?text=I%20want%20to%20request%20for%20eggs" className="px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1]">Add to cart</a> */}
                  </div>
                </div>
              </div>

              <div className="w-full flex gap-8">
                <div className="w-full flex items-end justify-end h-[400px] overflow-hidden rounded-sm bg-[#2d2df1]">
                  <Image
                    src={"/images/eggs.jpg"} 
                    alt={"Orion Farms"}
                    width={2750}
                    height={1536}
                    className="w-[70%] h-[70%] object-cover rounded-sm shrink-0"
                  />
                </div>  
              </div>
            </li>
            <li className="w-full flex flex-col gap-8 py-4">
              <div className="max-w-[300px] flex gap-4">
                <div className="text-sm">NGN 10,000</div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-3xl text-bolder text-[#2d2df1]">Leather</h3>
              
                  <p className="h-[200px] max-h-[200px] overflow-y-scroll">
                    Explore our great selection of fine leather goods. 
                    People who love quality leather will appreciate our wide selection of exquisite ostrich leather products. 
                    Handbags, belts, wallets and shoes are just some of what we have to offer. 
                    From skins to the most exclusive handbag. You will find a wide range of classical and fashionable styles in various colors.
                  </p>

                  
                  <div>
                    <button className="px-4 py-2 border-1 border-[#2d2df1] rounded-full text-[#2d2df1]">Add to cart</button>
                  </div>
                </div>
              </div>

              <div className="w-full flex gap-8">
                <div className="w-full flex items-end justify-end h-[400px] overflow-hidden rounded-sm bg-[#2d2df1]">
                  <Image
                    src={"/images/leather-texture-background.jpg"} 
                    alt={"Orion Farms"}
                    width={2750}
                    height={1536}
                    className="w-[70%] h-[70%] object-cover rounded-sm shrink-0"
                  />
                </div>  
              </div>
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
}

export default Page