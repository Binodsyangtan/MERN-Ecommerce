import React from "react";
import { useLocation } from "react-router-dom";

const PageHeader = () => {
  const location = useLocation();

  const pageName = location.pathname === "/"
    ? "MyAccount"
    : location.pathname.slice(1).charAt(0).toUpperCase() + location.pathname.slice(2);

  return (
    <div
      className=" container h-48 flex flex-col items-center justify-center text-center bg-cover bg-center md-6"
      style={{
        backgroundImage: `url('https://www.figma.com/file/5qsUnKd7XXD4Z0RHv95Pii/image/1461f3d6ff74c027a1888544144abe4be6e02cbf')`

      }}
    >
      <h1 className="text-4xl font-bold text-black">{pageName}</h1>
      <p className="text-black">
        Home &gt; <span className="text-black">{pageName}</span>
      </p>
    </div>
  );
};

export default PageHeader;
