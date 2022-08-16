import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ErrorMessage } from "@hookform/error-message";
const AddNewProduct = () => {
   const [image, setImage] = useState("");
  const schema = yup.object({
    image: yup.string().required("Title is required"),
    title: yup.string().required("Title is required"),
    price: yup.string().required("Price is required"),
    rating: yup.string(),
    discount: yup.string(),
    category: yup.string().required("Category is required"),
  });
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const handleFileImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleNewProductSubmit = (values) => {
    console.log(values);

    reset();
  };

  return (
    <div className="manageProduct">
      <h3>Create Product</h3>
      <form
        onSubmit={handleSubmit(handleNewProductSubmit)}
        className="manageProduct-list"
      >
        <input {...register("title")} type="text" placeholder="Title" />
        <p className="error">
          <ErrorMessage errors={errors} name="title" />
        </p>{" "}
        <input {...register("category")} type="text" placeholder="Category" />
        <p className="error">
          <ErrorMessage errors={errors} name="category" />
        </p>{" "}
        <input
          {...register("price")}
          min="0"
          type="number"
          placeholder="Price"
        />
        <p className="error">
          <ErrorMessage errors={errors} name="price" />
        </p>{" "}
        <input
          {...register("discout")}
          min="0"
          type="number"
          placeholder="Discount"
        />
        <p className="error">
          <ErrorMessage errors={errors} name="discount" />
        </p>{" "}
        <input
          {...register("rating")}
          min="0"
          type="number"
          placeholder="Rating"
        />
        <p className="error">
          <ErrorMessage errors={errors} name="rating" />
        </p>{" "}
        <input
          {...register("image")}
          type="file"
          onChange={handleFileImageChange}
        />
        <button type="submit">Add new product</button>
      </form>
    </div>
  );
};

export default AddNewProduct;
