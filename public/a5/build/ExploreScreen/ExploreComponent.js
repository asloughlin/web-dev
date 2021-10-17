import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
        <div class="row">
            <div class="d-flex justify-content-between align-items-center">
                <div class="form rounded-pill bg-white d-flex justify-content-between align-items-center px-3" style="width:85%;">
                    <i class="fas fa-search"></i>
                    <input type="text" class="form-control form-input rounded-pill" placeholder="Search Twitter">
                </div>
                <div class="align-middle">
                    <i class="fas fa-cog" style="color: rgb(29, 161, 242); font-size: 2.3em;"></i>
                </div>
            </div>
        </div>
        <ul class="nav nav-tabs mb-2 mt-2 ">
            <li class="nav-item">
                <a class="nav-link active" href="#">For You</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Sports</a>
            </li>
            <li class="nav-item d-sm-none d-md-block">
                <a class="nav-link" href="#">Entertainment</a>
            </li>
        </ul>

        <div class="wd-img-container">
            <img style="width: 100%;" src="../../images/spacex.png">
            <div class="wd-bottom-left-text">
                <p style="margin:0; font-size: 35px; font-weight: bold;" class="fg-color-white">SpaceX's
                    Starship</p>
            </div>
        </div>

        ${PostSummaryList()}
    `);
}
export default ExploreComponent;
