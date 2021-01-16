import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import ThemeToggle from "./themeToggle"
import "./layout.css"
const Layout = ({ children }) => {
   const data = useStaticQuery(graphql`
                  query SiteTitleQuery {
                        site {
                           siteMetadata {
                               title
                            }
                         }
                    }
                `)
return (
    <div className="bg-gray-600 dark:bg-gray-900 text-white">
      <Header 
          siteTitle={data.site.siteMetadata?.title || `Title`}
        />
      <ThemeToggle />
      <main className="p-10">
           {children}
      </main>
      <footer style={{ marginTop: `2rem` }}>
             © {new Date().getFullYear()}, Built with{` `}
             <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}
Layout.propTypes = {
   children: PropTypes.node.isRequired,
}
export default Layout