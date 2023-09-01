import axios from "axios";
import { url, headers } from "@/app/libs/api";
import { useState } from "react";
import Image from "next/image";
import { IoMdCloseCircle } from "react-icons/io";
import ConfirmationModal from "./ConfirmationModal";
import useLoading from "./Loading";
import useConfirmation from "./ConfirmationHook";

const SelectImage = ({ handleCLick, profileData, getProfileData }) => {
    const [file, setFile] = useState(null)
    const { loading, startLoading, stopLoading } = useLoading()
    const { showConfirmation, ConfirmationDialog } = useConfirmation();

    const handlePictureChange = (e) => {
        const picture = e.target.files[0];
        if (picture) {
            const reader = new FileReader();
            reader.readAsDataURL(picture);
            reader.onloadend = () => {
                if (picture.type.startsWith("image/")) {
                    setFile(reader.result);
                } else {
                    setFile(null);
                }
            };
        }
    };

    const handleChangeProfile = async () => {
        startLoading()
        try {
            if (profileData.id && file) {
                await axios.put(`${url}/api/studentProfile/${profileData.id}`, {
                    file,
                    prevProfileImage: profileData.profilePublicId,
                }, { headers });
                getProfileData(profileData.id)
                handleCLick()
            }
        } catch (error) {
            console.error('An error occurred:', error);
        } finally {
            stopLoading();
        }
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        showConfirmation('Are you sure you want to save profile image?', () => {
            handleChangeProfile()
        });
    };

    return (
        <div>
            <ConfirmationModal>
                <ConfirmationDialog />
                <div className="relative  p-7">
                    <div className="absolute top-0 right-0">
                        <button onClick={() => handleCLick()}> <IoMdCloseCircle size={28} style={{ color: 'red' }} /></button>
                    </div>
                    <form onSubmit={handleUpdate} className="grid md:grid-cols-2 grid-cols-1 justify-center">
                        <div className="grid justify-center">
                            <div className="flex italic justify-center">Image Preview</div>
                            <div className="w-36 h-36 object-cover overflow-hidden rounded-full border-4 border-white mb-4">
                                {file && (
                                    <Image
                                        src={file}
                                        alt="Selected"
                                        width={600}
                                        height={600}
                                        className="object-cover"
                                        required
                                    />
                                )}
                            </div>
                        </div>
                        <div className="grid m-4 gap-2">
                            <div className="rounded-lg grid h-6 items-center justify-center bg-amber-600">
                                <label className="text-center" htmlFor="inputFile">Choose Image</label>
                                <input
                                    id="inputFile"
                                    type="file"
                                    className="invisible"
                                    onChange={handlePictureChange}
                                    accept="image/jpeg, image/png"
                                    required
                                />
                            </div>

                            <button disabled={loading} type="submit" className={`${loading ? "bg-gray-600" : "bg-green-400"} rounded-lg `}>UPLOAD</button>
                        </div>
                    </form>
                </div>

            </ConfirmationModal>
        </div>
    );
}

export default SelectImage;