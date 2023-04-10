import React from 'react'
import Layout from "../components/Layout"
import { StaticImage } from 'gatsby-plugin-image';
import { Link,graphql } from "gatsby";
import RecipeList from '../components/RecipeList';
import Seo from '../components/SEO';

const About = ({
  data: {
    allContentfulRecipe: { nodes: recipes }
  } }) => {
  return (
    <Layout>
      <Seo title="About"/>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>I'm baby coloring book poke taxidermy</h2>
            <p>
              Iceland VHS raw denim YOLO pok pok, kitsch polaroid PBR&B readymade ennui retro lomo brunch four dollar toast. Jawn forage enamel pin, drinking vinegar woke normcore master cleanse fanny pack solarpunk sartorial 90's paleo lo-fi disrupt messenger bag. Marfa pour-over poke green juice cloud bread street art. 
            </p>
            <p>
               Austin brunch hammock, aesthetic mukbang chillwave activated charcoal palo santo wolf bespoke twee. Chicharrones DSA bruh flexitarian iPhone bodega boys.
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt='Person Pouring Salt In Bowl'
            className='about-img'
            placeholder='blurred'
          />
        </section>
        <section className="featured-recipes">
          <h5>Look at this Awesome!</h5>
          <RecipeList recipes={recipes}/>
        </section>
      </main>
    </Layout>
  );
}

export const query = graphql`
  query {
    allContentfulRecipe(sort: {title: ASC}, filter: {featured: {eq: true}}) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          id
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default About