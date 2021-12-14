import homeform from "../../styles/homeform.module.css";
import contact from "../assets/contact.svg";

function HomeForm() {
  const registerUser = async (event) => {
    event.preventDefault();
    let e = event.target;
    const res = await fetch("https://strapi.hutech.solutions/contact-forms", {
      body: JSON.stringify({
        username: e.name.value,
        email: e.email.value,
        phone: e.phone.value,
        description: e.description.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();
    document.getElementById("form").reset();
  };

  return (
    <form onSubmit={registerUser} id="form" className={homeform.homecontactForm}>
      <h3>Hey! there :)</h3>
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
            required
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
            required
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
            id="name"
            type="text"
            autoComplete="name"
            className={homeform.homeinputbox}
            placeholder="Company name"
            required
          />
        </div>
        <div className={homeform.labelmsgbox}>
          <label for="username" className={homeform.homeformlabel}>
            Message
          </label>
          <textarea
            id="description"
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
