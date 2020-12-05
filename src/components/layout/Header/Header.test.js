import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import Header from '../Header/HeaderContainer';
import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore();
const store = mockStore({});

describe('Component Header', () => {
  it('should render without crashing', () => {
    const component = shallow(<Provider store={store}><Header /></Provider>);
    expect(component).toBeTruthy();
  });
});
