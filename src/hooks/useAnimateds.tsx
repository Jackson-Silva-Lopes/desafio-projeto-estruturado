
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useEffect, useState } from "react";


function useAnimateds() {

    const [parent] = useAutoAnimate();
    const [dots, setDots] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
          setDots((prev) => (prev.length < 3 ? prev + '.' : ''));
        }, 500);
    
        return () => clearInterval(interval);
      }, []);
    
  return{
    dots,
    parent
  }
}

export default useAnimateds