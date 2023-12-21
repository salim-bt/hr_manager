import React, { type ReactNode } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { SidebarCloseIcon } from 'lucide-react'

export type SideLink = {
    href: string;
    label: string;
    icon: ReactNode;
}

type sidebarProps = {
    links: SideLink[];
    sidebarOpen: boolean;
    setSidebarOpen: (open: boolean) => void;
}

export default function Sidebar({ links, sidebarOpen, setSidebarOpen }: sidebarProps) {
    return (
        <div
            className={`fixed inset-0 flex z-40 ${sidebarOpen ? "" : "hidden"}`
            } >i
            <div className="fixed inset-0">
                <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
            </div>
            <div
                className="relative flex-1 flex flex-col max-w-xs w-full bg-gray-800">
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <Button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600"
                        aria-label="Close sidebar">
                        <SidebarCloseIcon className="h-6 w-6 text-white" />
                    </Button>
                </div>
                <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                    <div className="flex-shrink-0 flex items-center px-4">
                        <Image height={90} width={90} className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-on-dark.svg" alt="Workflow" />
                    </div>
                    <nav className="mt-5 px-2 space-y-1">
                        {links.map((link, index) => (
                            <Link key={index} href={link.href}>
                                <span className="group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-white bg-gray-900 focus:outline-none focus:bg-gray-700 transition ease-in-out duration-150">
                                    {link.icon}
                                    {link.label}
                                </span>
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
            <div className="flex-shrink-0 w-14">
                {/* <!-- Force sidebar to shrink to fit close icon --> */}
            </div>
        </div>
    )
}
