type SmartImgProps = {
  src: string;
  fallback?: string;
  alt: string;
  className?: string;
};

export default function SmartImg({ src, fallback, alt, className }: SmartImgProps) {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      onError={(event) => {
        if (fallback && event.currentTarget.src !== new URL(fallback, window.location.origin).href) {
          event.currentTarget.src = fallback;
        }
      }}
    />
  );
}
