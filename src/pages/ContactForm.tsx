import { Form } from "react-router-dom";

export default function ContactForm({ contact = null }) {
    return (
     <div className={`flex mx-auto w-[500px] gap-10 ${contact ? 'items-center' : ''}`}>
         <Form action="./" method="POST" className="flex flex-col gap-4 items-center">
        <h2 className="text-center text-lg">
          {contact ? "Edit Contact" : "Add New Contact"}
        </h2>
        <label htmlFor="firstName" className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">First name</span>
          </div>
          <input
            name="first"
            id="firstName"
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            defaultValue={contact?.name.first} // Bind first name
          />
        </label>
  
        <label htmlFor="lastName" className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Last name</span>
          </div>
          <input
            name="last"
            id="lastName"
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            defaultValue={contact?.name.last} // Bind last name
          />
        </label>
  
        <label htmlFor="email" className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input
            name="email"
            id="email"
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            defaultValue={contact?.email} // Bind email
          />
        </label>
        <button className="btn btn-primary btn-outline max-w-xs">
          Submit
        </button>
      </Form>
      {contact && (<div>
        <img src={contact?.picture?.large} alt="" height="400px"/>
      </div>)}
     </div>
    );
  }