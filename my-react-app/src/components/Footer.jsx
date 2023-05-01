import fbIcon from '../assets/img/fb_icon.png'
import igIcon from '../assets/img/ig_icon.png'
import wppIcon from '../assets/img/wpp_icon.png'

function Footer() {
    return (
        <div className="wrapper-footer text-light d-lg-flex align-items-center">
            <h3 className='footer-titulo col-lg-9 col-12 text-center'>®HamburguesitaMiAmor</h3>
            <div className='wrapper-icons col-lg-3 col-12 gap-4 d-lg-flex'>
                <img className='icon' src={fbIcon} alt="fb-Icon" />
                <img className='icon' src={igIcon} alt="ig-Icon" />
                <img className='icon' src={wppIcon} alt="wpp-Icon" />
            </div>
        </div>
    );
}

export default Footer;