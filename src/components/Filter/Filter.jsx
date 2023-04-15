// // import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../features/filterContactsSlice';

import { Label, Input } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();

  const testClick = e => {
    const normalizeFilter = e.target.value.toLowerCase();
    dispatch(setFilter(normalizeFilter));
  };
  return (
    <Label>
      Find contacts by name
      <Input type="text" onInput={testClick} />
    </Label>
  );
};

export default Filter;

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
