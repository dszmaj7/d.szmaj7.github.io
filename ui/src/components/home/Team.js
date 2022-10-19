import "./styles/team.scss";
import person1 from "../../assets/1.png";
import person2 from "../../assets/2.png";
import person3 from "../../assets/3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faPinterestP, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Team = () => {
  return (
    <div className='team'>
      <div className='team__work'>Who we are</div>
      <div className='team__amazing'>Meet out team</div>
      <div className='team__break'>
        <span />
      </div>
      <div className='team__description'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </div>
      <div className='team__members'>
        <div className='member'>
          <div className='member__background'>
            <div className='member__gradient'>
              <img className='member__photo' src={person1} alt='portait' style={{ objectPosition: "20%" }} />
              <div className='member__icons'>
                <div className='member__icon'>
                  <FontAwesomeIcon icon={faFacebookF} />
                </div>
                <div className='member__icon'>
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
                <div className='member__icon'>
                  <FontAwesomeIcon icon={faPinterestP} />
                </div>
                <div className='member__icon'>
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
              </div>
            </div>
          </div>
          <span className='member__person'>Matthew Dix</span>
          <span className='member__position'>Graphic Desing</span>
        </div>
        <div className='member'>
          <div className='member__background'>
            <div className='member__gradient'>
              <img className='member__photo' src={person2} alt='portait' style={{ objectPosition: "bottom" }} />
              <div className='member__icons'>
                <div className='member__icon'>
                  <FontAwesomeIcon icon={faFacebookF} />
                </div>
                <div className='member__icon'>
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
                <div className='member__icon'>
                  <FontAwesomeIcon icon={faPinterestP} />
                </div>
                <div className='member__icon'>
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
              </div>
            </div>
          </div>
          <span className='member__person'>Christofer Cambpell</span>
          <span className='member__position'>Branding/UX design</span>
        </div>
        <div className='member'>
          <div className='member__background'>
            <div className='member__gradient'>
              <img className='member__photo' src={person3} alt='portait' style={{ objectPosition: "top" }} />
              <div className='member__icons'>
                <div className='member__icon'>
                  <FontAwesomeIcon icon={faFacebookF} />
                </div>
                <div className='member__icon'>
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
                <div className='member__icon'>
                  <FontAwesomeIcon icon={faPinterestP} />
                </div>
                <div className='member__icon'>
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
              </div>
            </div>
          </div>
          <span className='member__person'>Michael Fertig</span>
          <span className='member__position'>Developer</span>
        </div>
      </div>
    </div>
  );
};

export default Team;
