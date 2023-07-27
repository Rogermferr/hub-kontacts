import { EmptyListContactsStyle } from "./style";

const EmptyListContacts = () => {
  return (
    <EmptyListContactsStyle>
      <h2>Você Ainda não possui contatos</h2>
      <p>Adicione quantos contatos você desejar</p>
    </EmptyListContactsStyle>
  );
};

export default EmptyListContacts;
