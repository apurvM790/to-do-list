import { useRef } from "react";


const BodyInput = ({setTaskListData,setCounter,counter})=>{
    var taskName = useRef();
    var taskDescription = useRef();

    const handleOnClick = ()=>{
        setTaskListData((prevList)=> [...prevList, {"task_name":taskName.current.value,"task_desc":taskDescription.current.value,"count":counter}]);
        // taskName.current.value = "";
        // taskDescription.current.value = "";
        setCounter(counter+1);
    }
    
    

    return <div className="flex justify-between mx-6 border-b-4">
        <div className="m-4">
            <label for="task-name" className="block text-sm ml-[25px] mt-3 -mb-4 sticky bg-white rounded-md w-[70px] animate-bounce -z-5"> Task Name</label>
            <input ref={taskName} id="task-name" className="p-2 m-2 bg-slate-100 shadow-lg pt-3 rounded-lg border-fuchsia-300 border-2"  placeholder="ex: play game"/>
        </div>
        <div className="m-4">
            <label for="task-name" className="block text-sm ml-[25px] mt-3 -mb-4 sticky bg-white rounded-md w-[100px] animate-bounce -z-5"> Task Description</label>
            <input ref={taskDescription} id="task-name" className="p-2 m-2 bg-slate-100 shadow-lg pt-3 rounded-lg border-fuchsia-300 border-2"  placeholder="ex: play cricket game in field"/>
        </div>
        <div className="m-5">
            <button className="px-4 py-2 m-4 text-xl font-semibold shadow-xl rounded-lg border-rose-400 border-2 bg-cyan-500 text-white shadow-cyan-200 hover:bg-gradient-to-tl from-green-200 via-red-200
             to-yellow-200 transition-all hover:scale-95 hover:text-gray-500 " onClick={handleOnClick}>Add Task</button>
        </div>
    </div>
}

export default BodyInput;