export interface ImageProps {
    src : string;
    alt : string;
    width? : number;
    height? : number;
};

export interface CourseProps {
  title: string;
  description: string;
  author: string;
  imageUrl: string;
  width? : number;
  height? : number;
  alt : string;
}

// Tipe untuk carousel
export interface carouselTypes {
  imageUrl: string; // URL gambar
  alt : string; // Alt
  width : number;
  height : number;
  title : string;
  desciption : string;
}
