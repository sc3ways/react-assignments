import { useState } from "react";
import FormData from "./FormData";
import PreviewData from "./PreviewData";

const FormsApp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    designation: "",
  });

  const [message, setMessage] = useState();

  const onChangeHandler = (e) => {
    const { name, type, value, files } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const validateForm = () => {
    const { firstName, lastName, email, phone, designation } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    if (!firstName.trim()) return "Please enter first name";
    if (!lastName.trim()) return "Please enter last name.";
    if (!email.trim() || !emailRegex.test(email))
      return "Please enter valid email";
    if (!phone.trim() || !phoneRegex.test(phone))
      return "Please enter valid phone number";
    if (!designation.trim()) return "Please select designation";
    return "";
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    const errMessage = validateForm();
    if (errMessage) return setMessage(errMessage);

    console.log("Form data Submmited: ", formData);
    alert("Form data Submmited: ", formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      gender: "",
      designation: "",
    });
    setMessage("");
  };
  const formResetHandler = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      gender: "",
      designation: "",
      fileUpload: "",
    });
  };
  return (
    <>
      <div className="forms-section">
        <div className="container">
          <div className="row justify-content-between">
            <FormData
              onChangeHandler={onChangeHandler}
              formSubmitHandler={formSubmitHandler}
              formResetHandler={formResetHandler}
              message={message}
              formData={formData}
            />
            <PreviewData />
          </div>
        </div>
      </div>
    </>
  );
};
export default FormsApp;
