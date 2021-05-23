import React from 'react';
import {Link} from 'react-router-dom';

function HitItem(props) {
    return (

        <div className={props.details === false ? 'col-md-4 mt-2' : 'm-2'} key={props.hit.id}>
            <div className="card">
                <div className="card-header">{props.details === false ? props.hit.tags : 'Details'} |
                    {props.details === false ? props.hit.webformatWidth : props.hit.imageWidth}
                    x{props.details === false ? props.hit.webformatHeight : props.hit.imageHeight}
                </div>
                <div className="card-body">
                    {
                        (props.details === false) ?
                            <img className="card-img" height={200} src={props.hit.webformatURL} alt="hit"/> :
                            <img className="card-img" src={props.hit.largeImageURL} alt="hit"/>
                    }
                </div>
                {
                    (props.details === false) ?
                        <div className="m-2">
                            <Link className="btn btn-success" to={'/HitDetails/' + props.hit.id}>Hit
                                Details</Link>
                        </div> :
                        <div>
                            <div className="row">
                                <div className="col-auto p-2">
                                    <img src={props.hit.userImageURL} className="img.thumbnail" alt=""/>
                                </div>
                                <div>
                                    <ul className="nav nav-pills">
                                        <li className="list-group-item">Views:<strong>{props.hit.views}</strong>
                                        </li>
                                        <li className="list-group-item">Comments: <strong>{props.hit.comments}</strong>
                                        </li>
                                        <li className="list-group-item">Downloads: <strong>{props.hit.downloads}</strong>
                                        </li>
                                        <li className="list-group-item">favorites: <strong>{props.hit.favorites}</strong>
                                        </li>
                                        <li className="list-group-item">likes: <strong>{props.hit.likes}</strong>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <Link className="btn btn-primary" to={"/gallery"}>Back</Link>
                            </div>
                        </div>
                }

            </div>
        </div>
    );
}

export default HitItem;