
import { default as Donation } from ".";
import { screen, render } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';

describe("Donation", () => {
  let getResultMock;

  beforeEach(() => {
    getResultMock = jest.fn();
    render(
      <BrowserRouter>
          <Donation getResult={getResultMock} />
      </BrowserRouter>
    );
  });
  test("it renders a form", () => {
    const form = screen.getByRole('donationForm')
    expect(form).toBeInTheDocument();
  });

  
});