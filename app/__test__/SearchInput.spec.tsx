import { render, screen, fireEvent } from "@testing-library/react";
import SearchInput from "../components/SearchInput";

// Mock next/navigation
const pushMock = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: pushMock,
    };
  },
}));

describe("SearchInput Component", () => {
  beforeEach(() => {
    pushMock.mockClear();
  });

  it("should push to '/' if input is empty on submit", () => {
    render(<SearchInput />);
    const form = screen.getByRole("form");

    fireEvent.submit(form);

    expect(pushMock).toHaveBeenCalledWith("/");
  });

  it("should push to `/search?q=keyword` if input has value", () => {
    render(<SearchInput />);
    const input = screen.getByPlaceholderText("Search");
    const form = screen.getByRole("form");

    fireEvent.change(input, { target: { value: "react" } });
    fireEvent.submit(form);

    expect(pushMock).toHaveBeenCalledWith("/search?q=react");
  });
});
