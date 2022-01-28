import { useState, createRef, useEffect } from "react";
import axios from "axios";
import CareerStyle from "../../styles/Contact.module.css";
import { InputGroup, Form, Button, Row, Col, Container } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import allCountries from "../data/countries.json"

const careerform = () => {
  const recaptchaRef = createRef();
  const [captchaCode, setCaptchaCode] = useState("");
  const [file, setFile] = useState("");
  const [formMessage, setFormMessage] = useState("");

  const [resetForm, setresetForm] = useState()

  const [inputs, setInputs] = useState({
    username: String,
    email: String,
    phone: Number,
    company: String,
    projectDetails: "",
    country: String,
    services: String,
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const postData = {
    username: inputs.username,
    email: inputs.email,
    phone: inputs.phone,
    company: inputs.company,
    country: inputs.country,
    services: inputs.services,
    projectDetails: inputs.projectDetails,
  };

  const onChange = (event) => {
    setFile(event.target.files[0]);
  };

  const upload = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("files.file", file);
    // if(file.name) {
    formData.append("data", JSON.stringify(postData));
    axios({
      method: "post",
      url: "https://strapi.hutech.solutions/contact-forms",
      data: formData,
    })
      .then(({ data }) => {
        console.log("Succesfully uploaded: ", JSON.stringify(data));
        setFormMessage("Form submitted successfully.");
        location.reload();
      })
      .catch((error) => {
        console.log("Error: ", error.message);
        setFormMessage("Error during form submission.");
      });
    // }
  };

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    //recaptchaRef.current.execute();
    if (!captchaCode) {
      // alert("Select recaptcha.");
      recaptchaRef.current.reset();
      return;
    }
  };

  const onReCAPTCHAChange = (captchaCode) => {
    // alert(captchaCode);
    // If the reCAPTCHA code is null or undefined indicating that
    // the reCAPTCHA was expired then return early
    if (!captchaCode) {
      return;
    }
    setCaptchaCode(captchaCode);
  };

  const removeCaptchaCode = () => {
    setCaptchaCode("");
  };

  return (
    <Form
      noValidate
      validated={validated}
      id="form"
      autoComplete="off"
      className={CareerStyle.contactForm}
      onSubmit={upload}
    >
      <Row className="mt-3">
        <Form.Group
          as={Col}
          md="4"
          controlId="validationCustom01"
          className={CareerStyle.contact_col}
        >
          <Form.Label className={CareerStyle.contactForm_label}>
            Your Name
          </Form.Label>
          <Form.Control
            required
            value={inputs.username}
            type="text"
            className={CareerStyle.inputs}
            onChange={handleChange}
            name="username"
            placeholder="Enter your name"
          />
        </Form.Group>
        <Form.Group
          as={Col}
          md="4"
          controlId="validationCustom02"
          className={CareerStyle.contact_col}
        >
          <Form.Label className={CareerStyle.contactForm_label}>
            Email address{" "}
          </Form.Label>
          <Form.Control
            required
            value={inputs.email}
            type="email"
            className={CareerStyle.inputs}
            onChange={handleChange}
            name="email"
            placeholder="Enter your email address"
          />
        </Form.Group>
        <Form.Group
          as={Col}
          md="4"
          controlId="validationCustomPhone"
          className={CareerStyle.contact_col}
        >
          <Form.Label className={CareerStyle.contactForm_label}>
            Phone Number
          </Form.Label>
          <Form.Control
            value={inputs.phone}
            type="number"
            className={CareerStyle.inputs}
            onChange={handleChange}
            name="phone"
            placeholder="09897888927"
            aria-describedby="inputGroupPrepend"
            required
          />
        </Form.Group>
      </Row>
      <Row className="mt-3">
        
        
      </Row>
      <Row>
      <Form.Group
          as={Col}
          md="4"
          controlId="validationCustomPhone"
          className={CareerStyle.contact_col}
        >
          <Form.Label className={CareerStyle.contactForm_label}>
          Company name
          </Form.Label>
          <Form.Control
            value={inputs.company}
            type="text"
            className={CareerStyle.inputs}
            onChange={handleChange}
            name="company"
            placeholder="Enter company name"
           
            required
          />
        </Form.Group>
        <Form.Group
          as={Col}
          md="4"
          controlId="validationCountryUsername"
          className={CareerStyle.contact_col}
        >
          <Form.Label className={CareerStyle.nonMendatory_label}>
            Country
          </Form.Label>
          <Form.Select
            className={CareerStyle.selectoption_style}
            value={inputs.country || ""}
            onChange={handleChange}
            name="country"
          >
            <option value="" selected>
              Select Country
            </option>
            {allCountries.map((val)=> (
              <option value={val.name}>{val.name}</option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group
          as={Col}
          md="4"
          controlId="validationCustomUsername"
          className={CareerStyle.contact_col}
        >
          <Form.Label className={CareerStyle.nonMendatory_label}>
            Interested Service
          </Form.Label>
          <Form.Select
            className={CareerStyle.selectoption_style}
            value={inputs.services || ""}
            onChange={handleChange}
            name="services"
          >
            <option value="" selected>
              Select interested service
            </option>
            <option value="Staff Augmentation">Staff Augmentation</option>
            <option value="Managed Project">Managed Project</option>
            <option value="Time and Material Hybrid">Time and Material Hybrid</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlTextarea1"
          className={CareerStyle.contact_col}
        >
          <Form.Label className={CareerStyle.contactForm_label}>
            Project Details{" "}
          </Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Brief about the project"
            rows={3}
            required
            name="projectDetails"
            className={CareerStyle.inputs}
            value={inputs.projectDetails || ""}
            onChange={handleChange}
          />
        </Form.Group>
      </Row>
      <Row >
        <Form.Group
         as={Col}
         md="5"
          className="position-relative mb-3"
          className={CareerStyle.contact_col}
        >
          <Form.Label>Please share your requirement documents</Form.Label>
          <Form.Control type="file" name="file" onChange={onChange} />
        </Form.Group>
      </Row>
      <p className={CareerStyle.form_upload_text}>
        File types: pdf, docx and doc | Maximum file size: 5MB.
      </p>

       <Form.Label>
          Please check the box below to proceed
        </Form.Label> 
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        onChange={onReCAPTCHAChange}
        onExpired={removeCaptchaCode}
        onErrored={removeCaptchaCode} 
      />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
      {formMessage.indexOf("successfully") > 0 ? (
        <p className={CareerStyle.sucessmsg}>{formMessage}</p>
      ) : (
        <p className={CareerStyle.errormsg}>{formMessage}</p>
      )}
    </Form>
  );
};

export default careerform;
