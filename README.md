<a name="readme-top"></a>

# Kasa

#### Location d’appartements entre particuliers en France.

#### Formation OpenClassrooms - Développeur d'applications JavaScript React
#### Projet 11

Ce projet, visible sur la branche [Optimized](https://github.com/MichelD-dev/Kasa/tree/Optimized), a d'abord été créé en tirant parti des dernières nouveautés apparues avec React Router v6.4:
- <font color="lightblue">*Loader*</font> incorporé aux routes
- <font color="lightblue">*ErrorElement*</font> pour les pages d'erreur
- <font color="lightblue">*Defer*</font> pour retourner une promesse depuis le *loader*
- Les composants <font color="lightblue">*Await*</font> permettant de résoudre cette promesse avant d'en envoyer le resultat à un composant via un <font color="lightblue">*render prop*</font>
- <font color="lightblue">*useAsyncValue*</font> retourne également la valeur issue de la promesse venant du *loader* et permet de l'utiliser dans le composant enfant d'un *Await*
- <font color="lightblue">*Suspense*</font>, fourni par React 18, permet d'utiliser les fonctions précédentes

Il utilise également certains patterns comme les <font color="lightblue">*composants composés*</font> pour les accordéons, associés à un <font color="lightblue">*Contexte*</font>, et fait usage du code-splitting via <font color="lightblue">*React.Lazy*</font> et <font color="lightblue">*Webpack Prefetch*</font>.

Vous trouverez sur la branche par défaut [main](https://github.com/MichelD-dev/Kasa) une version de base n'utilisant pas ou peu ces optimisations, à part les <font color="lightblue">*composants composés*</font> et le <font color="lightblue">*Contexte*</font>.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Prerequisites

In order to make the application works on your engine you must have NodeJS and
npm installed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Installation
****
1. Clone this repository (or download a zip file):
   `git clone https://github.com/MichelD-dev/Kasa`

2. Go to the projet root folder `cd kasa`

3. Install the dependencies: `yarn install` or `npm install`

4. (Optional) Configure the application inside the `.env.local` file

5. Launch the application: `yarn start` or `npm run start`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact:
Michel DELAUNAY - delaunaymichel@hotmail.fr  

Project Link: https://github.com/MichelD-dev/Kasa

<p align="right">(<a href="#readme-top">back to top</a>)</p>