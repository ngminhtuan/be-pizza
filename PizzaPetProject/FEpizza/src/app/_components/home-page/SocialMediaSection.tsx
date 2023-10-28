import Image from "next/image"

const initialIgImgList = [
    '/img/p4pssm1.jpg',
    '/img/p4pssm2.jpg',
    '/img/p4pssm3.jpg',
    '/img/p4pssm4.jpg',
    '/img/p4pssm5.jpg',
    '/img/p4pssm6.jpg',
    '/img/p4pssm7.jpg',
    '/img/p4pssm8.jpg',
    '/img/p4pssm9.jpg',
]

const initialYtImgList = [
    '/img/p4pssm10.png',
    '/img/p4pssm11.png',
    '/img/p4pssm12.png',
]

const initialFbImgList = [
    { img: '/img/p4pssm1.jpg', text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum' },
    { img: '/img/p4pssm3.jpg', text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum' },
    { img: '/img/p4pssm5.jpg', text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum' },
]


const SocialMediaSection = () => {
    const igImgList = initialIgImgList.map((item, key) => {
        return (
            <a href="" key={key} className="relative inline-block w-[54.93333vw] lg:w-auto">
                <div className="hover:after:transition-all hover:after:opacity-100 after:opacity-0 after:h-full after:absolute after:top-0 after:left-0 after:w-full after:bg-[rgb(0,0,0)]/30">
                    <Image src={item} width='0' height='0' sizes="100vw" alt="" className="w-[54.93333vw] h-[54.93333vw] lg:w-[15.08053vw] lg:h-[15.08053vw] object-cover" />
                </div>
            </a>
        )
    })

    const ytImgList = initialYtImgList.map((item, key) => {
        return (
            <a href="" key={key} className="relative w-[85vw] lg:w-auto group">
                <Image className="absolute w-[2.34261vw] h-[1.83016vw] z-[1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:-rotate-12" alt="" src="./img/svgexport-15.svg" width="0" height="0" />
                <div className="after:content-[''] after:h-full after:absolute after:top-0 after:left-0 after:w-full after:bg-[rgb(0,0,0)]/30">
                    <Image src={item} width='0' height='0' sizes="100vw" alt="" className="w-full lg:h-[15.08053vw] object-cover " />
                </div>
            </a>
        )
    })

    const fbImgList = initialFbImgList.map((item, key) => {
        return (
            <a href="" key={key} className="flex justify-center items-center w-[25.32943vw] bg-[#EAE6DC] hover:opacity-50">
                <Image src={item.img} width='0' height='0' sizes="100vw" alt="" className="w-[10.98097vw] h-auto object-cover" />
                <div className="text-[1.02489vw] px-[1.1713vw]">
                    <p className="line-clamp-5">{item.text}</p>
                </div>
            </a>
        )
    })

    return (
        <section className="pt-[108px] pb-[120px] w-full bg-[#F4F2EF]">
            <div className="lg:flex items-start justify-between flex-wrap max-w-[79.35578vw] w-full m-auto">
                <div className=" lg:w-[46.70571vw]">
                    <div className="flex items-center">
                        <a href="" className="inline-block font-bold text-[#242E52] tracking-tight leading-[1] text-[1.75695vw] mb-[28px] mr-2"><i className="text-[2.34261vw] pr-2 font-normal not-italic">Follow</i> Instagram
                        </a>
                        <Image className="w-5 h-5 -rotate-[135deg]" alt="" src="./img/svgexport-14.svg" width="0" height="0" />
                    </div>
                    <div className="overflow-x-auto no-scrollbar">
                        <div className="lg:overflow-hidden inline-flex lg:flex lg:flex-wrap gap-[0.73206vw]">
                            {igImgList}
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="flex items-center">
                        <a href="" className="inline-block font-bold text-[#242E52] tracking-tight leading-[1] text-[1.75695vw] mb-[28px] mr-2"><i className="text-[2.34261vw] pr-2 font-normal not-italic">Subscribe</i> Youtube
                        </a>
                        <Image className="w-5 h-5 -rotate-[135deg]" alt="" src="./img/svgexport-14.svg" width="0" height="0" />
                    </div>
                    <div className="overflow-x-auto no-scrollbar">
                        <div className="inline-flex lg:flex lg:flex-col gap-[0.73206vw]">
                            {ytImgList}
                        </div>
                    </div>
                </div>
                <div className="mt-[88px]">
                    <div className="flex items-center">
                        <a href="" className="inline-block font-bold text-[#242E52] tracking-tight leading-[1] text-[1.75695vw] mb-[28px] mr-2"><i className="text-[2.34261vw] pr-2 font-normal not-italic">Follow</i> Facebook
                        </a>
                        <Image className="w-5 h-5 -rotate-[135deg]" alt="" src="./img/svgexport-14.svg" width="0" height="0" />
                    </div>
                    <div className="w-full flex gap-[1.75695vw]">
                        {fbImgList}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SocialMediaSection
