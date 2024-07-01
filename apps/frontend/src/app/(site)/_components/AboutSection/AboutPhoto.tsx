import Image from "next/image";

interface AboutPhotoProps {
  image: string;
}

const AboutPhoto = ({ image }: AboutPhotoProps) => {
  return (
    <div className="w-[500px]">
      <Image src={image} alt="" />;
    </div>
  );
};

export default AboutPhoto;
