/* eslint-disable no-var */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable indent */
import { useState } from "react";
import axios from "axios";
import CareerStyle from "../../styles/Careers.module.css";
const careerform = () => {
  const [file, setFile] = useState("");
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
    post: "Select Post",
    message: ""
  });
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  // const onChange = (info) => {
  //   console.log(info);
  //   if (info?.length > 0) {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(info);
  //     reader.onload = (e) => {
  //       const imgdata = {
  //         fileName: info.name,
  //         Content_Type: info.type,
  //         data: String(e.target.result).split(",")[1],
  //       };
  //       console.log(imgdata);
  //       setimageData(imgdata);
  //     };
  //   }
  // };
  // const registerUser = async (event) => {
  //   event.preventDefault();
  //   const e = event.target;
  //   const res = await fetch(
  //     "https://strapi.hutech.solutions/new-career-forms",
  //     {
  //       body: JSON.parse({
  //         name: e.name.value,
  //         email: e.email.value,
  //         phone: e.phone.value,
  //         post: e.post.value,
  //         message: e.message.value,
  //         file: imageData,
  //       }),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       method: "POST",
  //     }
  //   );

  //   const result = await res.json();
  //   // document.getElementById("form").reset();
  //   console.log(result);
  // };
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
    const formData = new FormData();
    formData.append("files.file", file);
    formData.append("data", JSON.stringify(postData));
    axios({
      method: "post",
      url: "https://strapi.hutech.solutions/new-career-forms",
      data: formData
    })
      .then(({ data }) => {
        console.log("Succesfully uploaded: ", JSON.stringify(data));
      })
      .catch((error) => {
        console.log("Error: ", error.message);
      });
  };
  return (
    <form onSubmit={upload} className={CareerStyle.careerForm}>
      <div className={CareerStyle.careerForm_row}>
        <input
          type="text"
          className={CareerStyle.formborder}
          name="name"
          value={inputs.name || ""}
          placeholder="Name"
          onChange={handleChange}
          required
        />
        <input
          className={CareerStyle.formborder}
          type="email"
          name="email"
          value={inputs.email || ""}
          onChange={handleChange}
          placeholder="Email"
          required
        />
      </div>
      <div className={CareerStyle.careerForm_row}>
        <input
          className={CareerStyle.formborder}
          type="number"
          name="phone"
          value={inputs.phone || ""}
          placeholder="Phone"
          onChange={handleChange}
          required
        />
        <select
          className={CareerStyle.formselectborder}
          name="post"
          value={inputs.post || ""}
          onChange={handleChange}
        >
          <option value="Select Post" disabled selected>
            Select Post
          </option>
          <option value="Java_Developer">Java_Developer</option>
          <option value="React_Developer">React_Developer</option>
          <option value="IOS_Developer">IOS_Developer</option>
        </select>
      </div>
      <div>
        <textarea
          className={CareerStyle.formborder}
          type="text"
          name="message"
          value={inputs.message || ""}
          placeholder="Message"
          onChange={handleChange}
          required
        />
      </div>
      <input
        type="file"
        onChange={onChange}
        required
        placeholder="Attach file"
      />
      <button type="submit">Submit Applications</button>
    </form>
  );
};

export default careerform;

// /* eslint-disable no-var */
// /* eslint-disable react/react-in-jsx-scope */
// /* eslint-disable indent */
// import { useState } from "react";
// import CareerStyle from "../../styles/Careers.module.css";
// const careerform = () => {
//   const [imageData, setimageData] = useState("");
//   const [inputs, setInputs] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     post: "Select Post",
//     message: ""
//   });
//   const handleChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setInputs((values) => ({ ...values, [name]: value }));
//   };
//   // const onChange = (file) => {
//   //   if (!file) {
//   //     setDataUri("");
//   //     return;
//   //   }

//   //   fileToDataUri(file).then((dataUri) => {
//   //     setDataUri(dataUri);
//   //   });
//   // };
//   const onChange = (info) => {
//     console.log(info);
//     if (info?.length > 0) {
//       const reader = new FileReader();
//       reader.readAsDataURL(info);
//       reader.onload = (e) => {
//         const imgdata = {
//           fileName: info.name,
//           Content_Type: info.type,
//           data: String(e.target.result).split(",")[1]
//         };
//          console.log(imgdata);
//         setimageData(imgdata);
//       };
//     }
//   };
//     const registerUser = async (event) => {
//       event.preventDefault();
//       const e = event.target;
//       const res = await fetch(
//         "https://strapi.hutech.solutions/new-career-forms",
//         {
//           body: JSON.parse({
//             name: e.name.value,
//             email: e.email.value,
//             phone: e.phone.value,
//             post: e.post.value,
//             message: e.message.value,
//             file: imageData
//           }),
//           headers: {
//             "Content-Type": "application/json"
//           },
//           method: "POST"
//         }
//       );

