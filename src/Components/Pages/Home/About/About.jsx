import React from 'react';
import aboutImg from '../../../../assets/images/about_us/parts.jpg'
import aboutImg2 from '../../../../assets/images/about_us/person.jpg'

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className=' md:w-1/2 relative'>
                    <img src={aboutImg2} className=" w-3/4 rounded-lg shadow-2xl" />
                    <img src={aboutImg} className="absolute w-1/2 rounded-lg shadow-2xl right-5 top-1/2 border-8 border-gray-500" />

                    </div>
                    <div className='md:w-1/2'>
                        <h1 className="text-5xl font-extrabold text-orange-600 mb-6">About Us</h1>
                        <h1 className="text-5xl font-bold">We are qualified & of experience in this field !!</h1>
                        <p className="py-6 px-4 text-gray-800">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <p className=" px-4 text-gray-800">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-warning  mt-4 hover:bg-orange-500 hover:text-slate-200">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;