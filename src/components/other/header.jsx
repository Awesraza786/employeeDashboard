import { useEffect, useState } from "react";

export function Header(props) {

    const [user, setUser] = useState('')

    useEffect(() => {
        if (props.data && props.data.firstName) {
            setUser(props.data.firstName);
        } else {
            setUser('Admin');
        }
    }, [props.data]);

    function handleLogOut() {
        // console.log(props.changeUser === "")
        props.changeUser("");
    }

    return (
        <div className="p-3">
            <div className="d-flex justify-content-between align-items-end">
                <div>
                    <span className="d-block fs-3 ">Hello !</span>
                    <span className="fs-1 fw-bold">{user} <span className="bi-emoji-sunglasses-fill text-warning">.</span></span>
                </div>
                <button className="btn btn-danger p-2 px-5" onClick={handleLogOut}>Log Out</button>
            </div>
        </div>
    )
}