import React, { useState } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
  fallbackType?: 'photo' | 'seal';
  alt: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  containerClassName = '',
  className = '',
  fallbackType = 'photo',
  ...rest
}) => {
  const [hasError, setHasError] = useState(false);

  const bgClass = fallbackType === 'photo' ? 'bg-secondary/30' : 'bg-mist';

  return (
    <div className={`relative overflow-hidden ${bgClass} ${containerClassName}`}>
      {!hasError && (
        <img
          src={src}
          alt={alt}
          className={`${className} transition-opacity duration-300`}
          onError={() => setHasError(true)}
          {...rest}
        />
      )}
    </div>
  );
};
