import { useEffect, useState } from 'react';

export const useCheckClient = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return { isClient };
};
