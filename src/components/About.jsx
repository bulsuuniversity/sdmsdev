import { forwardRef } from "react";

const About = ({ data }, ref) => {
    return (
        <div ref={ref} className="bg-gray-600 h-max pb-12">
            <div className="text-white text-3xl flex justify-center p-6 font-serif font-cambria">
                About
            </div>
            <div className="text-center bg-white md:mx-32 mx-2 md:my-16 my-max p-4 md:p-10">
                {data ? data.about : 'BULACAN STATE UNIVERSITY (BulSU) is the premiere state-operated institution of higher learning in the Cenral Luzon region. It originated as a secondary school run by the Americans in 1904, and has now progressed into one of the biggest educational institutions in Region III. BulSU was converted from a college into a University in 1993 by virtue of Republic Act 7665. Since then, BulSU has grown by leaps and bounds, in terms of program offerings, faculty qualification, and student enrolment. It is the vision of the University to be a knowledge-generating institution globally recognized for excellent instruction, pioneering research, and responsive community engagement. The University has also maintained the existence of four external campuses within the province namely Meneses Campus, Hagonoy Campus, Sarmiento Campus, and Bustos Campus'}
            </div>
            <div className="text-center text-white my-10">
                &copy; Bulacan State University
            </div>
        </div>
    );
}

export default forwardRef(About);