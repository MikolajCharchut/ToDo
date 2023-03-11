import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { submitTask } from "../data-access/data-access";
import { writePriorityAlert, writeTaskAlert } from '../consts';

function CreateTask() {
    let navigate = useNavigate();
    const initialValues = {
        priority: "",
        task: "",
    };

    const validationSchema = Yup.object().shape({
        priority: Yup.string().required(writePriorityAlert),
        task: Yup.string().required(writeTaskAlert),
    });


    const onSubmit = (task) => {
        submitTask(task).then(() => {
            navigate('/');
        })
    };


    return (
        <div className="createTaskPage"> 
            <Formik 
            initialValues={initialValues} 
            onSubmit={onSubmit} 
            validationSchema={validationSchema}>
                <Form className="formContainer">
                    <label>Priorytet: </label>
                    <ErrorMessage name="priority" component="span" />
                    <Field 
                    autoComplete="off"
                    id="inputCreateTask" 
                    name="priority" 
                    placeholder="ważne/zwykłe/własne"
                    />

                    <label>Zadanie: </label>
                    <ErrorMessage name="task" component="span" />
                    <Field 
                    autoComplete="off"
                    id="inputCreateTask" 
                    name="task" 
                    placeholder="Wpisz zadanie"
                    />
                    <button type="submit"> Dodaj Zadanie </button>
                </Form>
            </Formik> 
        </div>
    );
}

export default CreateTask;
