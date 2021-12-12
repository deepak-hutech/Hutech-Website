/* eslint-disable comma-dangle */
/* eslint-disable react/react-in-jsx-scope */
import CareerStyle from "../../styles/Careers.module.css";

const careerform = () => {
  const registerUser = async (event) => {
    event.preventDefault();
    const e = event.target;
    const res = await fetch(
      "https://strapi.hutech.solutions/new-career-forms",
      {
        body: JSON.stringify({
          name: e.name.value,
          email: e.email.value,
          phone: e.phone.value,
          message: e.message.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      }
    );

    const result = await res.json();
    document.getElementById("form").reset();
    console.log(result);
  };

  return (
    <>
      <form
        onSubmit={registerUser}
        className={CareerStyle.careerForm}
        id="form"
      >
        <div className={CareerStyle.careerForm_row}>
          <input
            // id="name"
            className={CareerStyle.formborder}
            type="text"
            autoComplete="name"
            placeholder="Name"
            required
          />
          {/* <span className={CareerStyle.focus_border}></span> */}
          <input
            // id="email"
            className={CareerStyle.formborder}
            type="email"
            autoComplete="email"
            placeholder="Email"
            required
          />
          {/* <span className={CareerStyle.focus_border}></span> */}
        </div>
        <div className={CareerStyle.careerForm_row}>
          <input
            // id="phone"
            className={CareerStyle.formborder}
            type="number"
            autoComplete="phone"
            placeholder="Phone"
          />
          {/* <span className={CareerStyle.focus_border}></span> */}
          <input
            // id="phone"
            className={CareerStyle.formborder}
            type="number"
            autoComplete="phone"
            placeholder="Phone"
          />
          {/* <span className={CareerStyle.focus_border}></span> */}
        </div>
        <div>
          <textarea
            // id="message"
            className={CareerStyle.formborder}
            type="text"
            autoComplete="message"
            placeholder="Message"
          />
          {/* <span className={CareerStyle.focus_border}></span> */}
        </div>
        <button type="submit">Submit Applications</button>
      </form>
    </>
  );
};

export default careerform;
