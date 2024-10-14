import React from "react";

const DocCoursesLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="overflow-hidden w-full h-full">
      {children}
    </div>
  );
};

export default DocCoursesLayout;
