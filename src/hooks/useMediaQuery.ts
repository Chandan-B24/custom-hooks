import { useEffect, useState } from "react"


type MediaQuery = {
  matches : boolean,
  mediaQuery : string
}

export const useMediaQuery = (query : string) : MediaQuery => {
  const [matches,setMaches] = useState<boolean>(false)


  useEffect(()=>{
      const mediaQueryList = window.matchMedia(query);

      const handleChange = (e:MediaQueryListEvent) =>{
        setMaches(e.matches)
      }

      mediaQueryList.addEventListener('change',handleChange);

      setMaches(mediaQueryList.matches);

  },[query])



  return {matches,mediaQuery : query}
}