import React from "react";
import ContentLoader, { IContentLoaderProps } from "react-content-loader";

const SubCategorySkeleton = (
  props: React.JSX.IntrinsicAttributes & IContentLoaderProps
) => {
  return (
    <ContentLoader
      viewBox="0 0 300 1050"
      backgroundColor="#f3f3f3"
      className="w-full h-full grid content-start items-start"
      foregroundColor="#ecebeb"
      {...props}
    >
      {Array.from({ length: 12 }).map((_, index) => {
        const yOffset = index * 75;
        return (
          <React.Fragment key={index}>
            <circle cx="25" cy={yOffset + 25} r="25" />
            <rect
              x="60"
              y={yOffset + 7}
              rx="5"
              ry="5"
              width="230"
              height="12"
            />
            <rect
              x="60"
              y={yOffset + 28}
              rx="5"
              ry="5"
              width="150"
              height="11"
            />
          </React.Fragment>
        );
      })}
    </ContentLoader>
  );
};

export default SubCategorySkeleton;
