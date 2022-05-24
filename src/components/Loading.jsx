import React from 'react';
import ReactLoading from 'react-loading'
import "./Loading.css"

function Loading() {
    return (
    <div className='container' >
        <div className="centerThis">
            <h1 className='text-center justify-content-center'> Welcome to Food Tracker </h1>
        </div>
        <div className='loading'>
                <ReactLoading
                    type="spinningBubbles"
                    color="#0000FF"
                    height={100}
                    width={200}
                />
            </div>
        <iframe className="frame"  src="https://giphy.com/embed/qMntr6DEZ8E4o"  alt ="eating" />
    </div>
    )
}

export default Loading;