import React, {useState} from "react";
import './happenning.css';
import {useDispatch} from "react-redux";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const tweetClickHandler = () => {
        dispatch({type: 'create-tweet',
            tweet: whatsHappening
        });
    }
    return(
    <table>
        <tr>
            <td className="align-text-top">
                <img alt="" className="rounded-circle wd-avatar-image" src="../../../images/starship.png"/>
            </td>
            <td className="ps-3" style={{width: '100%'}}>
                <div>
                <textarea
                    placeholder="What's happening"
                    value={whatsHappening}
                    onChange={(event) =>
                    setWhatsHappening(event.target.value)}>
                </textarea>
                </div>
                <div>
                    <i class="mx-2 far fa-image wd-blue"></i>
                    <i class="mx-2 fas fa-chart-line wd-blue"></i>
                    <i class="mx-2 far fa-smile wd-blue"></i>
                    <i class="mx-2 far fa-calendar wd-blue"></i>
                    <button
                        onClick={tweetClickHandler}
                        className="btn btn-primary float-end rounded-pill">
                        Tweet
                    </button>
                </div>
            </td>
        </tr>
    </table>
    );
}
export default WhatsHappening;
