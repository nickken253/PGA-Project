import React from 'react'

interface LayoutProps {
    children: React.ReactNode;
    title: String;
}

export const Layout = ({children, title}: LayoutProps) => {
    return (
        <div className='w-screen h-screen'>
            <div className='h-full w-full'>
                {children}
            </div>
        </div>
    )
}