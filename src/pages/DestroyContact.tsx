import { ActionFunction, redirect } from "react-router-dom";
import { deleteContact } from "../api/contactsApi";


export const destroyContactAction: ActionFunction = async ({
  params
}) => {
  const contactId = params.contactId;
  await deleteContact(contactId!);
  return redirect('/contacts');
}