import { useNavigate } from "react-router-dom";
import {Avatar} from '@mui/material';

export default function Header(){
    const navigate = useNavigate();
    const handleSubmit1 = ()=>{
        navigate(`/signin`);
    }
    const handleSubmit2 = ()=>{
        navigate(`/signup`)
    }
    const handleSubmit3 = ()=>{
        localStorage.setItem('token','');
        navigate(`/signin`);
    }
    const token = localStorage.getItem('token');
    const name = localStorage.getItem('name');
    return (
        <>
          <div className="flex justify-between bg-black text-white items-center">
               <div className="pl-4 text-3xl font-bold">
                    <p>communitySchoo!</p>
               </div>
               <div className="pr-4 m-4 flex">
                   {token?<p className="pr-9 text-6lg font-semibold my-1">{name}</p>:<button className="border border-solid border-gray ml-2 mr-2 p-1 hover:bg-white hover:text-gray-700 rounded transition duration-300" onClick={handleSubmit1}>Log in</button>}
                   {token?<button><Avatar src="/broken-image.jpg" /></button>:<button className="border border-solid border-gray ml-2 mr-2 p-1 hover:bg-white hover:text-gray-700 rounded transition duration-300" onClick={handleSubmit2}>Sign up</button>}
                   {token?<button onClick={handleSubmit3} className="ml-9 border border-solid border-gray ml-2 mr-2 p-1 hover:bg-white hover:text-gray-700 rounded transition duration-300">Logout</button>:<></>}
               </div>
          </div>
          <div>

          </div>
        </>
    )
}