import React, { useEffect } from "react";
import {
  ImageCenteringDiv,
  TestDiv,
  ImageContentContainer,
  ImageText,
  BottomText,
  FlexWrapper,
} from "./ImageContainer.styled";
const ImageContainer = () => {


  const WatsonApp = () => {
      window.watsonAssistantChatOptions = {
      integrationID: "586f011a-ade0-41c5-b70d-1f4ec1347afa", // The ID of this integration.
      region: "au-syd", // The region your integration is hosted in.
      serviceInstanceID: "c9b664bd-ee09-4ae6-ad9b-49aa00d3c6b6", // The ID of your service instance.
      onLoad: function (instance) { instance.render(); }
    };
  }

  const setTimeout = () =>{
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  };
  useEffect (() =>{
    WatsonApp()
    setTimeout();
  })


  return (
    <FlexWrapper>

      <ImageCenteringDiv>
        {gpuObjects.map((item, index) => {
          return (
            <ImageContentContainer key={index}>
              <TestDiv src={item.path}></TestDiv>
              <ImageText>{item.name}</ImageText>
              <BottomText>{"$" + item.price}</BottomText>
            </ImageContentContainer>
          );
        })}
      </ImageCenteringDiv>
      <div dangerouslySetInnerHTML={{ __html: '<p><p>' }}></div>
    </FlexWrapper>
  );
};

let gpuObjects = [
  { name: "GTX 1650", price: 350.00, path: "/images/gpu/1650.jpg" },
  { name: "GTX 1660", price: 450.00, path: "/images/gpu/1660.jpg" },
  { name: "GTX 3080", price: 1399.99, path: "/images/gpu/3080.jpg" },
  { name: "GTX 3090", price: 1800.00, path: "/images/gpu/3090.jpg" },
  { name: "GTX 3090ti", price: 2100.00, path: "/images/gpu/3090ti.jpg" },
  { name: "GTX 1650", price: 350.00, path: "/images/gpu/1650.jpg" },
  { name: "GTX 1660", price: 450.00, path: "/images/gpu/1660.jpg" },
  { name: "GTX 3080", price: 1399.99, path: "/images/gpu/3080.jpg" },
  { name: "GTX 3090", price: 1800.00, path: "/images/gpu/3090.jpg" },
  { name: "GTX 3090ti", price: 2100.00, path: "/images/gpu/3090ti.jpg" },
  { name: "GTX 1660", price: 450.00, path: "/images/gpu/1660.jpg" },
  { name: "GTX 3080", price: 1399.99, path: "/images/gpu/3080.jpg" },
  { name: "GTX 3090", price: 1800.00, path: "/images/gpu/3090.jpg" },
  { name: "GTX 3090ti", price: 2100.00, path: "/images/gpu/3090ti.jpg" },
  { name: "GTX 1660", price: 450.00, path: "/images/gpu/1660.jpg" },
  { name: "GTX 3080", price: 1399.99, path: "/images/gpu/3080.jpg" },
  { name: "GTX 3090", price: 1800.00, path: "/images/gpu/3090.jpg" },
  { name: "GTX 3090ti", price: 2100.00, path: "/images/gpu/3090ti.jpg" }
];

export default ImageContainer;
