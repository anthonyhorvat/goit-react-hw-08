import { FilterBox, FilterInput, FilterInputTitle } from "./Filter.styled";
import { useDispatch } from "react-redux";

import { changeFilter } from "../../redux/contacts/slice";

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <FilterBox>
      <FilterInputTitle>Find contacts by name</FilterInputTitle>
      <FilterInput
        type="text"
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        placeholder="Search contacts"
      />
    </FilterBox>
  );
};

export default Filter;
