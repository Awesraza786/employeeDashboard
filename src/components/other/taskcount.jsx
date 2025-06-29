

export function TaskCount(props) {
    console.log(props.data.id)
    return (
        <div className="d-flex mt-3">

            <div className="bg-primary w-25 count p-3 text-light">
                <div className="fs-2 fw-bold ">{props.data.taskCount.newTask}</div>
                <div className="fs-4 fw-bold mt-2 ">New Task</div>
            </div>
            <div className="bg-warning w-25 count p-3 text-light">
                <div className="fs-2 fw-bold ">{props.data.taskCount.active}</div>
                <div className="fs-4 fw-bold mt-2 ">Active Task </div></div>
            <div className="bg-success w-25 count p-3 text-light">
                <div className="fs-2 fw-bold ">{props.data.taskCount.completed}</div>
                <div className="fs-4 fw-bold mt-2 ">Completed Task</div>
            </div>
            <div className="bg-danger w-25 count p-3 text-light">
                <div className="fs-2 fw-bold ">{props.data.taskCount.failed}</div>
                <div className="fs-4 fw-bold mt-2 ">Failed Task</div>
            </div>
        </div>
    )
}