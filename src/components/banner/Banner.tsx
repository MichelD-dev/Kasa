import styles from './banner.module.scss'

const Banner = ({bannerURL = '', punchline = ''}: BannerProps) => (
  <div
    className={styles.banner}
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
