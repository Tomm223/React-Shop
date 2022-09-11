import React from "react";
import { useMediaQuery } from 'react-responsive'

export function useWindowSize() {
   const minLabTop = useMediaQuery({ query: '(min-width: 1024px)' })
   const minTablet = useMediaQuery({ query: '(min-width: 768px)' })
   const minMonitor = useMediaQuery({ query: '(min-width: 1440px)' })
   const minFon = useMediaQuery({ query: '(min-width: 320px)' })
   const minBigAcc = useMediaQuery({ query: '(min-width: 1200px)' })
   return {
      minLabTop,
      minTablet,
      minMonitor,
      minFon,
      minBigAcc
   }
}