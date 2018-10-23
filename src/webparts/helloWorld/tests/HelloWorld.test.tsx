/// <reference types="jest" />
import * as React from 'react';
import { configure, mount, ReactWrapper } from 'enzyme';

import HelloWorld from '../components/HelloWorld';
import styles from '../components/HelloWorld.module.scss';

import * as Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });

describe('Test obj-identity-proxy', () => {
    it('React Styles is undefined', () => {
        const element = mount(<HelloWorld 
            description={"This is description"} 
        />);

        console.log(element.debug());

        expect(true).toBe(true);
    });

    it('Styles is undefined', () => {
        expect(styles.helloWorld).toBe(undefined);
    });
});