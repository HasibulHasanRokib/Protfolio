import "./About.css";

const About = () => {
  return (
    <>
      <div className="about-section">
        <div className="about-text">
          <h4>About me</h4>
          <h2>A dedicated Front-end Developer based in Dhaka, Bangladesh 📍</h2>
          <p>
            As a Junior Front-End Developer, I possess an impressive arsenal of
            skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel
            in designing and maintaining responsive websites that offer a smooth
            user experience. My expertise lies in crafting dynamic, engaging
            interfaces through writing clean and optimized code and utilizing
            cutting-edge development tools and techniques. I am also a team
            player who thrives in collaborating with cross-functional teams to
            produce outstanding web applications.
          </p>
        </div>

        <div className="about_me">
          <div className="about_more">
            <p>
              Birthday:<span> 20 Jan 2000</span>
            </p>
            <p>
              Age:<span> 23</span>{" "}
            </p>
            <p>
              Website:<span> www.rokib.com</span>
            </p>
            <p>
              Email: <span> rokib4000@gmail.com</span>
            </p>
            <p>
              Phone:<span> 01839027207</span>{" "}
            </p>
            <p>
              City: <span> Dhaka</span>
            </p>
            {/* <button >Download CV</button> */}
              <a className="about-btn"  href="/src/assets/cv.pdf" download>Download CV</a>
            <button className="about-btn">Hire me</button>
          </div>

          <div className="about-logo">
            <div className="header">
              <h5 className="skill-name">Html 5</h5>
              <div className="progress">
                <div className="progress-bar" style={{ width: "90%" }}>
                  <p>90%</p>
                </div>
              </div>
            </div>
            <div className="header">
              <h5 className="skill-name">Css 3</h5>
              <div className="progress">
                <div className="progress-bar" style={{ width: "80%" }}>
                  <p>80%</p>
                </div>
              </div>
            </div>
            <div className="header">
              <h5 className="skill-name">Javascript</h5>
              <div className="progress">
                <div className="progress-bar" style={{ width: "75%" }}>
                  <p>75%</p>
                </div>
              </div>
            </div>
            <div className="header">
              <h5 className="skill-name">React js</h5>
              <div className="progress">
                <div className="progress-bar" style={{ width: "60%" }}>
                  <p>60%</p>
                </div>
              </div>
            </div>
            <div className="header">
              <h5 className="skill-name">Bootstrap 5</h5>
              <div className="progress">
                <div className="progress-bar" style={{ width: "85%" }}>
                  <p>85%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-timeline">
          <div className="education">
            <h3>Education</h3>
            <div className="timeline-box">
              <div className="timeline">
                <div className="timeline-item">
                  <div className="circle-dot"></div>
                  <h6 className="timeline-date">
                    <i className="fa-solid fa-calendar-days fa-1x"></i> 2019
                  </h6>
                  <div className="timeline-title">Bcse In Computer Science</div>
                  <div className="timeline-text">
                    I`m studying second semester in International University of
                    Business Agricultural and Technology with the subject of
                    Computer Science.
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="circle-dot"></div>
                  <h6 className="timeline-date">
                    <i className="fa-solid fa-calendar-days fa-1x"></i> 2017 -
                    2019
                  </h6>
                  <div className="timeline-title">
                    Higher Secondary Certificate
                  </div>
                  <div className="timeline-text">
                    I have completed my HSC from MEH Arif College. And the
                    interesting thing is my computer journey was started from
                    this level.
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="circle-dot"></div>
                  <h6 className="timeline-date">
                    <i className="fa-solid fa-calendar-days fa-1x"></i> 2014 -
                    2016
                  </h6>
                  <div className="timeline-title">
                    Secondary School Certificate
                  </div>
                  <div className="timeline-text">
                    I have passed SSC from Ambag Milestone School. While
                    studying there,
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="experience">
            <h3>Experience</h3>
            <div className="timeline-box">
              <div className="timeline">
                <div className="timeline-item">
                  <div className="circle-dot"></div>
                  <h6 className="timeline-date">
                    <i className="fa-solid fa-calendar-days fa-1x"></i> 2022
                  </h6>
                  <div className="timeline-title">
                    Web Application Developer
                  </div>
                  <div className="timeline-text">
                    Currently my main focus on the latest web technologies, Even
                    I implemented some web applications with the latest
                    technologies.
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="circle-dot"></div>
                  <h6 className="timeline-date">
                    <i className="fa-solid fa-calendar-days fa-1x"></i> 2021
                  </h6>
                  <div className="timeline-title">Data Entry</div>
                  <div className="timeline-text">
                    I have experience in Data Entry. I comfort with MS Office
                    Software and also have done some project with this tool.
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="circle-dot"></div>
                  <h6 className="timeline-date">
                    <i className="fa-solid fa-calendar-days fa-1x"></i> 2020
                  </h6>
                  <div className="timeline-title">Video Editing</div>
                  <div className="timeline-text">
                    I have experience in Video Editing. I comfort with Adobe
                    Premiere Pro and also have done some video with this tool.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
