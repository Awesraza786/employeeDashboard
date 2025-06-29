import { useFormik } from "formik"
import * as yup from "yup"
export function Login({ handleLogin }) {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: yup.object({
            email: yup.string().required('Email Required').matches(/\w{4,40}@gmail.com/, "Email Invalid.. @gmail.com"),
            password: yup.string().required('Password Required').min(8, "Password Must be 8 letter,s")
        }),
        onSubmit: data => {
            handleLogin(data.email, data.password)
        }
    })

    return (
        <div>
            <div className="d-flex bg-light justify-content-center align-items-center" style={{ height: '100vh' }}>
                <form onSubmit={formik.handleSubmit} className="bg-dark border border-2 border-success rounded rounded-4 p-5">
                    <h2 className="text-dark m-1 mb-3 bg-light border border-3 border-success border-secondary p-2 rounded rounded-4 bi bi-person-fill"> Login Form</h2>
                    <div className="text-light">
                        <label htmlFor="email">Email</label>
                        <div>
                            <input type="email" className="form-control my-2 bg-transparent lField text-light border border-1 border-success " onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Enter Email" name="email" id="txtEmail" />
                            <div className="text-danger">
                                {formik.errors.email}
                            </div>
                        </div>
                    </div>
                    <div className="text-light">
                        <label htmlFor="password">Password</label>
                        <div>
                            <input type="password" className="form-control bg-transparent my-2 lField text-light border border-1 border-success " onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Enter Password" name="password" id="txtPassword" />
                            <div className="text-danger">
                                {formik.errors.password}
                            </div>
                        </div>
                    </div>
                    <button className="btn w-100 mt-3 btn-success" type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}