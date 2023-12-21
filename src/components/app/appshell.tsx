"use client";
import React from 'react'
import { type ReactNode } from "react";
import Sidebar from './sidebar';
import { type SideLink } from './sidebar';
import { BookHeart, BookTemplate } from "lucide-react";
import Header from './header';
export type ShellProps = {
    children: ReactNode;
};

export default function AppShell({ children }: ShellProps) {

    const links: SideLink[] = [
        { href: "/", label: "Home", icon:<BookHeart /> },
        { href: "/about", label: "About", icon: <BookTemplate /> },
    ];
    const [sidebarOpen, setSidebarOpen] = React.useState(false);
    return (
        <div
            className='flex flex-col h-screen w-screen'
        >
            <div>
                <Header
                    logo="/logo.svg"
                    children={<div>My App</div>}
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                />
            </div>
            <div>
                <div>
                    <Sidebar
                      links={links}
                      sidebarOpen={sidebarOpen}
                      setSidebarOpen={setSidebarOpen}
                    />
                </div>
                <div>{children}</div>
            </div>
        </div>
    );
}

