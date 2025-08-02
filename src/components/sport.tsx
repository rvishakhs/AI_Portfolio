'use client';

import React from 'react';
import { Photos, PhotoItem } from './photos';

const Sports = () => {
  const sportPhotos: PhotoItem[] = [
    {
      src: '/vis_nc.jpg',
      alt: 'Completed Scotland North Coast 500',
      caption: 'Explored the stunning North Coast 500 in Scotland with my mini cooper',
    },
    {
      src: '/vis_3.jpg',
      alt: 'Jhon o Groats',
      caption: 'Visited Jhon o Groats, the northernmost point of mainland UK',
    },
    {
      src: '/vis_4.jpg',
      alt: 'My PC setup',
      caption: 'Nothing beats a good PC setup for work and play',
    },
    {
      src: '/vis_2.jpg',
      alt: 'Exploring the Scottish Highlands',
      caption: 'Hiking in the Scottish Highlands, enjoying the breathtaking views',
    },
    {
      src: '/vis_5.jpg',
      alt: 'Ullapool costal village',
      caption: 'Visited the picturesque coastal village of Ullapool',
    },
  ];

  return (
    <div className="mx-auto w-full">
      <div className="mb-8">
        <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
          My Travelling Journey
        </h2>
        <p className="mt-4 text-muted-foreground">
          Same as my career, my travelling journey has been a mix of adventures and challenges. From exploring the Scottish Highlands to visiting the northernmost point of mainland UK, each trip has added a new chapter to my story. Here are some highlights:
        </p>
      </div>
      <Photos photos={sportPhotos} />
    </div>
  );
};

export default Sports;