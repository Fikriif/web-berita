import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TopHeadlinesClient from "../components/TopHeadlinesClient";
import { newsAPI } from "../types";

const mockData: newsAPI[] = [
  {
    source: { id: "cnn", name: "CNN" },
    author: "John Doe",
    title: "Test News",
    description: "This is a test news description",
    url: "https://example.com",
    urlToImage: "https://example.com/image.jpg",
    publishedAt: "2023-01-01T00:00:00Z",
    content: "This is the content",
  },
];

jest.mock("../utils", () => ({
  removeDuplicateData: jest.fn().mockReturnValue([
    {
      source: { id: "cnn", name: "CNN" },
      author: "John Doe",
      title: "Test News",
      description: "This is a test news description",
      url: "https://example.com",
      urlToImage: "https://example.com/image.jpg",
      publishedAt: "2023-01-01T00:00:00Z",
      content: "This is the content",
    },
  ]),
}));

describe("TopHeadlinesClient", () => {
  it("should render news article title", () => {
    render(<TopHeadlinesClient data={mockData} />);
    expect(screen.getByText("Test News")).toBeInTheDocument();
  });
});
