import React from 'react'
type Header = {
    id: number | string;
    title: string;
    isActive: boolean;
}
const headers: Header[] = [
    {
        id: 1,
        title: "Publication",
        isActive: false
    },
    {
        id: 2,
        title: "A propos",
        isActive: false
    },
    {
        id: 3,
        title: "Offres",
        isActive: true
    }
]
export default function Header() {
    return (
        <section className='grid grid-cols-3 bg-gray-400 mt-5 rounded-lg overflow-hidden'>
            {headers.map(header => (
                <div key={header.id} className={`${header.isActive ? 'bg-orange-300 text-white' : ''} text-sm cursor-pointer flex items-center justify-center w-full h-full py-4`}>
                    <h3>{header.title}</h3>
                </div>
            ))

            }
        </section>
    )
}
