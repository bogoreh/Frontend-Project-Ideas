import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Hero from "../components/Hero"
import About from "../components/About"
import Projects from "../components/Projects"
import BlogPreview from "../components/BlogPreview"
import Contact from "../components/Contact"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <Hero />
      <About />
      <Projects />
      <BlogPreview />
      <Contact />
    </Layout>
  )
}

export default IndexPage