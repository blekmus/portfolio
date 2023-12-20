import "./styles/App.scss";

function App() {
  return (
    <>
      <div className="text-section row header">
        <h1 className="title">
          Dinil Fernando <i style={{ paddingLeft: 30 }}></i>/<i>programmer</i>/
        </h1>
        <h1 className="title">
          Aspiring full-stack web developer and startup founder. I design and
          build experiences not just websites.
        </h1>
      </div>

      <div className="table-section featured">
        <h2 className="title row">Featured</h2>
        <hr />
        <div className="content">
          <div className="row link">
            <a href="https://aceacademy.lk" className="item" target="_blank">
              <p className="item-left">Ace Academy</p>
              <p className="item-right">EdTech Startup</p>
            </a>
          </div>
          <hr />
          <div className="row link">
            <a
              href="https://thelonelylands.com"
              className="item"
              target="_blank"
            >
              <p className="item-left">The Lonely Lands</p>
              <p className="item-right">Personal Blog</p>
            </a>
          </div>
          <hr />
          <div className="row link">
            <a
              href="https://archive.thelonelylands.com"
              className="item"
              target="_blank"
            >
              <p className="item-left">Archive</p>
              <p className="item-right">Technical Knowledge Base</p>
            </a>
          </div>
          <hr />
          <div className="row link">
            <a href="https://git.dinil.dev" className="item" target="_blank">
              <p className="item-left">Commicasa</p>
              <p className="item-right">Personal Git Host</p>
            </a>
          </div>
          <hr />
        </div>
      </div>

      <div className="text-section row">
        <h1 className="title">
          <i>
            Designing with passion, developing with pride. Nurtured in Sri
            Lanka. Based in Canada.
          </i>
        </h1>
      </div>

      <div className="table-section skills">
        <h2 className="title row">Skills</h2>
        <hr />
        <div className="content">
          <div className="row">
            <div className="item">
              <p className="item-left">Languages</p>
              <p className="item-right">Typescript, Python, PHP, Go, Bash</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="item">
              <p className="item-left">Tooling</p>
              <p className="item-right">Git, Figma, Docker, Linux</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="item">
              <p className="item-left">Cloud (AWS)</p>
              <p className="item-right">EC2, RDS, S3, Lambda, Etc.</p>
            </div>
          </div>

          <hr />
        </div>
      </div>

      <div className="text-section row">
        <h1 className="title">
          With a love for socializing, my work extends beyond mere development;
          it revolves around leaving a lasting impression, allowing me to create
          moments of connection between products and their audience.
        </h1>
      </div>

      <div className="split-table-section-mobile">
        <div className="top">
          <h2 className="title row">Experience</h2>
          <div className="content">
            <div className="row">
              <div className="item">
                <p>Web Design</p>
              </div>
            </div>
            <div className="row">
              <div className="item">
                <p>Front-end Development</p>
              </div>
            </div>
            <div className="row">
              <div className="item">
                <p>Back-end Development</p>
              </div>
            </div>
            <div className="row">
              <div className="item">
                <p>Cloud Infrastructure (AWS)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom" style={{ marginTop: 20 }}>
          <h2 className="title row">Socials</h2>
          <div className="content">
            <div className="row link">
              <a
                href="https://github.com/blekmus"
                className="item"
                target="_blank"
              >
                <p>Github</p>
              </a>
            </div>
            <div className="row link">
              <a
                href="https://www.linkedin.com/in/dinil-fernando"
                className="item"
                target="_blank"
              >
                <p>LinkedIn</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="split-table-section-desktop">
        <div className="row">
          <h2 className="title">Experience</h2>
          <h2 className="title">Socials</h2>
        </div>

        <div className="content">
          <div className="row">
            <p className="item">Web Design</p>
            <div className="item">
              <a href="https://github.com/blekmus" target="_blank">
                <p>Github</p>
              </a>
            </div>
          </div>
          <div className="row">
            <p className="item">Front-end Development</p>
            <div className="item">
              <a
                href="https://www.linkedin.com/in/dinil-fernando"
                target="_blank"
              >
                <p>LinkedIn</p>
              </a>
            </div>
          </div>
          <div className="row">
            <p className="item">Back-end Development</p>
          </div>
          <div className="row">
            <p className="item">Cloud Infrastructure (AWS)</p>
          </div>
        </div>
      </div>

      <div className="text-section row contact">
        <h1 className="title">
          If you’d like to learn more,{" "}
          <a href="mailto:dinil@pm.me" target="_blank">
            let’s chat
          </a>
        </h1>
      </div>
    </>
  );
}

export default App;
