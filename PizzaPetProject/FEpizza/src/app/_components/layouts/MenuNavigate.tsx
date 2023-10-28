'use client'
import { useState } from "react";

const MenuNavigate = () => {
  const [isDropdown, setIsDropdown] = useState(false);
  return (
    <div id="header-menu" className="pt-[5.27086vw] pb-[8.78477vw] px-[8.78477vw] fixed h-full w-full z-20 bg-[#F4F2EF] top-[88px] transition-all duration-300 invisible opacity-0">
      <div className="h-full w-full flex items-end relative">
        <div className="absolute left-0 bottom-[430px]" onClick={() => setIsDropdown(!isDropdown)}>
        <div className="w-32 text-xl relative">
          <div className="flex items-center justify-between py-[6px]">
            <span>Vietnam</span>
            <svg className={`w-[14px] h-[14px] fill-black stroke-black ml-1 ${isDropdown ? "rotate-180" : ""} `}><use xlinkHref="#basic_arrow">
              <symbol id="basic_arrow" viewBox="0 0 15.414 15.414">
                <g fill="none" strokeWidth="2" data-name="グループ 2249">
                  <path d="m.707 7 7 7 7-7" data-name="パス 23"></path>
                  <path d="M7.707 14V0" data-name="線 15"></path>
                </g>
              </symbol>
            </use></svg>
          </div>
          <div className="border-b-2 border-black absolute top-full left-0 w-full">
            <ul className={`list-none ${isDropdown ? "" : "hidden"}`}>
              <li className="py-[6px]"><a href="">Cambodia</a></li>
            </ul>
          </div>
        </div>
        </div>
        <ul className="list-none text-5xl [&_span]:leading-[1.4]">
          <li><a className="group relative cursor-pointer">
            <svg className="w-[1.1713vw] h-[0.95168vw] absolute top-[44%] left-0 opacity-0 group-hover:opacity-100"><use xlinkHref="#pizza">
              <symbol id="pizza" viewBox="0 0 32 24.485">
                <path d="M2.443 0a31.891 31.891 0 0 0 0 24.485L32 12.243Z" data-name="パス 27"></path>
              </symbol>
            </use></svg>
            <span className="group-hover:translate-x-7 inline-block">Địa điểm</span></a></li>
          <li><a className="group relative cursor-pointer">
            <svg className="w-[1.1713vw] h-[0.95168vw] absolute top-[44%] left-0 opacity-0 group-hover:opacity-100"><use xlinkHref="#pizza">
              <symbol id="pizza" viewBox="0 0 32 24.485">
                <path d="M2.443 0a31.891 31.891 0 0 0 0 24.485L32 12.243Z" data-name="パス 27"></path>
              </symbol>
            </use></svg>
            <span className="group-hover:translate-x-7 inline-block">Thực đơn</span></a></li>
          <li><a className="group relative cursor-pointer">
            <svg className="w-[1.1713vw] h-[0.95168vw] absolute top-[44%] left-0 opacity-0 group-hover:opacity-100"><use xlinkHref="#pizza">
              <symbol id="pizza" viewBox="0 0 32 24.485">
                <path d="M2.443 0a31.891 31.891 0 0 0 0 24.485L32 12.243Z" data-name="パス 27"></path>
              </symbol>
            </use></svg>
            <span className="group-hover:translate-x-7 inline-block">Tầm nhìn</span></a></li>
          <li><a className="group relative cursor-pointer">
            <svg className="w-[1.1713vw] h-[0.95168vw] absolute top-[44%] left-0 opacity-0 group-hover:opacity-100"><use xlinkHref="#pizza">
              <symbol id="pizza" viewBox="0 0 32 24.485">
                <path d="M2.443 0a31.891 31.891 0 0 0 0 24.485L32 12.243Z" data-name="パス 27"></path>
              </symbol>
            </use></svg>
            <span className="group-hover:translate-x-7 inline-block">Sự bền vững</span></a></li>
          <li><a className="group relative cursor-pointer">
            <svg className="w-[1.1713vw] h-[0.95168vw] absolute top-[44%] left-0 opacity-0 group-hover:opacity-100"><use xlinkHref="#pizza">
              <symbol id="pizza" viewBox="0 0 32 24.485">
                <path d="M2.443 0a31.891 31.891 0 0 0 0 24.485L32 12.243Z" data-name="パス 27"></path>
              </symbol>
            </use></svg>
            <span className="group-hover:translate-x-7 inline-block">Thương hiệu</span></a></li>
        </ul>
        <ul className="list-none text-5xl leading-[1.4] pl-[7.02782vw] [&>span]:leading-[1.4] flex-grow">
          <li><a className="group relative cursor-pointer">
            <svg className="w-[1.1713vw] h-[0.95168vw] absolute top-[44%] left-0 opacity-0 group-hover:opacity-100"><use xlinkHref="#pizza">
              <symbol id="pizza" viewBox="0 0 32 24.485">
                <path d="M2.443 0a31.891 31.891 0 0 0 0 24.485L32 12.243Z" data-name="パス 27"></path>
              </symbol>
            </use></svg>
            <span className="group-hover:translate-x-7 inline-block">Thư viện</span></a></li>
          <li><a className="group relative cursor-pointer">
            <svg className="w-[1.1713vw] h-[0.95168vw] absolute top-[44%] left-0 opacity-0 group-hover:opacity-100"><use xlinkHref="#pizza">
              <symbol id="pizza" viewBox="0 0 32 24.485">
                <path d="M2.443 0a31.891 31.891 0 0 0 0 24.485L32 12.243Z" data-name="パス 27"></path>
              </symbol>
            </use></svg>
            <span className="group-hover:translate-x-7 inline-block">Tuyển dụng</span></a></li>
        </ul>
        <div>
          <ul className="text-base list-none [&_span]:leading-[22px] mb-14">
            <li><span>Hồ sơ công ty</span></li>
            <li><span>Chính sách bảo mật công ty</span></li>
            <li><span>Tuyển dụng</span></li>
            <li><span>Hoá đơn điện tử</span></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MenuNavigate