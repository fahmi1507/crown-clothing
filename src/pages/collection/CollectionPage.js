import './collection-page.styles.scss'
import React from 'react'
import { selectCollection } from '../../redux/shop/shop-selectors'
import { connect } from 'react-redux'
import CollectionItem from '../../components/collection-item/CollectionItem'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const CollectionPage = () => {
    const { collectionId } = useParams();
    const collection = useSelector(selectCollection(collectionId))
    const { title, items } = collection;
    return (
        <div className='collection-page'>
            <h2 className="title">
                { title }
            </h2>
            <div className="items">
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </div>
        </div>
    )
}

export default CollectionPage;