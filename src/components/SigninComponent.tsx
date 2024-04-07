import { useState } from "react";
import { SigninInput } from "@ankit2829/medium-common";
import { AuthHeader } from "./AuthHeader";
import { LabelledInput } from "./LabelledInput";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const SigninComponent = () => {
    const [postInputs, setPostInputs] = useState<SigninInput>({
        email: "",
        password: ""
    });
    const navigate = useNavigate();
    const url = import.meta.env.VITE_BACKEND_URL;
    async function sendRequest() {
        try {
            const res = await axios.post(`${url}/api/v1/user/signin`, postInputs);
            console.log(res);
            const json = await res.data;
            console.log(json.jwt);
            if (res.status != 200) {
                throw new Error("Invalid Email or Password");
            }

            localStorage.setItem('token', json.jwt);
            localStorage.setItem('name',json.name);
            localStorage.setItem('',json.id);
            navigate("/blogs");
        } catch (e) {
            console.log((e as Error).message);
        }
    }

    return (
        <div className="h-screen flex justify-center">
            <div className="flex justify-center flex-col px-10">
                <AuthHeader type={"signin"} />

                <div className="pt-10">
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

                <button type="button" onClick={sendRequest} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full">Sign In</button>

            </div>
        </div>
    )
}