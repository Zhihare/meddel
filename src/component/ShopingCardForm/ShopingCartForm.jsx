import React, { useEffect, useState } from 'react';
import { Bounce, toast } from 'react-toastify';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, ErrorMessege, FormContainer } from './ShopingCartForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectAddPreparation } from '../../redax/catalogSelector';
import { addOrder } from '../../redax/catalogThank';
import { clearOrderCart } from '../../redax/catalogSlice';
import 'react-toastify/dist/ReactToastify.css';

const Deliveri = () => {
    const notify = () => toast('👌 Your order has been placed!',
     {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });


    const dispatch = useDispatch();
    const [delivery , setDelivery] = useState([]);
   
    const delCart = useSelector(selectAddPreparation);
   

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
    setDelivery({
      name: values.name,
      email: values.email,
      phone: values.phone,
      adress: values.address,
      order: delCart,
    });
  };

  useEffect(() => {
    const submitOrder = async () => {
      try {

        if (Object.keys(delivery).length > 0) {
          await dispatch(addOrder(delivery));
          await dispatch(clearOrderCart());
          notify();
        }
      } catch (error) {
        console.error('Error submitting order:', error);
       
      }
    };

    submitOrder(); 
  }, [delivery, dispatch]);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <FormContainer onSubmit={formik.handleSubmit}>
        <div>
        <h3>Enter delivery information</h3>
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

      <Button type="submit">Submit</Button>
   
    </FormContainer>
  );
};


export default Deliveri