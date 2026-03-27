import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * Hook that observes an element and triggers a reveal animation when it enters the viewport.
 * @param {Object} options
 * @param {number} options.threshold - Intersection threshold (0-1)
 * @param {string} options.rootMargin - Root margin for observer
 * @param {boolean} options.once - Only trigger once (default true)
 */
export const useScrollReveal = ({ threshold = 0.15, rootMargin = '0px 0px -60px 0px', once = true } = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(element);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, isVisible];
};

/**
 * Hook for staggered reveal of child items (grids, lists).
 * Returns a ref for the parent container and visibility state.
 */
export const useStaggerReveal = ({ threshold = 0.1, rootMargin = '0px 0px -40px 0px', staggerDelay = 100 } = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const getStaggerStyle = useCallback((index) => ({
    transitionDelay: isVisible ? `${index * staggerDelay}ms` : '0ms',
  }), [isVisible, staggerDelay]);

  return [ref, isVisible, getStaggerStyle];
};

/**
 * Hook for parallax-style scroll effect.
 * Returns a ref and a transform value based on scroll position.
 */
export const useParallax = (speed = 0.3) => {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Only calculate when element is in view
      if (rect.bottom > 0 && rect.top < windowHeight) {
        const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
        setOffset((scrollProgress - 0.5) * speed * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calc
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return [ref, offset];
};
