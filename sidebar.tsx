import Link from 'next/link';
import React, { type ReactNode } from 'react'

export type SidebarProps = {
    links: {icon: ReactNode; text: string; navigateTo:string}[];
};

export default function Sidebar({ links }: SidebarProps) {
    return (
        <div className='flex flex-col justify-between items-center h-full w-16 bg-gray-100'>
            <div className='flex flex-col justify-center items-center'>
                {links.map((link) => (
                    <div
                        key={link.text}
                        className='flex flex-col justify-center items-center h-16 w-full hover:bg-gray-200 cursor-pointer'
                    >
                        {link.icon}
                        <Link href={link.navigateTo}>
                            <div className='text-xs font-light'>
                                {link.text}
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className='h-16 w-full hover:bg-gray-200 cursor-pointer'>
                    <div className='flex flex-col justify-center items-center h-16 w-full hover:bg-gray-200 cursor-pointer'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-6 w-6'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M12 6v6m0 0v6m0-6h6m-6 0H6'
                            />
                        </svg>
                        <div className='text-xs font-light'>Add</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
