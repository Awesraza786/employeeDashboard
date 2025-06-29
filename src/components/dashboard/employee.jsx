import { useDrag, useDrop } from "react-dnd";
import { Header } from "../other/header";
import { TaskCount } from "../other/taskcount";
import { TaskList } from "../tasklist/tasklist";


export function Employee(props) {
    const { data, changeUser, onDrop, id, name } = props;

    // const [{ isDragging }, drag] = useDrag(() => ({
    //     type: 'ITEM',
    //     item: { id: props.id, name: props.name },
    //     collect: (monitor) => ({
    //         isDragging: !!monitor.isDragging(),
    //     }),
    // }));

    // const [{ isOver }, drop] = useDrop(() => ({
    //     accept: 'ITEM',
    //     drop: (item) => props.onDrop?.(item),
    //     collect: (monitor) => ({
    //         isOver: !!monitor.isOver(),
    //     }),
    // }));
    return (
        <div>
            <Header data={props.data} changeUser={props.changeUser} />
            <TaskCount data={props.data} />
        </div>
    )
}