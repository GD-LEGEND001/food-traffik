"use client";
import { useState } from "react";



export default function TrackPage() {
    const [detailsConfirmed, setDetailsConfirmed] = useState(false);
     function confirmDetails(){
        setDetailsConfirmed(!detailsConfirmed)
     }
  return (
    <>
    <p className="text-center text-red-500 font-bold">
      PLEASE CONFIRM YOUR DETAILS!
    </p>
      <div className="h-50 w-50 rounded-lg bg-white/50 shadow-lg block mx-auto mt-10 ">
      <div className="flex flex-col gap-5 justify-center items-center">
      <p className="text-red-900 font-bold text-sm text-center mt-10">pls fill correctly to avoid any misunderstandings !</p>
      <button onClick = {confirmDetails} className="text-[#ffffff] bg-red-500 w-30 h-10 font-bold rounded-4xl">confirm</button>
        {detailsConfirmed && <div className="inset-0 fixed z-[9999] backdrop-blur-sm flex justify-center items-center bg-black/30">
            <div className="block mx-auto h-70 w-70 bg-[#ffffff] rounded-4xl">
                <p className="font-bold text-[#ff0000] text-center">OOPS AN ERROR OCCURED TRY AGAIN LATER</p>
                <img className="w-40 h-40 mx-auto" src="/oops.png"/>
                <button onClick={confirmDetails} className="text-white font-bold rounded-full p-2 bg-[#ff0000] block mx-auto">Try agin</button>
            </div>
            </div>}
      </div>
      </div>
    </>
  );
}


 