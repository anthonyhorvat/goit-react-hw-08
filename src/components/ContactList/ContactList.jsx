import { ContactListElement } from "./ContactList.styled";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import {
  selectLoading,
  selectContacts,
  selectFilter,
} from "../../redux/contacts/selectors";
import Loader from "../Loader/Loader";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const filter = useSelector(selectFilter);

  const getFilteredContacts = () => {
    return contacts.filter((contact) =>
      contact.name?.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <ContactListElement>
          {filteredContacts.map((contact) => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </ContactListElement>
      )}
    </>
  );
};

export default ContactList;
