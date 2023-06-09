import React from 'react'
import { graphql } from 'gatsby';

// page query
const Testing = ({data}) => {
  // console.log(props);
  const author = data.site.info.author;
  return (
    <div>
      <h2>
        author : {author}
      </h2>
    </div>
  )
}

export const getData = graphql`
query {
  site {
    info:siteMetadata {
      title
      description
      author
      person {
        name
        age
      }
      simpleData
      complexData {
        name
        age
      }
    }
  }
}`

export default Testing