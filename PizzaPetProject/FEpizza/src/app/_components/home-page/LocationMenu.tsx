"use client"

import Image from "next/image"
import ButtonView from "../ButtonView"
import { useState } from "react"

const LocationMenu = () => {
    const [isActiveShopList, setIsActiveShopList] = useState<boolean>(false)

    return (
        <section className="flex">
            <div className="bg-[#242E52] w-1/2 pt-[56px] pb-[64px] px-[5.85652vw]">
                <h2 className="text-[4.39239vw] text-white text-center mb-16">Location</h2>
                <ul className="flex">
                    <li className="relative text-white pt-4 opacity-50 hover:opacity-100"><a href="" className="text-[1.75695vw] after:content-[''] after:absolute after:top-0 after:left-1/2 after:-translate-x-1/2 after:w-2 after:h-2 after:rounded-full after:bg-white">Vietnam</a></li>
                    <li className="relative text-white pt-4 opacity-50 hover:opacity-100 ml-[2.92826vw]"><a href="" className="text-[1.75695vw] after:content-[''] after:absolute after:top-0 after:left-1/2 after:-translate-x-1/2 after:w-2 after:h-2 after:rounded-full after:bg-white">Combodia</a></li>
                </ul>
                <div className="relative w-full mt-9">
                    <div className={`absolute z-[1] bg-[#F4F2EF] text-[#242E52] w-full top-11 left-0 h-60 pl-6 pr-3 py-3 ${isActiveShopList ? "block" : "hidden"}`}>
                        <div className="h-full overflow-auto scrollbar">
                            <ul className="px-0">
                                <li><a href="" className="text-[1.1713vw]">Pizza 4P's Hikari</a></li>
                                <li><a href="" className="text-[1.1713vw]">Pizza 4P's Giga Mall</a></li>
                                <li><a href="" className="text-[1.1713vw]">Pizza 4P's Xuan Thuy</a></li>
                                <li><a href="" className="text-[1.1713vw]">Pizza 4P's Saigon Pearl</a></li>
                                <li><a href="" className="text-[1.1713vw]">Pizza 4P's landmark 72</a></li>
                                <li><a href="" className="text-[1.1713vw]">Pizza 4P's Lotter Center</a></li>
                                <li><a href="" className="text-[1.1713vw]">Pizza 4P's Vincom Pham Ngoc Thach</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-b-2 border-b-white cursor-pointer" onClick={() => setIsActiveShopList(!isActiveShopList)}>
                        <span className="text-[1.1713vw] opacity-50 text-white">Select Shop</span>
                    </div>
                    <div className="relative w-full h-auto mt-10 after:content-[''] after:h-full after:absolute after:top-0 after:left-0 after:w-full after:bg-[rgb(0,0,0)]/30">
                        <a href="" className="absolute text-[1.46413vw] text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1] hover:after:hidden after:content-[''] after:h-[2px] after:absolute after:bottom-0 after:left-0 after:w-full after:bg-white">SHOP LIST</a>
                        <Image src={'/img/shoplist.jpg'} alt="" width="0" height="0" sizes="100vw" className="w-full h-auto" />
                    </div>

                </div>
            </div>
            <div className="bg-[#EAE6DC] w-1/2 pt-[56px] pb-[64px] px-[5.85652vw]">
                <h2 className="text-[4.39239vw] text-white text-center mb-16">Menu</h2>
                <div className="relative w-full h-0 pb-[100%]">
                    <div className="overflow-hidden h-0 pb-[100%] z-[1] after:content-[''] after:h-full after:absolute after:top-0 after:left-0 after:w-full after:bg-[rgb(0,0,0)]/20">
                        <video className="min-h-full min-w-full h-auto w-auto absolute block top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="./video/menu_pizza4ps-1.mp4" loop={true} muted={true} autoPlay={true} playsInline={true}></video>

                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <ButtonView title="MENU" url="" color="white" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LocationMenu
