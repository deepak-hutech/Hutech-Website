import contactStyle from "../../styles/Contact.module.css";

function Form() {
    const registerUser = async (event) => {
      event.preventDefault();
      let e = event.target;
  
      var name = document.forms["form"]["name"];
      var email = document.forms["form"]["email"];
      var phone = document.forms["form"]["phone"];
      let colorBlack = "1px solid black";
      let colorRed = "1px solid red"
  
  
      if(phone.value === ""){
        phone.style.border = colorRed;
        phone.focus();
      }else
        phone.style.border = colorBlack
  
      if(email.value === ""){
        email.style.border = colorRed;
        email.focus();
      }else
         email.style.border = colorBlack
  
      if(name.value === "") {
         name.style.border = colorRed;
         name.focus();
      }else
        name.style.border = colorBlack

  
    const res = await fetch('https://strapi.hutech.solutions/contact-forms', {
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
  
      if(res.status == 200){
        document.getElementById("form").reset();
      }
  
    };
  
    return (
      <form onSubmit={registerUser} className={contactStyle.contactForm} id="form">
        <div>
           <input id="name" type="text" autoComplete="name" placeholder="Name" />
        </div>
        <div>
          <input id="email" type="email" autoComplete="email" placeholder="Email" />
        </div>
        <div>
          <input id="phone" type="number" autoComplete="phone" placeholder="Phone" />
        </div>
        <div>
          <textarea id="description" type="text" autoComplete="desc" placeholder="Description" />
        </div>
        <div style={{textAlign:"right"}}>
        <button type="submit" className={contactStyle.submitbtn}>Submit</button>
        </div>
      </form>
    )
  }

  export default Form