import React from 'react'
import Header from './Header'
import Content from './Content'

export default function RightSide() {
    return (
        <section className='basis-[70%] mr-[5px]'>
            <Header />
            <Content />
        </section>
    )
}
