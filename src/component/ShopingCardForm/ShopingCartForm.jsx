import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ErrorMessege, FormContainer } from './ShopingCartForm.styled';

const Deliveri = () => {
  const initialValues = {
    name: '',
    phone: '',
    email: '',
    address: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required(),
    phone: Yup.string().required(),
    email: Yup.string().email('Invalid email address').required(),
    address: Yup.string().required(),
  });

  const onSubmit = (values) => {
    // Handle form submission here
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <FormContainer onSubmit={formik.handleSubmit}>
        <div>
       
        <label htmlFor="address">Address:  {formik.errors.address && <ErrorMessege>{formik.errors.address}</ErrorMessege>}</label>
        <input
          type="text"
          id="address"
          name="address"
          onChange={formik.handleChange}
          value={formik.values.address}
        />
       
      </div>
      <div>
      
        <label htmlFor="email">Email: {formik.errors.email && <ErrorMessege>{formik.errors.email}</ErrorMessege>}</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
       
      </div>
      <div>
        <label htmlFor="phone">Phone: {formik.errors.phone && <ErrorMessege>{formik.errors.phone}</ErrorMessege>}</label>
        
        <input
          type="text"
          id="phone"
          name="phone"
          onChange={formik.handleChange}
          value={formik.values.phone}
        />
        
      </div>
      <div>
      
        <label htmlFor="name">Name: {formik.errors.name && <ErrorMessege>{formik.errors.name}</ErrorMessege>}</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
       
      </div>

      <button type="submit">Submit</button>
    </FormContainer>
  );
};


export default Deliveri