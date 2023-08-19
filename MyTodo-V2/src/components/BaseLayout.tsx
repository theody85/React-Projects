import React, { CSSProperties, ReactNode } from "react";

interface BaseLayoutProps {
  children: ReactNode;
  customStyles?: CSSProperties;
}
const BaseLayout = ({ children, customStyles }: BaseLayoutProps) => {
  return (
    <div
      style={{
        width: "70%",
        margin: "4rem auto auto auto",
        ...customStyles,
      }}
    >
      {children}
    </div>
  );
};

export default BaseLayout;
