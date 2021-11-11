import {useDispatch} from "react-redux";

const TweetStats = ({tweet}) => {
    const dispatch = useDispatch();
    const likeClickHandler = () => {
        dispatch({type: 'like-tweet', tweet});
    };
    return (
    <div className="row mt-2">
        <div class="col">
            <i class="me-2 far fa-comment"></i>
            {tweet.stats.comments}
        </div>
        <div class="col">
            <i class="me-2 fas fa-retweet"></i>
            {tweet.stats.retweets}
        </div>
        <div class="col">
            <i class="me-2 fas fa-external-link-alt"></i>
        </div>
        <div className="col"
            onClick={likeClickHandler}>
            {
                tweet.liked && <i className="fas fa-heart me-2"
                            style={{color: tweet.liked ? "red": "white"}}></i>
            }
            {
                !tweet.liked && <i className="far fa-heart me-2"></i>
            }
            {tweet.stats.likes}
        </div>
    </div>
    );
}
export default TweetStats;
