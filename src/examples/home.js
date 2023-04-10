import * as React from "react"
import { Link } from "gatsby"
import Layout from '../components/Layout';
import { page, text } from '../examples/home.module.css'
import { ExampleButton } from "../examples/button";

export default function Home() {
  return (
    <Layout>
      <div className={page}>
        <ExampleButton>
          click me
        </ExampleButton>
        <h1>
          Home page
        </h1>
        <p className={text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet blanditiis est voluptate asperiores! Corrupti accusamus nulla dolorem aperiam ipsum eos, id atque necessitatibus beatae amet quisquam quam cum unde in repudiandae animi distinctio fugiat omnis, odio itaque facere rerum maiores!
        </p>
        <div>
          <Link to="/company/history">
            history
          </Link>
        </div>
        <div>
          <Link to="/contact">
            contact
          </Link>
        </div>
      </div>
    </Layout>
  );
};
