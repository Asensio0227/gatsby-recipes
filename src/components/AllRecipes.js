import React from 'react'
import TagsList from './TagsList'
import RecipeList from './RecipeList'
import {
  graphql, useStaticQuery
} from 'gatsby';

 const query = graphql`
  query {
    allContentfulRecipe(sort: {title: ASC}) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const AllRecipes = () => {
  const data = useStaticQuery(query);
  console.log(data);
  const recipes = data.allContentfulRecipe.nodes;
  console.log(recipes);

  return (
    <section className="recipes-container">
      <TagsList recipes={recipes} />
      <RecipeList recipes={recipes} />
    </section>
  );
}

export default AllRecipes
