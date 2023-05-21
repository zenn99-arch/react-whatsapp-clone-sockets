import React, { useEffect, useState } from 'react'

const prefix = 'whatsapp-Clone-'

export default function useLocalStorage ( key, initialValue ){

    const prefixKey = prefix + key
    const [value, setValue] = useState( () => {
        const jsonValue = localStorage.getItem(prefixKey)
        if (jsonValue != null ) return JSON.parse(jsonValue)
        if (typeof initialValue === 'function' ){
            return initialValue()
        }else {
            return initialValue
        }
    })

    useEffect(() => {
       localStorage.setItem(prefixKey, JSON.stringify(value)) 
    }, [prefixKey, value])
  
    return [value, setValue]
}

