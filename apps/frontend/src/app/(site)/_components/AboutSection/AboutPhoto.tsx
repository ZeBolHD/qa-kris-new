import Image from "next/image";

import { ImageApi } from "@/types";

interface AboutPhotoProps {
  avatar: ImageApi;
}

export const AboutPhoto = ({ avatar }: AboutPhotoProps) => (
  <div className="w-[500px] z-50 max-sm:w-full max-sm:mx-auto max-sm:px-[14px]">
    <Image
      src={avatar?.url || "/avatar.png"}
      alt=""
      width={500}
      height={500}
      className="w-[500px] h-[500px] object-cover border-[1px] border-gray-100 bg-white rounded-lg
 max-sm:w-fit max-sm:h-fit max-sm:rounded-xl max-sm:mx-auto"
    />
  </div>
);
