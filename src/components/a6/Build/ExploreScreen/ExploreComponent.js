import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    const wdBottomLeftText = {
        "position": "absolute",
        "bottom": "8px",
        "left": "16px"
    }
    const wdLargeText = {
        "margin":"0",
        "font-size": "35px",
        "font-weight": "bold"
    }
    const wdImgContainer = {
        "position": "relative",
        "text-align": "center",
        "color": "white"
    }
    const wdLargeImage = {
        "width": "100%"
    }
    const wdSearchBar = {
        "width": "85%"
    }
    const wdSearchCog = {
        "color": "rgb(29, 161, 242)",
        "font-size": "2.3em"
    }
    return(
      <>
        <div className="row">
            <div className="d-flex justify-content-between align-items-center">
                <div className="form rounded-pill bg-white d-flex justify-content-between align-items-center px-3" style={wdSearchBar}>
                    <i className="fas fa-search"></i>
                    <input type="text" class="form-control form-input rounded-pill" placeholder="Search Twitter"/>
                </div>
                <div className="align-middle">
                    <i className="fas fa-cog" style={wdSearchCog}></i>
                </div>
            </div>
        </div>
        <ul className="nav nav-tabs mb-2 mt-2 ">
            <li className="nav-item">
                <a className="nav-link active" href="#">For You</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Trending</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">News</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Sports</a>
            </li>
            <li className="nav-item d-sm-none d-md-block">
                <a className="nav-link" href="#">Entertainment</a>
            </li>
        </ul>

        <div style={wdImgContainer}>
            <img style={wdLargeImage} src="../../images/spacex.png"/>
            <div style={wdBottomLeftText}>
                <p style={wdLargeText} className="fg-color-white">SpaceX's
                    Starship</p>
            </div>
        </div>

        <PostSummaryList/>
      </>
    );
}
export default ExploreComponent;
