import Link from "next/link";
const Navbar = () => {
  return (
    <nav>
      <ul className="py-2 border-t border-purple-300 overflow-x-auto whitespace-nowrap flex gap-4 px-2 text-sm md:text-base">
        <li className="space-x-6 text-ts">
          <Link href={"/world"}>World</Link>
          <Link href={"/indonesia"}>Indonesia</Link>
          <Link href={"/esport"}>E-Sport</Link>
          <Link href={"/business"}>Bussines</Link>
          <Link href={"/science"}>Science</Link>
          <Link href={"/health"}>Health</Link>
          <Link href={"/sports"}>Sports</Link>
          <Link href={"/books"}>Books</Link>
          <Link href={"/lifestyle"}>Lifestyle</Link>
          <Link href={"/food"}>Food</Link>
          <Link href={"/travel"}>Travel</Link>
          <Link href={"/bitcoin"}>Bitcoin</Link>
        </li>
      </ul>
      <div className="w-full h-[1px] bg-black mb-1" />
      <div className="w-full h-[1px] bg-black" />
    </nav>
  );
};

export default Navbar;
