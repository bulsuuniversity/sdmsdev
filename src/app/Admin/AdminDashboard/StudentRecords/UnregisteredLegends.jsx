import { BsCircle } from "react-icons/bs";

const UnregisteredLegends = ({ data }) => {
 
    return (
        <div className="bg-white rounded-lg p-4 grid">
            <div className="grid justify-start">
                <label className="flex items-center gap-4">
                    <div><BsCircle size={20} className="bg-yellow-600 rounded-full" /></div>
                    <p>College of Business Administration</p>
                </label>
                <div className="flex justify-center">
                    <p>Student Count: {data && data.unCBA}</p>
                </div>
            </div>
            <div className="grid justify-start">
                <label className="flex items-center gap-4">
                    <div><BsCircle size={20} className="bg-green-600 rounded-full"/></div>
                    <p>College of Industrial Technology</p>
                </label>
                <div className="flex justify-center">
                    <p>Student Count: {data && data.unCIT}</p>
                </div>
            </div>
            <div className="grid justify-start">
                <label className="flex items-center gap-4">
                    <div><BsCircle size={20} className="bg-blue-600 rounded-full"/></div>
                    <p>College of Education</p>
                </label>
                <div className="flex justify-center">
                    <p>Student Count: {data && data.unCOED}</p>
                </div>
            </div>
            <div className="grid justify-start">
                <label className="flex items-center gap-4">
                    <div><BsCircle size={20} className="bg-gray-700 rounded-full"/></div>
                    <p>College of Informmation and Computing Sciences</p>
                </label>
                <div className="flex justify-center">
                    <p>Student Count: {data && data.unCICS}</p>
                </div>
            </div>
            <div className="grid justify-start">
                <label className="flex items-center gap-4">
                    <div><BsCircle size={20} className="bg-amber-600 rounded-full"/></div>
                    <p>College of Engineering</p>
                </label>
                <div className="flex justify-center">
                    <p>Student Count: {data && data.unCOE}</p>
                </div>
            </div>
            <div className="grid justify-start">
                <label className="flex items-center gap-4">
                    <div><BsCircle size={20} className="bg-violet-600 rounded-full"/></div>
                    <p>Did not set up college</p>
                </label>
                <div className="flex justify-center">
                    <p>Student Count: {data && data.Others}</p>
                </div>
            </div>
        </div>
    );
}

export default UnregisteredLegends;