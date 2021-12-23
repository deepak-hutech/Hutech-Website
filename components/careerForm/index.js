
import { useState } from "react";
import axios from "axios";
import CareerStyle from "../../styles/Careers.module.css";
import { InputGroup, Form, Button, Row, Col, Container } from "react-bootstrap";


const careerform = () => {
  const [file, setFile] = useState("");
  const [inputs, setInputs] = useState({
    name:String,
    email: String,
    phone: Number,
    post: String,
    message: String
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values,
       [name]: value }));
  };
  
  const postData = {
    name: inputs.name,
    email: inputs.email,
    phone: inputs.phone,
    post: inputs.post,
    message: inputs.message
  };


  const onChange = (event) => {
    setFile(event.target.files[0]);
  };

  const upload = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("files.file", file);
    if(file.name) {
      formData.append("data", JSON.stringify(postData));
      axios({
        method: "post",
        url: "https://strapi.hutech.solutions/new-career-forms",
        data: formData
      })
      .then(({ data }) => {
          console.log("Succesfully uploaded: ", JSON.stringify(data));
          location.reload(true);
      })
      .catch((error) => {
        console.log("Error: ", error.message);
      });
    }
  };

    const [validated, setValidated] = useState(false);
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      setValidated(true);
      document.getElementById("form").onsubmit = function(){
    }
    };
  
    return (
      <Form noValidate validated={validated} id="form" autoComplete="off"
              className={CareerStyle.careerFormNew}
              onSubmit={upload}>
        <Row className="mb-5 mt-3">
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Control
              required value={inputs.name}
              type="text"
              className={CareerStyle.inputs}
              onChange={handleChange}
              name="name"
              placeholder="Name"
            />
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Control
              required value={inputs.email}
              type="email"
              className={CareerStyle.inputs}
              onChange={handleChange}
              name="email"
              placeholder="Email"
            />
          </Form.Group>
        </Row>
        <Row className="mb-5">
          <Form.Group as={Col} md="6" controlId="validationCustomPhone">
              <Form.Control
                 type="number" 
                 value={inputs.phone}
                 className={CareerStyle.inputs}
                 onChange={handleChange}
                 name="phone"
                 placeholder="Phone Number"
                 aria-describedby="inputGroupPrepend"
                 required
              />
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustomUsername">
          <Form.Select  value={inputs.post || ""} onChange={handleChange} name="post" required>
            <option value="" selected>
          Select Post
        </option>
            <option value="Java_Developer">Java_Developer</option>
            <option value="React_Developer">React_Developer</option>
            <option value="IOS_Developer">IOS_Developer</option>
          </Form.Select>
        </Form.Group>
        </Row>

        <Row className="mb-3">
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" 
               placeholder="Message" rows={3} 
               className={CareerStyle.inputs}
              />
         </Form.Group>
        </Row>

        <Row className="">
        <Form.Group className="position-relative mb-3">
            <Form.Label>Attach File</Form.Label>
            <Form.Control
              type="file"
              required
              name="file"
              onChange={onChange}
            />
            {/* <Form.Control.Feedback type="invalid" tooltip>File is required field
            </Form.Control.Feedback> */}
          </Form.Group>
        </Row>
        <p className={CareerStyle.form_upload_text}>
          File types: pdf, docx and doc | Maximum file size: 5MB.
        </p>
        <button type="submit" onClick={handleSubmit}>Submit Application</button>
      </Form>
    );
  }
  
export default careerform;

