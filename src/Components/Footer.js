import React from 'react';
import Clock from 'react-live-clock';
import './Footer.css'

class Footer extends React.Component {
    render() {
        return (
            <footer className='layout-footer'>
                <img className='layout-footer-item' src='https://www.umcs.pl/img/logo_foot.png?v=2' alt='UMCSlogo' />
                <Clock className='layout-footer-item' format={'DD.MM HH:mm:ss'} ticking={true} interval={1000} />
            </footer>
        )
    }
}

export default Footer;