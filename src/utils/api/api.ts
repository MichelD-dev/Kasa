const loader = async (url: string, element = ''): Promise<LodgingType[]> => {
  const response = await fetch(url)

  if (!response.ok) {
    throw new Response(`Failed to fetch ${element}`, {status: 500})
  }
  if (response.status === 404) {
    throw new Response('Not Found', {status: 404})
  }

  return response.json()
}

export default loader
