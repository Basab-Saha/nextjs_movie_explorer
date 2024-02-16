'use client'

import Link from "next/link";
import { useState } from "react"

const navItems=[
    {href:'/' , title:'Home'},
    {href:'/now-playing' , title:'Now Playing'},
    {href:'/popular' , title:'Popular'},
    {href:'/top-rated' , title:'Top-rated'},
    {href:'upcoming' , title:'Upcomming'}

]

export default function Sidebar(){
    const[isOpen , setIsOpen]=useState(false);

    function closeSidebar(){
        setIsOpen(false)
    }
    return(
        <>
        <button className="fixed top-0 left-0 z-40 text-white m-2" onClick={()=>setIsOpen(!isOpen)}>
            {isOpen ? 'X' : 'Menu'}
        </button>
        {
            isOpen && (
                <div className="fixed top-0 left-0 h-full z-30  w-54  bg-gray-800 p-5 transition-all duration-300">
                    <nav className="mt-8 flex flex-col">
                    {
                      navItems.map((item)=>(
                            <Link key={item.href} onClick={closeSidebar} className="hover:bg-gray-700 p-2 rounded transition-colors text-white duration-200" href={item.href}>{item.title}</Link>
                      ))
                     }
                    </nav>
                </div>
            )
        }
        
        </>
    )
}