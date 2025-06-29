import { useEffect } from "react"
import { ActiveTask } from "./active"
import { CompletedTask } from "./completedtask"
import { FaliedTask } from "./faildtask"
import { NewTask } from "./newtask"


export function TaskList(props) {
    useEffect(() => {
        console.log(props);
    }, [props])
    // console.log(props.data)
    return (
        <div className="w-100 d-flex flex-wrap  p-4  ">

            {
                props.data.tasks.map((comp, idx) => {
                    if (comp.active) {
                        return <ActiveTask data={comp} key={idx} />
                    };
                    if (comp.newTask) {
                        return <NewTask data={comp} key={idx} />
                    };
                    if (comp.completed) {
                        return <CompletedTask data={comp} key={idx} />
                    };
                    if (comp.failed) {
                        return <FaliedTask data={comp} key={idx} />
                    };
                }
                )
            }

        </div >
    )
}