import React, { Component } from "react";


class Test extends Component {
    constructor(props) {
        super(props);
        this.state ={

        }
    }
    componentDidMount(){
        console.log(this.props.location.state)
    }
    render() {
        return (
            <main>
                <h1>Hello World</h1>
                <h3><span>{this.props.location.state.detail.authors}</span></h3>
                <img src = {this.props.location.state.detail.image} alt = "error"/>
                <h6><span>{this.props.location.state.detail.language_code}</span></h6>
                <h6><span>{this.props.location.state.detail.original_publication_year}</span></h6>
                <h6><span>{this.props.location.state.detail.original_series}</span></h6>
                <h6><span>{this.props.location.state.detail.original_title}</span></h6>
                <h6><span>{this.props.location.state.detail.title}</span></h6>


            </main>
        );
    }
}

export default Test;