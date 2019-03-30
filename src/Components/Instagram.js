import React from 'react';

class Instagram extends React.Component {
    render() {
        const { index, ...props } = this.props;

        return (
            <div className='instagram'>
                <div className='instagram-header'>
                    <img className='instagram-logo instagram-item' alt='instaLogo' src='https://instagram.frix7-1.fna.fbcdn.net/vp/f4b867931b71f2f22cebcb762675f30c/5D3A01E9/t51.2885-19/s150x150/14722957_1842317106009602_6971728860626812928_a.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net'/>
                    <p className='instagram-name instagram-item'>umcs_lublin</p>
                </div>
                <p className='instagram-likes'>Liczba polubień: {props.likes}</p>
                <img alt='instagram feed' src={props.url} />
                <h1>{props.caption}</h1>
            </div>
        )
    }
}

export default Instagram;