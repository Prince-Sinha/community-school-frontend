import { Link } from "react-router-dom";

export const AuthHeader = ({ type }: { type: "signup" | "signin" }) => {
    return (
        <div className="px-10">
            <div className="text-3xl font-bold">
                Create an account
            </div>
            <div className="text-sm text-center my-2 text-slate-500 font-normal">
                {type === 'signup' ? "Already have an account?" : "Don't have an account?"}
                <Link className="underline" to={type === 'signup' ? "/signin" : "/signup"}>
                    {type === 'signup' ? "Sign in" : "Sign up"}
                </Link>
            </div>
        </div>
    );
}