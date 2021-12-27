import { useState, createRef } from "react";
import axios from "axios";
import CareerStyle from "../../styles/Contact.module.css";
import { InputGroup, Form, Button, Row, Col, Container } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";

const careerform = () => {
  const recaptchaRef = createRef();
  const [captchaCode, setCaptchaCode] = useState("");

  const [file, setFile] = useState("");
  const [inputs, setInputs] = useState({
    username: String,
    email: String,
    phone: Number,
    company: String,
    projectDetails: "",
    country: String,
    services: String
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
        location.reload(true);
      })
      .catch((error) => {
        console.log("Error: ", error.message);
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
      alert("Select recaptcha.");
      recaptchaRef.current.reset();
      return;
    }
    document.getElementById("form").onsubmit = function () {};
  };

  const onReCAPTCHAChange = (captchaCode) => {
    alert(captchaCode);
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
      <Row className="mb-5 mt-3">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
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
        <Form.Group as={Col} md="6" controlId="validationCustom02">
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
      </Row>
      <Row className="mb-5 mt-3">
        <Form.Group as={Col} md="6" controlId="validationCustomPhone">
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
        <Form.Group as={Col} md="6" controlId="validationCustom04">
          <Form.Label className={CareerStyle.nonMendatory_label}>
            Company name
          </Form.Label>
          <Form.Control
            value={inputs.company}
            type="text"
            className={CareerStyle.inputs}
            onChange={handleChange}
            name="company"
            placeholder="Enter company name"
          />
        </Form.Group>
      </Row>
      <Row className="mb-5">
        <Form.Group as={Col} md="6" controlId="validationCountryUsername">
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
            <option value="India">India</option>
            <option value="China">China</option>
            <option value="Japan">Japan</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} md="6" controlId="validationCustomUsername">
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
            <option value="service1">service1</option>
            <option value="service2">service2</option>
            <option value="servic3">Service3</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
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

      <Row className="">
        <Form.Group className="position-relative mb-3">
          <Form.Label className={CareerStyle.nonMendatory_label}>
            Please share your requirement documents
          </Form.Label>

          <Form.Label className={CareerStyle.Drag_label}>
            <Form.Control
              type="file"
              name="file"
              className={CareerStyle.fileUpload}
              onChange={onChange}
            />{" "}
          
            <sapn className={CareerStyle.vl}>
              {" "}
              Drag and drop your file here
            </sapn>
          </Form.Label>

          {/* <Form.Control.Feedback type="invalid" tooltip>File is required field
            </Form.Control.Feedback> */}
        </Form.Group>
      </Row>
      <p className={CareerStyle.form_upload_text}>
        File types: pdf, docx and doc | Maximum file size: 5MB.
      </p>

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
    </Form>
  );
};

export default careerform;
