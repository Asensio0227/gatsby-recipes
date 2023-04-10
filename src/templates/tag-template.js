import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout';
import RecipeList from '../components/RecipeList';
import Seo from '../components/SEO';

const TagTemplate = ({data,pageContext}) => {
  const recipes = data.allContentfulRecipe.nodes;

  return (
    <Layout>
      <Seo title={pageContext.tag}/>
      <main className="page">
        <h2>{pageContext.tag}</h2>
        <div className="tag-recipes">
          <RecipeList recipes={recipes}/>
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
query GetRecipeByTag($tag:String) {
  allContentfulRecipe(filter: {content: {tags: {eq: $tag}}}) {
    nodes {
      title
      id
      prepTime
      cookTime
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
    }
  }
}
`;

export default TagTemplate
