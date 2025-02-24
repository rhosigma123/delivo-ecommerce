import React from "react";
import ContentLoader, { IContentLoaderProps } from "react-content-loader";

const ProductCardsSkeleton = (
  props: React.JSX.IntrinsicAttributes & IContentLoaderProps
) => {
  const rows = 4; // Number of rows
  const cols = 6; // Number of columns
  const cardWidth = 200;
  const cardHeight = 200;
  const gapX = 20; // Horizontal gap
  const gapY = 100; // Vertical gap
  const startX = 30; // Initial X position
  const startY = 20; // Initial Y position

  return (
    <ContentLoader
      viewBox={`0 0 1400 ${startY + rows * (cardHeight + gapY)}`}
      className="w-full h-full"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      {Array.from({ length: rows }).map((_, rowIndex) =>
        Array.from({ length: cols }).map((_, colIndex) => {
          const x = startX + colIndex * (cardWidth + gapX);
          const y = startY + rowIndex * (cardHeight + gapY);
          return (
            <React.Fragment key={`${rowIndex}-${colIndex}`}>
              <rect
                x={x}
                y={y}
                rx="8"
                ry="8"
                width={cardWidth}
                height={cardHeight}
              />
              <rect
                x={x}
                y={y + cardHeight + 10}
                rx="5"
                ry="5"
                width="200"
                height="18"
              />
              <rect
                x={x}
                y={y + cardHeight + 35}
                rx="5"
                ry="5"
                width="120"
                height="20"
              />
            </React.Fragment>
          );
        })
      )}
    </ContentLoader>
  );
};

export default ProductCardsSkeleton;
