import React from "react";

const WhoToFollowListItem = (
    {
        who = {
            avatarIcon: '../../../images/nasa.png',
            userName: 'NASA',
            handle: 'NASA',
        }
    }
) => {
    const wdavatarIcon = {
        "width": "50px",
        "height": "50px"
    }
    const wduserName = {
        "font-weight": "bold",
        "margin":"0",
        "display":"inline"
    }
    const wdhandle = {
        "margin":"0"
    }
    return(
          <div className="list-group-item">
            <div className="row justify-content-start align-items-center">
                <div className="col-2">
                    <img alt={`${who.userName}-avatar`} style={wdavatarIcon} src={who.avatarIcon} className="rounded-circle"/>
                </div>
                <div className="col-7">
                    <p style={wduserName}>{who.userName}</p>
                    <i className="fas fa-check-circle"></i>
                    <p style={wdhandle}>@{who.handle}</p>
                </div>
                <div class="d-grid mt-2 col-1">
                    <a href="/" className="btn btn-primary btn-block rounded-pill">Follow</a>
                </div>
            </div>
          </div>
    );
}
export default WhoToFollowListItem;