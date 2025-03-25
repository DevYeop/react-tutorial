import React from 'react';
import styled from 'styled-components';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const RainbowList = styled.ul`
  list-style: none;
  padding: 0;
`;

const RainbowItem = styled.li`
  padding: 10px;
  font-size: 18px;
  color: white;
  background-color: ${(props) => props.color};
`;

const 과제_스타일링_Lv1 = () => {
  return (
    <RainbowList>
      {colors.map((color, index) => (
        <RainbowItem key={index} color={color}>
          {color.toUpperCase()}
        </RainbowItem>
      ))}
    </RainbowList>
  );
};

export default 과제_스타일링_Lv1;
