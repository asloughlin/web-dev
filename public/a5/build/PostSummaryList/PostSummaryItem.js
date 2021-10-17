const PostSummaryItem = (post) => {
    return(`
          <div class="list-group-item">
            <div class="d-flex justify-content-between">
                <div>
                    <p style="margin:0;">${post.topic}</p>
                    <p style="display: inline; font-weight: bold;">${post.userName}</p>
                    <i style="display: inline;" class="fas fa-check-circle"></i>
                    <p style="display: inline; margin:0;"> • ${post.time}</p>
                    <p style="margin:0">${post.title}</p>
                </div>
                <div>
                    <img style="width: 100px; height: 100px; border-radius: 12px;" src=${post.image}>
                </div>
            </div>
          </div>
    `);
}
export default PostSummaryItem;