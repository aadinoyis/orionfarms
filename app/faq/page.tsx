import React from 'react'


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


const Page = () => {
  return (
    <div className="w-full min-h-screen px-4 gap-16 sm:px-20 font-[family-name:var(--lexend)]">
      <main className="py-8 w-full flex flex-col gap-24">
        <section className="flex flex-col gap-8" id="faq">
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
        </section>
      </main>
    </div>
  )
}

export default Page