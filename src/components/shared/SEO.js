import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

/**
 *
 * @param {String} title Title of the currently-active page, e.g. Comments.
 * Defaults to and is prefixed with 'Unearth'.
 */
const SEO = ({ title }) => (
  <Helmet>
    <title>
      {title.toLowerCase() === 'unearth' ? title : `unearth - ${title}`}
    </title>
  </Helmet>
)

SEO.propTypes = { title: PropTypes.string }
SEO.defaultProps = { title: 'unearth' }

export default SEO
