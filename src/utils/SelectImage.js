import axios from "axios";
import { url, headers } from "@/app/libs/api";
import { useState } from "react";
import Image from "next/image";
import { IoMdCloseCircle } from "react-icons/io";
import ConfirmationModal from "./ConfirmationModal";

const SelectImage = ({ session, setProfile, handleCLick }) => {
    const [file, setFile] = useState(null)


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

    const handleChangeProfile = async (e) => {
        console.log('Clicked', session)
        e.preventDefault()
        try {
            if (session && file) {
                const response = await axios.put(`${url}/api/studentProfile/${session.id}`, {
                    file,
                    prevProfileImage: session.profilePublicId,
                }, { headers });
                console.log(response)
                setProfile(response.data.secure_url)
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    return (
        <div>
            <ConfirmationModal>
                <div className="relative  p-7">
                    <div className="absolute top-0 right-0">
                        <button onClick={() => handleCLick()}> <IoMdCloseCircle size={28} style={{ color: 'red' }} /></button>
                    </div>
                    <form onSubmit={handleChangeProfile} className="grid md:grid-cols-2 grid-cols-1 justify-center">
                        <div className="grid justify-center">
                            <div className="flex italic justify-center">Image Preview</div>
                            <div className="w-36 h-36 object-cover overflow-hidden rounded-full border-4 border-white mb-4">
                                {file && (
                                    <Image
                                        src={file && file}
                                        alt="Selected"
                                        width={600}
                                        height={600}
                                        objectFit="cover"
                                        required
                                    />
                                )}
                            </div>
                        </div>
                        <div className="grid m-4 gap-2">
                            <input
                                type="file"
                                className="rounded-lg bg-amber-600"
                                onChange={handlePictureChange}
                                accept="image/jpeg, image/png"
                                required
                            />
                            <button type="submit" className="rounded-lg bg-green-400">UPLOAD</button>
                        </div>
                    </form>
                </div>

            </ConfirmationModal>
        </div>
    );
}

export default SelectImage;