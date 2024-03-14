import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ErrorMessege, FormContainer } from '../ShopingCardForm/ShopingCartForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { emailSelector, phoneSelector } from '../../redax/order/orderSelector';
import { setEmail, setPhone } from '../../redax/order/orderSlice';
import { getAllOrder } from '../../redax/order/orderThank';




const HistoryPageForm = () => {
   
   const dispatch = useDispatch();

   const [emailTimeout, setEmailTimeout] = useState(null);
  const [phoneTimeout, setPhoneTimeout] = useState(null);

   const email = useSelector(emailSelector);
   const phone = useSelector(phoneSelector);


 
   useEffect(() => {
    const client = {email: email, phone: phone};
    const timeoutId =  setTimeout(() => {
      dispatch(getAllOrder(client)); 
    }, 2000);
    
    return () => clearTimeout(timeoutId);
  }, [dispatch, email, phone]);



 const initialValues = {
    email: email,
    phone: phone,
  
 };

 const validationSchema = Yup.object({
   phone: Yup.string().required(),
   email: Yup.string().email('Invalid email address').required(),
 });


 const handleEmailChange = (event) => {
  clearTimeout(emailTimeout);
  const value = event.target.value;
  const timeoutId = setTimeout(() => {
    dispatch(setEmail(value));
  }, 2000);
  setEmailTimeout(timeoutId);
};

const handlePhoneChange = (event) => {
  clearTimeout(phoneTimeout);
    const value = event.target.value;
    const timeoutId = setTimeout(() => {
      dispatch(setPhone(value));
    }, 2000);
    setPhoneTimeout(timeoutId);
};





 const formik = useFormik({
   initialValues,
   validationSchema,
 });

 return (
   <FormContainer className='formHistory' onSubmit={formik.handleSubmit}>
     <div>
     
       <label htmlFor="email">Email: {formik.errors.email && <ErrorMessege>{formik.errors.email}</ErrorMessege>}</label>
       <input
         type="text"
         id="email"
         name="email"
         onChange={handleEmailChange}
         value={formik.values.email}
       />
      
     </div>
     <div>
       <label htmlFor="phone">Phone: {formik.errors.phone && <ErrorMessege>{formik.errors.phone}</ErrorMessege>}</label>
       
       <input
         type="text"
         id="phone"
         name="phone"
         onChange={handlePhoneChange}
         value={formik.values.phone}
       />
       
     </div>
   </FormContainer>
 );
};

export default HistoryPageForm