import React from "react";

const DocCoursesLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="overflow-hidden w-full h-full px-4 md:px-6 lg:px-8 xl:px-10">
      {children}
    </div>
  );
};

export default DocCoursesLayout;
