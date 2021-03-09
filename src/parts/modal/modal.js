import "./modal-styles.css";
import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Modal({ modalFunc, createUser }) {
  const [toggle, setToggle] = useState(true);
  const [contact, setContact] = useState({
    name: "",
    email: "",
    body: "",
  });

  const handleChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  // Set user and send it to commentsPage
  const handleSubmit = (e) => {
    createUser(contact);
    e.preventDefault();
    setContact({
      ...contact,
      name: "",
      email: "",
      body: "",
    });
  };

  return (
    <div className="modal" style={{ display: toggle ? "block" : "none" }}>
      <div className="modal-content">
        <button
          type="button"
          onClick={() => {
            modalFunc(false);
            setToggle((prevState) => !prevState);
          }}
          className="close"
        >
          &times;
        </button>
        <form className="user-form" onSubmit={handleSubmit}>
          <label htmlFor="name">
            Name
            <input
              id="name"
              placeholder="Name"
              name="name"
              value={contact.name}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              id="email"
              type="email"
              placeholder="Your email address"
              name="email"
              value={contact.email}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="body">
            Body
            <textarea
              id="body"
              placeholder="Your message"
              name="body"
              onChange={handleChange}
              value={contact.body}
              rows="5"
              cols="33"
              required
            />
          </label>
          <button
            className="submit"
            type="submit"
            value="Submit"
            onChange={handleChange}
          >
            Submit
          </button>
          <button
            className="delete"
            type="button"
            value="Delete"
            onChange={handleChange}
            onClick={() => createUser(contact, "delete")}
          >
            Delete user
          </button>
        </form>
      </div>
    </div>
  );
}

// Props Types checking

Modal.propTypes = {
  modalFunc: PropTypes.func,
  createUser: PropTypes.func,
};

Modal.defaultProps = {
  modalFunc: PropTypes.bool,
  createUser: PropTypes.shape({
    name: "User",
    email: "email",
    body: "empty",
  }),
};
