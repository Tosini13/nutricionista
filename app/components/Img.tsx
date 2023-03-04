type ImgPropsType = React.ImgHTMLAttributes<HTMLImageElement> & {
  webPsrc?: string;
  src: string;
  srcType?: string;
  alt: string;
};

const Img: React.FC<ImgPropsType> = ({
  src,
  alt,
  srcType = "image/png",
  webPsrc,
  ...props
}) => {
  return (
    <picture data-test-id="img">
      <source srcSet={webPsrc} type="image/webp" />
      <source srcSet={src} type={srcType} />
      <img src={src} alt={alt} {...props} />
    </picture>
  );
};

export default Img;
