import Image from "next/image";
import Slider from "react-slick";
import { forwardRef, useState } from "react";
import { RiNavigationFill } from "react-icons/ri";
import { useEffect } from "react";
import axios from "axios";
import { url, headers } from "@/app/libs/api";

const Next = ({ className, style, onClick, }) => {
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                background: "transparent",
                color: 'gray',
                transform: 'scaleX(-1)',
                rotate: '270deg'
            }}
            onClick={onClick}
        >
            <RiNavigationFill size={40} style={{ rotate: '225deg' }} />
        </div>
    );
};

const Prev = ({ className, style, onClick }) => {
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                background: "transparent",
                color: 'gray',
                rotate: '90deg'
            }}
            onClick={onClick}
        >
            <RiNavigationFill size={40} style={{ rotate: '225deg' }} />
        </div>
    );
};

const Blog = ({ images }, ref) => {
    const [carousel, setCarousel] = useState()
    useEffect(() => {
        handleGetImages()
    }, [])

    const handleGetImages = async () => {
        try {
            const response = await axios.get(`${url}/api/HomeCarousel`, { headers });
            setCarousel(response.data)
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <Next />,
        prevArrow: <Prev icon="➡️" />,
    };

    return (
        <div ref={ref} className="w-full md:px-0 px-12 md:h-[28rem] h-[11rem]">
            <div className="flex justify-center items-center">
                <div className="w-3/4 h-3/4  pt-5">
                    <Slider {...settings}>
                        {carousel ?
                            carousel.map((image, index) => (
                                <div key={index} className="bg-red-500 grid items-center justify-center">
                                    <div className="m-auto h-[28rem] overflow-hidden object-cover w-[28rem]">
                                        <Image src={image.image} width={900} height={500} className="mt-6 object-cover" alt={index} />
                                    </div>
                                </div>
                            ))
                            :
                            images.map((image, index) => (
                                <div key={index} className="bg-red-500 grid items-center justify-center">
                                    <div className="m-auto h-[28rem] overflow-hidden object-cover w-[28rem]">
                                        <Image src={image} width={900} height={500} className="object-cover" alt={index} />
                                    </div>
                                </div>
                            ))}
                    </Slider>
                </div>
            </div>

        </div>
    );
};

export default forwardRef(Blog);
