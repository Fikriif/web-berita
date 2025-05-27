import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchInput from './SearchInput'

const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center gap-20 px-4 py-2">
      <Link href="/">
        <div className="relative flex flex-row items-center">
          <Image src="/logoF.png" alt="Logo" width={60} height={100} />
          <p className="text-purple-800 font-bold font-serif text-3xl md:text-5xl ml-2">
            News
          </p>
        </div>
      </Link>
      <div className="w-full md:w-auto">
        <SearchInput />
      </div>
    </div>
  );
}

export default Header
