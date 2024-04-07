import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignupInput } from "@ankit2829/medium-common";
import { AuthHeader } from "./AuthHeader";
import { LabelledInput } from "./LabelledInput";
import axios from "axios";

export const SignupComponent = () => {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        email: "",
        password: ""
    });
    const url = import.meta.env.VITE_BACKEND_URL;
    async function sendRequest() {
        try {
            const res = await axios.post(`${url}/api/v1/user/signup`, postInputs);
            const json = await res.data;
            console.log(json.jwt);
            navigate("/signin")
        } catch (e) {
            alert("Error while signing up");
        }
    }

    return (
        <div className="h-screen flex justify-center">
            <div className="flex justify-center flex-col px-10">
                <AuthHeader type={"signup"} />
                
                <div className="pt-10">
                    <LabelledInput id={"name"} label={"Name"} placeholder={"Full Name"} onChange={(e) => {
                        setPostInputs(c => ({
                            ...c,
                            name: e.target.value
                        }))
                    }} />

                    <LabelledInput id={"email"} label={"Email"} placeholder={"Email"} type={"email"} onChange={(e) => {
                        setPostInputs(c => ({
                            ...c,
                            email: e.target.value
                        }))
                    }} />
                    <LabelledInput id={"password"} label={"Password"} placeholder={"Password"} type="password" onChange={(e) => {
                        setPostInputs(c => ({
                            ...c,
                            password: e.target.value
                        }))
                    }} />
                </div>

                <button type="button" onClick={sendRequest} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full">Sign Up</button>

            </div>
        </div>
    )
}

