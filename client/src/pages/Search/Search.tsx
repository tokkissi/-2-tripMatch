import React from "react";
import MakeMatchPostList from "../../components/MakeMatchPostList/MakeMatchPostList";
import FreePostPreview from "../Home/components/FreePostPreview";
import { freeMockData } from "../Home/components/mockData";

const Search = () => {
  return (
    <div>
      <MakeMatchPostList />
      <FreePostPreview freePostList={freeMockData} />
    </div>
  );
};

export default Search;
