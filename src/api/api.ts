import {defer} from 'react-router-dom'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const sleep = (ms: number): Promise<() => void> => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const fetchData = async (url: string, element = ''): Promise<LodgingType[]> => {

  // await sleep(1200) // On simule ici un serveur qui tarde à envoyer ses données

  const response = await fetch(url, {
    headers: {
      Accept: 'application/json',
    },
  })

  if (!response.ok) {
    throw new Response(`Failed to fetch ${element}`, {status: 500})
  }
  if (response.status === 404) {
    throw new Response('Not Found', {status: 404})
  }

  return response.json()
}


export const loader = async (url: string, element = '') => {

  return defer({lodgings: fetchData(url, element)})
}

export default loader