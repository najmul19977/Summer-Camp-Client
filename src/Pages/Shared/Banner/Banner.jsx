import React from 'react';
import { Parallax, Background } from 'react-parallax';
import background from '../../../assets/image-ex/banner.jpg'

const Banner = () => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={background}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div>
                <div className="hero h-[400px]" >
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Our Class</h1>
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                        </div>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Banner;