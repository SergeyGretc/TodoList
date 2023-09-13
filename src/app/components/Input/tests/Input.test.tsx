import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from '..'

describe("Testing button click handler", () => {
  const changeMock = jest.fn(() => Promise.resolve());

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders", () => {
    const { container } = render(
      <Input onChange={changeMock}>Check</Input>
    );
    expect(container).not.toBe(null);
  });

  it("is clickable", () => {
    render(<Input onChange={changeMock} placeholder="Enter text" type="text" />);
    const input = screen.getByPlaceholderText('Enter text') as HTMLInputElement
    userEvent.type(input, 'Text')
    expect(input.value).toBe('Text')
  });
});
