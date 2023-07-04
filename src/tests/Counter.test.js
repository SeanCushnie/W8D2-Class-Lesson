import Counter from '../components/Counter';
import React from 'react';
// FIRST change made:
import {render, fireEvent} from '@testing-library/react'


describe("Counter", () => {
// FIFTH change, we are declaring container up a level.
// this is new.
let container;


  // SECOND change made. This concerns the first 'level'. We are checking to see if the counter function is correct. NEXT change on counter.js:
  beforeEach(() => {
    container = render(<Counter/>)
  });

  it('should start the counter at zero', () => {
    // FOURTH change made... this will capture the counter. We can now run the tests "npm test":
    // SIXTH change, we made changed this to ... = container.getByTestId("counter"). The test will now pass.
    const counter = container.getByTestId("counter")
    // SEVENTH change, we add the line below. String because the counter pulls through as string.
    expect(counter.textContent).toEqual('0')
  });

  it("should increment counter on click", () => {
    // EIGHTH CHANGE: this test checks to see if the up button functions as expected. If clicked, will the counter become '1'? Because this has an event listener, we make use of fireContent.
    const upButton = container.getByTestId("button-up");
    const counter = container.getByTestId("counter");
    fireEvent.click(upButton);
    expect(counter.textContent).toEqual('1')
  });

  it("should decrement counter on click", () => {
  // NINTH CHANGE: this test checks to see if the down button functions as expected. If clicked will the counter decrement by 1?
  const downButton = container.getByTestId("button-down");
    const counter = container.getByTestId("counter");
    fireEvent.click(downButton);
    expect(counter.textContent).toEqual('-1');
  });

})