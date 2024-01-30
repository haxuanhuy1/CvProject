"use client"
import React, { useState } from 'react';
import clsx from 'clsx';
import Styles from './Carousel.module.scss'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
const Carousel1 = '/img/Carousel1.webp'
const Carousel2 = '/img/Carousel2.webp'
const Carousel3 = '/img/Caroudel3.webp'
const Carousel4 = '/img/Carousel4.webp'
const Carousel5 = '/img/Carousel5.webp'
const Carousel6 = '/img/Carousel6.webp'
const Carousel7 = '/img/Carousel7.webp'
const items = [
  {
    src: Carousel2 ,
   
   
    key: 1,
  },
  {
    src: Carousel1,
   
    key: 2,
  },
  {
    src: Carousel3,
   
    key: 3,
  },
  {
    src: Carousel4,
  
    key: 4,
  },
  {
    src: Carousel5,
   
    key: 5,
  },
  {
    src: Carousel6,
   
    key: 6,
  },
  {
    src: Carousel7,
   
    key: 7,
  },
 
];

function Example(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img className={clsx(Styles.imgs)} src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Example;