import React from "react";
import { render, RenderResult, screen } from "@testing-library/react";
import Form from "./Form";

let documentBody: RenderResult;

describe("<Form />", () => {
  beforeEach(() => {
    documentBody = render(<Form />);
  });
  it("should have label for long Url", () => {
    expect(documentBody.getByText("Paste Your Long Url")).toBeInTheDocument();
  });
  it("should have label for the custom code", () => {
    expect(
      documentBody.getByText("Add a custom code here")
    ).toBeInTheDocument();
  });
  it("should have a label", () => {
    const longUrl = screen.getByText(/Paste your long Url/i);
    expect(longUrl).toBeInTheDocument();
  });
  it("should have a label for short Url", () => {
    const urlCode = screen.getByText(/Add a custom code here/i);
    expect(urlCode).toBeInTheDocument();
  });
});
