import { useLoaderData } from "react-router-dom";
import ContactForm from "./ContactForm";
import { contactByIdLoader } from "./ContactDetail";



const  ContactEditPage = () => {
    const { contact } = useLoaderData() as Awaited<ReturnType<typeof contactByIdLoader>>;
    return (
        <ContactForm contact={contact}></ContactForm>
    )
}

export default ContactEditPage;