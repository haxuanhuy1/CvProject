"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import Styles from './Carousel2.module.scss'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
const Carousel1 = '/img/CarouLap1.webp'
const Carousel2 = '/img/CaroulLap2.webp'
const Carousel3 = '/img/CaroulLap3.webp'
const Carousel4 = '/img/CaroulLap4.webp'
const Carousel5 = '/img/CaroulLap5.webp'
const Carousel6 = '/img/CaroulLap6.webp'
const Carousel7 = '/img/CaroulLap7.webp'
const Carousel8 = '/img/CaroulLap8.webp'
const items = [
    {
        Products: [
            {image: Carousel1 , name : "Laptop LG Gram 16Z90Q " , Giá : '18.890.000 triệu', bán: "Xem thêm"},
            {image: Carousel2 , name : "Laptop Gaming Acer Predator " , Giá : '14.790.000 triệu', bán: "Xem thêm"},
            {image: Carousel3 , name : "Laptop Gaming Acer Nitro 5  " , Giá : '31.990.000 triệu', bán:" Xem thêm"},
            {image: Carousel4 , name : "Laptop Asus ExperBook  " , Giá : '8.480.000 triệu', bán:"Xem thêm"}
        ],
        key: 1,
      },
      {
     Products: [
            {
            image : Carousel5 , name : "Laptop Lenovo V14 G4  ", Giá : "12.990.000 triệu", bán: "Xem thêm",
        },
        {
            image : Carousel6 , name : "Laptop Asus VIvoBook   ", Giá : "14.790.000 triệu",bán : "Xem thêm"
        },
        {
            image : Carousel7 , name : "Laptop Gaming Acer  ", Giá : "19.990.000 triệu", bán: "Xem thêm"
        },
        {
            image : Carousel8 , name : "Laptop gaming Lenov", Giá : "25.000.000 triệu", bán : "Xem thêm"
        }
    ],
        key: 2,
      },
];

function Example2(args) {
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
        key={item.key}
      >
        <div className={clsx(Styles.giamgia3)}>

        {item.Products.map((Products, index) => (
           
          <div >

              <img
                className={clsx(Styles.imgs)}
                key={index}
                src={Products.image}
                // alt={`Slide ${item.key} Image ${index + 1}`}
                alt={`Products ${index + 1}`}
              />
             
              <div className={clsx(Styles.giamgia4)}>
            <p style={{textDecoration: 'none', color: 'inherit'}}>{Products.name}</p>
          <Link href="/about">
          <h3 style={{textDecoration: "none" , fontSize: "15px"}}>{Products.Giá}</h3>
           <button style={{backgroundColor: 'red' ,marginTop: '10px', height: '40px',width: "150px",color:"white", border:"#ccc", borderRadius: '5px'}}>{Products.bán}</button>
          </Link>
              </div>
             
          </div>
           
      ))}
    
        </div>
        
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
        className={clsx(Styles.prev)}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
        style={{marginRight: '52px'}}
        className={clsx(Styles.next)}
      />
    </Carousel>
  );
}

export default Example2;