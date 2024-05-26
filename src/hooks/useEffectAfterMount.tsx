import { useRef, useEffect } from 'react';

const useEffectAfterMount = (callback: () => void | (() => void)| Promise<void>, dependencies: any[]) => {
  const componentJustMounted = useRef(true);

  useEffect(() => {
    if (!componentJustMounted.current) {
      const cleanup = callback();
      if (cleanup && typeof cleanup === 'function') {
        return cleanup;
      }
    }
    componentJustMounted.current = false;
  }, dependencies);
};

export default useEffectAfterMount;
