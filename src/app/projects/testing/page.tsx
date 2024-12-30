import React from "react";

const page = () => {
  return (
    <section className="w-screen min-h-screen flex flex-col items-center justify-center ">
      {/* red box */}
      <div className="w-48 h-48 bg-red-400 translate-y-1/2 absolute"></div>
      {/* blue box */}
      <div className="w-48 h-48 bg-blue-400 translate-y-1/2 absolute right-48"></div>
    </section>
  );
};

export default page;
