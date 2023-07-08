import React from 'react';
import banner1 from '../../../../assets/images/banner/1.jpg'
import banner2 from '../../../../assets/images/banner/2.jpg'
import banner3 from '../../../../assets/images/banner/3.jpg'
import banner4 from '../../../../assets/images/banner/4.jpg'


const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[600px] rounded-lg">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={banner1} className="w-full" />
                    <div className="absolute h-full bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] flex items-center pl-8">
                        <div className='space-y-2'>
                            <h1 className='text-7xl text-white font-bold w-2/3 md:w-1/3'>Affordable Price For Car  Servicing</h1>
                            <p className='text-slate-200'>Lorem ipsum dolor sit amet consectetur adipisicing <br />elit. Saepe alias doloremque similique dolores eveniet? Totam ad <br />molestias neque optio inventore!</p>

                            <div className='md:flex'>
                                <button className="btn btn-warning mb-4 md:mr-4">Warning</button> <br />
                                <button className="btn btn-outline btn-success">Secondary</button>
                            </div>
                        </div>
                    </div>


                    <div className="absolute flex justify-between transform -translate-y-1/2 right-0 bottom-0 mr-8">
                        <a href="#slide4" className="btn btn-circle mr-2 bg-orange-500 border-orange-500">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-orange-500 border-orange-500">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={banner2} className="w-full" />

                    <div className="absolute h-full bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] flex items-center pl-8">
                        <div className='space-y-2'>
                            <h1 className='text-7xl text-white font-bold w-2/3 md:w-1/3'>Affordable Price For Car  Servicing</h1>
                            <p className='text-slate-200'>Lorem ipsum dolor sit amet consectetur adipisicing <br />elit. Saepe alias doloremque similique dolores eveniet? Totam ad <br />molestias neque optio inventore!</p>

                            <div className='md:flex'>
                                <button className="btn btn-warning mb-4 md:mr-4">Warning</button> <br />
                                <button className="btn btn-outline btn-success">Secondary</button>
                            </div>
                        </div>
                    </div>


                    <div className="absolute flex justify-between transform -translate-y-1/2 right-0 bottom-0 mr-8">
                        <a href="#slide1" className="btn btn-circle mr-2 bg-orange-500 border-orange-500">❮</a>
                        <a href="#slide3" className="btn btn-circle  bg-orange-500 border-orange-500">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={banner3} className="w-full" />

                    <div className="absolute h-full bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] flex items-center pl-8">
                        <div className='space-y-2'>
                            <h1 className='text-7xl text-white font-bold w-2/3 md:w-1/3'>Affordable Price For Car  Servicing</h1>
                            <p className='text-slate-200'>Lorem ipsum dolor sit amet consectetur adipisicing <br />elit. Saepe alias doloremque similique dolores eveniet? Totam ad <br />molestias neque optio inventore!</p>

                            <div className='md:flex'>
                                <button className="btn btn-warning mb-4 md:mr-4">Warning</button> <br />
                                <button className="btn btn-outline btn-success">Secondary</button>
                            </div>
                        </div>
                    </div>


                    <div className="absolute flex justify-between transform -translate-y-1/2 right-0 bottom-0 mr-8">
                        <a href="#slide2" className="btn btn-circle mr-2 bg-orange-500 border-orange-500">❮</a>
                        <a href="#slide4" className="btn btn-circle  bg-orange-500 border-orange-500">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={banner4} className="w-full" />

                    <div className="absolute h-full bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] flex items-center pl-8">
                        <div className='space-y-2'>
                            <h1 className='text-7xl text-white font-bold w-2/3 md:w-1/3'>Affordable Price For Car  Servicing</h1>
                            <p className='text-slate-200'>Lorem ipsum dolor sit amet consectetur adipisicing <br />elit. Saepe alias doloremque similique dolores eveniet? Totam ad <br />molestias neque optio inventore!</p>

                            <div className='md:flex'>
                                <button className="btn btn-warning mb-4 md:mr-4">Warning</button> <br />
                                <button className="btn btn-outline btn-success">Secondary</button>
                            </div>
                        </div>
                    </div>


                    <div className="absolute flex justify-between transform -translate-y-1/2 right-0 bottom-0 mr-8">
                        <a href="#slide3" className="btn btn-circle mr-2 bg-orange-500 border-orange-500">❮</a>
                        <a href="#slide1" className="btn btn-circle  bg-orange-500 border-orange-500">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;