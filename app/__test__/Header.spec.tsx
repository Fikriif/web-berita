import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

jest.mock("next/image", () => (props: any) => (
  <img {...props} alt={props.alt} />
));
jest.mock("next/link", () => {
  return ({ children }: any) => children;
});
jest.mock("../components/SearchInput", () => () => <div>Mock SearchInput</div>);

describe("Header Component", () => {
  it("should render logo image with correct alt text", () => {
    render(<Header />);
    const logoImage = screen.getByAltText("Logo");
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute("src", "/logoF.png");
  });

  it("should render the title text", () => {
    render(<Header />);
    expect(screen.getByText("News")).toBeInTheDocument();
  });

  it("should render the SearchInput component", () => {
    render(<Header />);
    expect(screen.getByText("Mock SearchInput")).toBeInTheDocument();
  });
});
