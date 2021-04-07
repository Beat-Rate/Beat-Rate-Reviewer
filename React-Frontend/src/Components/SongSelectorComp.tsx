import React, { Component } from 'react'

export default class SongSelectorComp extends Component {
    render() {
        return (
            <div id = "song-selector-comp">
                <h1 id = "song-title">Song Title</h1>
                <h1 id = "genre">Hip hop</h1>
                <img id = "song-img"></img>
                <img id = "next-right-arrow"></img>
                <img id = "prev-left-arrow"></img>
                <button>Review</button>
                
            </div>
        )
    }
}
