import './Home.css'
import Profile from '/src/assets/rokib.png'



const Home = ({logo})=> {


  return (
    <section className='home__section'>
    
      <div id="home" className="home-page">
          <div className="heading-section">
            <div className="title">
              
              
              <h1>Front-End React Developer</h1>
              <p className="title-text ">
                Hi, I`m Hasibul Hasan Rokib. A passionate Front-end React Developer
                based in Dhaka, Bangladesh.📍
              </p>

              <div className="contact ">
                <a href="#" className="contact-link">
                  <i className="fa-brands fa-facebook contact-icon"></i>
                </a>
                <a href="#" className="contact-link">
                  <i className="fa-brands fa-twitter contact-icon"></i>
                </a>
                <a href="#" className="contact-link">
                  <i className="fa-brands fa-github contact-icon"></i>
                </a>
                <a href="#" className="contact-link">
                  <i className="fa-brands fa-linkedin contact-icon"></i>
                </a>
              </div>
            </div>
          </div>
            <div className="hero-img">
              <img
                className="profile-image"
                src={Profile}
                // src="/src/assets/rokib.png"
                alt=""
                srcSet=""
              />
            </div>
          </div>

        <div className="skill-section">
          <p>Tech Stack |</p>
          <div className="skill-body">
           {logo.map((item)=>{
            return <ul key={item.id}>
            <li>
            <img className='logo-img' src={item.image} alt="" srcSet="" />
            </li>
            </ul>
           })}
          </div>
        </div>


    </section>
  );
};

export default Home;
