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

interface LodgingsType {
  data: LodgingType[] | null
}

interface JSONResponseType {
  data: LodgingType[] | null
  isLoading: boolean
  error: string
}

interface BannerProps {
  bannerImgURL?: string
  punchline?: ReactNode
}

interface CollapseContextInterface {
  activePanel: string | null
  handlePanelClick: (id: string) => void
  id: string
  collapseToggleRef: RefObject<HTMLButtonElement>
}

interface CollapseItemType {
  children: ReactNode
}

interface CollapseType {
  defaultActivePanel?: string | null
  children: ReactNode
  id: string
}
