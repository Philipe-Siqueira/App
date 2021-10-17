import React from 'react';
import { Text } from 'react-native';
import renderer from 'react-test-renderer';

import { SignIn } from './index';

describe('it should be able a form SignIn', () => {
  it('has 1 child', () => {
    const containerSignIn = renderer.create(<SignIn />).toJSON();
    const { children, type } = containerSignIn;
    expect(type).toBe('RNCSafeAreaView');
    expect(children.length).toBe(1);

  });
});

