"use client";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import GlobalAPI from "../_utils/GlobalAPI";
import Image from "next/image";
import { ArrowRightCircle } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function CategroyList() {
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const listRef = useRef(null);

  const params = useSearchParams();

  useEffect(() => {
    setSelectedCategory(params.get("category"));
  }, [params]);

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = () => {
    GlobalAPI.GetCategory().then((resp) => {
      console.log(resp.categories);
      setCategoryList(resp.categories);
    });
  };

  const ScrollRightHandler = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        left: 200,
        behaviour: "smooth",
      });
    }
  };

  return (
    <div className="mt-10 relative">
      <div className="flex gap-4 overflow-auto scrollbar-hide" ref={listRef}>
        {categoryList &&
          categoryList.map((category, index) => (
            <Link
              href={`?category=` + category.slug}
              key={index}
              className={`flex flex-col p-3 min-w-28 gap-4 items-center border rounded-xl hover:border-primary hover:bg-orange-50 cursor-pointer group ${selectedCategory==category.slug && "bg-orange-50 border-primary"}`}
            >
              <Image
                src={category.icon?.url}
                alt={category.name}
                width={40}
                height={40}
                className="group-hover:scale-125 transition-all duration-300"
              />
              <h1 className="font-medium text-sm text-center group-hover:text-primary">
                {category.name}
              </h1>
            </Link>
          ))}
      </div>
      <ArrowRightCircle
        className="top-9 -right-10 absolute bg-gray-600 text-white rounded-full w-8 h-8"
        onClick={() => ScrollRightHandler()}
      />
    </div>
  );
}

export default CategroyList;
