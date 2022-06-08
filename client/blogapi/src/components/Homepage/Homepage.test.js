import { default as Homepage } from ".";
import { screen, render } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';

describe("Homepage", () => {
  let getResultMock;

  beforeEach(() => {
    getResultMock = jest.fn();
    render(
      <BrowserRouter>
          <Homepage getResult={getResultMock} />
      </BrowserRouter>
    );
  });
  test("it renders a card", () => {
    const img = screen.getByRole('homePageImg')
    expect(img).toBeInTheDocument();
  });

  test("it renders a title", () => {
    const title = screen.getByText('Help your community stay full with FullFill.')
    expect(title).toBeInTheDocument();
  });

  
});