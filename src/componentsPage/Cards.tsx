// import { ImageProps } from "@/app/data/types";
import Image from "next/image";

interface cardProps {
  title: string;
  description : string;
  author : string;
  alt : string;
  width? : number;
  height? : number;
  ImageUrl : string;
}

export default function Cards({title , description, author, alt, width, height, ImageUrl} : cardProps){
    return (
      <>
          <div className="h-full border-2 shadow-md rounded-md overflow-hidden">
            <Image
            src={ImageUrl}
            alt={alt}
            height={height}
            width={width}
            />
            <div className="p-6">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                {author}
              </h2>
              <h1 className="title-font text-lg font-medium text-white mb-3">
                {title}
              </h1>
              <p className="leading-relaxed mb-3">
                {description}
              </p>
              <div className="flex items-center flex-wrap ">
                <a className="text-yellow-400 inline-flex items-center md:mb-2 lg:mb-0">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </a>
               
              </div>
            </div>
          </div>
      </>
    );
}