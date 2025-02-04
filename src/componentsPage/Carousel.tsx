"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { carouselTypes } from "@/app/data/types";


// Properti yang diterima oleh komponen Carousel
interface CarouselProps {
  params : carouselTypes[];
}

const Carousel: React.FC<CarouselProps> = ({ params }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === params.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval); // Membersihkan interval
  }, [params]);

  if (!params || params.length === 0) {
    return <p className="text-center">Tidak ada data untuk ditampilkan.</p>;
  }

  return (
    <div className="relative overflow-hidden w-full max-w-lg mx-auto rounded-lg">
      {/* Slider */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {params.map((testimonial, index) => (
          <figure
            key={index}
            className="w-full flex-shrink-0 flex flex-col items-center p-6 mb-10 text-center"
          >
            {/* Gambar menggunakan Next.js Image */}
            <Image
              src={testimonial.imageUrl}
              alt={`Foto ${testimonial.alt}`}
              width={testimonial.width} // Sesuaikan ukuran gambar
              height={testimonial.height} // Sesuaikan ukuran gambar
              className="h-full border-2 shadow-md rounded-md overflow-hidden"
            />
            <figcaption className="mt-6 text-lg font-semibold text-black">
              {testimonial.title}
            </figcaption>
            <blockquote className="max-w-xl mx-auto mt-7">
              <p className="text-base lg:text-xl leading-relaxed text-black">
                {testimonial.desciption}
              </p>
            </blockquote>
          </figure>
        ))}
      </div>

      {/* Tombol Navigasi */}
      <div className="absolute inset-y-0 left-1 flex items-center">
        <button
          onClick={() =>
            setCurrentIndex((prevIndex) =>
              prevIndex === 0 ? params.length - 1 : prevIndex - 1
            )
          }
          className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#5f6368"
          >
            <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
          </svg>
        </button>
      </div>
      <div className="absolute inset-y-0 right-1 flex items-center">
        <button
          onClick={() =>
            setCurrentIndex((prevIndex) =>
              prevIndex === params.length - 1 ? 0 : prevIndex + 1
            )
          }
          className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#5f6368"
          >
            <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
          </svg>
        </button>
      </div>

      {/* Indicator Dots */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {params.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
