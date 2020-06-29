import React from 'react';
import { CategorySearch } from '@appbaseio/reactivesearch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state={
            searchText: "",
        }
    }

    render() {
        return (
            <div className="search-container">
                <CategorySearch
                    componentId="BookSensor"
		            categoryField="authors.raw"
                    dataField={[
                        "original_title",
                        "original_title.search", 
                        "authors", 
                        "authors.search"
                      ]}
                    className="search-bar"
                    showClear={true}
                    URLParams
                    icon={
                        <button
                        onClick = {(value)=>{
                            this.props.handleChange(value)}}
                        style={{
                            color: "#fff",
                            background: "#3ea662",
                            backgroundColor: "#4dbd74",
                            borderColor: "#4dbd74",
                            outline: "none",
                            border: 0,
                            position: "absolute",
                            right: 0,
                            height: "2.3em",
                            top: -12,
                            width: 70,
                            margin: 0,
                            marginTop: 1.5,
                            cursor: "pointer",
                            borderRadius: 3,
                        }}
                        >
                        Search
                        </button>
                    }
                    queryFormat="and"
                    placeholder="Search for data files..."
                    iconPosition="right"
                    filterLabel="search"
                    autosuggest = {true}
                    react={{
                        and: ["keywordFilter", "dateFilter"]
                    }}
                    onValueChange={(value)=>{
                        this.setState({searchText:value})
                        
                        if (value === ""){
                            this.props.handleChange(value)
                        }
                    }}
                    onKeyDown={(event)=>{
                        if(event.keyCode === 13){
                            this.props.handleChange(this.state.searchText)
                        }
                    }}
                />

                <a href="/information" className="link-icon"><FontAwesomeIcon icon={["far", "question-circle"]} size="lg" />
                    <span className="screen-reader-text">information</span>
                </a>
            </div>
        );
    }
}

export default SearchBar;