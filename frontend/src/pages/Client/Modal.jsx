import { useQuery } from "@tanstack/react-query";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchProjects } from "./../../redux/slice/projectSlice";



const Modal = ({ isOpen, closeModal }) => {
  const query = useQuery({
    queryKey: ["inquery",isOpen],
    queryFn: async () => fetchData(),
    enabled: isOpen,
  });

  const initialValues = {
    email: "",
    name: "",
    country: "",
    projects: []
  }
  
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const state = useSelector((state) => state);

  console.log("State", state)

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);
 

  const [client, setClient] = useState(initialValues);

  const [valid, setValid] = useState({
    email: { isValid: true, message: "" },
    name: { isValid: true, message: "" },
    country: { isValid: true, message: "" },
    projects: { isValid: true, message: "" }
  });
  
  const handleInput = (e) => {
    const { name, value } = e.target;
    setClient((prevClient) => ({ ...prevClient, [name]: value }));
  };

  const addProject = (projectId) => {
    const isSelected = client.projects.includes(projectId);

    if (isSelected) {
      setClient((prevClient) => ({
        ...prevClient, projects: prevClient.projects.filter((id) => id !== projectId)
      }));
    } else {
      setClient((prevClient) => ({
        ...prevClient, projects: [...prevClient.projects, projectId]
      }));
    }
  };

  const validate = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!client.email.trim()) {
      errors.email = { isValid: false, message: "Email is required!" };
    } else if (!emailRegex.test(client.email)) {
      errors.email = { isValid: false, message: "Invalid email format!" };
    } else {
      errors.email = { isValid: true, message: "" };
    }

    if (!client.name.trim()) {
      errors.name = { isValid: false, message: "Name is required!" };
    } else {
      errors.name = { isValid: true, message: "" };
    }

    if (!client.country.trim()) {
      errors.country = { isValid: false, message: "Country is required!" };
    } else {
      errors.country = { isValid: true, message: "" };
    }

    setValid(errors);
    return Object.keys(errors).every((key) => errors[key].isValid);
  };


  const mutation = useMutation({
    mutationFn: async (formData) => {
      return await fetch("http://localhost:8000/clients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      }).then((res) => res.json());
    },
    onSuccess: (data) => {
      alert("Client added successfully!");
      navigate("/team");
    },
    onError: (error) => {
      console.error("Submission error:", error.message);
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();

    if (isValid) {
      mutation.mutate(client);
      setClient(initialValues);
    }
  };



  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg max-w-xl">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold mb-4">Add New Client</h2>
          <button
            className="mb-3 px-3 py-2 bg-blue-500 text-white rounded-md"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
        <form onSubmit={handleSubmit} className="bg-[#F9FAFB] p-4 rounded">
          
        <div className="flex flex-col mb-4">
            <label htmlFor="name" className="mb-2">
              Name*
            </label>
            <input
              type="text"
              id="name"
              className={`py-2 px-4 rounded-lg ${
                !valid.name.isValid && "border-red-400"
              }`}
              placeholder="Enter Employee Name"
              name="name"
              value={client.name}
              onChange={handleInput}
            />
            {!valid.name.isValid && (
              <p className="text-red-500">
                <FontAwesomeIcon
                  icon={faExclamationTriangle}
                  className="text-red-500 ml-2"
                />
                {valid.name.message}
              </p>
            )}
        </div>
          
          
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="mb-2">
              Email*
            </label>
            <input
              type="email"
              id="email"
              className={`py-2 px-4 rounded-lg ${
                !valid.email.isValid && "border-red-400"
              }`}
              placeholder="Enter Employee Email"
              name="email"
              value={client.email}
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

          <div className="flex flex-col mb-4">
            <label htmlFor="country" className="mb-2">
             Country*
            </label>
            <input
              type="text"
              id="country"
              className={`py-2 px-4 rounded-lg ${
                !valid.country.isValid && "border-red-400"
              }`}
              placeholder="Enter Country Name"
              name="country"
              value={client.country}
              onChange={handleInput}
            />
            {!valid.name.isValid && (
              <p className="text-red-500">
                <FontAwesomeIcon
                  icon={faExclamationTriangle}
                  className="text-red-500 ml-2"
                />
                {valid.name.message}
              </p>
            )}
        </div>
          

          <div className="flex flex-col mb-4">
            <label htmlFor="projects" className="mb-2">
              Projects
            </label>
            <div className="flex flex-wrap font-medium">
              {state?.project?.data?.projects.map((project) => (
                <button
                  key={project._id}
                  className={`${
                    client.projects.includes(project._id)
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-black"
                  } px-4 py-2 mb-3 ml-2 rounded-lg`}
                  onClick={() => addProject(project._id)}
                  type="button"
                >
                  {project.name}
                </button>
              ))}
            </div>
          </div>

          <div className="">
            <button
              type="submit"
              disabled={mutation.isLoading}
              className={`py-2 px-6 bg-[#0060AF] text-white rounded-xl ${
                mutation.isLoading && "opacity-50 cursor-not-allowed"
              }`}
            >
              {mutation.isLoading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;