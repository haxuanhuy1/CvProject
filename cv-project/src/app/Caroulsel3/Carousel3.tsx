"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import Styles from './Caroulsel3.module.scss'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
const Pcgaming1 = '/img/Pcgaming1.webp'
const Pcgaming2 = '/img/Pcgaming2.webp'
const Pcgaming3 = '/img/Pcgaming3.webp'
const Pcgaming4  = '/img/Pcgaming4.webp'
const Pcgaming5 = '/img/Pcgaming5.webp'
const Pcgaming6 = '/img/Pcgaming6.webp'
const Pcgaming7 = '/img/Pcgaming7.webp'
const Pcgaming8 = '/img/Pcgaming8.webp'
const Pcgaming9 = '/img/Pcgaming9.webp'
const Pcgaming11 = '/img/Pcgaming11.webp'
const items = [
    {
        Products: [
            {image: Pcgaming1 , name : " PC GVN Intel i5-12400F/ VGA GTX 1650 " , Giá : '14.890.000 triệu', bán: "Xem thêm"},
            {image: Pcgaming2 , name : " PC GVN Intel i7-14700F/ VGA RTX 4060 Ti " , Giá : '34.990.000 triệu', bán: "Xem thêm"},
            {image: Pcgaming4 , name : "PC GVN Intel i5-13400F/ VGA RTX 4060 Ti  " , Giá : '29.990.000 triệu', bán:" Xem thêm"},
            {image: Pcgaming3 , name : "PC GVN Homework I7 B660 SSD 250GB" , Giá : '16.480.000 triệu', bán:"Xem thêm"},
            {image: Pcgaming5 , name : "PC GVN x MSI PROJECT ZERO WHITE RTX 4060 " , Giá : '26.980.000 triệu', bán:"Xem thêm"}
        ],
        key: 1,
      },
      {
     Products: [
            {
            image : Pcgaming6 , name : "PC GVN Intel i5-12400F/ VGA GTX 1650  ", Giá : "14.690.000 triệu", bán: "Xem thêm",
        },
        {
            image : Pcgaming7 , name : "PC GVN Intel i5-12400F/ VGA RTX 4060  ", Giá : "22.980.000 triệu",bán : "Xem thêm"
        },
        {
            image : Pcgaming8 , name : "PC GVN Intel i3-12100F/ VGA RX 6600 ", Giá : "12.490.000 triệu", bán: "Xem thêm"
        },
        {
            image : Pcgaming9 , name : "PC GVN Homework R5 AMD 5600G  ", Giá : "7.000.000 triệu", bán : "Xem thêm"
        },
        {
            image : Pcgaming11 , name : "PC GVN Intel i9-14900KF/ VGA RTX 4080", Giá : "89.000.000 triệu", bán : "Xem thêm"
        },
    ],
        key: 2,
      },
];

function Example3(args) {
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

export default Example3;