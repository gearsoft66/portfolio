import Link from "next/link";
import React from "react";
import { Badge } from "./ui/badge";
import { ChevronRight } from "lucide-react";

type Props = {
  image: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
};

export default function ItemCard({
  image,
  title,
  description,
  tags,
  href,
}: Props) {
  return (
    <Link
      className="flex justify-center items-center w-full h-full flex-1 gap-4 p-2"
      href={href}>
      <div className="flex flex-col justify-center items-center h-full ">
        <img
          src={image}
          alt={title}
          className="w-16 h-16 object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col justify-start items-start w-full h-full gap-1 flex-1 flex-grow">
        <span className="text-sm ">
          <span className="text-base font-semibold">{title}</span>
          {" - "}
          {description}
        </span>
        <span className="flex justify-start items-center gap-1 opacity-60">
          {tags.map((tag, index) => (
            <Badge
              className="z-10"
              key={tag + index}
              variant="default">
              {tag}
            </Badge>
          ))}
        </span>
      </div>
      {/* <div className="p-2 pr-4">
        <ChevronRight />
      </div> */}
    </Link>
  );
}
