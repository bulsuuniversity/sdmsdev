import Image from "next/image";
import Slider from "react-slick";
import { forwardRef } from "react";
import { RiNavigationFill } from "react-icons/ri";

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
            <RiNavigationFill size={40} style={{rotate: '225deg'}}/>
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
            <RiNavigationFill size={40} style={{rotate: '225deg'}}/>
        </div>
    );
};

const Blog = ({ images }, ref) => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: <Next />,
        prevArrow: <Prev icon="➡️" />,
    };

    return (
        <div ref={ref} className="w-full md:px-0 px-12 md:h-[28rem] h-[11rem]">
            <div className="flex justify-center items-center">
                <div className="w-3/4 h-3/4  pt-5">
                    <Slider {...settings}>
                        {images && images.map((image, index) => (
                            <div key={index} className="w-3/4 md:h-[24rem] h-[8rem] object-cover overflow-hidden">
                                <Image src={image} alt={index} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

        </div>
    );
};

export default forwardRef(Blog);
