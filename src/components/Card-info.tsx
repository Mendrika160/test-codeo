import { imageCdeoUrl } from '@/utils/utils'
import React from 'react'
import Image from 'next/image';
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { IoIosAdd } from "react-icons/io";
import { GoLocation } from "react-icons/go";
const fakeData = {
  image: imageCdeoUrl,
  name: "CODEO.MG",
  slogan: `PASSER D'IDEE EN ACTION`
}
export default function CardProfile() {
  return (
    <div className='card w-[300px] flex flex-col gap-2 py-5 px-6 rounded-lg bg-white'>

      <div className="flex flex-col">
        <div className='flex flex-row gap-1 text-white bg-orange-300 border-[1px] border-orange-300 py-2 px-4 rounded-md'><p className='text-xs'>Service et conseil en informatique</p></div>
      </div>

      <div className="flex flex-row gap-2 pt-4">
        <GoLocation /><span className='text-sm'>Antananarivo, Madagascar</span>
      </div>
    </div>
  )
}



