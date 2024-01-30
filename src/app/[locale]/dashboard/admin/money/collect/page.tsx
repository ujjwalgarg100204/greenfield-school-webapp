"use client";

import Search_student from "./_components/Search_student";

const page = () => {
  return (
    <div className=":w-full md:m-4 md:w-2/4">
      {/* <div className="  m-5 w-full  rounded-lg bg-green-100">
        <h1>you are under collect section</h1>
      </div> */}
      <div className="rounded-lg  font-bold   md:p-3">
        <div>Payment Collection</div>
      </div>
      <div className="my-3 rounded-lg border border-black  md:w-full">
        <Search_student />
      </div>
    </div>
  );
};

export default page;
