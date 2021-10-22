import { Field, FieldArray } from "formik";
const FieldArray = (name) => {
    return <div>
         {/* <FieldArray name="hobbies">
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
 ) }
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
    </div>}