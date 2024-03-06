import React from 'react'
import Tables from './Tables'
import TableFilter from './TableFilter'

export default function Content() {
    return (
        <section className='p-2 mt-4 bg-white rounded-xl'>
            <TableFilter />
            <Tables />
        </section>
    )
}
