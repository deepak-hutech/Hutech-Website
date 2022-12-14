import homeform from "../../styles/homeform.module.css";
import contact from "../assets/contact.svg";
import React, { useState, useEffect } from "react";
import axios from "axios";

function HomeForm() {
  const [formMessage, setFormMessage] = useState("");
  const registerUser = async (event) => {
    event.preventDefault();
    let e = event.target;

    var name = document.forms["form"]["name"];
    var email = document.forms["form"]["email"];
    var phone = document.forms["form"]["phone"];
    var message = document.forms["form"]["message"];
    let colorRed = "1px solid red";

    if (message.value === "") {
      message.style.borderBottom = colorRed;
      message.focus();
    }

    if (phone.value === "") {
      phone.style.borderBottom = colorRed;
      phone.focus();
    }

    if (email.value === "") {
      email.style.borderBottom = colorRed;
      email.focus();
    }

    if (name.value === "") {
      name.style.borderBottom = colorRed;
      name.focus();
    } else if (name.value.length > 4) {
      name.style.borderBottom = "1px solid black";
    }

    axios({
      method: "POST",
      url: "https://strapi.hutech.solutions/home-page-forms",
      data: JSON.stringify({
        username: e.name.value,
        email_address: e.email.value,
        phone_number: e.phone.value,
        company: e.company.value,
        message: e.message.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(({ data }) => {
        document.getElementById("form").reset();
        console.log("Succesfully uploaded: ", JSON.stringify(data));
        const _global = window;
        _global.dataLayer.push({
          event: "callToAction",
          actionType: "Query submit - Home",
        });
        setFormMessage("Form submitted successfully.");
      })
      .catch((error) => {
        console.log("Error: ", error.message);
        setFormMessage("Error during form submission.");
      });

    
  };

  return (
    <form
      onSubmit={registerUser}
      id="form"
      autoComplete="off"
      className={homeform.homecontactForm}
    >
      <h3>Hey! there {`${":)"}`} </h3>
      <div className={homeform.contactForm}>
        <div className={homeform.labelbox}>
          <label for="username" className={homeform.homeformlabel}>
            Your name
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            className={homeform.homeinputbox}
            placeholder="Enter your name"
          />
        </div>
        <div className={homeform.labelbox}>
          <label for="username" className={homeform.homeformlabel}>
            Email address
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className={homeform.homeinputbox}
            placeholder="Enter your email address"
          />
        </div>
        <div className={homeform.labelbox}>
          <label for="username" className={homeform.homeformlabel}>
            Phone Number
          </label>
          <input
            id="phone"
            type="number"
            autoComplete="phone"
            className={homeform.homeinputbox}
            placeholder="Enter your phone number"
          />
        </div>
        <div className={homeform.labelbox}>
          <label for="username" className={homeform.nonvalidateLable}>
            Company
          </label>
          <input
            id="company"
            type="text"
            autoComplete="name"
            className={homeform.homeinputbox}
            placeholder="Company name"
          />
        </div>
        <div className={homeform.labelmsgbox}>
          <label for="username" className={homeform.homeformlabel}>
            Message
          </label>
          <textarea
            id="message"
            type="text"
            rows="3"
            autoComplete="desc"
            className={homeform.homeinputbox}
            placeholder="Brief about the project"
          />
        </div>
        <button type="submit" className={homeform.formbtn}></button>
        {formMessage.indexOf("successfully") > 0 ? (
          <p className={homeform.sucessmsg}>{formMessage}</p>
        ) : (
          <p className={homeform.errormsg}>{formMessage}</p>
        )}
      </div>
    </form>
  );
}

export default HomeForm;
