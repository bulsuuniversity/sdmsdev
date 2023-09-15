import { BsCircle } from "react-icons/bs";

const Concerns = ({ data }) => {
    return (
        <div className="bg-white rounded-lg p-4 grid">
            <div className="grid justify-start">
                <label className="flex items-center gap-4">
                    <div><BsCircle size={20} className="bg-yellow-400 rounded-full" /></div>
                    <p>Depression</p>
                </label>
                <div className="flex justify-center">
                    <p>Student Count: {data && data.Depression}</p>
                </div>
            </div>
            <div className="grid justify-start">
                <label className="flex items-center gap-4">
                    <div><BsCircle size={20} className="bg-green-600 rounded-full" /></div>
                    <p>Anxiety</p>
                </label>
                <div className="flex justify-center">
                    <p>Student Count: {data && data.Anxiety}</p>
                </div>
            </div>
            <div className="grid justify-start">
                <label className="flex items-center gap-4">
                    <div><BsCircle size={20} className="bg-blue-600 rounded-full" /></div>
                    <p>Family Issues</p>
                </label>
                <div className="flex justify-center">
                    <p>Student Count: {data && data.Family}</p>
                </div>
            </div>
            <div className="grid justify-start">
                <label className="flex items-center gap-4">
                    <div><BsCircle size={20} className="bg-gray-300 rounded-full" /></div>
                    <p>Stress</p>
                </label>
                <div className="flex justify-center">
                    <p>Student Count: {data && data.Stress}</p>
                </div>
            </div>
            <div className="grid justify-start">
                <label className="flex items-center gap-4">
                    <div><BsCircle size={20} className="bg-amber-600 rounded-full" /></div>
                    <p>Social-phobia</p>
                </label>
                <div className="flex justify-center">
                    <p>Student Count: {data && data.Social}</p>
                </div>
            </div>
            <div className="grid justify-start">
                <label className="flex items-center gap-4">
                    <div><BsCircle size={20} className="bg-violet-600 rounded-full" /></div>
                    <p>Others</p>
                </label>
                <div className="flex justify-center">
                    <p>Student Count: {data && data.Others}</p>
                </div>
            </div>
        </div>
    );
}

export default Concerns;