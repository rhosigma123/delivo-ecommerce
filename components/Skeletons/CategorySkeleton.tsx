import React from "react";
import ContentLoader, { IContentLoaderProps } from "react-content-loader";

const CategorySkeleton = (
  props: React.JSX.IntrinsicAttributes & IContentLoaderProps
) => {
  const skeletonCount = 9; // Adjust as needed

  return (
    <div className="flex flex-wrap gap-3">
      {Array.from({ length: skeletonCount }).map((_, index) => (
        <ContentLoader
          key={index}
          viewBox="0 0 120 40"
          className="w-[120px] h-[40px]"
          {...props}
        >
          <rect x="10" y="10" rx="5" ry="5" width="100" height="20" />
        </ContentLoader>
      ))}
    </div>
  );
};

export default CategorySkeleton;
