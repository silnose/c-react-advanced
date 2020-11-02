import React from 'react'
import { Layout } from '../components/Layout'
import { PhotoDetail } from '../components/PhotoDetail'
import { PropTypes } from 'prop-types'

const Detail = ({ detailId }) => {
  return (
    <Layout title='More Details' subtitle='More Details of your pets'>
      <PhotoDetail id={detailId} />
    </Layout>
  )
}
export default Detail

Detail.propTypes = {
  id: PropTypes.number.isRequired
}
