import { useContext } from "react"
import { userContext } from "../../context/authcontext"

export function AllTask() {


    const taskdata = useContext(userContext);

    return (
        <div className="bg-dark p-2 mt-1 mx-3 " >
            <div>
                <div className="bg-danger  border border-2 border-primary d-flex justify-content-between p-2 rounded-3 mt-3 rounded">
                    <div>Employee Name</div>
                    <div>New Task</div>
                    <div>Active Task</div>
                    <div>Field Task</div>
                    <div>Complete Task</div>
                </div>
            </div>

            <div className="alltask" style={{ height: '160px', overflow: 'auto', }}>
                {
                    taskdata.employee.map((imp, idx) =>
                        <div className="bg-transparent border border-2 border-primary d-flex justify-content-between p-2 rounded-3 mt-3 rounded" key={idx}>
                            <div>{imp.firstName}</div>
                            <div className="text-primary">{imp.taskCount.newTask}</div>
                            <div className="text-warning">{imp.taskCount.active}</div>
                            <div className="text-danger">{imp.taskCount.failed}</div>
                            <div className="text-success">{imp.taskCount.completed}</div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}