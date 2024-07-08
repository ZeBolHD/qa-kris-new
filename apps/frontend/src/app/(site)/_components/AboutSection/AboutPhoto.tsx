import Image from "next/image";

import { ImageApi } from "@/types";

interface AboutPhotoProps {
  avatar: ImageApi;
}

export const AboutPhoto = ({ avatar }: AboutPhotoProps) => (
  <div className="w-[500px] z-50">
    <Image
      src={avatar?.url || "/avatar.png"}
      alt=""
      width={500}
      height={500}
      className="w-[500px] h-[500px] object-cover 
border-[1px] border-gray-100 bg-white rounded-lg"
    />
  </div>
);
