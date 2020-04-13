import React from 'react';
import {observer} from 'mobx-react';
import ReviewItem from "./ReviewItem";

function Reviews({store}) {
    return (
        <div className="reviewsWrapper">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <i className="fa fa-comments"/> Reviews
                        </div>
                        <ul className="list-group list-group-flush">
                            {store.reviewList.map((e, i) =>
                                <ReviewItem
                                    key={i}
                                    data={e}
                                />
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default observer(Reviews);