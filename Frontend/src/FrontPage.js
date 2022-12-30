import { Link } from "react-router-dom"

function frontPage () {
    return <div className="frontPage">
        <h1>Welcome to Players Database</h1>
          <img src="https://www.pixelstalk.net/wp-content/uploads/2016/10/Football-Live-Wallpapers-HD-Free-Download-2.jpg" alt="Football"></img>
          <h2>Top Football Players</h2>
          <Link to="/player">View Player</Link>
    </div>
}

export default frontPage