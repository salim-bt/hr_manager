import React, { type ReactNode } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button';
import { SidebarOpenIcon } from 'lucide-react';

export type HeaderProps = {
    logo: string;
    children: ReactNode;
    sidebarOpen: boolean;
    setSidebarOpen: (open: boolean) => void
};

export default function Header({ logo, children, sidebarOpen, setSidebarOpen }: HeaderProps) {
    return (
        <div
            className='flex flex-row justify-between items-center h-16 w-full bg-gray-100'
        >
            <div className='flex flex-row items-center'>
                <Image
                    className='h-10 w-10 ml-4'
                    width={40}
                    height={40}
                    src={logo}
                    alt='logo'
                />
                <div className='ml-2 text-lg font-semibold'>
                    <Button
                        variant={'ghost'}
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                        <SidebarOpenIcon
                            className='h-6 w-6'
                        />
                    </Button>
                </div>
                <div className='ml-2 text-lg font-semibold'>
                    {children}
                </div>
            </div>
        </div>
    );
}
