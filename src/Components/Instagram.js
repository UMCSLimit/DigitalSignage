import React from 'react';
import axios from 'axios';

class Instagram extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const { index, ...props } = this.props;

        return (
            <div className='instagram'>
                <div className='instagram-header'>
                    <img className='instagram-logo instagram-item' src='https://instagram.frix7-1.fna.fbcdn.net/vp/f4b867931b71f2f22cebcb762675f30c/5D3A01E9/t51.2885-19/s150x150/14722957_1842317106009602_6971728860626812928_a.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net'/>
                    <p className='instagram-name instagram-item'>umcs_lublin</p>
                </div>
                <h1>{props.caption}</h1>
                <img src={props.url} />
                <p className='instagram-likes'>Liczba polubień: {props.likes}</p>
            </div>
        )
    }
}

export default Instagram;