import { StyledImage } from "./image.style";

interface ImageProps {
    src: string;
    alt: string;
    width: string;
    height: string;
    sizes?: string;
    srcSet?: string;
    borderRadius?: string;
    filter?: string;
}

export default function Image({ src, alt, width, height, sizes, srcSet, borderRadius, filter }: ImageProps) {
    return (
        <StyledImage
            $borderRadius={borderRadius}
            filter={filter}
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes={sizes}
            srcSet={srcSet}
        />
    )
}