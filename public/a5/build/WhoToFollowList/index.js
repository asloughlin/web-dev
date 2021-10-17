import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
    return (`
            <ul class="list-group">
                <div class="list-group-item">Who to follow</div>
                ${
                    who.map(oneWho => {
                        return(WhoToFollowListItem(oneWho))
                    }).join("")
                }
            </ul>
`); }
export default WhoToFollowList;
