import React from 'react'
import CardProfile from './Card-profile'
import CardInfo from './Card-info';

export default function LeftSide() {
    return (
        <aside className='flex flex-col basis-[30%] relative top-[-110px] left-11 gap-4'>
            <CardProfile />
            <CardInfo />
        </aside>
    )
}
