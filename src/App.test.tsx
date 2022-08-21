import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";


describe("App", () => {
  it("renders app title", () => {
    render(<App />);
    const title = screen.getByText(/Commit History/i);
    expect(title).toBeInTheDocument();
  });
  it("renders send and refresh buttons to fetch data correctly", () => {
    render(<App />);
    const buttonElement = screen.getAllByRole("button");
    expect(buttonElement[0]).toBeInTheDocument();
    expect(buttonElement[1]).toBeInTheDocument();
  });
  it("renders the input element correctly", () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText("Enter access token");
    expect(inputElement).toBeInTheDocument();
  });
  it("changes the value of the input", () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(
      "Enter access token"
    ) as HTMLInputElement;
    expect(inputElement.value).toBe("");
    fireEvent.change(inputElement, {
      target: { value: "kdsjfkfjkdjfkefd_ndkfnefjdnfn" },
    });
    expect(inputElement.value).toBe("kdsjfkfjkdjfkefd_ndkfnefjdnfn");
  });
});
