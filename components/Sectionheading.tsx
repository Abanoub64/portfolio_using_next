import React from "react";

type sectionheadingprops = {
  children: React.ReactNode;
};

function Sectionheading({ children }: sectionheadingprops) {
  return (
    <h2 className="text-3xl mb-8  font-medium  text-center capitalize">
      {children}
    </h2>
  );
}

export default Sectionheading;
