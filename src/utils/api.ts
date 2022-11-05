interface LodgingType {
  id: string
  title: string
  cover: string
  pictures: string[]
  description: string
  host: {name: string; picture: string}
  rating: string
  location: string
  equipments: string[]
  tags: string[]
}

export const getLodgings = async (): Promise<LodgingType[]> => {
  const response = await fetch('data/logements.json')
  if (!response.ok) {
    throw {message: 'Failed to get lodgings.', status: 500}
  }
  return response.json()
}
