import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployees } from '../../redux/slice/employeeSlice';
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EmployeeForm = () => {
  const initialValues = {
    email: "",
    name: "",
    joinDate: "",
    // projects: []
  };

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const totalEmployees = state?.employee?.data?.employees?.length;

  const handleInput = (e) => {
    // Handle input changes if needed
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission if needed
  };

  const validate = () => {
    // Validate form inputs if needed
  };

  return (
    <section className="mx-[20px]">
      <div className="container md:mx-auto">
        <div className="mt-5 mb-[28px] text-center">
          <h1 className="font-bold text-xl">
            Add a New <span className="text-[#00A78E]">Employee</span>
          </h1>
        </div>

        {/* <form onSubmit={handleSubmit} className="bg-[#F9FAFB] p-4 rounded">
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="mb-2">
              Email*
            </label>
            <input
              type="email"
              id="email"
              className={`py-2 px-4 rounded-lg`}
              placeholder="Enter Employee Email"
              name="email"
              value={initialValues.email}
              onChange={handleInput}
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="name" className="mb-2">
              Name*
            </label>
            <input
              type="text"
              id="name"
              className={`py-2 px-4 rounded-lg`}
              placeholder="Enter Employee Name"
              name="name"
              value={initialValues.name}
              onChange={handleInput}
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="joinDate" className="mb-2">
              Join Date*
            </label>
            <input
              type="date"
              id="joinDate"
              className={`py-2 px-4 rounded-lg`}
              name="joinDate"
              value={initialValues.joinDate}
              onChange={handleInput}
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className={`py-2 px-6 bg-[#0060AF] text-white rounded-xl`}
            >
              Submit
            </button>
          </div>
        </form> */}

        <div className="my-10">
          {state.employee.isLoading ? (
            <p>Loading...</p>
          ) : (
            <div>
              <div className="text-center mb-4">
                Total Employees: {totalEmployees}
              </div>

              <ul>
                {state?.employee?.data?.employees?.map((em) => (
                  <li key={em._id}>{em.name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* <Strategy teamMembersCount={totalEmployees} /> */}  
      </div>
    </section>
  );
};

export default EmployeeForm;
