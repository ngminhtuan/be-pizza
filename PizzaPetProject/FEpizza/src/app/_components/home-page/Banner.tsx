

const Banner = () => {
    return (
        <section className="h-screen w-full relative z-[1] after:h-full after:absolute after:top-0 after:left-0 after:w-full after:bg-[rgb(0,0,0)]/20">
            <div className="h-full w-full absolute overflow-hidden top-0 left-0 -z-[1]">
                <video className="object-cover min-h-full min-w-full h-auto w-auto absolute block top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="./video/intro-piz-banner.mp4" loop={true} muted={true} autoPlay={true} playsInline={true}></video>
            </div>
            <ul className="absolute pt-[120px] pb-5 lg:py-0 lg:bottom-[1.90337vw] left-[2.92826vw] font-normal leading-none z-[2]">
                <li className="list-country-banner"><a href="" className="text-[4.08521vw] tracking-tight">Vietnam</a></li>
                <li className="list-country-banner"><a href="" className="text-[4.08521vw] tracking-tight">Cambodia</a></li>
                <li className="list-country-banner"><a href="" className="text-[4.08521vw] tracking-tight">India <span className="text-[1.46413vw]">coming soon</span></a></li>
                <li className="list-country-banner"><a href="" className="text-[4.08521vw] tracking-tight">Japan <span className="text-[1.46413vw]">coming soon</span></a></li>
            </ul>
            <div className="absolute group bottom-[30px] right-[2.19619vw] p-[0.58565vw] text-white hover:bg-[#02499D]">
                <div className="hidden group-hover:flex gap-[1.1713vw] mb-[0.87848vw]">
                    <div className="text-[2.92826vw] tracking-tight">
                        <p className="text-[2.92826vw] -mt-[2px] leading-none tracking-tight">WOW!!!</p>
                        <p className="text-[1.02489vw] mt-[8px] tracking-tight">Since 2011〜</p>
                    </div>
                    <div className="pl-[6px]">
                        <p className="text-[1.02489vw]">“WOW” is the highest satisfaction <br />score received from all shops.</p>
                        <a className="underline text-[0.8vw] text-[#7daeeb] hover:no-underline" href="">Learn more</a>
                    </div>
                </div>
                <div className="flex justify-end tracking-normal text-[2.56223vw] gap-[0.07321vw] h-[3.10146vw]">
                    <span className="score-received">1</span>
                    <span className="score-received">3</span>
                    <span className="score-received">5</span>,
                    <span className="score-received">7</span>
                    <span className="score-received">9</span>
                    <span className="score-received">0</span>
                    <span className="text-[2.56223vw] pt-[0.21962vw] px-[0.21962vw] bg-[#02489d] group-hover:text-black group-hover:bg-white">?</span>
                </div>
            </div>
        </section>
    )
}

export default Banner
