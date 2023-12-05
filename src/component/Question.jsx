import React ,{useState} from 'react';
import { MdMailOutline } from "react-icons/md";
const Question = () => {
    const [hover, sethover] = useState(false)
    const [hover2, sethover2] = useState(false)
    const [hover3, sethover3] = useState(false)
    const [hover4, sethover4] = useState(false)
    const handelmouseenter=()=>{
sethover(true)
    }
    const handelmouseleave=()=>{
sethover(false)
    }
    const handelmouseenter2=()=>{
sethover2(true)
    }
    const handelmouseleave2=()=>{
sethover2(false)
    }
    const handelmouseenter3=()=>{
sethover3(true)
    }
    const handelmouseleave3=()=>{
sethover3(false)
    }
    const handelmouseenter4=()=>{
sethover4(true)
    }
    const handelmouseleave4=()=>{
sethover4(false)
    }
	return (
		<section className="bg-white flex flex-col justify-center w-full items-center pt-20 px-3">
			<div
				className="w-full
    text-center flex justify-center lg:text-[48px]  sm:text-[32px] text-[25px] leading-[54px] items-center lg:flex-row flex-col lg:space-x-4 lg:space-y-0 space-y-5"
			>
				<p className="text-[#3371B8] font-bold">Does your </p>
				<div className="lg:py-5 2xl:px-12 lg:px-10 py-6 sm:px-16  px-[10%]  bg-gradient-to-br from-[#1782fd]  to-[#ff4815] text-white rounded-[99px] flex items-center lg:space-x-6 space-x-2 justify-center">
					<p className="font-[800]  ">DevOps Engineer</p>{' '}
					<img src="/arrowdown.png" alt="" className="w-[32px] h-[32px]" />
				</div>
				<p className="text-[#3371B8] font-bold">asks</p>
			</div>
			<div className="w-full flex flex-col items-center justify-center xl:w-[1170px] py-12 space-y-3 transition-all ease-in-out duration-500 lg:pb-20">
				{/* q1  */}
				<div className={`flex font-sans rounded-2xl w-full py-3 px-8 space-x-5 items-center ${hover?'bg-white  lg:text-[28px] text-[20px] 2xl:leading-[40px] leading-[35px] text-[#0B2545] border-[2px] border-[#3371B8] transition-transform transform-gpu duration-100 2xl:scale-x-110 xl:scale-x-[1.05] cursor-pointer':'text-[20px] 2xl:leading-[54px] leading-[32px]  bg-[#3371B8] text-white '} `} onMouseEnter={handelmouseenter} onMouseLeave={handelmouseleave}>
					<p className={`font-extrabold text-start ${hover?'bg-gradient-to-br from-[#3473bb]  to-[#E35A35]  bg-clip-text text-transparent xl:text-[40px]':''} `}>Q1.</p>
					<p className=" font-[600] ">
						What measures should we implement to ensure robust security across
						our technology stacks?
					</p>
				</div>
				{/* q2 */}
                <div className={`flex font-sans rounded-2xl w-full py-3 px-8 space-x-5 items-center ${hover2?'bg-white  lg:text-[28px] text-[20px] 2xl:leading-[40px] leading-[35px] text-[#0B2545] border-[2px] border-[#3371B8] transition-transform transform-gpu duration-100 2xl:scale-x-110 xl:scale-x-[1.05] cursor-pointer':'text-[20px] 2xl:leading-[54px] leading-[32px]  bg-[#3371B8] text-white '} `} onMouseEnter={handelmouseenter2} onMouseLeave={handelmouseleave2}>
                <p className={`font-extrabold text-start ${hover2?'bg-gradient-to-br from-[#3473bb]  to-[#E35A35]  bg-clip-text text-transparent xl:text-[40px]':''} `}>Q2.</p>
					<p className=" font-[600] ">
                    How can we ensure the security of our CI/CD pipelines and the overall DevOps processes? What best practices should be implemented?

					</p>
				</div>
				{/* q3  */}
                <div className={`flex font-sans rounded-2xl w-full py-3 px-8 space-x-5 items-center ${hover3?'bg-white  lg:text-[28px] text-[20px] 2xl:leading-[40px] leading-[35px] text-[#0B2545] border-[2px] border-[#3371B8] transition-transform transform-gpu duration-100 2xl:scale-x-110 xl:scale-x-[1.05] cursor-pointer':'text-[20px] 2xl:leading-[54px] leading-[32px]  bg-[#3371B8] text-white '} `} onMouseEnter={handelmouseenter3} onMouseLeave={handelmouseleave3}>
                <p className={`font-extrabold text-start ${hover3?'bg-gradient-to-br from-[#3473bb]  to-[#E35A35]  bg-clip-text text-transparent xl:text-[40px]':''} `}>Q3.</p>
					<p className=" font-[600] ">
					How do we navigate the complexities of adopting new technologies or upgrading our software architecture and ensure smooth integration?

					</p>
				</div>
				{/* q4 */}
                <div className={`flex font-sans rounded-2xl w-full py-3 px-8 space-x-5 items-center ${hover4?'bg-white  lg:text-[28px] text-[20px] 2xl:leading-[40px] leading-[35px] text-[#0B2545] border-[2px] border-[#3371B8] transition-transform transform-gpu duration-100 2xl:scale-x-110 xl:scale-x-[1.05] cursor-pointer':'text-[20px] 2xl:leading-[54px] leading-[32px]  bg-[#3371B8] text-white '} `} onMouseEnter={handelmouseenter4} onMouseLeave={handelmouseleave4}>
				<p className={`font-extrabold text-start ${hover4?'bg-gradient-to-br from-[#3473bb]  to-[#E35A35]  bg-clip-text text-transparent xl:text-[40px]':''} `}>Q4.</p>
					<p className=" font-[600] ">
                    What measures should we implement to ensure robust security across our technology stacks?

					</p>
				</div>
			</div>
            <div className="w-full flex justify-center 2xl:w-[1380px] bg-gradient-to-br from-[#076de2]  to-[#db471e]  py-14  flex-col items-center   rounded-[24px] relative">
                <img src="/Ellipse 1.png" alt="" className='absolute right-0 sm:top-0 -top-8 lg:w-[270px]' />
                <img src="/Ellipse 3.png" alt="" className='absolute sm:left-0 sm:bottom-0 -left-16 -bottom-12  lg:w-[402px] w-[250px]' />
                <p className="font-bold lg:text-[48px] leading-[54px] text-[32px] font-sans text-white text-center ">Partner with Asatix today</p>
                <p className="font-[500] text-[20px] lg:leading-[30px]  leading-[26px] lg:text-[18px] font-sans text-white text-center xl:w-[60%] lg:w-[70%] sm:w-[80%] w-[90%]  lg:mt-5 mt-12 ">Let us steer your business toward digital transformation, efficiency, and success in an ever-evolving technological landscape.</p>
                <div className="bg-white flex px-8 py-4 items-center space-x-2 rounded-[8px] lg:mt-20 mt-12"><img src="/mail.png" alt="" /><p className="bg-gradient-to-r from-[#F1582B]  to-[#F53B72]  bg-clip-text text-transparent font-bold text-[18px]">  mail@email.com</p> </div>
            </div>
		</section>
	);
};

export default Question;
