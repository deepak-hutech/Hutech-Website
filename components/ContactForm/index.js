import contactStyle from "../../styles/Contact.module.css";


function Form() {
    const registerUser = async event => {
        event.preventDefault();
        let e = event.target;
        const res = await fetch('https://strapi.hutech.solutions/contact-forms', {
          body: JSON.stringify({
            username: e.name.value,
            email: e.email.value,
            phone: e.phone.value,
            description: e.description.value,
          }),
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST'
        })
    
         const result = await res.json()
         document.getElementById("form").reset();
      }
  
    return (
      <form onSubmit={registerUser} className={contactStyle.contactForm} id="form">
        <div>
           <input id="name" type="text" autoComplete="name" placeholder="Name" required />
        </div>
        <div>
          <input id="email" type="email" autoComplete="email" placeholder="Email" required />
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