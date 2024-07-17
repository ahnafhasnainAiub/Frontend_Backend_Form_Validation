import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchProjects } from "../redux/slice/projectSlice";
import { useAuth } from './../store/auth'; 
import Client from "./Client/Client";
import Project from "./Project/Project";



const EmployeeForm = () => {
  
  const initialValues = {
    email: "",
    name: "",
    joinDate: "",
    projects: []
  }; 

  const {authData, user} = useAuth();

  const dispatch = useDispatch();

  const state = useSelector((state) => state);

  console.log("State", state)

  const navigate = useNavigate();

  const [employee, setEmployee] = useState(initialValues);

  const [valid, setValid] = useState({
    email: { isValid: true, message: "" },
    name: { isValid: true, message: "" },
    joinDate: { isValid: true, message: "" },
    projects: { isValid: true, message: "" }
  });

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({ ...prevEmployee, [name]: value }));
  };

  const addProject = (projectId) => {
    const isSelected = employee.projects.includes(projectId);

    if (isSelected) {
      setEmployee((prevEmployee) => ({
        ...prevEmployee, projects: prevEmployee.projects.filter((id) => id !== projectId)
      }));
    } else {
      setEmployee((prevEmployee) => ({
        ...prevEmployee, projects: [...prevEmployee.projects, projectId]
      }));
    }
  };
 


  const validate = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!employee.email.trim()) {
      errors.email = { isValid: false, message: "Email is required!" };
    } else if (!emailRegex.test(employee.email)) {
      errors.email = { isValid: false, message: "Invalid email format!" };
    } else {
      errors.email = { isValid: true, message: "" };
    }

    if (!employee.name.trim()) {
      errors.name = { isValid: false, message: "Name is required!" };
    } else {
      errors.name = { isValid: true, message: "" };
    }

    if (!employee.joinDate.trim()) {
      errors.joinDate = { isValid: false, message: "Join date is required!" };
    } else {
      errors.joinDate = { isValid: true, message: "" };
    }

    setValid(errors);
    return Object.keys(errors).every((key) => errors[key].isValid);
  };

  const mutation = useMutation({
    mutationFn: async (formData) => {
      return await fetch("http://localhost:8000/employees", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      }).then((res) => res.json());
    },
    onSuccess: (data) => {
      alert("Employee added successfully!");
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
      mutation.mutate(employee);
      setEmployee(initialValues);
    }
  };

   console.log('state?.project?.data?>>', state?.project?.data?.projects);

  return (
    <section className="mx-[20px]">
      <div className="container md:mx-auto">
        <div className="mt-5 mb-[28px] text-center">
          <h1 className="font-bold text-xl">
            Add a New <span className="text-[#00A78E]">Employee</span>
          </h1>
        </div>

        <div className="flex justify-between my-5">
          <div className="my-5 text-xl font-bold">
            <p>Welcome , {user?.name}</p>
          </div>
          <div className="flex">
            <div className="mt-5 ml-4">
              <Client/>
            </div>
            <div className="mt-5 ml-4">
               <Project/>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-[#F9FAFB] p-4 rounded">
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
              value={employee.email}
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
              value={employee.name}
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
            <label htmlFor="joinDate" className="mb-2">
              Join Date*
            </label>
            <input
              type="date"
              id="joinDate"
              className={`py-2 px-4 rounded-lg ${
                !valid.joinDate.isValid && "border-red-400"
              }`}
              name="joinDate"
              value={employee.joinDate}
              onChange={handleInput}
            />
            {!valid.joinDate.isValid && (
              <p className="text-red-500">
                <FontAwesomeIcon
                  icon={faExclamationTriangle}
                  className="text-red-500 ml-2"
                />
                {valid.joinDate.message}
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
                    employee.projects.includes(project._id)
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
    </section>
  );
};

export default EmployeeForm;
