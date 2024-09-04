import { FaAngellist } from "react-icons/fa";

const Header = ()=>{
    return <div className="w-screen flex justify-center items-center h-28 bg-gradient-to-tr from-sky-200 30% via-orange-200 40% via-fuchsia-200 to-violet-400">
        <FaAngellist className="text-3xl text-purple-600"/>
        <h2 className="text-3xl font-semibold italic ">To do List</h2>
    </div>
}
export default Header;