import {useCallback, useState} from "react";


export const useDownload = () => {
    const [loadingBlob, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const requestBlob = useCallback( async (url, method, token) => {
        setLoading(true)
        try{
            let headers:any = {}

            if(token)
                headers['Authorization'] = `Basic ${token}`
            const response = await fetch(`${process.env.REACT_APP_BASE_DEV_URL}${url}`, {method, headers})
            let data = null
            if (method === 'POST' || method === 'GET')
                data = await response.blob()

            if(!response.ok)
                throw new Error('Something wrong')

            setLoading(false)
            return data
        }catch (e) {
            setLoading(false)
            setError(e.message)
            throw e
        }
    },[])

    const clearError = () => setError(null)

    return {loadingBlob, requestBlob, error, clearError }
}
