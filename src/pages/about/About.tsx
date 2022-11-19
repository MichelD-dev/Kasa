import Banner from '../../components/banner/Banner'
import Collapse from '../../components/collapse/Collapse'
import {CollapsePanel} from '../../components/collapse/CollapsePanel/CollapsePanel'
import {CollapseToggle} from '../../components/collapse/CollapseToggle/CollapseToggle'
import styles from './about.module.scss'

const About = () => (
  <section className={styles.section}>
    <Banner bannerImgURL="./media/about-banner.jpg" />
    <Collapse id="1">
      <CollapseToggle>Fiabilité</CollapseToggle>
      <CollapsePanel>
        Les annonces postées sur Kasa garantissent une fiabilité totale. Les
        photos sont conformes aux logements, et toutes les informations sont
        régulièrement vérifiées par nos équipes.
      </CollapsePanel>
    </Collapse>
    <Collapse id="2">
      <CollapseToggle>Respect</CollapseToggle>
      <CollapsePanel>
        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
        comportement discriminatoire ou de perturbation du voisinage entraînera
        une exclusion de notre plateforme.
      </CollapsePanel>
    </Collapse>
    <Collapse id="3">
      <CollapseToggle>Service</CollapseToggle>
      <CollapsePanel>
        Nos équipes se tiennent à votre disposition pour vous fournir une
        expérience parfaite. N&apos;hésitez pas à nous contacter si vous avez la
        moindre question.
      </CollapsePanel>
    </Collapse>
    <Collapse id="4">
      <CollapseToggle>Sécurité</CollapseToggle>
      <CollapsePanel>
        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour
        les voyageurs, chaque logement correspond aux critères de sécurité
        établis par nos services. En laissant une note aussi bien à l&apos;hôte
        qu&apos;au locataire, cela permet à nos équipes de vérifier que les
        standards sont bien respectés. Nous organisons également des ateliers
        sur la sécurité domestique pour nos hôtes.
      </CollapsePanel>
    </Collapse>
  </section>
)

export default About
