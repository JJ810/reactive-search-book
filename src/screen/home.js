import React, { Component } from "react";
import {
    ReactiveBase,
    MultiList,
    DateRange,
} from "@appbaseio/reactivesearch";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Result from '../components/Result';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isClicked: false,
            searchText: "",
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value){
        this.setState({searchText: value})
    }

    render() {
        return (
            <main>
                <ReactiveBase
                    app="good-books-ds"
                    credentials="nY6NNTZZ6:27b76b9f-18ea-456c-bc5e-3a5263ebc63d"
                >
                    <Header handleChange = {this.handleChange}/>
                    <div className="app-container">
                        <div className="filter-container">
                            <div className="filter-heading center">
                                <b>
                                    {" "}
                                    <i className="fa fa-language" /> keywords{" "}
                                </b>
                            </div>
                                <MultiList
                                    componentId="keywordFilter"
                                    dataField="codeBook.stdyDscr.stdyInfo.subject.keyword.keyword"
                                    
                                    size={1000}
                                    showCheckbox={true}
                                    loader="loading...."
                                    sortBy="asc"
                                    className="keyword-filter"
                                    renderItem={(label, count, isSelected) => (
                                    <div>
                                        {label}
                                        <span
                                            style={{marginLeft: 5,
                                                color: isSelected ? "red" : "dodgerblue"
                                            }}
                                        >
                                            ({count})
                                        </span>
                                    </div>
                                    )}
                                    innerClass={{
                                        label: "list-item",
                                        input: "list-input"
                                    }}
                                    placeholder="Filter by keyword"
                                />
                            
                            <br></br>

                            <div className="filter-heading center">
                                <b>
                                    {" "}
                                    <i className="fa fa-calendar" /> Survey Date{" "}
                                </b>
                            </div>
                            <DateRange
                                componentId="dateFilter"
                                dataField="original_publication_year"
                                className="datePicker"
                                filterLabel="Date"
                                placeholder={{
                                    start: 'Start',
                                    end: 'End'
                                }}
                            />
                        </div>
                        {
                            this.state.searchText!=="" && <Result history={this.props.history}/>
                        }
                    </div>
                </ReactiveBase>
                
                <div style={{height:80}}></div>
                <Footer />
            </main>
        );
    }
}

export default Home;