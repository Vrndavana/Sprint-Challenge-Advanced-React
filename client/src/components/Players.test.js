import React from 'react';
import {render} from '@testing-library/react'
import Players from './Players';

test('component is rendered',()=>{
    const display = render(<Players/>)
    display.getByText(/Searched/);
});

it('component is rendered',()=>{
    const {getByText} = render(<Players/>)
    display.getByText(/Searched/);
});

test('component is rendered', () => {
    render(<Players/>)
});

it('component is rendered',()=> {
    const display = render(<Player/>)
    display.getByTestId('playersDiv')
})