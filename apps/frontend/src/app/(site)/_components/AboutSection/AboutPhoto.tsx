import Image from "next/image";

interface AboutPhotoProps {
  image: string;
}

export const AboutPhoto = ({ image }: AboutPhotoProps) => (
  <div className="w-[500px] z-50">
    <Image
      src={image}
      alt=""
      width={500}
      height={500}
      className="w-[500px] h-[500px] object-cover 
border-[1px] border-gray-100 bg-white rounded-lg"
    />
  </div>
);
