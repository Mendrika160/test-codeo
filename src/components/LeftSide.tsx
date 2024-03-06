import React from 'react'
import CardProfile from './Card-profile'
import CardInfo from './Card-info';

export default function LeftSide() {
    return (
        <aside className='left-side flex flex-col lg:basis-[30%] md:basis-[30%] relative top-[-110px] sm:basis-[100%] left-11 sm:left-0 gap-4 sm:px-5'>
            <CardProfile />
            <CardInfo />
        </aside>
    )
}
