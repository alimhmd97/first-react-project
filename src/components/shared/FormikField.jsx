import React from "react";
import { Field } from "formik";
import FormikErrorMessage from "./FormikErrorMessage";

const FormikField = ({ name, type, label }) => {
    return (
        <Field name={name}>
            {(formikField) => {
                return (
                    <>
                        <label htmlFor={name} style={{ display: "block" }}>
                            {label}
                        </label>

                        <input
                            className="form-control"
                            type={type}
                            id={name}
                            {...formikField.field}
                            defaultChecked={formikField.field.value}
                        />
                        <FormikErrorMessage name={name} />
                    </>
                );
            }}
        </Field>
    );
};

export default FormikField;
