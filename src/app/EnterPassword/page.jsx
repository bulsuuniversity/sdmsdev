"use client"

import AccountModal from "@/utils/AccountModal";
import { useState } from "react";
const page = () => {
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()

    return (
        <AccountModal>
            <div className="grid bg-white m-6">
                <div className="text-2xl font-bold">New Password</div>
                <div className="text-sm italic">Change your password</div>
                <input type="password"
                    value={password}
                    onChange={() => setPassword(e.target.value)}
                    placeholder="password" required />
                <input type="password"
                    placeholder="confirm password"
                    value={confirmPassword}
                    onChange={() => setConfirmPassword(e.target.value)}
                    required />
            </div>

        </AccountModal>
    );
}

export default page;