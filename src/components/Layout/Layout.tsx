import React from 'react'

interface LayoutProps {
    children: React.ReactNode;
    title: String;
}

export const Layout = ({ children, title }: LayoutProps) => {
    return (
        <div>
            <h1>{title}</h1>
            <div>
                {children}
            </div>
        </div>
    )
}
