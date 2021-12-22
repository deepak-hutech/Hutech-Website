import homeform from "../../styles/homeform.module.css";
import contact from "../assets/contact.svg";
import React, { useState, useEffect } from "react";


function HomeForm() {
  const registerUser = async (event) => {
    event.preventDefault();
    let e = event.target;

    var name = document.forms["form"]["name"];
    var email = document.forms["form"]["email"];
    var phone = document.forms["form"]["phone"];
    var company = document.forms["form"]["company"];
    let colorRed = "1px solid red"

    if(company.value === ""){
      company.style.borderBottom = colorRed;
      company.focus();
    }

    if(phone.value === ""){
      phone.style.borderBottom = colorRed;
      phone.focus();
    }

    if(email.value === ""){
      email.style.borderBottom = colorRed;
      email.focus();
    }

    if(name.value === "") {
       name.style.borderBottom = colorRed;
       name.focus();
    }else if(name.value.length > 4){
      name.style.borderBottom = "1px solid black"
    }

    const res = await fetch("https://strapi.hutech.solutions/home-page-forms", {
      body: JSON.stringify({
        username: e.name.value,
        email_address: e.email.value,
        phone_number: e.phone.value,
        company: e.company.value,
        message: e.message.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const result = await res.json();

    if(res.status == 200){
      document.getElementById("form").reset();
    }

  };

  return (
    <form onSubmit={registerUser} id="form" className={homeform.homecontactForm}>
      <h3>Hey! there {`${":)"}` } </h3>
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
          <label for="username" className={homeform.homeformlabel}>
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
      </div>
    </form>
  );
}

export default HomeForm;
