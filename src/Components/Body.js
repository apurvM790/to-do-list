import BodyInput from "./BodyInput";
import BodyDetail from "./BodyDetail";
import { useState } from "react";

const Body = ()=>{
    const [taskListData, setTaskListData] = useState([]);
    const [counter,setCounter] = useState(0);

    return <div className="w-screen">
        <BodyInput setTaskListData={setTaskListData} setCounter={setCounter} counter={counter}/>
        <BodyDetail  taskListData={taskListData} counter={counter} setTaskListData={setTaskListData}/>
    </div>
}
export default Body;