import { faCamera, faChartLine, faDisplay, faExpand, faHome, faMap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/services.scss";

const Services = () => {
  return (
    <div className='services'>
      <div className='services__work'>We work with</div>
      <div className='services__amazing'>AMAZING SERVICES</div>
      <div className='services__break'>
        <span />
      </div>
      <div className='services__list'>
        <div className='service'>
          <FontAwesomeIcon className='service__icon' icon={faCamera} />
          <div className='service__title'>Photography</div>
          <div className='service__content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do euismod tempor.</div>
        </div>
        <div className='service'>
          <FontAwesomeIcon className='service__icon' icon={faChartLine} />
          <div className='service__title'>Web Design</div>
          <div className='service__content'>Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</div>
        </div>
        <div className='service'>
          <FontAwesomeIcon className='service__icon' icon={faDisplay} />
          <div className='service__title'>Creativity</div>
          <div className='service__content'>Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</div>
        </div>
        <div className='service'>
          <FontAwesomeIcon className='service__icon' icon={faMap} />
          <div className='service__title'>seo</div>
          <div className='service__content'>Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</div>
        </div>
        <div className='service'>
          <FontAwesomeIcon className='service__icon' icon={faHome} />
          <div className='service__title'>css/html</div>
          <div className='service__content'>Lorem dolor sit amet, consectetur adipiscing elit, sed do tempor.</div>
        </div>
        <div className='service'>
          <FontAwesomeIcon className='service__icon' icon={faExpand} />
          <div className='service__title'>Digital</div>
          <div className='service__content'>Sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</div>
        </div>
      </div>
    </div>
  );
};

export default Services;
