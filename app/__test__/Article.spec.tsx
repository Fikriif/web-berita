import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Article from "../components/Article";
import { newsAPI } from "../types";

const mockArticle: newsAPI = {
  source: { id: "cnn", name: "CNN" },
  author: "John Doe",
  title: "Test News Article",
  description: "This is a test description",
  url: "https://example.com/test-news",
  urlToImage: "https://example.com/image.jpg",
  publishedAt: "2023-01-01T00:00:00Z",
  content: "This is the content",
};

jest.mock("next/image", () => (props: any) => {
  return <img {...props} alt={props.alt || "mocked image"} />;
});

jest.mock("next/link", () => {
  return ({ children }: any) => children;
});

describe("Article Component", () => {
  it("renders article title and description", () => {
    render(<Article data={mockArticle} />);

    expect(screen.getByText("Test News Article")).toBeInTheDocument();
    expect(screen.getByText("This is a test description")).toBeInTheDocument();
  });

  it("renders image with correct src", () => {
    render(<Article data={mockArticle} />);
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", mockArticle.urlToImage);
    expect(image).toHaveAttribute("alt", mockArticle.title);
  });

  it("renders author and source as tags", () => {
    render(<Article data={mockArticle} />);
    expect(screen.getByText("CNN")).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(
      screen.getByText(new Date(mockArticle.publishedAt).toDateString())
    ).toBeInTheDocument();
  });
});
