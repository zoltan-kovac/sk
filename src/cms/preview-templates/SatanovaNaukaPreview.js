import React from 'react'
import PropTypes from 'prop-types'
import { SatanovaNaukaPageTemplate } from '../../templates/satanova-nauka-page'

const SatanovaNaukaPagePreview = ({ entry, widgetFor }) => (
  <SatanovaNaukaPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

SatanovaNaukaPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default SatanovaNaukaPagePreview
