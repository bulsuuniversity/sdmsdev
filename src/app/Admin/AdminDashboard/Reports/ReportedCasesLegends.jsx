import { BsCircle } from "react-icons/bs";

const RegsiteredLegends = ({ data }) => {

    return (
        <div className="bg-white rounded-lg p-4 grid">
            <div className="grid justify-start">
                <label className="flex items-center gap-4">
                    <div><BsCircle size={20} className="bg-yellow-600 rounded-full" /></div>
                    <p>Cyberbullying</p>
                </label>
                <div className="flex justify-center">
                    <p>Count: {data && data.Cyberbullying}</p>
                </div>
            </div>
            <div className="grid justify-start">
                <label className="flex items-center gap-4">
                    <div><BsCircle size={20} className="bg-amber-600 rounded-full" /></div>
                    <p>Misinformation</p>
                </label>
                <div className="flex justify-center">
                    <p>Count:  {data && data.Misinformation}</p>
                </div>
            </div>
            <div className="grid justify-start">
                <label className="flex items-center gap-4">
                    <div><BsCircle size={20} className="bg-green-600 rounded-full" /></div>
                    <p>Verbal abuse</p>
                </label>
                <div className="flex justify-center">
                    <p>Count:  {data && data.Verbal}</p>
                </div>
            </div>
            <div className="grid justify-start">
                <label className="flex items-center gap-4">
                    <div><BsCircle size={20} className="bg-blue-600 rounded-full" /></div>
                    <p>Harrassment</p>
                </label>
                <div className="flex justify-center">
                    <p>Count:  {data && data.Harrassment}</p>
                </div>
            </div>
            <div className="grid justify-start">
                <label className="flex items-center gap-4">
                    <div><BsCircle size={20} className="bg-gray-700 rounded-full" /></div>
                    <p>Hateful Behavior</p>
                </label>
                <div className="flex justify-center">
                    <p>Count:  {data && data.Hateful}</p>
                </div>
            </div>
            <div className="grid justify-start">
                <label className="flex items-center gap-4">
                    <div><BsCircle size={20} className="bg-violet-700 rounded-full" /></div>
                    <p>Others</p>
                </label>
                <div className="flex justify-center">
                    <p>Count:  {data && data.Others}</p>
                </div>
            </div>
        </div>
    );
}

export default RegsiteredLegends;