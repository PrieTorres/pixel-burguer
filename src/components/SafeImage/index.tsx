"use client";
import { useState } from "react";
import { Container } from "./styles";
import Image, { StaticImageData } from "next/image";

export interface SafeImageProps {
  src: string | StaticImageData,
  text: string,
  height?: number,
}

export const SafeImage = ({
  src,
  text,
  height
}: SafeImageProps) => {
  const [imageError, setImageError] = useState(false);

  return (
    <Container style={{ height }}>
      {!imageError ?
        <Image
          unoptimized
          src={src}
          alt={text}
          onError={() => setImageError(true)}
        /> : <span>{text}</span>
      }
    </Container>
  );
};