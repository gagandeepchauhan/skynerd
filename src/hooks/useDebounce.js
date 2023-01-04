import React, { useEffect } from 'react';
import useTimeout from './useTimeout';

const useDebounce = (callback, dependencies, delay) => {
  const { reset, clear } = useTimeout(callback, delay);
  useEffect(reset, [...dependencies]);
  useEffect(clear, []);
};

export default useDebounce;