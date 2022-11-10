import Banner from '../../components/banner/Banner'
import Accordion, {
  AccordionToggle,
  AccordionPanel,
} from '../../components/accordion/Accordion'
import styles from './about.module.scss'

const About = () => (
  <section className={styles.section}>
    <Banner bannerURL="media/about-banner.jpg" />
    <Accordion id="1">
      <AccordionToggle>Fiabilité</AccordionToggle>
      <AccordionPanel>
        Les annonces postées sur Kasa garantissent une fiabilité totale. Les
        photos sont conformes aux logements, et toutes les informations sont
        régulièrement vérifiées par nos équipes.
      </AccordionPanel>
    </Accordion>
    <Accordion id="2">
      <AccordionToggle>Respect</AccordionToggle>
      <AccordionPanel>
        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
        comportement discriminatoire ou de perturbation du voisinage entraînera
        une exclusion de notre plateforme.
      </AccordionPanel>
    </Accordion>
    <Accordion id="3">
      <AccordionToggle>Service</AccordionToggle>
      <AccordionPanel>
        Nos équipes se tiennent à votre disposition pour vous fournir une
        expérience parfaite. N&apos;hésitez pas à nous contacter si vous avez la
        moindre question.
      </AccordionPanel>
    </Accordion>
    <Accordion id="4">
      <AccordionToggle>Sécurité</AccordionToggle>
      <AccordionPanel>
        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour
        les voyageurs, chaque logement correspond aux critères de sécurité
        établis par nos services. En laissant une note aussi bien à l&apos;hôte
        qu&apos;au locataire, cela permet à nos équipes de vérifier que les
        standards sont bien respectés. Nous organisons également des ateliers
        sur la sécurité domestique pour nos hôtes.
      </AccordionPanel>
    </Accordion>
  </section>
)

export default About
