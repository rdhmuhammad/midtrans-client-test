import Head from "next/head"
import Script from "next/script"
import { useState } from "react";



export default function Home() {
  const [order, setOrder] = useState({
    name : "",
    email : "",
    address : "",
    city : "",
    country : "",
    zip : "",
    cardNum : ""
  });
  const [orderToken, setOrderToken] = useState("")

  async function Submit(e){
    e.preventDefault();
    console.log(order);
    const API = 'http://localhost:3001/snap/simple_checkout'
    const res = await fetch(API,{
      method: 'POST',
      headers: {
       'Content-Type': 'application/json'
      },
      body: JSON.stringify(order)
    });

    const data = await res.json();
    // setOrderToken(data.message);
    // console.log(data.message)
    window.snap.pay(data.message);
  }

  return (
    <>
        <body>
          <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <div class="leading-loose">
              <form class="max-w-xl m-4 p-10 bg-white rounded shadow-xl" 
                onSubmit={(e)=>{
                  Submit(e);
                }}>
                <p class="text-gray-800 font-medium">Customer information</p>
                <div class="">
                  <label class="block text-sm text-gray-00" for="cus_name">Name</label>
                  <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required="" placeholder="Your Name" aria-label="Name"
                      onChange={(e)=>{
                        setOrder({
                          ...order,
                          name: e.target.value
                        })
                      }}
                  ></input>
                </div>
                <div class="mt-2">
                  <label class="block text-sm text-gray-600" for="cus_email">Email</label>
                  <input class="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Your Email" aria-label="Email"
                      onChange={(e)=>{
                        setOrder({
                          ...order,
                          email: e.target.value
                        })
                      }}
                  ></input>
                </div>
                <div class="mt-2">
                  <label class=" block text-sm text-gray-600" for="cus_email">Address</label>
                  <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Street" aria-label="Street address"
                      onChange={(e)=>{
                        setOrder({
                          ...order,
                          address: e.target.value
                        })
                      }}
                  ></input>
                </div>
                <div class="mt-2">
                  <label class="hidden text-sm block text-gray-600" for="cus_email">City</label>
                  <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="City" aria-label="City"
                      onChange={(e)=>{
                        setOrder({
                          ...order,
                          city: e.target.value
                        })
                      }}
                  ></input>
                </div>
                <div class="inline-block mt-2 w-1/2 pr-1">
                  <label class="hidden block text-sm text-gray-600" for="cus_email">Country</label>
                  <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Country" aria-label="State"
                      onChange={(e)=>{
                        setOrder({
                          ...order,
                          country: e.target.value
                        })
                      }}
                  ></input>
                </div>
                <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
                  <label class="hidden block text-sm text-gray-600" for="cus_email">Zip</label>
                  <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email"  name="cus_email" type="text" required="" placeholder="Zip" aria-label="ZIP code"
                      onChange={(e)=>{
                        setOrder({
                          ...order,
                          zip: e.target.value
                        })
                      }}
                  ></input>
                </div>
                <p class="mt-4 text-gray-800 font-medium">Payment information</p>
                <div class="">
                  <label class="block text-sm text-gray-600" for="cus_name">Card</label>
                  <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required="" placeholder="Card Number MM/YY CVC" aria-label="Card Number"
                      onChange={(e)=>{
                        setOrder({
                          ...order,
                          cardNum: e.target.value
                        })
                      }}
                  ></input>
                </div>
                <div class="mt-4">
                  <button class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit">$3.00</button>
                </div>
              </form>
            </div>
          </div>
          <Script src="https://app.sandbox.midtrans.com/snap/snap.js" strategy="afterInteractive"/>
        </body>
    </>
  )
}
