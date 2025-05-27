import { render, screen } from "@testing-library/react";
import RandomNews from "../components/RandomNews";
import * as api from "../api";
import * as utils from "../utils";

const mockApiData = [
  {
    source: { id: "cnn", name: "CNN" },
    author: "John Doe",
    title: "Test Article 1",
    description: "Desc 1",
    url: "https://example.com/1",
    urlToImage: "https://example.com/img1.jpg",
    publishedAt: "2023-01-01T00:00:00Z",
    content: "Content 1",
  },
];

// Mock api dan utils sekaligus
jest.mock("../api", () => ({
  getNewsSearch: jest.fn(),
}));

jest.mock("../utils", () => ({
  removeDuplicateData: jest.fn(),
}));

describe("RandomNews Component", () => {
  beforeEach(() => {
    (api.getNewsSearch as jest.Mock).mockResolvedValue(mockApiData);
    (utils.removeDuplicateData as jest.Mock).mockReturnValue(mockApiData);
  });

  it("renders title and list of articles", async () => {
    render(<RandomNews />);
    const title = await screen.findByText("Random News");
    expect(title).toBeInTheDocument();

    const articleTitle = await screen.findByText("Test Article 1");
    expect(articleTitle).toBeInTheDocument();
  });
});
