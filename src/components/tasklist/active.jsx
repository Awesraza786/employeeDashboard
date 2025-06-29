

export function ActiveTask(props) {
    return (
        <div>
            <div className=" bg-warning mx-3 rounded rounded-5 p-2 my-4" style={{ width: '300px', height: '300px' }} >
                <div className="d-flex justify-content-between p-3 text-light">
                    <h5 className="bg-danger p-2 rounded rounded-5">{props.data.category}</h5>
                    <h5 className="">{props.data.startDate}</h5>
                </div>
                <div className="ps-3">
                    <h3 className="text-light fw-bold">{props.data.taskTitle} </h3>
                    <p className="px-2 fs-6">{props.data.taskDescription}</p>
                </div>

                <div className="text-center">
                    <button className="btn btn-success me-2">Completed</button>
                    <button className="btn btn-danger">Failed</button>
                </div>
            </div>
        </div>
    )
}