import React, { useState } from "react";
import "./FormContainer.css";

const FormContainer = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    Address: "",
    city: "",
    State: "",
    postalCode: "",
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value, 
    }));
  }

  function submitHandler(e) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <div className="formCon">
      <div className="formDiv">

        <div>
        <h1 className="Ftitle">FILL THE FORM</h1>
        <div className="uline"></div>
        </div>
        <div className="forminputs">
          <form onSubmit={submitHandler}>
            <label htmlFor="firstName" className="htmlTag">First Name</label>
            <br />
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={changeHandler}
              className="inputProp"
            />
            <br />

            <label htmlFor="lastName" className="htmlTag">Last Name</label>
            <br />
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={changeHandler}
              className="inputProp"
            />
            <br />

            <label htmlFor="email" className="htmlTag">Email</label>
            <br />
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={changeHandler}
              className="inputProp"
            />
            <br />

            <label htmlFor="contact" className="htmlTag">Contact No</label>
            <br />
            <input
              type="text"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={changeHandler}
              className="inputProp"
            />
            <br />

            <label htmlFor="Address" className="htmlTag">Address</label>
            <br />
            <input
              type="text"
              name="Address"
              id="Address"
              value={formData.Address}
              onChange={changeHandler}
              className="inputProp"
            />
            <br />

            <label htmlFor="city" className="htmlTag">City</label>
            <br />
            <input
              type="text"
              name="city"
              id="city"
              value={formData.city}
              onChange={changeHandler}
              className="inputProp"
            />
            <br />

            <label htmlFor="State" className="htmlTag">State</label>
            <br />
            <input
              type="text"
              name="State"
              id="State"
              value={formData.State}
              onChange={changeHandler}
              className="inputProp"
            />
            <br />

            <label htmlFor="postalCode" className="htmlTag">Postal Code</label>
            <br />
            <input
              type="text"
              name="postalCode"
              id="postalCode"
              value={formData.postalCode}
              onChange={changeHandler}
              className="inputProp"
            />
            <br />

            <div className="btn-fill">
              <button>Send</button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}

export default FormContainer;
