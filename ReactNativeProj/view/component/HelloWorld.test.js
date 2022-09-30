import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import HelloWorld from './HelloWorld';

test('HelloWorld Snapshot Test',function(){
    const element = renderer.create(
       <HelloWorld mycolor="green">Hello!</HelloWorld>
    );
    expect(element).toMatchSnapshot();
});
