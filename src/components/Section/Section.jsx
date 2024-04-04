import {
  PhonebookSection,
  PhonebookContainer,
  TitleContainer,
  Title,
} from "./Section.styled";

export const Section = ({ title, children, headerContent }) => {
  return (
    <PhonebookSection>
      <PhonebookContainer>
        <TitleContainer>
          <Title>{title}</Title>
          {headerContent}
        </TitleContainer>
        {children}
      </PhonebookContainer>
    </PhonebookSection>
  );
};
