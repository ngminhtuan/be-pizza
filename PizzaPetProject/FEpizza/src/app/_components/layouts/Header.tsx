'use client'
import { useState } from "react"

const Header = () => {
  const [isDropdown, setIsDropdown] = useState(false);

  const openMenu = () => {
    const headerId = document.getElementById('header-menu');
    const headerParrentId = document.getElementById('header-parrent');
    const svgClass = headerParrentId?.getElementsByTagName('svg');
    console.log(svgClass)
    if (headerId && headerParrentId && svgClass) {
      if (headerId.classList.contains('invisible')) {
        headerId.classList.add('visible');
        headerId.classList.add('opacity-100');
        headerParrentId.classList.add('header-white');
        headerParrentId.classList.remove('header-transparent');
        headerId.classList.remove('invisible');
        headerId.classList.remove('opacity-0');
        document.documentElement.classList.add('overflow-hidden');
        for(let i = 0; i < svgClass.length; i++){  
          if(svgClass[i].classList.contains('stroke-white')) {
            svgClass[i].classList.add('stroke-black');
            svgClass[i].classList.remove('stroke-white');
            return;
          } 
          svgClass[i].classList.add('fill-black');
          svgClass[i].classList.remove('fill-white');
        }
        return;
      }
      if (headerId.classList.contains('visible')) {
        headerId.classList.remove('visible');
        headerId.classList.remove('opacity-100');
        headerParrentId.classList.add('header-transparent');
        headerParrentId.classList.remove('header-white');
        headerId.classList.add('invisible');
        headerId.classList.add('opacity-0');
        for(let i = 0; i < svgClass.length; i++){
          if(svgClass[i].classList.contains('stroke-black')) {
            svgClass[i].classList.add('stroke-white');
            svgClass[i].classList.remove('stroke-black');
            return;
          }
          svgClass[i].classList.add('fill-white');
          svgClass[i].classList.remove('fill-black');
        }
        document.documentElement.classList.remove('overflow-hidden')
        return;
      }
    }
  }
  return (
    <header id='header-parrent' className="fixed z-50 min-w-full h-[88px] transition-[background-color] duration-300 header-transparent">
      <nav className="h-full flex justify-between items-center px-5">
        <div className="flex flex-grow hover:cursor-pointer"><a className="flex items-center" href="">
          <svg className="w-[152px] h-[22px] fill-white mr-2.5"><use xlinkHref="#logo_header">
            <symbol id="logo_header" viewBox="0 0 151.129 21.376">
              <title>PIZZA 4P'S</title>
              <defs><clipPath id="a"><path fill="none" d="M0 0h151.129v21.376H0z" data-name="長方形 45"></path></clipPath></defs><g clipPath="url(#a)" data-name="グループ 159"><path d="M5.495 12.218H2.566V4.799h3c2.665 0 3.961 1.2 3.961 3.674 0 2.45-1.395 3.745-4.033 3.745m.193-9.554H0v18.695h2.566v-7.008h2.929c4.177 0 6.67-2.2 6.67-5.878S9.8 2.664 5.687 2.664" data-name="パス 1"></path><path d="M18.598 2.666h2.565v18.693h-2.565z" data-name="長方形 44"></path><path d="m42.49 4.634.031-.043V2.664h-13.2v2.3h9.9L28.976 19.392l-.031.043v1.929h13.773v-2.3H32.261Z" data-name="パス 2"></path><path d="m62.972 4.634.031-.043V2.664h-13.2v2.3h9.9l-10.25 14.428-.031.043v1.929h13.773v-2.3H52.743Z" data-name="パス 3"></path><path d="M77.297 5.564v-.005c.134.443.355 1.161.594 1.845l2.226 6.354H74.49l2.2-6.354c.235-.675.465-1.4.6-1.84m-1.372-2.9-6.647 18.693h2.587l1.9-5.472h7.107l1.92 5.472h2.731L78.791 2.664Z" data-name="パス 4"></path><path d="m100.245 14.687 4.9-7.14c.39-.579.671-1.06.854-1.4v8.54Zm8.236-11.938h-2.672l-8.366 12.176v1.994h8.559v4.44h2.479v-4.44h2.393v-2.257h-2.392Z" data-name="パス 5"></path><path d="M123.167 12.218h-2.929V4.799h3c2.665 0 3.961 1.2 3.961 3.674 0 2.45-1.395 3.745-4.034 3.745m.195-9.554h-5.687v18.695h2.565v-7.008h2.929c4.177 0 6.671-2.2 6.671-5.878s-2.361-5.809-6.478-5.809" data-name="パス 6"></path><path d="M132.803 5.637h1.851L136.975 0h-3.054Z" data-name="パス 7"></path><path d="m146.302 10.802-2.518-.443c-2-.378-2.851-1.215-2.851-2.8 0-1.77 1.4-2.913 3.567-2.913a3.3 3.3 0 0 1 3.544 3.167l.018.147h2.54l-.009-.176c-.178-3.3-2.39-5.2-6.07-5.2-3.656 0-6.21 2.122-6.21 5.16 0 2.725 1.639 4.414 4.874 5.017l2.5.444c1.975.336 2.895 1.233 2.895 2.822 0 2.166-1.365 3.263-4.057 3.263-3.453 0-4.152-2.428-4.292-3.472l-.019-.144h-2.586l.01.176c.2 3.407 2.823 5.523 6.839 5.523 4.228 0 6.653-2.017 6.653-5.533 0-2.842-1.534-4.444-4.827-5.041" data-name="パス 8"></path></g>
            </symbol>
          </use></svg>
          <span className="text-[10px]">VIETNAM</span></a></div>
        <div className="flex z-[1] flex-shrink-0 gap-x-7 gap-y-0">
          <div className="inline-block"><a className="inline-flex items-center" href="">
            <svg className="w-[23px] h-[18px] fill-white mr-2.5"><use xlinkHref="#icon_header_reservation">
              <symbol id="icon_header_reservation" viewBox="0 0 15 16.75">
                <path stroke="rgba(0,0,0,0)" strokeMiterlimit="10" d="M2.687 16.25A2.087 2.087 0 0 1 .5 14.281V2.469A2.087 2.087 0 0 1 2.687.5H14.5v15.75Zm0-1.176h10.506v-2.437H3.06a1.35 1.35 0 0 0-1.2 1.448.515.515 0 0 1-.043.282.854.854 0 0 0 .87.707Zm-.88-12.605v9.373a3.149 3.149 0 0 1 1.16-.374l10.211-.005h.015V1.676H2.687a.841.841 0 0 0-.88.793Z" data-name="合体 11"></path>
              </symbol>
            </use></svg>
            <span className="text-xl">Đặt Bàn</span></a></div>
          <div className="inline-block"><a className="inline-flex items-center" href="">
            <svg className="w-[26px] h-[18px] fill-white mr-2.5 overflow-hidden"><use xlinkHref="#icon_header_delivery">
              <symbol id="icon_header_delivery" viewBox="0 0 15 16.75">
                <path stroke="rgba(0,0,0,0)" strokeMiterlimit="10" d="M15.016 17.338a1.452 1.452 0 1 1 1.451 1.436 1.445 1.445 0 0 1-1.451-1.436Zm-9.677 0a1.452 1.452 0 1 1 1.451 1.436 1.445 1.445 0 0 1-1.451-1.436Zm10.728-2.922H7.8a2.356 2.356 0 0 1-2.31-1.891L3.331 1.842H.5V.5h3.943l.847 4.191h14.657L18.44 12.52a2.4 2.4 0 0 1-2.308 1.9Zm-9.246-2.153a1.011 1.011 0 0 0 1.019.811h8.24a.972.972 0 0 0 1.029-.81l1.2-6.23H5.561Z" data-name="合体 12"></path>
              </symbol>
            </use></svg>
            <span className="text-xl">Giao Hàng</span></a></div>
          <div className="inline-block"><a className="inline-flex items-center" href="">
            <svg className="w-[23px] h-[18px] fill-white mr-2.5 overflow-hidden"><use xlinkHref="#icon_header_myapp">
              <symbol id="icon_header_myapp" viewBox="0 0 15 16.75">
                <path stroke="rgba(0,0,0,0)" strokeMiterlimit="10" d="M.499 17.499v-17h11.365v17Zm1.228-1.229h8.909V1.728H1.728Zm3.159-2.446a1.316 1.316 0 1 1 1.313 1.316 1.316 1.316 0 0 1-1.313-1.316Zm2.19-.272a.624.624 0 0 1 .184.438.624.624 0 0 0-.184-.438.653.653 0 0 0-.09-.071.653.653 0 0 1 .09.071Zm-.667-.132a.665.665 0 0 0-.2.132.622.622 0 0 0-.185.438.622.622 0 0 1 .185-.438.665.665 0 0 1 .2-.132l.037-.014Zm.568.054a.642.642 0 0 0-.31-.1.642.642 0 0 1 .309.1Zm-.4-.1h.058Z" data-name="合体 14"></path>
              </symbol>
            </use></svg>
            <span className="text-xl">MY APP</span></a></div>
        </div>
        <div className="header-lang ml-[3.51391vw] relative hover:cursor-pointer" onClick={() => setIsDropdown(!isDropdown)}>
          <div className="text-xl inline-flex items-center">
            VN
            <svg className={`headerLang_arrow w-[14px] h-[14px] stroke-white ml-1 ${isDropdown ? "rotate-180" : ""} `}><use xlinkHref="#basic_arrow">
              <symbol id="basic_arrow" viewBox="0 0 15.414 15.414">
                <g fill="none" strokeWidth="2" data-name="グループ 2249">
                  <path d="m.707 7 7 7 7-7" data-name="パス 23"></path>
                  <path d="M7.707 14V0" data-name="線 15"></path>
                </g>
              </symbol>
            </use></svg>
          </div>
          <a className={`text-xl font-normal text-white block top-full left-0 w-full ${isDropdown ? "absolute" : "hidden"}`}>EN</a>
        </div>
        <div onClick={openMenu} className="font header-menu-logo relative w-12 h-12 ml-[5.51391vw] border border-white border-solid rounded-full overflow-hidden hover:cursor-pointer">
          <span className="absolute top-3 w-12 h-[1px] bg-white"></span>
          <span className="absolute top-[23px] w-12 h-[1px] bg-white"></span>
          <span className="absolute top-[34px] w-12 h-[1px] bg-white"></span>
          <span></span>
        </div>
      </nav>
    </header>
  )
}

export default Header