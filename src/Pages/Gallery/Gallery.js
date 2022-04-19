import React from 'react';
import gallery1 from '../../Images/gallery/dental-img (1).jpg'
import gallery2 from '../../Images/gallery/dental-img (2).jpg'
import gallery3 from '../../Images/gallery/dental-img (3).jpg'
import gallery4 from '../../Images/gallery/dental-img (4).jpg'
import gallery5 from '../../Images/gallery/dental-img (5).jpg'
import gallery6 from '../../Images/gallery/dental-img (6).jpg'
import './Gallery.css';

const Gallery = () => {
    return (
        <div>
            <h2 className='text-primary fs-1'>Gallery</h2>
            <div className="photo-gallery">
                <img src={gallery1} alt=""  className=' img-fluid' style={{width:'400px',height:'200px'}}/>
                <img src={gallery2} alt=""  className=' img-fluid' style={{width:'400px',height:'200px'}}/>
                <img src={gallery3} alt=""  className=' img-fluid' style={{width:'400px',height:'200px'}}/>
                <img src={gallery4} alt=""  className=' img-fluid' style={{width:'400px',height:'200px'}}/>
                <img src={gallery5} alt=""  className=' img-fluid' style={{width:'400px',height:'200px'}}/>
                <img src={gallery6} alt=""  className=' img-fluid' style={{width:'400px',height:'200px'}}/>
            </div>
        </div>
    );
};

export default Gallery;