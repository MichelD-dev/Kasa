import styles from './banner.module.scss'

const Banner = ({bannerImgURL = '', punchline = '', ...props}: BannerProps) => (
  <div
    className={styles.banner}
    style={{
      backgroundImage: `url(${bannerImgURL})`,
    }}
    role="banner"
    aria-label="Hero Image"
    {...props}
  >
    {punchline}
  </div>
)

export default Banner
