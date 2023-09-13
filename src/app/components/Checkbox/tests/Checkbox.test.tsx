import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Checkbox from "..";

describe("Testing button click handler", () => {
  const changeMock = jest.fn(() => Promise.resolve());

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders", () => {
    const { container } = render(
      <Checkbox onChange={changeMock}>Check</Checkbox>
    );
    expect(container).not.toBe(null);
  });

  it("is clickable", () => {
    render(<Checkbox onChange={changeMock}>Check</Checkbox>);
    userEvent.click(screen.getByLabelText("Check"));
    expect(changeMock).toBeCalledTimes(1);
  });
});
