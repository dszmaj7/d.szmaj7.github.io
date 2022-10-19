import "./styles/footer.scss";

const Footer = () => {
  return (
    <div className='footer'>
      <span className='footer__break' />
      <div className='footer__wrapper'>
        <span className='footer__info'>© 2016 MoGo free PSD template by Laaqiq</span>
        <div className='footer__subscribe'>
          <input type='text' placeholder='Your Email...' />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
