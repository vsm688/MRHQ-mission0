import React from "react";
import {
  ImageCenteringDiv,
  TestDiv,
  ImageContentContainer,
  ImageText,
  BottomText,
  FlexWrapper,
} from "./ImageContainer.styled";
const ImageContainer = () => {
  return (
    <FlexWrapper>
      <ImageCenteringDiv>
        {gpuObjects.map((item, index) => {
          return (
            <ImageContentContainer key = {index}> 
              <TestDiv src={item.path}></TestDiv>
              <ImageText>{item.name}</ImageText>
              <BottomText>$ {item.price}</BottomText>
            </ImageContentContainer>
          );
        })}
      </ImageCenteringDiv>
    </FlexWrapper>
  );
};

let gpuObjects = [
  { name: "GTX 1650", price: 350.00, path: "/images/gpu/1650.jpg" },
  { name: "GTX 1660", price: 450.00, path: "/images/gpu/1660.jpg" },
  { name: "GTX 3080", price: 1399.99, path: "/images/gpu/3080.jpg" },
  { name: "GTX 3090", price: 1800.00, path: "/images/gpu/3090.jpg" },
  { name: "GTX 3090ti", price: 2100.00, path: "/images/gpu/3090ti.jpg" },
];

export default ImageContainer;
