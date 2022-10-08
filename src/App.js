import React, { useState } from "react";
import contact from "./components/contact";
import Contactform from "./components/contactform";
import "./App.css";

const App = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobileno: "",
    Address: "",
    Message: "",
  });


  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };
  const postData = async (e) => {
    e.preventDefault();

    const { name, email, mobileno, Address, Message } = user;
    const res = await fetch(
      "https://contact-form-b1f43-default-rtdb.firebaseio.com/Constact Form.json",
      {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          mobileno,
          Address,
          Message,
        }),
      }
    );
    if(res){
      setUser({
      name: "",
      email: "",
      mobileno: "",
      Address: "",
      Message: "",
  
      });
  
      alert("Data Stored Sucessfully :)");
    
    }
  else{
    alert("please fill all data ")
  }

  };

  return (
    <>
      <div className="container">
        <form action="action_page.php" method="POST">
          <label htmlFor="name"> Name</label>
          <input
            type="text"
            id="fname"
            name="name"
            placeholder="Your name.."
            value={user.name}
            onChange={getUserData}
            autoComplete="off"
            required
          />

          <label htmlFor="email"> E-mail</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Your email.."
            value={user.email}
            onChange={getUserData}
            autoComplete="off"
            required
          />

          <label htmlFor="mobileno">Mobile Number</label>
          <input
            type="text"
            id="mobileno"
            name="mobileno"
            placeholder="Your mobileno.."
            value={user.mobileno}
            onChange={getUserData}
            required
            autoComplete="off"
          />

          <label htmlFor="Address"> Address </label>
          <input
            type="text"
            id="Address"
            name="Address"
            placeholder="Your address.."
            value={user.Address}
            onChange={getUserData}
            required
            autoComplete="off"
          />

          <label htmlFor="Message">Message</label>
          <textarea
            id="Message"
            name="Message"
            placeholder="Write something.."
            value={user.Message}
            onChange={getUserData}
            required
            autoComplete="off"
            style={{ height: "200px" }}
            defaultValue={""}
          />

          <input type="submit" defaultValue="Submit" onClick={postData} />
        </form>
      </div>
    </>
  );
};

export default App;
