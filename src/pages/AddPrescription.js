import React, { Fragment, useState, useContext } from 'react';
import * as Yup from 'yup';
import { Form, Formik, Field } from 'formik';
import GradientBar from '../components/common/GradientBar';
import PageTitle from '../components/common/PageTitle';
import Card from '../components/common/Card';
import AvatarLogo from '../components/AvatarLogo';
import FormInput from '../components/FormInput';
import Label from '../components/common/Label';
import GradientButton from '../components/common/GradientButton';
import { FetchContext } from '../context/FetchContext';
import FormSuccess from '../components/FormSuccess';
import FormError from '../components/FormError';
import { Redirect } from 'react-router-dom';

const PrescriptionSchema = Yup.object().shape({
  name: Yup.string().required('Prescription name MUST be provided'),
  usageFormular: Yup.string().required('Please provide Usage Formular')
})

const AddPrescription = () => {
  const fetchContext = useContext(FetchContext);
  const [loading, setLoading] = useState(false);
  const [prescription, setPrescription] = useState([]);
  const [successMessage, setSuccessMessage] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [redirectOnAdding, setRedirectOnAdding] = useState(false);

  const submitCredentials = async prescriptionDetails => {
    try {
      setLoading(true)
      const { data } = await fetchContext.authAxios.post('add-prescription', prescriptionDetails);
      setPrescription([...prescription])
      setSuccessMessage(data.message)
      setErrorMessage(null)
      setTimeout(() => {
        setRedirectOnAdding(true)
      }, 1000)
    } catch (err) {
      const { data } = err.response;
      setSuccessMessage(null);
      setErrorMessage(data.message)
    }
  }
  return (
    <Fragment>
      <PageTitle title="Add Prescription" />
      {successMessage && <FormSuccess text={successMessage} />}
      {errorMessage && <FormError text={errorMessage} />}
      {redirectOnAdding && <Redirect to="/dashboard" />}
      <section className="w-full sm:w-1/2 h-screen m-auto p-8 sm:pt-10">
        <GradientBar />
        <Card>
          <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full">
              <div className="w-32 m-auto mb-6">
                <AvatarLogo />
              </div>
            </div>
            <div className="w-full">
              <Formik
                initialValues={{
                  name: '',
                  usageFormular: ''
                }}
                onSubmit={values => submitCredentials(values)}
                validationSchema={PrescriptionSchema}>
                {() => (
                  <Form className="mt-8">
                    <div>
                      <div className="mb-2">
                        <div className="mb-1">
                          <Label text="Prescription Name" />
                        </div>
                        <FormInput
                          name="name"
                          type="text"
                          placeholder="Prescription Name"
                        />
                      </div>
                      <div>
                        <div className="mb-1">
                          <Label text="Usage Formular" />
                        </div>
                        <Field
                          className="border border-gray-300 rounded p-1 w-full h-56 mb-2"
                          name="usageFormular"
                          component="textarea"
                          placeholder="Usage Formular"
                        />
                      </div>
                      <GradientButton
                        type="submit"
                        text="Add Prescription"
                        loading={loading} />
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </Card>
      </section>
    </Fragment>
  )
}

export default AddPrescription;