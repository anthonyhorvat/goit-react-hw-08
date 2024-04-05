import { useEffect } from "react";
import { useDispatch } from "react-redux";
import PageTitle from "../../components/PageTitle/PageTitle";
import ContactList from "../../components/ContactList/ContactList";
import { ContactsContainer, PageTitleContainer } from "./Contacts.styled";
import { fetchContacts } from "../../redux/contacts/operations";

import ContactForm from "../../components/ContactForm/ContactForm";

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactsContainer>
      <PageTitleContainer>
        <PageTitle>Add new contacts</PageTitle>
      </PageTitleContainer>

      <ContactForm />

      <ContactList />
    </ContactsContainer>
  );
}
