import React from "react";
import { newsAPI } from "../types";
import Link from "next/link";
import Tag from "./Tag";
import Image from "next/image";

const RandomArticles = ({ data }: { data: newsAPI }) => {
  return (
    <div className="flex justify-between gap-2 p-2 mb-2 border-b border-gray-300">
      <div>
        <Link href={data?.url}>{data?.title}</Link>
        <div className="flex flex-col space-y-2 max-w my-2">
          <Tag data={data?.source.name} />
          <Tag data={new Date(data?.publishedAt).toDateString()} />
        </div>
        <div className="relative w-[400px] h-[300px]">
          <Link href={data?.url}>
            <Image
              src={`${data?.urlToImage}`}
              alt={data?.title}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 100vw, 100vw"
              className="object-cover"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RandomArticles;
