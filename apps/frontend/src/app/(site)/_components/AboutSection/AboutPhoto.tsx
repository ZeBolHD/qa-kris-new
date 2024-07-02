import Image from "next/image";

interface AboutPhotoProps {
  image: string;
}

const AboutPhoto = ({ image }: AboutPhotoProps) => {
  return (
    <div className="w-[500px] z-50">
      <Image src={image} alt="" width={500} height={500} className="w-full h-full object-cover" />
    </div>
  );
};

export default AboutPhoto;
