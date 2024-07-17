import { useQuery } from "@tanstack/react-query";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchclients } from "./../../redux/slice/clientSlice";

const Modal = ({ isOpen, closeModal }) => {
  const query = useQuery({
    queryKey: ["inquery", isOpen],
    queryFn: async () => fetchData(),
    enabled: isOpen,
  });

  const initialValues = {
    name: "",
    technology: [],
    estimatedHour: "",
    deadline: "",
    client: "",  // Initialize client as an empty string
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchclients());
  }, [dispatch]);

  const [project, setProject] = useState(initialValues);

  const [valid, setValid] = useState({
    name: { isValid: true, message: "" },
    technology: { isValid: true, message: "" },
    estimatedHour: { isValid: true, message: "" },
    deadline: { isValid: true, message: "" },
    client: { isValid: true, message: "" },  // Correct validation state for client
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setProject((prevProject) => ({ ...prevProject, [name]: value }));
  };

  const validate = () => {
    const errors = {};

    if (!project.name.trim()) {
      errors.name = { isValid: false, message: "Name is required!" };
    } else {
      errors.name = { isValid: true, message: "" };
    }

    if (!project.estimatedHour.trim()) {
      errors.estimatedHour = {
        isValid: false,
        message: "Hour is required!",
      };
    } else {
      errors.estimatedHour = { isValid: true, message: "" };
    }

    if (project.technology.length === 0) {
      errors.technology = {
        isValid: false,
        message: "Select at least one Technology!",
      };
    } else {
      errors.technology = { isValid: true, message: "" };
    }

    if (!project.deadline) {
      errors.deadline = {
        isValid: false,
        message: "Deadline is required!",
      };
    } else {
      errors.deadline = { isValid: true, message: "" };
    }

    if (!project.client) {  // Check if client is selected
      errors.client = {
        isValid: false,
        message: "Select a Client!",
      };
    } else {
      errors.client = { isValid: true, message: "" };
    }

    setValid(errors);
    return Object.keys(errors).every((key) => errors[key].isValid);
  };

  const addTechnology = (technology) => {
    const isSelected = project.technology.includes(technology);
    if (isSelected) {
      setProject((prevProject) => ({
        ...prevProject,
        technology: prevProject.technology.filter((item) => item !== technology),
      }));
    } else {
      setProject((prevProject) => ({
        ...prevProject,
        technology: [...prevProject.technology, technology],
      }));
    }
  };

  const addClient = (clientId) => {
    setProject((prevProject) => ({
      ...prevProject,
      client: clientId,
    }));
  };

  const mutation = useMutation({
    mutationFn: async (formData) => {
      return await fetch("http://localhost:8000/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then((res) => res.json());
    },
    onSuccess: (data) => {
      alert("Project added successfully!");
      navigate("/team");
    },
    onError: (error) => {
      console.error("Submission error:", error.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();

    if (isValid) {
      mutation.mutate(project);
      setProject(initialValues);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg max-w-xl">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold mb-4">Add New Project</h2>
          <button
            className="mb-3 px-3 py-2 bg-blue-500 text-white rounded-md"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
        <form onSubmit={handleSubmit} className="bg-[#F9FAFB] p-4 rounded">
          {/* Name */}
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
              value={project.name}
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

          {/* Technology */}
          <div className="mt-4">
            <div className="mb-4">
              <label htmlFor="technology">
                <span className="font-medium mr-1 text-base">
                  Technologies You Need
                </span>
                (You can choose multiple)
              </label>
            </div>

            <div className="flex flex-wrap font-medium">
              {[
                "Node Js",
                "React Js",
                "Django",
                "Go",
                "Ruby & Rails",
                "Spring Boot",
                "Rust",
                "Veu Js",
                "Angular Js",
                "Laravel",
              ].map((technology, index) => (
                <button
                  key={index}
                  className={`${
                    project.technology.includes(technology)
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-black"
                  } px-4 py-2 mb-3 ml-2 rounded-lg`}
                  onClick={() => addTechnology(technology)}
                  type="button"
                >
                  {technology}
                </button>
              ))}
            </div>
            {!valid.technology.isValid && (
              <span className="text-red-500">
                <FontAwesomeIcon
                  icon={faExclamationTriangle}
                  className="text-red-500 ml-2"
                />
                {valid.technology.message}
              </span>
            )}
          </div>

          <div className="flex gap-4">
              {/* Estimated Hour */}
          <div className="flex flex-col mb-4">
            <label htmlFor="estimatedHour" className="mb-2">
              Total Estimated Hour*
            </label>
            <input
              type="number"
              id="estimatedHour"
              className={`py-2 px-4 rounded-lg ${
                !valid.estimatedHour.isValid && "border-red-400"
              }`}
              placeholder="Enter Estimated Hour"
              name="estimatedHour"
              value={project.estimatedHour}
              onChange={handleInput}
            />
            {!valid.estimatedHour.isValid && (
              <p className="text-red-500">
                <FontAwesomeIcon
                  icon={faExclamationTriangle}
                  className="text-red-500 ml-2"
                />
                {valid.estimatedHour.message}
              </p>
            )}
          </div>

          {/* Deadline */}
          <div className="flex flex-col mb-4">
            <label htmlFor="deadline" className="mb-2">
              Deadline*
            </label>
            <input
              type="date"
              id="deadline"
              className={`py-2 px-4 rounded-lg ${
                !valid.deadline.isValid && "border-red-400"
              }`}
              name="deadline"
              value={project.deadline}
              onChange={handleInput}
            />
            {!valid.deadline.isValid && (
              <p className="text-red-500">
                <FontAwesomeIcon
                  icon={faExclamationTriangle}
                  className="text-red-500 ml-2"
                />
                {valid.deadline.message}
              </p>
            )}
          </div>
          </div>

          {/* Clients */}
          <div className="flex flex-col mb-4">
            <label htmlFor="clients" className="mb-2">
              Clients*
            </label>
            <div className="flex flex-wrap font-medium">
              {state?.client?.data?.clients.map((client) => (
                <button
                  key={client._id}
                  className={`${
                    project.client === client._id
                      ? "bg-green-400 text-white"
                      : "bg-gray-200 text-black"
                  } px-4 py-2 mb-3 ml-2 rounded-lg`}
                  onClick={() => addClient(client._id)}
                  type="button"
                >
                  {client.name}
                </button>
              ))}
            </div>
            {!valid.client.isValid && (
              <span className="text-red-500">
                <FontAwesomeIcon
                  icon={faExclamationTriangle}
                  className="text-red-500 ml-2"
                />
                {valid.client.message}
              </span>
            )}
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
