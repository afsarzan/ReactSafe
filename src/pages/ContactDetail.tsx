import { Params, useLoaderData } from "react-router-dom";
import { getContactById } from "../api/contactsApi";

type LoaderArgs = {
  params: Params<string>
}

export const contactDetailsLoader = async ({ params }: LoaderArgs) => {
  const { contactId } = params;
  if (!contactId) {
    throw new Error('ContactId not provided');
  }
  const contact = await getContactById(contactId);
  if (!contact) {
    throw new Error("Contact not found")
  }
  return {
    contact
  }
}
const ContactDetailPage = () => {
  const { contact } = useLoaderData() as Awaited<ReturnType<typeof contactDetailsLoader>>;
  return <>
    <h1>{contact?.name.first} {contact?.name.last}</h1>
    <p>{contact?.email}</p>
  </>
}

export default ContactDetailPage