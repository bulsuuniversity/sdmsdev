import { SiGooglemaps } from "react-icons/si";
import { PiPhoneCallFill } from "react-icons/pi";
import { ImMail4 } from "react-icons/im";
import { forwardRef } from "react";

const Contact = ({ data }, ref) => {
    return (
        <div ref={ref} className="bg-gray-600 w-full pb-24 h-max">
            <div className="text-white text-3xl flex justify-center p-6 font-serif font-cambria">
                CONTACT US
            </div>
            <div className="flex justify-center items-center">
                <div className="flex md:p-12 p-4 bg-white flex-col gap-10">
                    <div className="flex items-center gap-4">
                        <SiGooglemaps size={50} className="text-red-800" />
                        <a href={`https://www.google.com/maps?q=<%=${data && data.address}%>`} target="_blank">
                            {!data ? "Guinhawa, City of Malolos, Bulacan" : data.address}</a>
                    </div>
                    <div className="flex items-center gap-4">
                        <PiPhoneCallFill size={50} className="text-red-800" />
                        <a href={`tel:${data && data.phoneNumber}`}>{!data ? "919-7800" : data.phoneNumber}</a>
                    </div>
                    <div className="flex items-center gap-4">
                        <ImMail4 size={50} className="text-red-800" />
                        <a href={`mailto:${data && data.phoneNumber}`}>
                            {!data ? "officeofthepresident@bulsu.edu.ph" : data.email}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default forwardRef(Contact);