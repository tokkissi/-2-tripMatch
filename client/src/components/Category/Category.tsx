import React from "react";
import styled from "styled-components";
import pointer from "../../images/temporaryIconPointer.png";

const Category = () => {
  return (
    <div>
      <CategoryName>
        <Pointer src={pointer} />
        충청도 &gt; 맛집
      </CategoryName>
    </div>
  );
};

export default Category;

const CategoryName = styled.span`
  font-size: 12px;
  color: #747474;
  display: flex;
  align-items: center;
`;

const Pointer = styled.img`
  width: 14px;
  height: 14px;
  margin-right: 3px;
`;
