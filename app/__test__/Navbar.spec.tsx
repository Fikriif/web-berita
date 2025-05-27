import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar";

jest.mock("next/link", () => {
  return ({ children }: any) => children;
});

describe("Navbar Component", () => {
  it("renders all navigation links with correct text and href", () => {
    render(<Navbar />);

    const links = [
      { text: "World", href: "/world" },
      { text: "Indonesia", href: "/indonesia" },
      { text: "E-Sport", href: "/esport" },
      { text: "Bussines", href: "/business" },
      { text: "Science", href: "/science" },
      { text: "Health", href: "/health" },
      { text: "Sports", href: "/sports" },
      { text: "Books", href: "/books" },
      { text: "Lifestyle", href: "/lifestyle" },
      { text: "Food", href: "/food" },
      { text: "Travel", href: "/travel" },
      { text: "Bitcoin", href: "/bitcoin" },
    ];

    links.forEach(({ text }) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });

  it("renders nav element with correct class names", () => {
    const { container } = render(<Navbar />);
    const nav = container.querySelector("nav");
    expect(nav).toBeInTheDocument();

    const ul = container.querySelector("ul");
    expect(ul).toHaveClass(
      "py-2 border-t border-purple-300 overflow-x-auto whitespace-nowrap flex gap-4 px-2 text-sm md:text-base"
    );
  });
});
