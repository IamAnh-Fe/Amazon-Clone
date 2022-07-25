import React from "react";
import { yupResolver } from '@hookform/resolvers/yup'
import QuantityField from "./QuantityField";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
const AddToCartForm = ({onSubmit = null}) => {
    const schema = yup.object().shape({
  quantity: yup.number().min(1, 'Minimum value is 1').required('Please enter quantity').typeError('please enter a number')
})
const form = useForm({
    defaultValues: {
      quantity : 1,
    },
    resolver: yupResolver(schema),
});
const handleSubmit = async (values) => {
    if(onSubmit) {
        await onSubmit(values)
  }
  toast.success("Added to cart");
}
    return (
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <QuantityField name="quantity" label="Quantity" form={form}/>
        <button className="btn" type ="submit"> Add to cart</button>
      </form>
    );
}
export default AddToCartForm;