import styles from './banner.module.scss'

const Banner = ({bannerURL = '', punchline = ''}: BannerProps) => (
  <div
    className={styles.banner}
    style={{
      backgroundImage: `url(${bannerURL})`,
    }}
  >
    {punchline}
  </div>
)

export default Banner
