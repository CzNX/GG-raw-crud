import axios from "axios";
import React, { useEffect, useState } from "react";
import Add from "./Add";
const App = () => {
  const base_url = "http://localhost:3008";
  const [contacts, setContacts] = React.useState([]);
  const [ref, setref] = React.useState(false);
  const [eid, seteid] = useState();
  const [isedit, setisedit] = useState(false);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");

  // delte
  const deleteHandler = async (id) => {
    await axios.delete(`${base_url}/contacts/${id}`);
    setref(true);
  };

  // edit
  const editHandler = async (id) => {
    seteid(id);
    setisedit(true);
    const thatitem = contacts.find((c) => c.id === id);
    setname(thatitem.name);
    setemail(thatitem.email);
  };

  // retrieve basic
  const retrieveContacts = async () => {
    const res = await axios(`${base_url}/contacts`);
    return res.data;
  };

  useEffect(() => {
    const getContacts = async () => {
      const allContacts = await retrieveContacts();
      allContacts && setContacts(allContacts);
      // console.log(allContacts);
    };
    getContacts();
  }, [ref, isedit]);

  return (
    <>
      <Add
        setContacts={setContacts}
        contacts={contacts}
        retrieveContacts={retrieveContacts}
        name={name}
        setname={setname}
        email={email}
        setemail={setemail}
        isedit={isedit}
        eid={eid}
        seteid={seteid}
        setisedit={setisedit}
      />
      <div className="app">
        {contacts &&
          contacts.map((c) => (
            <li key={c.id}>
              {c.name}
              <p>{c.email}</p>
              <p
                style={{ cursor: "pointer", color: "red" }}
                onClick={() => deleteHandler(c.id)}
              >
                Del
              </p>
              <p
                style={{ cursor: "pointer", color: "green" }}
                onClick={() => editHandler(c.id)}
              >
                Edit
              </p>
            </li>
          ))}
      </div>
    </>
  );
};

export default App;
