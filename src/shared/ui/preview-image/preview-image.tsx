import { ImageSource } from '../../model';

type Props = {
  imageSource: ImageSource;
  width: number | string;
  height: number | string;
  alt: string;
};

function PreviewImage({ imageSource, width, height, alt }: Props) {
  const { previewImg, previewImg2x, previewImgWebp, previewImgWebp2x } = imageSource;
  return (
    <picture>
      <source
        type="image/webp"
        srcSet={`${previewImgWebp}, ${previewImgWebp2x} 2x`}
      />
      <img
        src={previewImg}
        srcSet={`${previewImg2x} 2x`}
        width={width}
        height={height}
        alt={alt}
      />
    </picture>
  );
}

export default PreviewImage;
