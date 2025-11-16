"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [sideBar, setSideBar] = useState(false);
  function openBar() {
    setSideBar(!sideBar);
  }
  const [rice, wantRice] = useState(false);
  function riceMenu(){
    wantRice(!rice)
  }

  const [count,setCount] = useState(1)
  function increase(){
    setCount(count + 1)
  }

  function decrease(){
    if(count > 1){
    setCount(count - 1)
    }
  }

  return (
    <div>
      <nav className="bg-[#000000] w-full h-15 flex text-[#ffffff] items-center justify-evenly top-0 z-10">
        <button className=" hidden md:block font-bold bg-[#ffffff]  rounded-4xl h-10 px-4 text-[#000000]  ">
          Sign Up
        </button>
        <img className="h-50" src="/food-traffik-logo.png" />
        <button className=" hidden md:block font-bold bg-[#f9041a]  rounded-4xl h-10 px-4 text-[#ffffff] ">
          Sign Up
        </button>
        <button onClick={openBar} className="sm:w-full sm:h-full object-contain md:hidden">
          <img src="/icons8-hamburger-menu-24.png" />
        </button>
      </nav>
      
      <header className=" bg-[url('/hero_mobile.png')]  md:bg-[url('/hero_desktop.png')] bg-cover w-full h-[80vh]">
         <div className="h-[50vh] flex flex-col justify-center items-center">
          
          <h1 className="font-bold text-2xl text-[#ffffff]">
            Get A Free Delivery On Your First Order.
          </h1>
          <span className="bg-[#ffffff] rounded-full flex justify-around p-5 mt-2">
            <img src="/beacon.png" />
            <input
               type="text"
              className="outline-none"
              placeholder="Enter Your Address..."
            ></input>
          </span>
          
           {sideBar && <div className="bg-[#ffffff]  h-full w-50 md:hidden">
     
      </div>}
      
        </div>
      </header>
      <h1 className="text-extrabold text-[#000000] text-3xl text-center mt-5">
        GET A FREE DELIVERY EACH TIME YOU ORDER OUR EXCLUSIVE MEALS
      </h1>
      <div className=" flex flex-col gap-8 items-center md:flex-row justify-evenly mt-10">
        <div className="bg-white/10 rounded-4xl shadow-xs shadow-black overflow-hidden  h-90 w-60 transform hover:scale-105 hover:shadow-lg shadow-black transition transition-size-3">
          <img className="w-[100vh]" src="/small-chops.jpeg" />
          <div className="flex flex-col items-center">
            <p>small chops</p>
            <p className="text-green-500 ">₦2200</p>
            <button className="rounded-4xl bg-[#f9041a] text-[#ffffff] h-10 w-30">
              Order Now
            </button>
          </div>
        </div>
        <div className="flex">
          <div className="bg-white/10 rounded-4xl shadow overflow-hidden  h-90 w-60 transform hover:scale-105 hover:shadow-lg shadow-black transition transition-size-3">
            <img className="w-[100vh] h-[30vh]" src="/Beef-burger.jpeg" />
            <div className="flex flex-col items-center">
              <p>Beef-Burger</p>
              <p className="text-green-500 ">₦6500</p>
              <button className="rounded-4xl bg-[#f9041a] text-[#ffffff] h-10 w-30">
                Order Now
              </button>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="bg-white/10 rounded-4xl shadow overflow-hidden  h-90 w-60 transform hover:scale-105 hover:shadow-lg shadow-black transition-all duration-350 ">
            <img className="w-[100vh] h-[30vh]" src="/salad.jpeg" />
            <div className="flex flex-col items-center">
              <p>Salad</p>
              <p className="text-green-500 ">₦12000</p>
              <button className="rounded-4xl bg-[#f9041a] text-[#ffffff] h-10 w-30">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className="font-extarbold text-4xl text-[#f9041a] text-center mt-5">
        What's on your mind?
      </p>
      {rice && <div className="h-70 w-70 bg-[#000000] block mx-auto rounded-4xl p-2 ">
            <button onClick={riceMenu}><img className="block ml-60" src="/cancel-btn.png"/></button>
            <p className="font-bold text-3xl text-white">Rice</p>
            <p className="text-white font-light text-xl text-center">How many rice do you want</p>
            <div className="flex justify-evenly mt-10">
              <button className="text-green-500 text-xl font-bold" onClick={increase}>+</button>
              <p className="text-white">{count}</p>
               <button className="text-red-500 text-xl font-bold" onClick={decrease}>-</button>
            </div>
      </div>}


      <div className=" flex space-x-10 items-center mt-5 mb-10 overflow-x-scroll overflow-y-scroll overflow-auto md:flex justify-evenly items-center mt-5 mb-10">
        <div className="flex flex-col items-center">
          <button onClick={riceMenu} className="bg-white/10 shadow-sm shadow-black rounded-full p-2 transform hover:scale-95 transition duration-500 hover:shadow-lg">
            <img src="/rice.png" />
          </button>
          <p className="text-lg text-[#000000] font-semibold">Rice</p>
        </div>
        <div className="flex flex-col items-center">
          <button className="bg-white/10 shadow-sm shadow-black rounded-full p-2 transform hover:scale-95 transition duration-500 hover:shadow-lg">
            <img src="/sea-food.png" />
          </button>
          <p className="text-lg text-[#000000] font-semibold">sushi</p>
        </div>
        <div className="flex flex-col items-center">
          <button className="bg-white/10 shadow-sm shadow-black rounded-full p-2 transform hover:scale-95 transition duration-500 hover:shadow-lg">
            <img src="/pizza.png" />
          </button>
          <p className="text-lg text-[#000000] font-semibold">Pizza</p>
        </div>
        <div className="flex flex-col items-center">
          <button className="bg-white/10 shadow-sm shadow-black rounded-full p-2 transform hover:scale-95 transition duration-500 hover:shadow-lg">
            <img src="/pasta.png" />
          </button>
          <p className="text-lg text-[#000000] font-semibold">Pasta</p>
        </div>
        <div className="flex flex-col items-center">
          <button className="bg-white/10 shadow-sm shadow-black rounded-full p-2 transform hover:scale-95 transition duration-500 hover:shadow-lg">
            <img src="/bakery.png" />
          </button>
          <p className="text-lg text-[#000000] font-semibold">Bakery</p>
        </div>
        <div className="flex flex-col items-center">
          <button className="bg-white/10 shadow-sm shadow-black rounded-full p-2 transform hover:scale-95 transition duration-500 hover:shadow-lg">
            <img src="/shawarma.png" />
          </button>
          <p className="text-lg text-[#000000] font-semibold">Shawarma</p>
        </div>
        <div className="flex flex-col items-center">
          <button className="bg-white/10 shadow-sm shadow-black rounded-full p-2 transform hover:scale-95 transition duration-500 hover:shadow-lg">
            <img src="/beverage.png" />
          </button>
          <p className="text-lg text-[#000000] font-semibold">Beverage</p>
        </div>
      </div>
      <p className="text-center text-4xl font-bold text-[#f9041a]">Popular Meals</p>
    </div>
  );
}
