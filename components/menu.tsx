'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";



export default function Menu()
{
    const [openMenu, setOpenMenu] = useState(false);


    return(


    <div>
        <button onClick={()=>setOpenMenu(!openMenu)} className=""><Image src={'/icons/menuu.gif'} alt="menu" width={40} height={40} className=" invert ml-10"></Image></button>
        
        <div className={`flex flex-col bg-white opacity-95 w-2/3 md:w-1/4 h-screen text-black fixed top-0 left-0 z-10 transition-all ease-in-out duration-500 ${openMenu?"translate-x-0" : "-translate-x-full"}`}>
            <button className={`flex h-20 justify-center items-center w-fit ml-10 text-white text-4xl z-10`} onClick={()=>{setOpenMenu(!openMenu)}}>
                <Image src={'/icons/cross.png'} alt='cross' width={40} height={40} className="invert"/>
            </button> 
            <div className="flex flex-col justify-around h-1/2 ml-10">
                <Link href={'/about'} className="hover:font-black">about ☺️</Link>
                <Link href={'/tp'}className="hover:font-black">track packages 📦</Link>
                <Link href={'/wreview'}className="hover:font-black">write a review ✍️</Link>
                <Link href={'/help'}className="hover:font-black">need help? 😣</Link>
                <Link href={'/tc'}className="hover:font-black">terms & conditions 🙂</Link>
                <Link href={'/copyright'}className="hover:font-black">copyright terms 🙃</Link>
            </div>
            
        </div>
        <button className={`fixed w-full bg-black opacity-20 h-screen top-0 right-0 z-5 ${openMenu?'':'hidden'}`} onClick={()=>{setOpenMenu(!openMenu)}}>
        </button>
    </div>
    );
}