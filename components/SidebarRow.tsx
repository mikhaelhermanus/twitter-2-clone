import React, { SVGProps } from 'react'

interface Props {
    Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
    title: string
}

function SidebarRow({ Icon, title }: Props) {
    return (
        <div className='group flex max-w-fit items-center cursor-pointer space-x-2 py-3 rounded-full px-4 hover:bg-gray-100 transition-all duration-200'>
            <Icon className='h-6 w-6' />
            <p className='hidden text-base group-hover:text-twitter md:inline-flex lg:text-xl'>{title}</p>
        </div>

    )
}

export default SidebarRow