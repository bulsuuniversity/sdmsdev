import { forwardRef } from "react";

const About = ({ data }, props, ref) => {
    return (
        <div ref={ref} className="bg-gray-600 h-max my-12">
            <div className="text-white text-3xl flex justify-center p-6 font-serif font-cambria">
                About
            </div>
            <div className="text-center bg-white md:mx-32 mx-2 md:my-16 my-max p-4 md:p-10">
                {data.about}
            </div>
            <div className="text-center text-white my-10">
                &copy; Bulacan State University
            </div>
        </div>
    );
}

export default forwardRef(About);