//       const result = await res.json();
//       // document.getElementById("form").reset();
//       console.log(result);
//     };

//   return (
//     <form onSubmit={registerUser} className={CareerStyle.careerForm}>
//       <div className={CareerStyle.careerForm_row}>
//         <input
//           type="text"
//           className={CareerStyle.formborder}
//           name="name"
//           value={inputs.name || ""}
//           placeholder="Name"
//           onChange={handleChange}
//           required
//         />
//         <input
//           className={CareerStyle.formborder}
//           type="email"
//           name="email"
//           value={inputs.email || ""}
//           onChange={handleChange}
//           placeholder="Email"
//           required
//         />
//       </div>
//       <div className={CareerStyle.careerForm_row}>
//         <input
//           className={CareerStyle.formborder}
//           type="number"
//           name="phone"
//           value={inputs.phone || ""}
//           placeholder="Phone"
//           onChange={handleChange}
//           required
//         />
//         <select
//           className={CareerStyle.formselectborder}
//           name="post"
//           value={inputs.post || ""}
//           onChange={handleChange}
//         >
//           <option value="Select Post" disabled selected>
//             Select Post
//           </option>
//           <option value="Java_Developer">Java_Developer</option>
//           <option value="React_Developer">React_Developer</option>
//           <option value="IOS_Developer">IOS_Developer</option>
//         </select>
//       </div>
//       <div>
//         <textarea
//           className={CareerStyle.formborder}
//           type="text"
//           name="message"
//           value={inputs.message || ""}
//           placeholder="Message"
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <input
//         type="file"
//         // onChange={handelfile}
//         onChange={(event) => onChange(event.target.files[0] || null)}
//       />
//       {/* <input
//         type="file"
//         name="file"
//         value={inputs.file || ""}
//         placeholder="Attach file"
//         onChange={handelfile}
//         required
//       /> */}
//       <button type="submit">Submit Applications</button>
//     </form>
//   );
// };

// export default careerform;

// const [state, setState] = useState("")
// useEffect(() => {
//   fetch("https://strapi.hutech.solutions/new-career-forms")
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// }, []);

// // import { useState } from "react";
// import CareerStyle from "../../styles/Careers.module.css";

// const careerform = () => {
// const registerUser = async (event) => {
//   event.preventDefault();
//   const e = event.target;
//   const res = await fetch(
//     "https://strapi.hutech.solutions/new-career-forms",
//     {
//       body: JSON.stringify({
//         name: e.name.value,
//         email: e.email.value,
//         phone: e.phone.value,
//         message: e.message.value,
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//       method: "POST",
//     }
//   );

//   const result = await res.json();
//   document.getElementById("form").reset();
//   console.log(result);
// };

//   return (
//     <>
// <form
//   onSubmit={registerUser}
//   className={CareerStyle.careerForm}
//   id="form"
// >
//   <div className={CareerStyle.careerForm_row}>
//     <input
//       // id="name"
//       className={CareerStyle.formborder}
//       type="text"
//       autoComplete="name"
//       placeholder="Name"
//       required
//     />
//     {/* <span className={CareerStyle.focus_border}></span> */}
//     <input
//       // id="email"
//       className={CareerStyle.formborder}
//       type="email"
//       autoComplete="email"
//       placeholder="Email"
//       required
//     />
//     {/* <span className={CareerStyle.focus_border}></span> */}
//   </div>
//   <div className={CareerStyle.careerForm_row}>
//     <input
//       // id="phone"
//       className={CareerStyle.formborder}
//       type="number"
//       autoComplete="phone"
//       placeholder="Phone"
//     />
//     {/* <span className={CareerStyle.focus_border}></span> */}
//     <select
//       placeholder="Select Post"
//       autoComplete="post"
//       className={CareerStyle.formselectborder}
//       // onChange={handleDropdownChange}
//     >
//       <option value="Select Post">Select Post</option>
//       <option value="React">React Developer</option>
//       <option value="NodeJs">NodeJs Developer</option>
//       <option value="Java">Java Developer</option>
//     </select>
//     {/* <span className={CareerStyle.focus_border}></span> */}
//   </div>
//   <div>
//     <textarea
//       // id="message"
//       className={CareerStyle.formborder}
//       type="text"
//       autoComplete="message"
//       placeholder="Message"
//     />
//     {/* <span className={CareerStyle.focus_border}></span> */}
//   </div>
//   <button type="submit">Submit Applications</button>
// </form>
//       ;
//     </>
//   );
// };

// export default careerform;

// // const [state, setState] = useState("")
// // useEffect(() => {
// //   fetch("https://strapi.hutech.solutions/new-career-forms")
// //     .then((response) => response.json())
// //     .then((data) => console.log(data));
// // }, []);
