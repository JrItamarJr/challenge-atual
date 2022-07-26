import { useEffect } from 'react';
import { useState } from 'react';

type IconProps = {
  variant: string;
  size: number;
};

export const Icon: React.FC<IconProps> = ({ variant, size }) => {
  const [iconSrc, setIconSrc] = useState();

  useEffect(() => {
    const mount = async () => {
      const result = await import(`../../../public/${variant}.svg`);
      if (result) {
        setIconSrc(result.default);
      }
    };

    mount();
  }, [variant]);

  return <img src={iconSrc} width={size} height={size} alt={variant} />;
};