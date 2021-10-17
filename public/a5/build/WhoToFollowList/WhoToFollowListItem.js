const WhoToFollowListItem = (who) => {
    return(`
          <div class="list-group-item">
            <div class="row justify-content-start align-items-center">
                <div class="col-2">
                    <img style="width: 50px; height: 50px;" src=${who.avatarIcon} class="rounded-circle">
                </div>
                <div class="col-7">
                    <p style="font-weight: bold; margin:0; display:inline;">${who.userName}</p>
                    <i class="fas fa-check-circle"></i>
                    <p style="margin:0;">@${who.handle}</p>
                </div>
                <div class="d-grid mt-2 col-1">
                    <a href="/" class="btn btn-primary btn-block rounded-pill">Follow</a>
                </div>
            </div>
          </div>
    `);
}
export default WhoToFollowListItem;