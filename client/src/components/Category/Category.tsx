import React from "react";
import styled from "styled-components";

const Category = () => {
  return (
    <div>
      <CategoryName>충청도 &gt; 맛집</CategoryName>
    </div>
  );
};

export default Category;

const CategoryName = styled.span`
  font-size: 12px;
  color: #747474;
`;
