import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const FeaturedTitlesContainer = styled.div`
  margin-top: 21px;
  width: 290px;
  height: 100%;
`;

const TransitionContainer = styled.div`
  position: relative;
`;

const StyledFeaturedTitlesWidget = styled.div`
  border: 1px solid #707070;
  position: absolute;
  height: auto;
  border-radius: 8px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 31px 31px 31px 31px;
`;

const ImageContainer = styled.div`
  box-sizing: border-box;
  background-color: #f6f8fa;
  box-shadow: 3px 3px 6px #00000029;
  width: 228px;
  height: 327px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 36px 40px 28px 40px;
  gap: 31px;
  margin-right: 0;
  margin-left: 0;
  margin-bottom: 10px;

  img {
    width: 120px;
    height: 164px;
  }

  span {
    font-size: 20px;
    text-align: center;
  }
`;

const RatingContainer = styled.div`
  height: 25px;
  overflow: hidden;
  margin-bottom: 12px;

  span {
    color: #a8aaa8;
    font-size: 20px;
  }
`;

const ReviewContainer = styled.div`
  color: #707070;
  font-size: 20px;
  text-align: left;
  line-height: 130%;
  flex: 1 1 auto;
  transition: all 2s ease-in;
`;

const data = [
  {
    description:
      'Though the Symbolist heyday in Paris was short-lived, the movement had an influence on painting in both duration and geographical range. Important Symbolist painters were at work in places as remote from one another as Munch in Oslo, Klimt in Vienna, and the young Picasso in Barcelona.',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/P/0500201250.02._SX128_TZZZZZZZ_.jpg',
    title: 'Symbolist Art',
    author: 'Edward Lucie-Smith',
  },
  {
    description:
      'In Manhattan, Craig Mellow is the toast of the literary world, a young writer whose bestselling novels and larger-than-life adventures are fueled by natural-born charisma. But Craig lost a limb and a legacy in Africa. And his heart still clings to the land.',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/P/0749306246.02._SX128_TZZZZZZZ_.jpg',
    title: 'The leopard hunts in darkness',
    author: 'Wilbur Smith',
  },
  {
    description:
      'Over 1,000 wild flowers are illustrated in full colour photographs, accompanied by comprehensive descriptions and set out in the sequence of the seasons. Each photograph is dated and described to make this book an original departure in flower identification.',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/P/033025183X.02._SX128_TZZZZZZZ_.jpg',
    title: 'Wild Flowers of Britain',
    author: 'Roger Phillips',
  },
];

function FeaturedTitles() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [numSlides] = useState(data.length);

  useEffect(() => {
    const cycleSlidesIntervalID = setInterval(() => {
      setCurrentSlide((prevState) => {
        // console.log(prevState);
        // return prevState === numSlides - 1 ? prevState + 1 : 0;
        if (prevState === numSlides - 1) {
          return 0;
        }
        return prevState + 1;
      });
    }, 3000);
    return () => {
      clearInterval(cycleSlidesIntervalID);
    };
  }, []);

  return (
    <FeaturedTitlesContainer>
      <TransitionContainer>
        <TransitionGroup>
          <CSSTransition
            key={data[currentSlide].title}
            timeout={1000}
            classNames="messageout"
          >
            <StyledFeaturedTitlesWidget>
              <ImageContainer>
                <img
                  src={data[currentSlide].imageUrl}
                  alt="featured titles book cover"
                />
                <span>{data[currentSlide].title}</span>
              </ImageContainer>
              <RatingContainer>
                ⭐️⭐️⭐️⭐️ <span>{data[currentSlide].author}</span>
              </RatingContainer>
              <ReviewContainer>
                {data[currentSlide].description}
              </ReviewContainer>
            </StyledFeaturedTitlesWidget>
          </CSSTransition>
        </TransitionGroup>
      </TransitionContainer>
    </FeaturedTitlesContainer>
  );
}

export default FeaturedTitles;
