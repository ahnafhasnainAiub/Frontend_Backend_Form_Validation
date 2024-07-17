import { useQuery } from "@tanstack/react-query";
import React, { Fragment } from "react";

function Service() {
  

  const fetchContacts = async () => {
    try {

      console.log({ msg: "hello world" });

      const contacts = await fetch("http://localhost:8000/contacts");
      const data = await contacts.json();
      console.log({ msg: "hello world", data });
      return data;

    } catch (error) {
      return error;
    }
  };
 

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["contacts"],
    queryFn: fetchContacts,
    enabled:true
  });

  return (
    <div>
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
          {isPending ? (
            <tr>
              <td>Loading...</td>
            </tr>
          ) : (
            <Fragment>
              {data?.contacts?.map((contact, index) => (
                <tr key={index}>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.company}</td>
                  <td>{contact.phone}</td>
                </tr>
              ))}
            </Fragment>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Service;
