import React from 'react';

import StarRatingComponent from 'react-star-rating-component';

export default  ({data})  =>{
    return (
        <li className="list-group-item">
            <div className="float-left">{data.review}</div>
            <div className="float-right">
                <StarRatingComponent name="reviewRate" starCount={data.stars}/>
            </div>
        </li>
    )
}
