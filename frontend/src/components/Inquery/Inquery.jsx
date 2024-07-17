import React, { useState } from 'react';
import Modal from './Modal';

const Inquery = () => {
  const [users, setUsers] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);



  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      {/* <div className="text-center">
        <h2>Contact List</h2>
      </div> */}

      {/* <div>
        <table className="border-separate border-spacing-4 border-2 border-slate-400 mx-7">
          <thead className="bg-[#609ee6]">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Company</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.company}</td>
                <td>{user.number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}

      <button className="bg-blue-500 px-3 py-2 text-white rounded-md font-semibold mt-4" onClick={openModal}>
         Show All Inquiry
      </button>

      <Modal isOpen={modalOpen} closeModal={closeModal}  />  
    </div>
  );
};

export default Inquery;
