import React, { useState } from "react";
import styles from "@/styles/Contact.module.css";

const contact = () => {
  const [body, setBody] = useState({
    name: "",
    contact: "",
    email: "",
    desc: "",
  });
  const handleChange = (e) => {
    // console.log(e);
    setBody({ ...body, [e.target.name]: e.target.value });
  };
  const handleClick = async (e) => {
    e.preventDefault();
    for (let item in body) {
      if (body[item] === "") {
        alert("Please fill all the details");
        return;
      }
    }
    // console.log(body);
    const response = await fetch("http://localhost:3000/api/contact", {
      method: "POST",
      body: JSON.stringify(body),
    });
    alert((await response.json()).msg);
  };
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={`${styles.mb_3} ${styles.contactItems}`}>
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            aria-describedby="emailHelp"
            value={body.name}
            onChange={handleChange}
          />
        </div>
        <div className={`${styles.mb_3} ${styles.contactItems}`}>
          <label htmlFor="contact" className={styles.label}>
            Contact Number
          </label>
          <input
            type="text"
            className="form-control"
            id="contact"
            name="contact"
            aria-describedby="emailHelp"
            value={body.contact}
            onChange={handleChange}
          />
        </div>
        <div className={`${styles.mb_3} ${styles.contactItems}`}>
          <label htmlFor="email" className={styles.label}>
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            onChange={handleChange}
            value={body.email}
          />
        </div>
        <div className={`${styles.mb_3} ${styles.contactItems}`}>
          <label htmlFor="desc" className={styles.label}>
            Write Your Concerns
          </label>
          <input
            type="text"
            className={styles.descinput}
            id="desc"
            name="desc"
            aria-describedby="emailHelp"
            placeholder="Write your concern"
            onChange={handleChange}
            value={body.desc}
          />
        </div>
        <div className={styles.buttonContainer}>
          <button
            type="submit"
            className={`${styles.btn}`}
            onClick={handleClick}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default contact;
