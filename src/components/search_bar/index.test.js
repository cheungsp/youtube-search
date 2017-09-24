import _ from 'lodash';
import React from 'react';
import { shallow } from 'enzyme'
import SearchBar from './index.js'
import toJson from 'enzyme-to-json'
import './style.css';


test('Search component should render as expected', () => {
  const component = shallow(<SearchBar />)
  const tree =  toJson(component)
  expect(tree).toMatchSnapshot()
})

it('should pass a selected value to the onChange function', () => {
  const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 200);
    const component = shallow(<SearchBar onSearchTermChange={videoSearch}/>);
    component.find('input').simulate('change', { target: {
      value: 'Change function' }
    });
    expect(toJson(component)).toMatchSnapshot();
});