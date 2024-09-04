import { GiSplitCross } from "react-icons/gi";

const BodyDetail = ({taskListData,counter,setTaskListData})=>{
    console.log(taskListData);
    console.log(counter);

    const handleOnClick = (count)=>{
        const filteredList = taskListData.filter((data)=> data.count!=count);
        console.log(filteredList);
        setTaskListData(filteredList);
    }

    return <>
            <div className="flex justify-between mx-6 mt-2 border-b-4">
                <div className="">
                    <h3 className="font-bold text-2xl m-3 text-zinc-400">Task Id: </h3>
                </div>
                <div>
                    <h3 className="font-bold text-2xl m-3 text-zinc-400">Task Name</h3>
                </div>
                <div>
                    <h3 className="font-bold text-2xl m-3 text-zinc-400">Task Description</h3>
                </div>
            </div>
            {taskListData &&
                taskListData.map((data,index)=>(
                <>
                <div key={data.count} className="relative flex justify-between mx-6 mt-4  border-2 mb-2 hover:bg-slate-200 rounded-md transition-all hover:scale-[.99]">
                <button className=" absolute block right-10 text-lg  w-4 -mr-10 -mt-3 text-red-300 hover:cursor-pointer  bg-white rounded-full" onClick={()=>handleOnClick(data.count)}><GiSplitCross /></button>
                <div className="p-3">
                    <h3 className="font-light text-lg mx-3 ">{index+1}</h3>
                </div>
                <div className="p-3">
                    <h3 className="font-light text-lg mx-3">{data?.task_name}</h3>
                </div>
                <div className="p-3">
                    <h3 className="font-light text-lg mx-6">{data?.task_desc}</h3>
                </div>
            </div>
            </>
            )
        
            )
}
        </>
}
export default BodyDetail;