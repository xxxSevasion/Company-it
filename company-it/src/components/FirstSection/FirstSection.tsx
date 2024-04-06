import React from 'react'
import CustomButton from '../CustomButton/CustomButton'

const FirstSection = () => {
    return (
        <section className='py-10 '>
            <video className='w-full opacity-50 absolute top-0' autoPlay loop src="/assets/videos/first-video-3.mp4"></video>
            <div className="relative container mx-auto">
                <div className="mt-[150px]">
                    <h1 className='h1 uppercase font-bold text-7xl'>
                        IT-Услуги для вашего бизнеса
                    </h1>
                    <CustomButton href={''} containerStyle='w-[200px] h-[60px]' text='Подробнее' />
                </div>
            </div>
        </section>
    )
}

export default FirstSection
