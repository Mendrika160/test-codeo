import React from 'react'
import { articles } from '@/data/data'
import Image from 'next/image'
import '@/styles/tables.scss'
export default function Tables() {
    return (
        <table>
            <tbody>
                {articles.map((article) => (
                    <tr key={article.id} className='hover:bg-slate-200 table-tr w-full rounded-xl'>
                        <td>
                            <div className="h-14 w-14 overflow-hidden">
                                <Image src={article.image} alt='img-article' width={100} height={100} />
                            </div>
                        </td>
                        <td>
                            <div className="flex flex-col w-full">
                                <h3 className='font-bold'>{article.title}</h3>
                                <span className='text-xs text-gray-500'>{article.descri}</span>
                            </div>
                        </td>
                        <td>
                            <div className="bg-gray-100 px-3 py-2 text-xs rounded-sm">{article.type}</div>

                        </td>
                        <td>
                            <span className='text-sm font-medium w-full'>{article.place}</span>
                        </td>
                        <td>
                            <span className='text-gray-500 text-sm w-full'>{article.hour}</span>
                        </td>
                        <td>
                            <button className='flex flex-row gap-1 text-white bg-orange-300 border-[1px] border-orange-300 py-2 px-4 rounded-md text-sm'>Postuler</button>
                        </td>
                    </tr>
                ))
                }
            </tbody>
        </table>
    )
}
