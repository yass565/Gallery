import React, {Component} from 'react';
import axios from 'axios';
import HitItem from "./HitItem";
import SearchHitForm from "./SearchHitForm";

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hits: [],
            currentPage: 1,
            pageSize: 10,
            currentKeyword: '',
            totalPages: 1,
            pages: []
        }
    }

    componentDidMount() {
        this.getHits();
    }



    getHits(keyword) {
        let url = "https://pixabay.com/api/?key=20351608-3e345f2c7476de4c5c687dfeb&q="
            + keyword + "&page=" + this.state.currentPage;
        axios.get(url).then((resp) => {
            let totalP = (resp.data.totalHits%this.state.pageSize === 0)
                ?Math.floor(resp.data.totalHits/this.state.pageSize):Math.floor(1+resp.data.totalHits/ this.state.pageSize);
            console.log(resp);
            this.setState({
                hits: resp.data.hits,
                totalPages: totalP,
                pages: new Array(totalP).fill(0),
                currentKeyword: keyword
            });
        }).catch((err => {
            console.log(err);
        }))
    }

    search = (keyword) => {
        this.setState({
            currenPage: 1,
            pages: []
        },()=>{
            this.getHits(keyword);
        })
        this.getHits(keyword);
    }
    goToPage=(page)=>{
        this.setState({
                currentPage:page
            },
            ()=>{
                this.getHits(this.state.currentKeyword);
            });

    }

    render() {
        return (
            <div>
                <div>
                    <div>
                        <ul className="nav nav-pills">
                            {
                                this.state.pages.map((v, index) =>
                                    <li key={index}>
                                        <a className={this.state.currentPage===index+1?'btn btn-primary': 'btn btn-link'} onClick={()=>this.goToPage(index+1)}>{index+1}</a>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                    <SearchHitForm onSearch={this.search}/>
                    <div className="row">
                        {
                            this.state.hits.map(hit =>
                                <HitItem  key={hit.id} hit={hit} details={false}/>
                            )
                        }
                    </div>
                </div>

            </div>

        );
    }
}

export default Gallery;