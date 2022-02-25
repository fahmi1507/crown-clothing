import './collection-page.styles.scss'
import React from 'react'
import { selectCollection } from '../../redux/shop/shop-selectors'
import { connect } from 'react-redux'

const CollectionPage = ({ collection }) => {
    console.log(collection, '<ahah')
    return (
        <div className='collection-page'>
            CollectionPage
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);