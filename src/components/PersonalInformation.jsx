import { useEffect, useState } from "react";
import { TfiSave } from "react-icons/tfi";
import { PiPencilFill } from "react-icons/pi";
import { BsExclamationCircle } from "react-icons/bs";
import axios from "axios";
import { url, headers } from "@/app/libs/api";
import useLoading from "@/utils/Loading";
import useConfirmation from "@/utils/ConfirmationHook";
import { useProfileData } from "@/app/libs/store";

const PersonalInformation = () => {
    const [edit, setEdit] = useState(true);
    const { loading, startLoading, stopLoading } = useLoading()
    const { showConfirmation, ConfirmationDialog } = useConfirmation();
    const { profileData, getProfileData } = useProfileData()
    const [editedValues, setEditedValues] = useState({
        name: "",
        phoneNumber: "",
        address: "",
        yearLevel: "",
        college: "",
    });

    useEffect(() => {
        setEditedValues({
            name: profileData.name,
            phoneNumber: profileData.phoneNumber,
            address: profileData.address,
            yearLevel: profileData.yearLevel,
            college: profileData.college,
        })
    }, [profileData])

    const handleInputChange = (field, value) => {
        setEditedValues((prevValues) => ({
            ...prevValues,
            [field]: value
        }));
    };

    const handleSubmit = async () => {
        setEdit(true);
        startLoading()
        try {
            const response = await
                axios.put(`${url}/api/studentAccount/${profileData.id}`,
                    { editedValues }, headers);
            getProfileData(profileData.id)
            stopLoading()
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        showConfirmation('Are you sure you want to save changes?', () => {
            handleSubmit()
        });
    };

    return (
        <div className="">
            <ConfirmationDialog />
            <div className="absolute text-lg -top-2 right-0">
                {edit &&
                    <button
                        onClick={() => setEdit(false)}
                        className="bg-amber-800 flex items-center text-white rounded-lg px-4"
                    >
                        <div className="md:flex hidden"><PiPencilFill size={55} /></div>
                        {profileData.id ? " Edit Info" : "Please Login"}
                    </button>
                }
            </div>
            <h2 className="font-semibold flex gap-2 py-1 items-center">
                Personal Information
                {!profileData.name && <div className="text-white rounded-full bg-yellow-600">
                    <BsExclamationCircle size={32} />
                </div>}
            </h2>
            <form className="md:text-lg  text-xs flex gap-4 ml-6" onSubmit={handleUpdate}>
                <div className="grid">
                    <label htmlFor="name">Name: </label>
                    <label htmlFor="college">College: </label>
                    <label htmlFor="address">Address: </label>
                    <label htmlFor="phoneNumber">Contact No.: </label>
                    <label htmlFor="yearLevel">Year Level: </label>
                </div>
                <div className="grid gap-1">
                    <input
                        value={editedValues.name === null ? "" : editedValues.name}
                        type="text"
                        readOnly={edit}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="border"
                        required
                    />
                    <select
                        disabled={edit}
                        onChange={(e) => handleInputChange("college", e.target.value)}
                        className="border"
                        required
                    >
                        <option value={editedValues.college === null ? "" : editedValues.college}>
                            {editedValues.college === null ? "Select college" : editedValues.college}</option>
                        <option value="CBA">CBA</option>
                        <option value="CIT">CIT</option>
                        <option value="COED">COED</option>
                        <option value="CICS">CICS</option>
                        <option value="COE">COE</option>
                    </select>
                    <input
                        value={editedValues.address === null ? "" : editedValues.address}
                        type="text"
                        readOnly={edit}
                        onChange={(e) => handleInputChange("address", e.target.value)}
                        className="border"
                        required
                    />
                    <input
                        value={editedValues.phoneNumber === null ? "" : editedValues.phoneNumber}
                        type="text"
                        readOnly={edit}
                        onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                        className="border"
                        required
                    />
                    <input
                        value={editedValues.yearLevel === null ? "" : editedValues.yearLevel}
                        type="text"
                        readOnly={edit}
                        onChange={(e) => handleInputChange("yearLevel", e.target.value)}
                        className="border"
                        required
                    />
                </div>
                <div className="flex items-center justify-center">
                    {!edit && (
                        <button disabled={loading} type="submit"
                            className={`${loading && 'bg-gray-600'} py-2 px-8 flex rounded-lg bg-blue-500`}>
                            <TfiSave size={35} /> SAVE
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default PersonalInformation;
