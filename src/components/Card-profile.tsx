import { imageCdeoUrl } from '@/utils/utils'
import React from 'react'
import Image from 'next/image';
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { IoIosAdd } from "react-icons/io";
const fakeData = {
    image: imageCdeoUrl,
    name: "CODEO.MG",
    slogan: `PASSER D'IDEE EN ACTION`
}
export default function CardProfile() {
    return (
        <div className='card w-[300px] sm:w-full  flex flex-col items-center gap-4 p-4 rounded-xl bg-white'>
            <div className='flex items-center justify-center rounded-full h-[100px] w-[100px] overflow-hidden border-[3px] border-gray-300'>
                <Image src={fakeData.image} width={300} height={300} alt="profil" className='h' />
            </div>
            {/* info */}
            <div className="text-center">
                <h2 className='text-lg font-medium'>{fakeData.name}</h2>
                <p className='text-xs text-gray-500'>"{fakeData.slogan}"</p>
            </div>

            {/* --- */}

            <div className="flex flex-row items-center relative left-3">
                {/* user list */}
                <div className="flex relative">
                    <div className="h-6 w-6 rounded-full overflow-hidden border-white border-[2px] relative z-[5]">
                        <Image src='/images/p1.jpg' alt='avatar' className='h-full w-full object-cover' width={100} height={100} />

                    </div>
                    <div className="h-6 w-6 rounded-full overflow-hidden border-white border-[2px]  relative left-[-10px] z-[4]">
                        <Image src='/images/p1.jpg' alt='avatar' width={100} height={100} className='h-full w-full object-cover' />
                    </div>
                    <div className="h-6 w-6 rounded-full overflow-hidden border-white relative border-[2px] left-[-20px] z-[3] ">
                        <Image src='/images/p1.jpg' alt='avatar' width={100} height={100} className='h-full w-full object-cover' />
                    </div>
                    <div className="h-6 w-6 rounded-full overflow-hidden border-white relative border-[2px] left-[-30px] z-[2] ">
                        <Image src='/images/p1.jpg' alt='avatar' width={100} height={100} className='h-full w-full object-cover' />
                    </div>
                    <div className="h-6 w-6 rounded-full overflow-hidden border-white relative border-[2px] left-[-40px] z-[1] ">
                        <Image src='/images/p1.jpg' alt='avatar' width={100} height={100} className='h-full w-full object-cover' />
                    </div>
                </div>
                {/* + 50 reactions */}
                <p className='text-blue-400 text-xs relative left-[-30px]'> {`+ de 50 réactions`}</p>


            </div>
            <div className="flex flex-row gap-2">
                <button className='flex flex-row gap-2 text-white bg-blue-400 py-2 px-4 rounded-md'> <BiSolidMessageSquareDetail /> <span className='text-xs'>Message</span></button>
                <button className='flex flex-row gap-1 text-orange-300 border-[1px] border-orange-300 py-2 px-4 rounded-md'> <IoIosAdd /> <span className='text-xs'>Suivre</span></button>
            </div>
        </div>
    )
}
