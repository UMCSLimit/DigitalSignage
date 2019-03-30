import React from 'react';
import Clock from 'react-live-clock';
import './Footer.css'

class Footer extends React.Component {
    render() {
        return (
            <footer className='layout-footer'>
                <div>
                    <img src='https://www.umcs.pl/img/logo_foot.png?v=2' alt='UMCSlogo' />
                    <Clock format={'DD.MM HH:mm:ss'} ticking={true} interval={1000} />
                </div>
            </footer>
        )
    }
}

export default Footer;