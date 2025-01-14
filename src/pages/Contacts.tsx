import { Link, useLoaderData } from "react-router-dom";
import { getContacts } from "../api/contactsApi";

export const contactsLoader = async () => {
  const contacts = await getContacts();
  return {
    contacts
  }
}

const ContactsPage = () => {
  const { contacts } = useLoaderData() as Awaited<ReturnType<typeof contactsLoader>>;
  return <div>
    <h1>Contacts List:</h1>
    <ul>
      {
        contacts.map((contactItem) => {
          return <li key={contactItem.login.uuid}>
            <Link to={`/contacts/${contactItem.login.uuid}`}>{contactItem.name.first} {contactItem.name.last}</Link>
          </li>
        })
      }
    </ul>
  </div>
}


export default ContactsPage;