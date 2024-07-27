import React from "react";

type Props = {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
};

export default function Section({ title, icon, children }: Props) {
  return (
    <div
      id={title.toLowerCase()}
      className="max-w-lg w-full h-full flex flex-col justify-center items-start bg-secondary rounded-lg border">
      <span className="flex justify-center items-center gap-1 m-2 mt-2 mb-0 text-lg font-semibold">
        {icon}
        <h2>{title}</h2>
      </span>
      <div className="w-full h-full m-2 flex flex-col mt-0 justify-center items-center gap-2">
        {children}
      </div>
    </div>
  );
}
