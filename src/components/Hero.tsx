import React from 'react'
import '@/styles/hero.scss';
import Image from 'next/image';
import { coverPhoto } from '@/utils/utils';
export default function Hero() {
    return (
        <section className='hero-section' style={{ backgroundImage: `url(${coverPhoto})` }}>
            {/* <Image className='hero-image' src="/images/cover.jpeg" width={200} height={100} alt='cover-photo' /> */}
        </section>
    )
}
