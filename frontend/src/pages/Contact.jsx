/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-unused-vars */
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Inquery from "../components/Inquery/Inquery";

const Contact = () => {
  const initialValues = {
    name: "",
    email: "",
    number: "",
    company: "",
    details: "",
    service: [],
    budget: "",
    file: null,
  };

  const serverUrl = "http://localhost:8000/contacts";
  const uploadURL = "http://localhost:8000/contacts/upload";

  const navigate = useNavigate();

  const [user, setUser] = useState(initialValues);

  const [previewImage, setPreviewImage] = useState("");
  const [uploadImage, setUploadImage] = useState("");

  const [valid, setValid] = useState({
    name: { isValid: true, message: "" },
    email: { isValid: true, message: "" },
    number: { isValid: true, message: "" },
    company: { isValid: true, message: "" },
    details: { isValid: true, message: "" },
    service: { isValid: true, message: "" },
    budget: { isValid: true, message: "" },
    file: { isValid: true, message: "" },
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const addService = (service) => {
    const isSelected = user.service.includes(service);
    if (isSelected) {
      setUser((prevUser) => ({
        ...prevUser,
        service: prevUser.service.filter((item) => item !== service),
      }));
    } else {
      setUser((prevUser) => ({
        ...prevUser,
        service: [...prevUser.service, service],
      }));
    }
  };

  const addBudget = (budget) => {
    setUser((prevUser) => ({ ...prevUser, budget: budget }));
  };

  const handleFileChange = (e) => {
    if (e?.target?.files?.length) {
      const file = e.target.files[0];
      setUser((prevUser) => ({
        ...prevUser,
        file,
      }));

      setUploadImage(URL.createObjectURL(file));
    }
  };

  const validate = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!user.name.trim()) {
      errors.name = { isValid: false, message: " Name is required!" };
    } else {
      errors.name = { isValid: true, message: "" };
    }

    if (!user.email.trim()) {
      errors.email = { isValid: false, message: " Email is required!" };
    } else if (!emailRegex.test(user.email)) {
      errors.email = { isValid: false, message: " Invalid email format!" };
    } else {
      errors.email = { isValid: true, message: "" };
    }

    if (!user.number.trim()) {
      errors.number = { isValid: false, message: " Phone number is required!" };
    } else {
      errors.number = { isValid: true, message: "" };
    }

    if (!user.details.trim()) {
      errors.details = {
        isValid: false,
        message: " Details about your query are required!",
      };
    } else {
      errors.details = { isValid: true, message: "" };
    }

    if (user.service.length === 0) {
      errors.service = {
        isValid: false,
        message: " Select at least one service!",
      };
    } else {
      errors.service = { isValid: true, message: "" };
    }

    if (!user.budget.trim()) {
      errors.budget = { isValid: false, message: " Select your budget!" };
    } else {
      errors.budget = { isValid: true, message: "" };
    }

    if (!user.file) {
      errors.file = {
        isValid: false,
        message: " File attachment is required!",
      };
    } else {
      errors.file = { isValid: true, message: "" };
    }

    setValid(errors);
    return Object.keys(errors).every((key) => errors[key].isValid);
  };

  // Using useMutation
  // const mutation = useMutation({
  //   mutationFn: async (formData) => {
  //     console.log("formData", formData);
  //     console.log(formData);
  //     return await fetch(URL, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },

  //       body: JSON.stringify(formData),
  //     }).then((res) => res.json());
  //   },
  //   onSuccess: (data) => {
  //     console.log("Submission successful:", data);

  //     alert("Submission successful");
  //     // setUser(initialValues);
  //     navigate("/contact");
  //   },
  //   onError: (error) => {
  //     console.error("Submission error:", error.message);
  //   },
  // });

  const mutation = useMutation({
  
    mutationFn: async (formData) => {

      const { file, ...rest } = formData;
      const formDataForUpload = new FormData();
      formDataForUpload.append("file", file);

      const response = await fetch(uploadURL, {
        method: "POST",
        body: formDataForUpload,
      });

      if (!response.ok) {
        throw new Error("File upload failed");
      }

      const imageData = await response.json();
      console.log(imageData);

      if (imageData?.file) {
        const { filename } = imageData?.file;
        const path = "http://localhost:8000/" + filename;
        console.log(path);
        setPreviewImage(path);
      }

      const data = await fetch(serverUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(rest),
      });

      return data.json();
    },

    onSuccess: (data) => {
      console.log("Submission successful:", data);
      alert("Submission successful");
      navigate("/contact");
    },
    onError: (error) => {
      console.error("Submission error:", error.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();

    if (isValid) {
      mutation.mutate(user);
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const isValid = validate();

  //   if (isValid) {
  //     try {
  //       await mutation.mutateAsync(user); // Using mutateAsync for async/await compatibility
  //       console.log("Submission successful");
  //       setUser(initialValues);
  //       navigate("/contact");
  //     } catch (error) {
  //       console.error("Submission error:", error.message);
  //     }
  //   }
  // };

  return (
    <section className="mx-[20px]">
      <div className="grid grid-cols-12 container md:mx-auto">
        <div className="col-span-full md:col-start-1 md:col-end-9 md:mt-4 md:p-4">
          <div>
            <div className="mt-5 mb-[28px]">
              <div className="font-bold text-center text-xyl">
                <p>
                  Drop us a <span className="text-[#00A78E]">line</span>
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="bg-[#F9FAFB] px-4 pb-3 rounded">
                <div>
                  <div className="md:flex md:gap-3">
                    {/* User Name */}
                    <div className="flex flex-col md:w-full">
                      <label htmlFor="name" className="mt-4">
                        Name*
                      </label>
                      <input
                        type="text"
                        id="name"
                        className={`my-4 py-[10px] px-4 rounded-lg ${
                          !valid.name.isValid && "border-red-400"
                        }`}
                        placeholder="Enter Your Name"
                        name="name"
                        autoComplete="off"
                        value={user.name}
                        onChange={handleInput}
                      />
                      {!valid.name.isValid && (
                        <p className="text-red-500">
                          <FontAwesomeIcon
                            icon={faExclamationTriangle}
                            className="text-red-500 ml-2"
                          />{" "}
                          {valid.name.message}
                        </p>
                      )}
                    </div>

                    {/* User Email */}
                    <div className="flex flex-col md:w-full">
                      <label htmlFor="email" className="mt-4">
                        Email*
                      </label>
                      <input
                        type="email"
                        className={`my-4 py-[10px] px-4 rounded-lg ${
                          !valid.email.isValid && "border-red-400"
                        }`}
                        id="email"
                        placeholder="Enter Your Email"
                        name="email"
                        autoComplete="off"
                        value={user.email}
                        onChange={handleInput}
                      />
                      {!valid.email.isValid && (
                        <p className="text-red-500">
                          <FontAwesomeIcon
                            icon={faExclamationTriangle}
                            className="text-red-500 ml-2"
                          />
                          {valid.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="md:flex md:gap-3">
                    <div className="flex flex-col md:w-full">
                      <label htmlFor="number" className="mt-4">
                        Phone Number<span>(Optional)</span>
                      </label>
                      <input
                        type="text"
                        className={`my-4 py-[10px] px-4 rounded-lg ${
                          !valid.number.isValid && "border-red-400"
                        }`}
                        id="number"
                        placeholder="Enter Your Phone Number"
                        name="number"
                        autoComplete="off"
                        value={user.number}
                        onChange={handleInput}
                      />
                      {!valid.number.isValid && (
                        <p className="text-red-500">
                          <FontAwesomeIcon
                            icon={faExclamationTriangle}
                            className="text-red-500 ml-2"
                          />
                          {valid.number.message}
                        </p>
                      )}
                    </div>

                    {/* Company Name */}
                    <div className="flex flex-col md:w-full">
                      <label htmlFor="company" className="mt-4">
                        Company Name <span>(Optional)</span>
                      </label>
                      <input
                        type="text"
                        className="my-4 py-[10px] px-4 rounded-lg"
                        id="company"
                        placeholder="Enter Your Company Name"
                        name="company"
                        autoComplete="off"
                        value={user.company}
                        onChange={handleInput}
                      />
                      {!valid.number.isValid && (
                        <p className="text-red-500">
                          <FontAwesomeIcon
                            icon={faExclamationTriangle}
                            className="text-red-500 ml-2"
                          />
                          {valid.number.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  {/* Services */}
                  <div className="mt-4">
                    <div className="mb-4">
                      <label htmlFor="services">
                        <span className="font-medium mr-1 text-base">
                          Services You Need
                        </span>
                        (You can choose multiple)
                      </label>
                    </div>

                    <div className="flex flex-wrap font-medium">
                      {[
                        "Mobile Development",
                        "Software Development",
                        "API Integration",
                        "SQA Solution",
                        "Apps Design",
                        "Digital Marketing",
                        "Web Development",
                        "Web UX/UI Design",
                        "Custom Service",
                      ].map((service, index) => (
                        <button
                          key={index}
                          className={`${
                            user.service.includes(service)
                              ? "bg-blue-500 text-white"
                              : "bg-gray-200 text-black"
                          } px-4 py-2 mb-3 ml-2 rounded-lg`}
                          onClick={() => addService(service)}
                          type="button"
                        >
                          {service}
                        </button>
                      ))}
                      <br />
                    </div>
                    {!valid.service.isValid && (
                      <span className="text-red-500 ">
                        <FontAwesomeIcon
                          icon={faExclamationTriangle}
                          className="text-red-500 ml-2"
                        />{" "}
                        {valid.service.message}
                      </span>
                    )}
                  </div>

                  {/* Budget */}
                  <div className="mt-5">
                    <div>
                      <label htmlFor="budget">
                        <span className="font-medium mr-1 text-base">
                          Your Budget
                        </span>
                        (Optional)
                      </label>
                    </div>

                    <div className="mt-4 font-medium">
                      {[
                        "Less than > $500",
                        "$500 - $1,000",
                        "$1,001 - $1500",
                        "$1500 - $2,000",
                      ].map((budget, index) => (
                        <button
                          key={index}
                          className={`${
                            user.budget === budget
                              ? "bg-blue-500 text-white"
                              : "bg-gray-200 text-black"
                          } px-4 py-2 mb-3 ml-2 rounded-lg`}
                          onClick={() => addBudget(budget)}
                          type="button"
                        >
                          {budget}
                        </button>
                      ))}
                      {!valid.budget.isValid && (
                        <p className="text-red-500">
                          <FontAwesomeIcon
                            icon={faExclamationTriangle}
                            className="text-red-500 ml-2"
                          />
                          {valid.budget.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="text-base mt-4">
                    <div className="mb-4">
                      <label htmlFor="queries" className="form-label">
                        <span className="font-medium mr-1">
                          Deep Details About Your Query
                        </span>
                        (Optional)
                      </label>
                    </div>

                    <div>
                      <textarea
                        type="text"
                        name="details"
                        className={`h-[100px] w-full rounded-lg pt-3 pl-4 ${
                          !valid.details.isValid && "border-red-400"
                        }`}
                        placeholder="Tell us more about your query"
                        id="queries"
                        autoComplete="off"
                        value={user.details}
                        onChange={handleInput}
                      ></textarea>
                      {!valid.details.isValid && (
                        <p className="text-red-500">
                          <FontAwesomeIcon
                            icon={faExclamationTriangle}
                            className="text-red-500 ml-2"
                          />{" "}
                          {valid.details.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* File Uploader */}
                  <div className="mb-4">
                    <div>
                      <label htmlFor="file">
                        <span className="font-medium">Add Attachments</span>
                        (Optional)
                      </label>
                    </div>

                    <div className="flex items-center justify-between mb-3 border border-gray-300 rounded-lg p-2 bg-[#FFFFFF]">
                      <span className="file-name w-[250px] rounded p-1 overflow-hidden truncate">
                        {user.file
                          ? user?.file?.name
                          : "(Brief, idea, branding guideline, old design....)"}
                      </span>

                      <input
                        type="file"
                        id="file"
                        name="file"
                        onChange={handleFileChange}
                        accept=".png, .jpg, .jpeg"
                        hidden
                        aria-label="File upload"
                        aria-describedby="button-addon2"
                      />
                      <label
                        className={`file-btn bg-green-500 text-white rounded px-3 py-1 ${
                          !valid.file.isValid && "border-red-400"
                        }`}
                        htmlFor="file"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="inline-block"
                        >
                          <path
                            d="M14.1016 7.26634L8.09121 13.2768C6.72437 14.6436 4.50829 14.6436 3.14146 13.2768C1.77462 11.9099 1.77462 9.69384 3.14146 8.327L9.15187 2.3166C10.0631 1.40537 11.5405 1.40537 12.4517 2.3166C13.3629 3.22782 13.3629 4.7052 12.4517 5.61643L6.67699 11.3911C6.22138 11.8467 5.48269 11.8467 5.02708 11.3911C4.57147 10.9355 4.57147 10.1968 5.02708 9.74122L10.0947 4.67362"
                            stroke="white"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        Add File (5mb)
                      </label>
                    </div>
                    {!valid.file.isValid && (
                      <p className="text-red-500">
                        <FontAwesomeIcon
                          icon={faExclamationTriangle}
                          className="text-red-500 ml-2"
                        />
                        {valid.file.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-8 mb-10 ml-10 md:ml-0">
                <button
                  type="submit"
                  disabled={mutation?.isPending}
                  className={`flex py-[14px] px-20 bg-[#0060AF] text-white rounded-xl gap-2 ${
                    mutation.isPending && "opacity-50 cursor-not-allowed"
                  }`}
                >
                  {mutation.isPending ? "Sending..." : "Send an Inquiry"}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="col-span-full md:col-start-9 md:col-end-12 md:mt-4 md:p-4">
          {/* <div>
            <NavLink to="inquery">
              <button className="bg-blue-500 px-3 py-2 text-white rounded-md font-semibold">
                Show All Inquiry
              </button> 
            </NavLink>
            <Outlet />
          </div> */}
          <Inquery />
        </div>
      </div>
      <div className="flex gap-4 ">
        {uploadImage && (
          <div className="flex flex-col items-center gap-2">
            <p>Uploaded Image</p>
            <img width={"100"} src={uploadImage} />
          </div>
        )}
        {previewImage && (
          <div className="flex flex-col items-center gap-2">
            <p>Server Image</p>
            <img width={"100"} src={previewImage} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;