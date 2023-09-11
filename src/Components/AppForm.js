import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().required("Please Enter Your Email").email("Invalid email address"),
  dateOfBirth: Yup.date()
    .max(new Date(), 'Date of birth cannot be in the future')
    .required('Date of birth is required'),
  favoriteColor: Yup.string().required('Favorite color is required'),
  salary: Yup.number().required('Salary is required'),
});

const initialValues = {
  name: '',
  email: '',
  dateOfBirth: '',
  favoriteColor: '',
  salary: 0,
};

const AppForm = () => {
    const [selectedSalary, setSelectedSalary] = useState(initialValues.salary);

  const handleSubmit = (values) => {
    console.log('Form submitted with values:', values);
  };

  const handleSalaryChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    setSelectedSalary(newValue);
  };

  const formattedSalary = new Intl.NumberFormat('en-EU', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
  }).format(selectedSalary);

  return (
    <div className='form'>
      <h1>Create Profile</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div>
              <label htmlFor="name">Name</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div>
              <label htmlFor="dateOfBirth">Date of Birth</label>
              <Field type="date" id="dateOfBirth" name="dateOfBirth" />
              <ErrorMessage
                name="dateOfBirth"
                component="div"
                className="error"
              />
            </div>

            <div>
              <label htmlFor="favoriteColor">Favorite Color</label>
              <Field type="text" id="favoriteColor" name="favoriteColor" />
              <ErrorMessage
                name="favoriteColor"
                component="div"
                className="error"
              />
            </div>

            <div>
              <label htmlFor="salary">Salary</label>
              <span className="selected-salary">{formattedSalary}</span>
              <Field type="range" id="salary" name="salary" min="0" max="100000" value={selectedSalary} onChange={handleSalaryChange}/>
             
              <ErrorMessage name="salary" component="div" className="error" />
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AppForm;
