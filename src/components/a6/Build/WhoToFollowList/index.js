import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "./who.json";
import React from "react";

const WhoToFollowList = () => {
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
