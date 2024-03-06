import React from 'react'
import { IoFilter } from "react-icons/io5";
import '@/styles/tables.scss';
export default function TableFilter() {
    return (
        <div className='flex flex-row gap-4 items-center p-4 mb-4'>
            <IoFilter />
            <span className='text-sm text-gray-500'>filter par : </span>

            <select name="type" id="select-type" className='select-type  text-xs text-gray-500 bg-transparent p-2 border-gray-200 border-[1px] rounded-md focus:outline-none'>
                <option value="Sur site">Sur site</option>
                <option value="Remote">Remote</option>
                <option value="Hybride">Hybride</option>
            </select>
        </div>
    )
}
