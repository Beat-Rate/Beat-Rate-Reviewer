import React, { Component } from 'react'

export default class ReviewPopup extends Component {
    render() {
        return (
            <div id= "review-wrapper">
                <h1>Song's Review</h1>
                <h3>What did you think about the song overal quality!</h3>
                <textarea></textarea>
                <h3>What did you think about the song's beat?</h3>
                <textarea></textarea>
                <h3>What did you think about the song's pace?</h3>
                <textarea></textarea>
                <h3>What do you think could improve?</h3>
                <textarea></textarea>
                <h3>What portion of the song was the best?(beginning, middle, end)</h3>
                <textarea></textarea>
                <h3>What portion of the song had the lowest quality(if at all)?</h3>
                <textarea></textarea>
            </div>
        )
    }
}
