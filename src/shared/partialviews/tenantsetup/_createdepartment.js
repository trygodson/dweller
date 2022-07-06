

import React, { useRef } from "react";


import * as Yup from "yup";
import { Form, Formik, useField } from "formik";
import Button from "@components/button";
import FormikForm from "@components/form-inputs/formik/customInputs";
import tenantService from "src/shared/hooks/api/tenantService";
const getFormProps = ({ ...props }) => {
    const phoneRegExp =
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  
    const initialValues = {
      name: "",
      description: "",
      
    };
  
    const validationSchema = Yup.object().shape({
      name: Yup.string()
        .min(3, "Department Name Should Be Given")
        .required("Department Name is Required"),
      description: Yup.string()
        .min(5, "Description must be more than 2 characters")
        .required("Address is required")

    });
  
    return {
      initialValues,
      validationSchema,
      ...props,
    };
  };

  
const _CreateDapartment=({ toggle,...props })=> {
    const modalRef = useRef();

    const { mutateAsync: createDepartment, isLoading } =
    tenantService.useCreateDepartmentService();
  async function handleSubmit(values, actions,) {
        const { name,description } = values;
        const payload = {
          name,
          description
        };
      
        try {
          const response = await createDepartment(payload);
          console.log({ response });
          toggle();
        } catch (error) {
          setError(error.message);
          console.log({ error, payload });
        }
      }
    
  return (
    
    <Formik
    {...getFormProps({
     onSubmit: handleSubmit,
    })}
  >
    {({ isSubmitting }) => {
      return (
        <Form>
          <div
            style={{ marginBottom: "10px" }}
            className="form-group"
          >
            <div className="row">
              <div className="col-md-12">
                <FormikForm.Input
                  label="Department Name"
                  name="name"
                  type="text"
                  placeholder=""
                />
              </div>
              <div className="col-md-12">
                <FormikForm.Input
                  label="Department Description"
                  name="description"
                  type="text"
                  placeholder=""
                />
              </div>
            </div>
          </div>
          

          <div className="form-group text-center">
            <Button
              isLoading={isLoading}
              disabled={isLoading}
              
              type="submit"
              style={{ width: "100%" }}
            >
              Add Department
            </Button>
          </div>

        </Form>
        
      );
    }}
  </Formik>
   
    
  );
}

export default _CreateDapartment;
