import { TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ProductSchema } from "../schema/ProductSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const SuppliersForm = () => {
  let [products, setProduct] = useState([]);

  const getAllProducts = async () => {
    const res = await axios("https://northwind.vercel.app/api/suppliers");
    setProduct(res?.data);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ProductSchema),
  });

  const createProduct = (values) => {
    let obj = {
      companyName: values.companyName,
      contactName: values.contactName,
      address: {
        city: values.city,
        region: values.region,
      },
    };

    axios.post("https://northwind.vercel.app/api/suppliers", obj);
    console.log(obj);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(createProduct)}>
        <TextField
          id="outlined-basic"
          {...register("id")}
          label="id"
          variant="outlined"
        />
        {errors.id?.message && (
          <p style={{ color: "red" }}>{errors.id?.message}</p>
        )}
        <TextField
          id="outlined-basic"
          {...register("companyName")}
          label="Company Name"
          variant="outlined"
        />
        {errors.companyName?.message && (
          <p style={{ color: "red" }}>{errors.companyName?.message}</p>
        )}
        <br />
        <TextField
          id="outlined-basic"
          {...register("contactName")}
          label="Contact Name"
          variant="outlined"
        />
        {errors?.contactName?.message && (
          <p style={{ color: "red" }}>{errors.contactName?.message}</p>
        )}
        <TextField
          id="outlined-basic"
          {...register("city")}
          label="City"
          variant="outlined"
        />
        {errors?.address?.city?.message && (
          <p style={{ color: "red" }}>{errors?.address?.city?.message}</p>
        )}
        <br />
        <TextField
          id="outlined-basic"
          {...register("region")}
          label="Region"
          variant="outlined"
        />
        {errors?.address?.region?.message && (
          <p style={{ color: "red" }}>{errors?.address?.region?.message}</p>
        )}
        <br />
        <button className="sumbitbtn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SuppliersForm;
