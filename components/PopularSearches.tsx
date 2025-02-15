import Link from "next/link";
import React from "react";

const PopularSearches = () => {
  const popularSearchesData = [
    {
      key: "Products",
      items: [
        { id: "1", title: "quisquam" },
        { id: "2", title: "cumque" },
        { id: "3", title: "officia" },
        { id: "4", title: "recusandae" },
        { id: "5", title: "quis" },
        { id: "6", title: "quis" },
        { id: "7", title: "in" },
        { id: "8", title: "labore" },
      ],
    },
    {
      key: "Brands",
      items: [
        { id: "1", title: "facere" },
        { id: "2", title: "dignissimos" },
        { id: "3", title: "dolores" },
        { id: "4", title: "corrupti" },
        { id: "5", title: "autem" },
      ],
    },
    {
      key: "Categories",
      items: [
        { id: "1", title: "nihil" },
        { id: "2", title: "aperiam" },
        { id: "3", title: "quam" },
        { id: "4", title: "expedita" },
        { id: "5", title: "deleniti" },
      ],
    },
  ];

  return (
    <section className="grid gap-3 delivo__container my-14">
      {popularSearchesData.map((category) => (
        <div
          key={category.key}
          className="flex gap-2 text-lg text-fontPrimary font-medium"
        >
          <strong>{category.key}:</strong>
          <div className="flex flex-wrap">
            {category.items.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className="hover:underline text-fontSecondary font-medium text-base before:content-['|'] first:before:content-[''] before:mx-3 first:before:mx-0"
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default PopularSearches;
