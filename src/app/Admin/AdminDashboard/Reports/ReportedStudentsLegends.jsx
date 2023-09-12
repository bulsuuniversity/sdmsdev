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
                    <p>Student Count: {data && data.CBA}</p>
                </div>
            </div>
            <div className="grid justify-start">
                <label className="flex items-center gap-4">
                    <div><BsCircle size={20} className="bg-green-600 rounded-full" /></div>
                    <p>College of Industrial Technology</p>
                </label>
                <div className="flex justify-center">
                    <p>Student Count: {data && data.CIT}</p>
                </div>
            </div>
            <div className="grid justify-start">
                <label className="flex items-center gap-4">
                    <div><BsCircle size={20} className="bg-blue-600 rounded-full" /></div>
                    <p>College of Education</p>
                </label>
                <div className="flex justify-center">
                    <p>Student Count: {data && data.COED}</p>
                </div>
            </div>
            <div className="grid justify-start">
                <label className="flex items-center gap-4">
                    <div><BsCircle size={20} className="bg-gray-700 rounded-full" /></div>
                    <p>College of Informmation and Computing Sciences</p>
                </label>
                <div className="flex justify-center">
                    <p>Student Count: {data && data.CICS}</p>
                </div>
            </div>
            <div className="grid justify-start">
                <label className="flex items-center gap-4">
                    <div><BsCircle size={20} className="bg-amber-600 rounded-full" /></div>
                    <p>College of Engineering</p>
                </label>
                <div className="flex justify-center">
                    <p>Student Count: {data && data.COE}</p>
                </div>
            </div>
            <div className="grid justify-start">
                <label className="flex items-center gap-4">
                    <div><BsCircle size={20} className="bg-violet-700 rounded-full" /></div>
                    <p>Others</p>
                </label>
                <div className="flex justify-center">
                    <p>Student Count: {data && data.OthersCollege}</p>
                </div>
            </div>
        </div>
    );
}

export default UnregisteredLegends;