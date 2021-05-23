import React, {Component} from 'react';
import axios from "axios";
import HitItem from "./HitItem";

class HitDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            hit:null
        }
    }

    componentDidMount() {
        this.getHits(this.props.match.params.id)
    }

    getHits(id) {
        let url = "https://pixabay.com/api/?key=20351608-3e345f2c7476de4c5c687dfeb&id="+id;
        axios.get(url).then((resp) => {
            this.setState({
                hit: resp.data.hits[0],
                
            });
        }).catch((err => {
            console.log(err);
        }))
    }

    render() {
        if(this.state.hit!=null)
        return (
                    <HitItem hit={this.state.hit} details={true}/>
        );
        else{
            return <div>Hi</div>
        }

    }
}

export default HitDetails;