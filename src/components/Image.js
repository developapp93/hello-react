import React, { Component } from 'react';

class Image extends Component {
    render() {
        return (
            <img
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--qa72YNaF--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/me6sbpz893h3a6ip5zsv.jpg"
                alt="gambar-makanan"
                width="500"
            />
        );
    }
}

export default Image;