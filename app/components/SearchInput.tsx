"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { BiSearch } from "react-icons/bi";

const SearchInput = () => {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();

  const searchKeyword = (e: FormEvent) => {
    e.preventDefault();
    if (!keyword) {
      router.push('/');
    } else {
      router.push(`/search?q=${keyword}`);
    }
  }
  return (
    <div className="relative w-fit">
      <form onSubmit={searchKeyword}>
        <input
          type="text"
          placeholder="Search"
          className="text-sm px-2 py-1 outline-none rounded-md border border-black"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2"
        >
          <BiSearch className="text-black text-xl" />
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
