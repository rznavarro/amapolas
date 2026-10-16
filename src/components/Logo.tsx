import React, { useState } from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = 'h-8 md:h-10' }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <span className="font-display font-extrabold text-surface text-lg md:text-xl tracking-tight leading-none select-none">
        Odontología Amapolas
      </span>
    );
  }

  return (
    <div className="relative inline-flex items-center">
      <img
        src="https://odontologiaamapolas.cl/wp-content/uploads/2026/02/logo-odontologia-amapolas-integral-08.png"
        alt="Odontología Amapolas"
        className={`${className} w-auto object-contain`}
        onError={() => setHasError(true)}
      />
    </div>
  );
};
