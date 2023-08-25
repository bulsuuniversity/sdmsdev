import { useState } from "react";
import { TfiSave } from "react-icons/tfi";
import { PiPencilFill } from "react-icons/pi";
import { BsExclamationCircle } from "react-icons/bs";

const PersonalInformation = () => {
    const [edit, setEdit] = useState(false);
    const [editedValues, setEditedValues] = useState({
        name: "Aaron Anablon",
        college: "sss",
        address: "Baguiinge, kainga /n",
        contactNum: "1-1069 /9",
        year: "2b /a"
    });

    const handleInputChange = (field, value) => {
        setEditedValues((prevValues) => ({
            ...prevValues,
            [field]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setEdit(false);
    };

    return (
        <div>
            <div className="absolute -top-2 right-0">
                {!edit && 
                    <button
                        onClick={() => setEdit(true)}
                        className="bg-amber-800 flex items-center text-white rounded-lg px-4"
                    >
                        <PiPencilFill size={55} /> EDIT INFO
                    </button>
               }
            </div>
            <h2 className="font-semibold flex gap-2 py-1 items-center">
                Personal Information
                <div className="text-white rounded-full bg-yellow-600">
                    <BsExclamationCircle size={32} />
                </div>
            </h2>
            <form className="font-medium text-lg grid grid-cols-3 ml-6" onSubmit={handleSubmit}>
                <div className="grid">
                    <label for="name">Name: </label>
                    <label for="college">College: </label>
                    <label for="address">Address: </label>
                    <label for="contactNum">Contact No.: </label>
                    <label for="year">Year Level: </label>
                </div>
                <div className="grid gap-1">
                    <input
                        value={editedValues.name}
                        type="text"
                        disabled={!edit}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="border"
                    />
                    <select
                        disabled={!edit}
                        onChange={(e) => handleInputChange("college", e.target.value)}
                        className="border"
                    >
                        <option value={editedValues.college} selected>{editedValues.college}</option>
                        <option value="CBA">CBA</option>
                        <option value="CIT">CIT</option>
                        <option value="CoED">CoED</option>
                        <option value="CICS">CICS</option>
                        <option value="COE">COE</option>
                    </select>
                    <input
                        value={editedValues.address}
                        type="text"
                        disabled={!edit}
                        onChange={(e) => handleInputChange("address", e.target.value)}
                        className="border"
                    />
                    <input
                        value={editedValues.contactNum}
                        type="text"
                        disabled={!edit}
                        onChange={(e) => handleInputChange("contactNum", e.target.value)}
                        className="border"
                    />
                    <input
                        value={editedValues.year}
                        type="text"
                        disabled={!edit}
                        onChange={(e) => handleInputChange("year", e.target.value)}
                        className="border"
                    />
                </div>
                <div className="flex items-center justify-center">
                    {edit && (
                        <button type="submit" className="p-4 flex rounded-lg bg-blue-500">
                            <TfiSave size={35} /> SAVE
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default PersonalInformation;
