import Link from 'next/link'
import React from 'react'

const CustomButton = ({ containerStyle, text, href }: { containerStyle: string, text: string, href: string }) => {
    return (
        <Link href={href} className='group w-[300px] h-[50px] px-4 py-2 border hover:border-none hover:p-0 '>
            <span className='group-hover:hidden text-2xl'>
                {text}
            </span>
            <span className='hidden group-hover:flex text-2xl'>
                &lt;{text} /&gt;
            </span>
        </Link>
    )
}

export default CustomButton
