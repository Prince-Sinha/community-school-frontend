import Header from "../components/Header"
import { NavLink } from "react-router-dom"
import QueryDialog from "../components/CreateQuestion"
export default function Ask(){
    return(
        <>
         <Header />
         <div className=" bg-black opacity-80">
         <div className="ml-40 mr-40 flex justify-around  border-t border-solid border-white border-opacity-50 items-center">
            <div>
               <NavLink className="pr-10 text-lg font-semibold text-white" to='/blogs'>Article</NavLink>
               <NavLink className="pl-10 text-lg font-semibold text-white"to='/ask'>Asked Doubt</NavLink>
            </div>
            <div>
             <QueryDialog />
            </div>
         </div>
         </div>
        </>
    )
}