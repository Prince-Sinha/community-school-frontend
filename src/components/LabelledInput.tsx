import { ChangeEvent } from "react";

interface LabelledInputType {
    id: string;
    label: string;
    placeholder: string;
    type?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const LabelledInput = ({ id, label, placeholder, type, onChange }: LabelledInputType) => {
    return (
        <div className="mb-5">
            <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
            <input type={type || "text"} id={id} onChange={onChange} className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400 text-black" placeholder={placeholder} required />
        </div>
    );
}