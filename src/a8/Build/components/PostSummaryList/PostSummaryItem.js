import React from "react";

const PostSummaryItem = (
{
        post = {
            "topic": "Web Development",
            "userName": "ReactJS",
            "time": "2h",
            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "image": "../../../images/react-blue.png"
        }
}) => {
    const wdinline = {
        "display": "inline"
    }
    const wduserName = {
        "font-weight": "bold",
        ...wdinline
    }
    const wdmargin0 = {
        "margin":"0"
    }
    const wdpostimage = {
        "width": "100px",
         "height": "100px",
         "border-radius": "12px"
    }
    const wdtime = {
        ...wdinline,
        ...wdmargin0
    }
    return(
          <div className="list-group-item">
            <div className="d-flex justify-content-between">
                <div>
                    <p style={wdmargin0}>{post.topic}</p>
                    <p style={wduserName}>{post.userName}</p>
                    <i style={wdinline} className="fas fa-check-circle"></i>
                    <p style={wdtime}> • {post.time}</p>
                    <p style={wdmargin0}>{post.title}</p>
                </div>
                <div>
                    <img alt={post.topic} style={wdpostimage} src={post.image}/>
                </div>
            </div>
          </div>
    );
}
export default PostSummaryItem;