import React, { useEffect } from "react";
import { FieldArray, Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Input from "./Input";

const validationSchema = yup.object({
    email: yup
        .string()
        .email("Please enter a valid email address")
        .required("Email field is required"),
    password: yup.string().required("Password field is required"),
    Repassword: yup.string().required("Password validation field is required"),
});

const Register = () => {
    const initialValues = {
        email: "",
        password: "",
        Repassword: "",
        rememberMe: false,
        hobbies: [""],
    };

    const onSubmit = (values) => console.log(JSON.stringify(values, null, 4));

    return (
        <>
            {/* <Input error={"ahmed"} /> */}
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {(formik) => {
                    return (
                        <Form>
                            <div style={{ padding: 20 }}>
                                <Field name="name">
                                    {(formikField) => {
                                        return (
                                            <>
                                                <label
                                                    htmlFor="email"
                                                    style={{ display: "block" }}
                                                >
                                                    name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="email"
                                                    {...formikField.field}
                                                />
                                                <ErrorMessage name="email">
                                                    {(errMessage) => {
                                                        return (
                                                            <div
                                                                style={{
                                                                    color: "red",
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
                                <Field name="email">
                                    {(formikField) => {
                                        return (
                                            <>
                                                <label
                                                    htmlFor="email"
                                                    style={{ display: "block" }}
                                                >
                                                    email
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    {...formikField.field}
                                                />
                                                <ErrorMessage name="email">
                                                    {(errMessage) => {
                                                        return (
                                                            <div
                                                                style={{
                                                                    color: "red",
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
                                <Field name="password">
                                    {(formikField) => {
                                        return (
                                            <>
                                                <label
                                                    htmlFor="password"
                                                    style={{ display: "block" }}
                                                >
                                                    password
                                                </label>
                                                <input
                                                    type="password"
                                                    id="password"
                                                    {...formikField.field}
                                                />
                                                <ErrorMessage name="password">
                                                    {(errMessage) => {
                                                        return (
                                                            <div
                                                                style={{
                                                                    color: "red",
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
                                <Field name="Repassword">
                                    {(formikField) => {
                                        return (
                                            <>
                                                <label
                                                    htmlFor="Repassword"
                                                    style={{ display: "block" }}
                                                >
                                                    password
                                                </label>
                                                <input
                                                    type="password"
                                                    id="Repassword"
                                                    {...formikField.field}
                                                />
                                                <ErrorMessage name="Repassword">
                                                    {(errMessage) => {
                                                        return (
                                                            <div
                                                                style={{
                                                                    color: "red",
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
                                <Field name="rememberMe">
                                    {(formikField) => {
                                        return (
                                            <>
                                                <label
                                                    htmlFor="rememberMe"
                                                    style={{ display: "block" }}
                                                >
                                                    remember me
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
                                //{" "}
                                <Field name="gender">
                                    {(formikField) => {
                                        return (
                                            <>
                                                <div className="">
                                                    <label
                                                        htmlFor="hobby"
                                                        className="w-50"
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
                                <button style={{ display: "block" }}>
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
