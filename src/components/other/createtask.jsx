import { useFormik } from "formik"
import { useEffect, useState } from "react";
import * as yup from 'yup'

export function CreateTask() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const storedEmployees = JSON.parse(localStorage.getItem('employee'));
        setEmployees(storedEmployees || []);
    }, []);
    const formik = useFormik({
        initialValues: {
            taskTitle: '',
            startDate: '',
            TaskAssign: '',
            category: '',
            taskDescription: '',
            active: false,
            newTask: true,
            completed: false,
            failed: false

        },
        validationSchema: yup.object({
            taskTitle: yup.string().required("Title Must Required").min(4, "Title Must Grater Then 4 Letter"),
            TaskAssign: yup.string().required("Assign Required"),
            category: yup.string().required('Category Required'),
            taskDescription: yup.string().required('Description')
        }),
        // onSubmit: (task => {
        //     const data = JSON.parse(localStorage.getItem('employee'))
        //     data.map(emp => {
        //         if (formik.values.TaskAssign === emp.firstName) {
        //             emp.tasks.push(task);
        //             emp.taskCount.newTask += 1;
        //             // console.log(emp)
        //         }
        //         return emp;
        //     })
        //     localStorage.setItem('employee', JSON.stringify(data))
        // })
        onSubmit: (task) => {
            const updatedEmployees = employees.map(emp => {
                if (formik.values.TaskAssign === emp.firstName) {
                    emp.tasks.push(task);
                    emp.taskCount.newTask += 1;
                }
                return emp;
            });

            // Update localStorage
            localStorage.setItem('employee', JSON.stringify(updatedEmployees));

            // Update state to trigger re-render
            setEmployees(updatedEmployees);
            alert("Added Successfully....");

            // Optionally clear the form
            formik.resetForm();
        },
    })


    return (
        <>
            <div >
                <form action="" onSubmit={formik.handleSubmit} className="m-3 row bg-dark text-light p-3">
                    <div className="col-6 pe-5">
                        <dl>
                            <dt>Task Title</dt>
                            <dd className="my-2"><input type="text" placeholder="Enter Task Title" className="bg-transparent form-control lField" name="taskTitle" onChange={formik.handleChange} id="" /></dd>
                            <dd className="text-danger">{formik.errors.taskTitle}</dd>


                            <dt>Date</dt>
                            <dd className="my-2"><input type="date" onChange={formik.handleChange} className="bg-transparent text-white form-control " name="startDate" id="" /></dd>
                            <dd className="text-danger">{formik.errors.TaskDate}</dd>

                            <dt>Assign TO</dt>
                            <dd className="my-2"><input type="text" onChange={formik.handleChange} placeholder="Enter Employee Name" className="bg-transparent form-control lField" name="TaskAssign" id="" /></dd>
                            <dd className="text-danger">{formik.errors.TaskAssign}</dd>


                            <dt>Category</dt>
                            <dd className="my-2"><input type="text" onChange={formik.handleChange} placeholder="Enter Category (design,developer..)" className="bg-transparent form-control lField" name="category" id="" /></dd>
                            <dd className="text-danger">{formik.errors.category}</dd>

                        </dl>
                    </div>
                    <div className="col-6 ps-5 mt-2">
                        <dt>Description</dt>
                        <dd><textarea name="taskDescription" onChange={formik.handleChange} className="bg-transparent text-danger p-2 mt-2" rows='9' cols='50' id=""></textarea></dd>
                        <dd className="text-danger">{formik.errors.taskDescription}</dd>
                        <div>
                            <button className="btn btn-success w-75" type="submit">Create Task</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}