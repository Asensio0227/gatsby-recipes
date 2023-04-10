import React from 'react'
import Layout from "../components/Layout"
import { page, text } from '../examples/about.module.css'
// import * as aboutStyles from '../examples/about.module.css'

const about = () => {
  return (
    <Layout>
      <div className={page}>
      {/* <div className={aboutStyles.page}> */}
        <h1>about page</h1>
        <p className={text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ea nisi corporis, repellendus, ab mollitia eaque facilis, sed autem incidunt quis minima temporibus ducimus voluptatibus error optio. Unde quasi dolore nulla quisquam cumque possimus sit eum illum ex vel? Nam!
        </p>
      </div>
    </Layout>
  );
}

export default about