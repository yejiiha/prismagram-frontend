import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const Wrap = styled.div`
  height: 600px;
  position: relative;
  padding-bottom: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex-shrink: 0;
`;

const StyledSlider = styled(Slider)`
  .slick-prev {
    left: 0 !important;
    z-index: 1;
    padding-left: 1%;
  }
  .slick-next {
    right: 2.5% !important;
    z-index: 1;
  }
  .slick-prev:before {
    font-size: 30px;
  }
  .slick-next:before {
    font-size: 30px;
  }
  .slick-slide {
    height: 600px;
    background-size: cover;
    background-position: center;
  }
  .slick-dots {
    position: absolute;
    bottom: 10px;
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
  }
  .slick-dots li.slick-active button:before {
    color: white;
  }
`;

const File = styled.img`
  max-width: 100%;
  width: 100%;
  height: 600px;
  top: 0;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
`;

export default ({ files }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Wrap>
      <StyledSlider {...settings}>
        {files &&
          files.map((file) => (
            <File key={file.id} id={file.id} src={file.url} />
          ))}
      </StyledSlider>
    </Wrap>
  );
};
