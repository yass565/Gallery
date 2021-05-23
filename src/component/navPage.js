import React, {Component} from 'react';

class NavPage extends Component {

    render() {
        return (
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
        );
    }
}

export default NavPage;