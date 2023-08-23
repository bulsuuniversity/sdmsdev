import { SiGooglemaps } from "react-icons/si";
import { PiPhoneCallFill } from "react-icons/pi";
import { ImMail4 } from "react-icons/im";
import { forwardRef } from "react";

const Contact = (props, ref) => {
    return (
        <div ref={ref} className="bg-gray-600 w-full">
            <div className="text-white text-3xl flex justify-center p-6 font-serif font-cambria">
                CONTACT US
            </div>
            <div className="flex justify-center items-center">
                    <div className="flex md:p-12 p-4 bg-white flex-col gap-10">
                        <div className="flex items-center gap-4">
                              <SiGooglemaps size={50} className="text-red-800"/>
                              Bustos, Bulacan
                        </div>
                         <div className="flex items-center gap-4">
                              <PiPhoneCallFill size={50} className="text-red-800"/>
                            0917-547-5551
                        </div>
                        <div className="flex items-center gap-4">
                              <ImMail4 size={50} className="text-red-800"/>
                            officeofthepresident@bulsu.edu.ph
                        </div>
                </div>
            </div>
        </div>
    );
}

export default forwardRef(Contact);