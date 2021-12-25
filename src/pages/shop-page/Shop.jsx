import React, { Component } from 'react'
import CollectionPreview from '../../components/collection-preview/CollectionPreview';
import SHOP_DATA from '../../shop.data'

export default class Shop extends Component {
    constructor() {
        super()
        this.state = {
            collections: SHOP_DATA,
        }
    }
    render() {
        const { collections } = this.state;

        return (
            <div>
                {
                    collections.map(({ id, ...otherCollectionProp }) => {
                        return <CollectionPreview key={id} {...otherCollectionProp} />
                    })
                }
            </div>
        )
    }
}
