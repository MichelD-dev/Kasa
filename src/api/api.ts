import {useCallback, useEffect, useState} from 'react'

const useFetch = (url: string, element = '') => {
  const cb = useCallback(
    (signal: AbortSignal) => {
      return fetch(url, {signal})
    },
    [url],
  )
  return useCallbackFetch(cb, element)
}

const useCallbackFetch = (
  callback: (signal: AbortSignal) => Promise<Response>,
  element: string,
) => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    const fetchData = async () => {
      try {
        setIsLoading(true)

        const response = await callback(signal)

        if (!response.ok) {
          throw new Error(`Failed to fetch ${element}`)
        }
        if (response.status === 404) {
          throw new Error('Not Found')
        }

        setData(await response.json())

        return () => {
          setIsLoading(false)
        }
      } catch (err) {
        let message
        if (err instanceof Error) message = err.message
        else message = String(error)
        setError(message)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()

    return () => {
      controller.abort()
    }
  }, [callback, element, error])

  return {data, error, isLoading}
}

export default useFetch
