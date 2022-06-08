import { default as Homecards } from ".";
import { screen, render } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';

describe("Homecards", () => {
  let getResultMock;

  beforeEach(() => {
    getResultMock = jest.fn();
    render(
      <BrowserRouter>
          <Homecards getResult={getResultMock} />
      </BrowserRouter>
    );
  });
  test("it renders a card", () => {
    const card = screen.getAllByText('Top Requests')
    expect(card[0]).toBeInTheDocument();
  });

  test("it renders a title", () => {
    const title = screen.getByText('Our mission:')
    expect(title).toBeInTheDocument();
  });

  
});