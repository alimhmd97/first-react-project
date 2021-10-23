import { FieldArray, Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

import FormikField from "../shared/FormikField";

const validationSchema = yup.object({
    email: yup
        .string()
        .email("Please enter a valid email address")
        .required("Email field is required"),
    password: yup.string().required("Password field is required"),
    Repassword: yup.string().when("password", {
        is: (val) => (val && val.length > 0 ? true : false),
        then: yup
            .string()
            .oneOf([yup.ref("password")], "Both password need to be the same"),
    }),
});

const Register = () => {
    const initialValues = {
        name: "",
        email: "",
        password: "",
        Repassword: "",
        rememberMe: false,
        hobbies: [""],
        gender: ""
    };

    const onSubmit = (values) => console.log(JSON.stringify(values, null, 4));

    return (
        <>

            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {(formik) => {
                    return (
                        <Form>
                            <div className="form w-50 m-auto" style={{ padding: 20 }}>

                                <Field name="name">
                                    {(formikField) => {
                                        return (
                                            <>
                                                <label
                                                    htmlFor="email"
                                                    style={{ display: "block" }}
                                                    className="form-label"
                                                >
                                                    name
                                                </label>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    id="name"
                                                    {...formikField.field}
                                                />
                                                <ErrorMessage name="email">
                                                    {(errMessage) => {
                                                        return (
                                                            <div
                                                                style={{
                                                                    color: "gold",
                                                                }}
                                                            >
                                                                {errMessage}
                                                            </div>
                                                        );
                                                    }}
                                                </ErrorMessage>
                                            </>
                                        );
                                    }}
                                </Field>
                                <FormikField
                                    label="email"
                                    name="email"
                                    type="email"
                                />
                                <FormikField
                                    label="password"
                                    name="password"
                                    type="password"
                                />
                                <Field name="Repassword">
                                    {(formikField) => {
                                        return (
                                            <>
                                                <label
                                                    className="form-label"
                                                    htmlFor="Repassword"
                                                    style={{ display: "block" }}
                                                >
                                                    password confirmation
                                                </label>
                                                <input
                                                    className="form-control"
                                                    type="password"
                                                    id="Repassword"
                                                    {...formikField.field}
                                                />
                                                <ErrorMessage name="Repassword">
                                                    {(errMessage) => {
                                                        return (
                                                            <div
                                                                style={{
                                                                    color: "gold",
                                                                }}
                                                            >{errMessage}
                                                            </div>
                                                        );
                                                    }}
                                                </ErrorMessage>
                                            </>
                                        );
                                    }}
                                </Field>
                                <Field name="gender">
                                    {(formikField) => {
                                        return (
                                            <>
                                                <label htmlFor="gender" style={{ display: "block" }}>
                                                    Gender
                                                </label>
                                                <select id="gender" {...formikField.field}>
                                                    <option value="" label="Choose your gender" />
                                                    <option value="male" label="Male" />
                                                    <option value="female" label="Female" />
                                                </select>
                                                <ErrorMessage name="gender">
                                                    {(errMessage) => {
                                                        return (
                                                            <div style={{ color: "red" }}>{errMessage}</div>
                                                        );
                                                    }}
                                                </ErrorMessage>
                                            </>
                                        );
                                    }}
                                </Field>
                                <Field name="rememberMe">
                                    {(formikField) => {
                                        return (
                                            <>
                                                <label
                                                    htmlFor="rememberMe"
                                                    style={{ display: "block" }}
                                                    className="form-label"
                                                >
                                                    active
                                                </label>
                                                <input

                                                    type="checkbox"
                                                    id="rememberMe"
                                                    defaultChecked={
                                                        formikField.field.value
                                                    }
                                                    {...formikField.field}
                                                />
                                            </>
                                        );
                                    }}
                                </Field>

                                <Field name="hobbies">
                                    {(formikField) => {
                                        return (
                                            <>
                                                <div className="">
                                                    <label

                                                        htmlFor="hobby"
                                                        className="form-label  "
                                                        style={{
                                                            display: "block",
                                                        }}
                                                    >
                                                        hobbies
                                                    </label>
                                                    <FieldArray name="hobbies">
                                                        {({
                                                            push,
                                                            remove,
                                                            form: {
                                                                values: {
                                                                    hobbies,
                                                                },
                                                            },
                                                        }) => {
                                                            return (
                                                                <div>
                                                                    {hobbies.map(
                                                                        (
                                                                            hobby,
                                                                            i
                                                                        ) => (
                                                                            <div
                                                                                key={
                                                                                    i
                                                                                }
                                                                            >
                                                                                <Field
                                                                                    name={`hobbies[${i}]`}
                                                                                />

                                                                                <button
                                                                                    className="btn btn-primary"
                                                                                    type="button"
                                                                                    onClick={() =>
                                                                                        push(
                                                                                            ""
                                                                                        )
                                                                                    }
                                                                                >
                                                                                    +
                                                                                </button>
                                                                                {i >
                                                                                    0 && (
                                                                                        <button
                                                                                            className="btn btn-danger"
                                                                                            type="button"
                                                                                            onClick={() =>
                                                                                                remove(
                                                                                                    i
                                                                                                )
                                                                                            }
                                                                                        >
                                                                                            -
                                                                                        </button>
                                                                                    )}
                                                                            </div>
                                                                        )
                                                                    )}
                                                                </div>
                                                            );
                                                        }}
                                                    </FieldArray>
                                                </div>
                                            </>
                                        );
                                    }}
                                </Field>
                                <button style={{ display: "block" }}
                                    className="btn btn-primary m-auto mt-3">
                                    submit
                                </button>
                            </div>
                        </Form>
                    );
                }}
            </Formik>
        </>
    );
};

export default Register;
