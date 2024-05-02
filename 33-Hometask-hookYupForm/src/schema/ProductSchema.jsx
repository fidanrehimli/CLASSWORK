import * as yup from "yup";

export const ProductSchema = yup.object().shape({
  id: yup.string().required("This field is required."),
  companyName: yup
    .string()
    .required("This field is required.")
    .min(3, "3 simvoldan boyuk olmalidir")
    .max(10, "10 simvoldan kichik olmalidir."),
  contactName: yup
    .string()
    .required("This field is required.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  address: yup
    .object()
    .shape({
      city: yup.string().required("This field is required"),
      region: yup.string().required("This field is required"),
    })
    .required("error"),
});
