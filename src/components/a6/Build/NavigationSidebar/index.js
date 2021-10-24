import React from "react";

const NavigationSidebar = (
  {
    active='explore'
  }) => {
    return(
        <>
            <div className="list-group">
                <a className={'list-group-item ${active === "home"?"active":"}'} href="/">
                    <i className="fab fa-twitter"></i></a>
                <a className={'list-group-item ${active === "home"?"active":"}'} href="/">
                    <i className="fas fa-home"></i> Home</a>
                <a className={'list-group-item ${active === "home"?"active":"}'} href="/">
                    <i className="fas fa-hashtag"></i> Explore</a>
                <a className={'list-group-item ${active === "home"?"active":"}'} href="/">
                    <i className="fas fa-bell"></i> Notifications</a>
                <a className={'list-group-item ${active === "home"?"active":"}'} href="/">
                    <i className="fas fa-envelope"></i> Messages</a>
                <a className={'list-group-item ${active === "home"?"active":"}'} href="/">
                    <i className="fas fa-bookmark"></i> Bookmarks</a>
                <a className={'list-group-item ${active === "home"?"active":"}'} href="/">
                    <i className="fas fa-list"></i> Lists</a>
                <a className={'list-group-item ${active === "home"?"active":"}'} href="/">
                    <i className="fas fa-user-alt"></i> Profile</a>
                <a className={'list-group-item ${active === "home"?"active":"}'} href="/">
                    <i className="fas fa-comment-dots"></i> More</a>
            </div>
            <div className="d-grid mt-2">
                <a href="tweet.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
        </>
    );
}
export default NavigationSidebar;
