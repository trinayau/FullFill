import Locator, { default as Homepage } from ".";
import { screen, render } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';

describe("Locator", () => {
  let getResultMock;

  beforeEach(() => {
    getResultMock = jest.fn();
    render(
      <BrowserRouter>
          <Locator getResult={getResultMock} />
      </BrowserRouter>
    );
  });
  test("it renders a form", () => {
    const form = screen.getByRole('locatorForm')
    expect(form).toBeInTheDocument();
  });

//   test("it renders a title", () => {
//     const title = screen.findByText('Find a Food Bank:')
//     expect(title).toBeInTheDocument();
//   });

  
});