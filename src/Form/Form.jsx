import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import "./login.css";

const LoginForm = () => {
    const initialValues = {
        email: "",
        password: "",
        rememberMe: false,
    };
    const onSubmit = (values) => console.log(JSON.stringify(values, null, 4));
    const validationSchema = yup.object({
        email: yup
            .string()
            .email("Please enter a valid email address")
            .required("Email field is required"),
        password: yup.string().required("Password field is required"),
    });

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="mb-3 login  ">
                <label htmlFor="email" className="form-label">
                    email
                </label>
                <input
                    className="form-control"
                    type="email"
                    id="email"
                    name="email"
                    {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email && (
                    <div style={{ color: "red" }}>{formik.errors.email}</div>
                )}

                <label htmlFor="password" className="form-label">
                    password
                </label>
                <input
                    className="form-control"
                    type="password"
                    id="password"
                    name="password"
                    {...formik.getFieldProps("password")}
                />
                {formik.touched.password && formik.errors.password && (
                    <div style={{ color: "red" }}>{formik.errors.password}</div>
                )}

                <label htmlFor="rememberMe" className="form-label">
                    remember me
                </label>
                <input
                    type="checkbox"
                    name="rememberMe"
                    id="rememberMe"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    defaultChecked={formik.values.rememberMe}
                />
                <br />
                <button className="btn btn-primary">submit</button>
            </div>
            {/* <pre>{JSON.stringify(formik, null, 4)}</pre> */}
        </form>
    );
};
export default LoginForm;
