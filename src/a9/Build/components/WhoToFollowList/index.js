import WhoToFollowListItem from "./WhoToFollowListItem";
import React from "react";
import {useSelector} from "react-redux";

const selectWho = (state) => state.who;

const WhoToFollowList = () => {
    const who = useSelector(selectWho);
    return (
            <ul class="list-group">
                <div class="list-group-item">Who to follow</div>
                {
                    who.map(oneWho => {
                        return(
                            <WhoToFollowListItem who={oneWho}/>)
                    })
                }
            </ul>
); }
export default WhoToFollowList;
