import InputMenu from './index.js';
import { shallow } from 'enzyme';

describe('InputMenu', () => {
  const props = {
    value: 'Sepia',
    onChange: (terms) => {},
    placeholder: 'Search'
  };

  it('shows a text input', () => {
    const element = shallow(<InputMenu { ...props } />);

    expect(element.find('input')).to.have.length(1);
  });
});
