import React, { Component } from 'react'

export default class ConfirmReview extends Component {
    render() {
        return (
            <div id = "review-confirm-popup">
                <h3>Are you sure you would like to review?</h3>
                <p>We ask that you please be respectful and have some general background regarding this genre.</p>
                <button>Yes</button>
                <button>No</button>
                
            </div>
        )
    }
}
