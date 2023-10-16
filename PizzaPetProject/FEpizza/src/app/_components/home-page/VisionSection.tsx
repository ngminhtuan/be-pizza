import ButtonView from "../ButtonView"

const VisionSection = () => {

    return (
        <section>
            <div className="flex items-center flex-col bg-[#F75B37] text-[#242E52] py-7 px-5 cursor-pointer group">
                <p className="font-bold">Our Vision</p>
                <div className="flex items-center justify-center">
                    <p className="font-normal text-[5.30293vw] -tracking-[0.02em] mr-[2.34261vw]">Make the World Smile for Peace</p>
                    <ButtonView color="blueGroup" title="MORE" url="" />
                </div>
            </div>
            <div className="flex bg-[#242E52] text-white">
                <div className="w-[63.25037vw] h-[35.57833vw] overflow-hidden">
                    <video className="min-h-full min-w-full h-auto w-auto" src="./img/joinus.mp4" loop={true} muted={true} autoPlay={true} playsInline={true}></video>
                </div>
                <div className="flex flex-col justify-between pt-8 pb-14 px-[2.92826vw]">
                    <div>
                        <p className="text-[4.39239vw] mb-10">Join Us!</p>
                        <p className="text-[1.46413vw]">Join us on the mission of sharing <br />happiness, one pizza at a time.</p>
                    </div>
                    <ButtonView color="white" title="MORE" url="" />
                </div>
            </div>
        </section>
    )
}

export default VisionSection