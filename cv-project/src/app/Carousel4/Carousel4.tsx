"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import Styles from './Carousel4.module.scss'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
  const Laptop1 = '/img/LaptopgamingQC.webp'
  const Laptop2 = '/img/LaptopgamingQC2.webp'
  const Laptop3 = '/img/LaptopgamingQC3.webp'
  const Laptop4 = '/img/LaptopgamingQC4.webp'
  const Laptop5 = '/img/LaptopgamingQC5.webp'
  const Laptop6 = '/img/Laptopgaming6.webp'
  const Laptop7 = '/img/LaptopgamingQC7.webp'
  const Laptop8 = '/img/LaptopgamingQC8.webp'
  const Laptop9 = '/img/LaptopgamingQC9.webp'
  const Laptop10 = '/img/LaptopgamingQC10.webp'
const items = [
    {
        Products: [
            {image: Laptop1 , name : " Laptop gaming Acer Nitro 5 Tiger AN515 58 50EE " , Giá : '19.890.000 triệu', bán: "Xem thêm"},
            {image: Laptop2 , name : " Laptop gaming Acer Predator Helios 300 PH315 55  " , Giá : '31.990.000 triệu', bán: "Xem thêm"},
            {image: Laptop3 , name : "Laptop gaming MSI GF63 Thin 12VE 460VN  " , Giá : '19.890.000 triệu', bán:" Xem thêm"},
            {image: Laptop4 , name : "Laptop gaming MSI GF63 12UC 887VN" , Giá : '19.490.000 triệu', bán:"Xem thêm"},
            {image: Laptop5 , name : "Laptop gaming MSI GF63 12UCX 841VN " , Giá : '15.790.000 triệu', bán:"Xem thêm"}
        ],
        key: 1,
      },
      {
     Products: [
            {
            image : Laptop6 , name : "Laptop gaming Acer Predator Helios 300 PH315   ", Giá : "34.990.000 triệu", bán: "Xem thêm",
        },
        {
            image : Laptop7 , name : "Laptop gaming MSI Titan 18 HX A14VIG 205VN  ", Giá : "149.980.000 triệu",bán : "Xem thêm"
        },
        {
            image : Laptop8 , name : "Laptop gaming ASUS TUF Gaming A15 FA507NU LP034W", Giá : "24.490.000 triệu", bán: "Xem thêm"
        },
        {
            image : Laptop9 , name : "Laptop gaming Acer Nitro 5 Tiger AN515 58 50EE  ", Giá : "19.990.000 triệu", bán : "Xem thêm"
        },
        {
            image : Laptop10 , name : "Laptop Gaming MSI Stealth 16 Mercedes AMG A13VG", Giá : "74.000.000 triệu", bán : "Xem thêm"
        },
    ],
        key: 2,
      },
];

function Example4(args) {
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
           
          <div style={{borderRight : '2px solid #ccc', borderLeft: '2px solid #ccc'}} >

              <img
                className={clsx(Styles.imgs)}
                key={index}
                src={Products.image}
                // alt={`Slide ${item.key} Image ${index + 1}`}
                alt={`Products ${index + 1}`}
              />
             
              <div className={clsx(Styles.giamgia4)}>
            <p style={{textDecoration: 'none', color: 'inherit', fontWeight: 600}}>{Products.name}</p>
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

export default Example4;
