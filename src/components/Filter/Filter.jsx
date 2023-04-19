import { useDispatch } from 'react-redux';
import { setFilter } from '../../features/filterContactsSlice';

import { Label, Input } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();

  const handleInput = e => {
    const normalizeFilter = e.target.value.toLowerCase();

    dispatch(setFilter(normalizeFilter));
  };
  return (
    <Label>
      Find contacts by name
      <Input type="text" onInput={handleInput} />
    </Label>
  );
};

export default Filter;
