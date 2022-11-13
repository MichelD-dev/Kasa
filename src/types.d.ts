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
  lodgings: LodgingType[]
}

interface BannerProps {
  bannerURL?: string
  punchline?: string
}

interface CollapseContextInterface {
  activePanel: string | null
  handlePanelClick: (id: string) => void
  id: string
  accordeonToggleRef: RefObject<HTMLButtonElement>
}

interface CollapseItemType {
  children: ReactNode
}

interface CollapseType {
  defaultActivePanel?: string | null
  children: ReactNode
  id: string
}
