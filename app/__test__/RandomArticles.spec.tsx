import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import RandomArticles from "../components/RandomArticles";
import { newsAPI } from "../types";

jest.mock("next/link", () => {
  return ({ children }: any) => children;
});

jest.mock("next/image", () => (props: any) => {
  return <img {...props} alt={props.alt || "mocked image"} />;
});

describe("RandomArticles Component", () => {
  const mockData: newsAPI = {
    source: { id: "bbc", name: "BBC News" },
    author: "Jane Doe",
    title: "Breaking News!",
    description: "Some description",
    url: "https://example.com/breaking-news",
    urlToImage: "https://example.com/image.jpg",
    publishedAt: "2023-05-01T12:00:00Z",
    content: "Detailed content here",
  };

  it("renders the article title as a link", () => {
    render(<RandomArticles data={mockData} />);
    const link = screen.getByText(mockData.title);
    expect(link).toBeInTheDocument();
  });

  it("renders source and published date tags", () => {
    render(<RandomArticles data={mockData} />);
    expect(screen.getByText(mockData.source.name)).toBeInTheDocument();
    expect(
      screen.getByText(new Date(mockData.publishedAt).toDateString())
    ).toBeInTheDocument();
  });

  it("renders image with correct src and alt attributes", () => {
    render(<RandomArticles data={mockData} />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", mockData.urlToImage);
    expect(img).toHaveAttribute("alt", mockData.title);
  });
});
