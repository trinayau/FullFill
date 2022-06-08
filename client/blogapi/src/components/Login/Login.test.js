import { default as Login } from ".";
import { screen, render } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';

describe("Login", () => {
  let getResultMock;

  beforeEach(() => {
    getResultMock = jest.fn();
    render(
      <BrowserRouter>
          <Login getResult={getResultMock} />
      </BrowserRouter>
    );
  });

  test("it renders a textfield", () => {
    const title = screen.getByLabelText('Email Address')
    expect(title).toBeInTheDocument();
  });

  
});