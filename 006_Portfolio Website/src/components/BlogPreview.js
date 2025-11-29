import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const BlogPreview = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        limit: 3
        sort: { frontmatter: { date: DESC } }
        filter: { fileAbsolutePath: { regex: "/content/blog/" } }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
              description
              tags
            }
            fields {
              slug
            }
            excerpt(pruneLength: 150)
          }
        }
      }
    }
  `)

  const posts = data.allMarkdownRemark.edges

  // Fallback data if no blog posts exist yet
  const fallbackPosts = [
    {
      node: {
        id: 1,
        frontmatter: {
          title: "Getting Started with React and Gatsby",
          date: "December 15, 2024",
          description: "Learn how to build modern websites with React and Gatsby",
          tags: ["React", "Gatsby", "Web Development"]
        },
        fields: { slug: "/blog/getting-started" },
        excerpt: "In this comprehensive guide, we'll explore how to get started with React and Gatsby to build blazing-fast modern websites..."
      }
    },
    {
      node: {
        id: 2,
        frontmatter: {
          title: "Mastering Tailwind CSS",
          date: "December 10, 2024",
          description: "Advanced techniques for working with Tailwind CSS",
          tags: ["Tailwind", "CSS", "Design"]
        },
        fields: { slug: "/blog/tailwind-mastery" },
        excerpt: "Discover advanced techniques and best practices for working with Tailwind CSS to create beautiful, responsive designs..."
      }
    },
    {
      node: {
        id: 3,
        frontmatter: {
          title: "The Future of Web Development",
          date: "December 5, 2024",
          description: "Exploring emerging trends in web development",
          tags: ["Web Development", "Trends", "Technology"]
        },
        fields: { slug: "/blog/future-web-dev" },
        excerpt: "Let's explore the emerging trends and technologies that are shaping the future of web development and how to stay ahead..."
      }
    }
  ]

  const displayPosts = posts.length > 0 ? posts : fallbackPosts

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about web development, design, and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayPosts.map(({ node }) => (
            <article
              key={node.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gradient-to-r from-primary-500 to-primary-600">
                <StaticImage
                  src="../images/blog-placeholder.jpg"
                  alt={node.frontmatter.title}
                  className="w-full h-full object-cover"
                  placeholder="blurred"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>{node.frontmatter.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {node.frontmatter.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {node.frontmatter.description || node.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {node.frontmatter.tags?.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  to={node.fields?.slug || `/blog/${node.frontmatter.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
                >
                  Read More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors inline-flex items-center"
          >
            View All Posts
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BlogPreview