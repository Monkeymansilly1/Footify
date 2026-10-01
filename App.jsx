import { useState } from "react";
import "./App.css";

const matches = [
  {
    league: "Premier League",
    home: "Arsenal",
    away: "Chelsea",
    homeScore: 2,
    awayScore: 1,
    status: "FT",
  },
  {
    league: "Premier League",
    home: "Liverpool",
    away: "Manchester City",
    homeScore: 0,
    awayScore: 0,
    status: "19:45",
  },
  {
    league: "Champions League",
    home: "Barcelona",
    away: "Inter",
    homeScore: null,
    awayScore: null,
    status: "20:00",
  },
];

function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [playing, setPlaying] = useState(false);

  return (
    <div className="app">
      <div className="nebula nebula-one"></div>
      <div className="nebula nebula-two"></div>
      <div className="stars"></div>

      <header className="navbar">
        <div className="logo">
          <span className="logo-ball">⚽</span>
          <span>FOOT<span className="green">IFY</span></span>
        </div>

        <nav>
          <button
            className={activeTab === "home" ? "active" : ""}
            onClick={() => setActiveTab("home")}
          >
            Home
          </button>

          <button
            className={activeTab === "football" ? "active" : ""}
            onClick={() => setActiveTab("football")}
          >
            Football
          </button>

          <button
            className={activeTab === "music" ? "active" : ""}
            onClick={() => setActiveTab("music")}
          >
            Music
          </button>
        </nav>

        <div className="profile">
          <div className="profile-dot"></div>
          <span>My Footify</span>
        </div>
      </header>

      <main>
        {activeTab === "home" && (
          <>
            <section className="hero">
              <div>
                <p className="eyebrow">YOUR MATCHDAY HUB</p>

                <h1>
                  Football.
                  <br />
                  <span>Music.</span>
                  <br />
                  One place.
                </h1>

                <p className="hero-text">
                  Keep up with the scores while your DnB soundtrack keeps
                  running.
                </p>

                <div className="hero-buttons">
                  <button
                    className="primary-button"
                    onClick={() => setActiveTab("football")}
                  >
                    View scores →
                  </button>

                  <button
                    className="secondary-button"
                    onClick={() => setActiveTab("music")}
                  >
                    Open music
                  </button>
                </div>
              </div>

              <div className="hero-orb">
                <div className="orb-ring ring-one"></div>
                <div className="orb-ring ring-two"></div>
                <div className="orb-ball">⚽</div>
              </div>
            </section>

            <section className="dashboard-grid">
              <div className="glass-card">
                <div className="card-header">
                  <div>
                    <p className="card-label">FOOTBALL</p>
                    <h2>Today's scores</h2>
                  </div>
                  <span className="live-indicator">
                    <span></span> LIVE
                  </span>
                </div>

                <div className="matches">
                  {matches.map((match, index) => (
                    <Match key={index} match={match} />
                  ))}
                </div>

                <button
                  className="card-link"
                  onClick={() => setActiveTab("football")}
                >
                  See all fixtures →
                </button>
              </div>

              <SpotifyCard playing={playing} setPlaying={setPlaying} />
            </section>
          </>
        )}

        {activeTab === "football" && (
          <section className="page-section">
            <p className="eyebrow">FOOTIFY FOOTBALL</p>
            <h1 className="page-title">
              Today's <span>football.</span>
            </h1>

            <div className="league-selector">
              <button className="selected">All</button>
              <button>Premier League</button>
              <button>Champions League</button>
              <button>La Liga</button>
            </div>

            <div className="full-matches">
              {matches.map((match, index) => (
                <Match key={index} match={match} large />
              ))}
            </div>
          </section>
        )}

        {activeTab === "music" && (
          <section className="page-section">
            <p className="eyebrow">YOUR SOUNDTRACK</p>
            <h1 className="page-title">
              DnB <span>mode.</span>
            </h1>

            <div className="music-layout">
              <div className="album-art">
                <div className="album-glow"></div>
                <div className="album-text">DnB</div>
              </div>

              <div className="music-info">
                <p className="card-label">NOW PLAYING</p>
                <h2>Matchday DnB</h2>
                <p className="artist">Footify Playlist</p>

                <div className="progress">
                  <div className="progress-fill"></div>
                </div>

                <div className="times">
                  <span>1:24</span>
                  <span>3:47</span>
                </div>

                <div className="player-controls">
                  <button>↶</button>

                  <button
                    className="play-button"
                    onClick={() => setPlaying(!playing)}
                  >
                    {playing ? "Ⅱ" : "▶"}
                  </button>

                  <button>↷</button>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer>
        <span>FOOT<span className="green">IFY</span></span>
        <span>Football × Music</span>
      </footer>
    </div>
  );
}

function Match({ match, large = false }) {
  return (
    <div className={`match ${large ? "match-large" : ""}`}>
      <div className="match-info">
        <span className="competition">{match.league}</span>

        <div className="teams">
          <span>{match.home}</span>
          <strong>
            {match.homeScore === null ? "-" : match.homeScore}
          </strong>
        </div>

        <div className="teams">
          <span>{match.away}</span>
          <strong>
            {match.awayScore === null ? "-" : match.awayScore}
          </strong>
        </div>
      </div>

      <div
        className={`match-status ${
          match.status === "FT" ? "finished" : "upcoming"
        }`}
      >
        {match.status}
      </div>
    </div>
  );
}

function SpotifyCard({ playing, setPlaying }) {
  return (
    <div className="glass-card spotify-card">
      <div className="card-header">
        <div>
          <p className="card-label">SPOTIFY</p>
          <h2>Your soundtrack</h2>
        </div>

        <span className="spotify-logo">●</span>
      </div>

      <div className="spotify-player">
        <div className="mini-art">
          <span>DnB</span>
        </div>

        <div className="track-info">
          <strong>Matchday DnB</strong>
          <span>Footify Playlist</span>
        </div>
      </div>

      <div className="spotify-progress">
        <div></div>
      </div>

      <div className="spotify-times">
        <span>1:24</span>
        <span>3:47</span>
      </div>

      <div className="controls">
        <button>↶</button>

        <button
          className="main-play"
          onClick={() => setPlaying(!playing)}
        >
          {playing ? "Ⅱ" : "▶"}
        </button>

        <button>↷</button>
      </div>

      <button className="spotify-button">
        Open Spotify ↗
      </button>
    </div>
  );
}

export default App;
