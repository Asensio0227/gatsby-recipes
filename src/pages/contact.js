import React from 'react'
import Layout from '../components/Layout'
import { graphql } from "gatsby";
import RecipeList from '../components/RecipeList';
import Seo from '../components/SEO';

const contact = ({ data }) => {
  const recipes = data.allContentfulRecipe.nodes;

  return (
    <Layout>
    <Seo title="Contact"/>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To Get in Torch</h3>
            <p>
              Meggings jean shorts narwhal, health goth master cleanse jianbing keffiyeh wolf kogi dreamcatcher everyday carry waistcoat hashtag organic prism. Try-hard franzen migas keffiyeh street art tofu PBR&B williamsburg literally art party. Fanny pack whatever messenger bag adaptogen brunch pinterest pug pickled photo booth.
            </p>
            <p>
              Vice hashtag cronut marxism yr hammock typewriter cupping.
            </p>
            <p>
              Lumbersexual big mood keytar letterpress hot chicken gochujang subway tile biodiesel cronut bespoke you probably haven't heard of them franzen paleo
            </p>
          </article>
          <article>
            <form
              action="https://formspree.io/f/xayzlegw"
              method="POST"
              className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                submit
              </button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Look at this Awesome!</h5>
          <RecipeList recipes={recipes} />
        </section>
      </main>
    </Layout>
  );
};

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

export default contact