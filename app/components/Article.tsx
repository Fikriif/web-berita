import React from "react";
import { newsAPI } from "../types";
import Image from "next/image";
import Link from "next/link";
import Tag from "./Tag";

const Article = ({ data }: { data: newsAPI }) => {
  return (
    <div className="py-2 border-b border-gray-300 mb-4">
      <Link href={data?.url}>
        <div className="relative w-full h-[300px]">
          <Image
            src={`${data?.urlToImage}`}
            alt={data?.title}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 100vw, 100vw"
            className="object-cover"
          />
        </div>
      </Link>
      <Link href={data?.url}>{data?.title}</Link>
      <div className="flex space-x-4 my-2">
        <Tag data={data?.source.name} />
        <Tag data={data?.author} />
        <Tag data={new Date(data?.publishedAt).toDateString()} />
      </div>
      <p className="text-sm">{data?.description}</p>
    </div>
  );
};

export default Article;
