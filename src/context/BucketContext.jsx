import { createContext, useContext, useEffect, useState } from "react";

const BucketContext = createContext()

export const BucketProvider = ({children}) => {
   const [bucket, setBucket] = useState(()=> {
      const saved = localStorage.getItem('bucket')
      return saved ? JSON.parse(saved) : []
    });

    useEffect(()=> {
      localStorage.setItem('bucket', JSON.stringify(bucket))
    }, [bucket])

    const addToBucket = (movie)=> {
        setBucket(prev => prev.some(m=> m.id === movie.id)
        ? prev.filter(m => m.id !== movie.id)
        : [...prev, movie])

        console.log(bucket);
      }

      return ( 
            <BucketContext.Provider value={{ bucket, addToBucket}}>
                {children}
            </BucketContext.Provider>
      )
}

export const useBucket = () => useContext(BucketContext)