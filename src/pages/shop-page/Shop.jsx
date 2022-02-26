import React from 'react'
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import CollectionOverviewContainer from '../../components/collections-overview/collections-overview.container';
import { fetchCollectionsStartAsync, updateCollections } from '../../redux/shop/shop-action';
import CollectionPageContainer from '../collection/collection-container';


const Shop = ({ match, fetchCollectionsStartAsync }) => {
    useEffect(() => {
        fetchCollectionsStartAsync()
    }, []);

    return (
        <div className='shop-page'>
            <Route 
                exact 
                path={`${match.path}`} 
                component={CollectionOverviewContainer}  
            />
            <Route 
                path={`${match.path}/:collectionId`} 
                component={CollectionPageContainer} 
            />
        </div>
    )

} 

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})


export default connect(null, mapDispatchToProps)(Shop);

