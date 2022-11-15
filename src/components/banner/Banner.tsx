import { InputHTMLAttributes } from 'react'
import { BannerProps } from '../../types'
import styles from './banner.module.scss'

const Banner = ({bannerURL = '', punchline = '', ...props }: BannerProps & InputHTMLAttributes<HTMLElement>) => (
  <div
    className={`${styles.banner } ${props.className}`}
    style={{
      backgroundImage: `url(${bannerURL})`,
    }}
    role="banner"
    aria-label="Hero Image"
  >
    {punchline}
  </div>
)

export default Banner
