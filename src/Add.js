import axios from "axios";

const Add = ({
  setContacts,
  contacts,
  name,
  setname,
  email,
  setemail,
  isedit,
  eid,
  seteid,
  setisedit,
}) => {
  const base_url = "http://localhost:3008/contacts";
  const base_url2 = `http://localhost:3008/contacts/${eid}`;

  //   add from user input
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isedit) {
      const editAccount = async () => {
        const req = {
          name: name,
          email: email,
        };
        if (name && email) {
          await axios.put(base_url2, req);
          setname("");
          setemail("");
          seteid();
          setisedit(false);
        } else {
          alert("idiota");
        }
      };
      editAccount();
    } else if (name && email) {
      const addContact = async () => {
        const req = {
          id: Math.random() * 9000,
          name: name,
          email: email,
        };
        const res = await axios.post(base_url, req);
        setContacts([...contacts, res.data]);
        setname("");
        setemail("");
      };
      addContact();
    } else {
      alert("idiota");
    }
  };
  return (
    <div className="add">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setname(e.target.value)}
          placeholder="enter name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          placeholder="enter email"
        />

        <button type="submit"> submit</button>
      </form>
    </div>
  );
};

export default Add;
