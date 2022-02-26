import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";
import shopActionTypes from "./shop-types";

export const fetchCollectionsStart = () => ({
    type: shopActionTypes.FETCH_COLLECTIONS_START,
})

export const fetchCollectionsSuccess = collectionsMap => ({
    type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
}) 

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        dispatch(fetchCollectionsStart())
        const collectionRef = firestore.collection('collections')
        collectionRef
        .get()
        .then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            dispatch(fetchCollectionsSuccess(collectionsMap))
        })
        .catch(err => dispatch(fetchCollectionsFailure(err.message)))
    }
}

export const fetchCollectionsFailure = errorMsg => ({
    type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMsg,
})