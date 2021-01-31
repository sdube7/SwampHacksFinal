import React from 'react';
import './card-style.css';

const Card = props => {
    return(
        <div className="card text-center shadow">
            <div style={{ 
                backgroundImage: `url("https://www.psychologies.co.uk/sites/default/files/field/image/iStock_000036450854_happy%20music.jpg")` 
            }}></div>
            <div className="overflow">
                <img src={props.imgsrc} alt='image 1' className='card-img-top'/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.imgtitle}</h4>
                <p className="card-text text-secondary"> {props.imgtext} </p>
                <p className="card-text text-secondary"> {props.imgtext2} </p>
                <p className="card-text text-secondary"> {props.imgtext3} </p>
                <p className="card-text text-secondary"> {props.imgtext4} </p>
                <p className="card-text text-secondary"> {props.imgtext5} </p>
            </div>
        </div>
    );
}

export function AudioCard(props) {
    return(
        <div className="card text-center shadow">
            <div style={{ 
                backgroundImage: `url("https://www.psychologies.co.uk/sites/default/files/field/image/iStock_000036450854_happy%20music.jpg")` 
            }}></div>
            <div className="overflow">
                <img src={props.imgsrc} alt='image 1' className='card-img-top'/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.imgtitle}</h4>
                <p className="card-text text-secondary"> <a href = {props.audio} target="_blank" rel="noopener noreferrer"> {props.imgtext} </a> </p>
                <p className="card-text text-secondary"> <a href = {props.audio2} target="_blank" rel="noopener noreferrer"> {props.imgtext2} </a> </p>
                <p className="card-text text-secondary"> <a href = {props.audio3} target="_blank" rel="noopener noreferrer"> {props.imgtext3} </a> </p>
                <p className="card-text text-secondary"> <a href = {props.audio4} target="_blank" rel="noopener noreferrer"> {props.imgtext4} </a> </p>
                <p className="card-text text-secondary"> <a href = {props.audio5} target="_blank" rel="noopener noreferrer"> {props.imgtext5} </a> </p>
            </div>
        </div>
    );






    // var audio1 = React.useRef(null);

    // function playAudio(audio) {
    //     console.log('Here')
    //     if (audio) {
    //         console.log(props.previewURL)
    //         audio.play();
    //     }
    // }

    // return (
    //     <div className="card text-center shadow">
    //         <div style={{ 
    //             backgroundImage: `url("https://www.psychologies.co.uk/sites/default/files/field/image/iStock_000036450854_happy%20music.jpg")` 
    //         }}></div>
    //         <div className="overflow">
    //             <img src={props.imgsrc} alt='image 1' className='card-img-top'/>
    //         </div>
    //         <div className="card-body text-dark">
    //             <h4 className="card-title">{props.imgtitle}</h4>
    //             <p onClick={() => playAudio(audio1.current)} className="card-text text-secondary"> {props.imgtext} </p>
    //             <video ref={audio1}>
    //                 <source src={props.previewURL} type="audio/mpeg"></source>
    //             </video>
    //             <p className="card-text text-secondary"> {props.imgtext2} </p>
    //             <p className="card-text text-secondary"> {props.imgtext3} </p>
    //             <p className="card-text text-secondary"> {props.imgtext4} </p>
    //             <p className="card-text text-secondary"> {props.imgtext5} </p>
    //         </div>
    //     </div>
    // )
}

export default Card;