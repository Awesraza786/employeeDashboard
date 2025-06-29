import { AllTask } from "../other/alltask";
import { CreateTask } from "../other/createtask";
import { Header } from "../other/header";


export function Admin(props) {
    return (
        <div className="bg-black text-white">
            <Header changeUser={props.changeUser} />
            <CreateTask />
            <AllTask />
        </div>
    )
}