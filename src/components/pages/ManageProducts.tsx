import { compose } from '@reduxjs/toolkit';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'
class ManageProducts extends Component {
    render() {
        const { products, auth }: any = this.props;
        if (!auth.uid) return <Redirect to='/' />
        return (
            <div>
                <h1>Admin</h1>
            </div>
        )
    }
}

const mapStateToProps = (state: { firestore: { ordered: { Products: any; }; }; firebase: { auth: any; }; }) => {
    console.log(state);
    return {
        products: state.firestore.ordered.Products,
        auth: state.firebase.auth
    }
}

export default compose<any>(
    connect(mapStateToProps),
    firestoreConnect(['Products'])
)(ManageProducts)
