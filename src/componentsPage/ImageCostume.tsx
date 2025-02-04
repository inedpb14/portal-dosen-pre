import Image from "next/image";

type ImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  quality? : number;
  priority? : boolean;
  className? : string;
};

export default function ImageCostume(params: ImageProps) {
  return (
    <Image
      src={params.src}
      alt={params.alt}
      width={params.width}
      height={params.height}
      quality={params.quality}
      priority={params.priority}
      className={params.className}
    />
  );
}
// 