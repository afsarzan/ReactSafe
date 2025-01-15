import { ActionFunction, Form, Link, redirect, useLoaderData } from "react-router-dom";
import { createContact, getContacts, updateContact } from "../api/contactsApi";
import ContactForm from "./ContactForm";


export const contactsLoader = async () => {
  const contacts = await getContacts();
  return {
    contacts
  }
}

export const createContactAction: ActionFunction = async ({
  request
}) => {
  const formData = await request.formData();
  const first = formData.get('first')?.toString();
  const last = formData.get('last')?.toString();
  const email = formData.get('email')?.toString();
  if (!email || !first || !last) {
    throw new Error('First name, last name, and email are required');
  }

  const contact = await createContact({
    name: {
      first,
      last
    },
    email
  });
  return contact
}


export const updateContactAction: ActionFunction = async ({
  request,params
}) => {
  const formData = await request.formData();
  const { contactId } = params;
  const first = formData.get('first')?.toString();
  const last = formData.get('last')?.toString();
  const email = formData.get('email')?.toString();
  if (!email || !first || !last) {
    throw new Error('First name, last name, and email are required');
  }

  await updateContact({
    name: {
      first,
      last
    },
    email
  },contactId!);
    return redirect('/contacts');
}



const ContactsPage = () => {
  const { contacts } = useLoaderData() as Awaited<ReturnType<typeof contactsLoader>>;
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <ContactForm/>
      <section className="md:col-span-2">
        <h1 className="text-center text-lg">Contacts List</h1>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Contact</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => {
                return (
                  <tr key={contact.login.uuid}>
                    <td>
                      <Link to={`/contacts/${contact.login.uuid}`}>
                        <div className="flex items-center gap-3">
                          <div
                            className={`avatar ${contact.picture ? "" : "placeholder"}`}
                          >
                            {contact.picture ? (
                              <div className="mask mask-squircle w-12 h-12">
                                <img
                                  src={contact.picture.thumbnail}
                                  alt="Avatar Tailwind CSS Component"
                                />
                              </div>
                            ) : (
                              <div className="bg-neutral text-neutral-content rounded-full w-12">
                                <span className="uppercase">
                                  {contact.name.first[0]}
                                  {contact.name.last[0]}
                                </span>
                              </div>
                            )}
                          </div>
                          <div>
                            <div className="font-bold">
                              {contact.name.first} {contact.name.last}
                            </div>
                            <div className="text-sm opacity-50">
                              {contact.email}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </td>
                    <td>
                      <div className="flex justify-normal gap-2">
                      <Link to={`/contacts/${contact.login.uuid}/edit`}>
                        <button className="btn btn-outline bg-blue-500 btn-xs mr-5">
                          Edit
                        </button>
                      </Link>
                      <Form method="POST" onSubmit={(event) => {
                        const result = confirm('Confirm deletion of this contact.');
                        if (!result) {
                          event.preventDefault();
                        }
                      }} action={`/contacts/${contact.login.uuid}/destroy`}>
                        <button className="btn btn-outline btn-error btn-xs">
                          delete
                        </button>
                      </Form>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <th>Contact</th>
                <th>Actions</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>
    </div>
  );
};

export default ContactsPage;
