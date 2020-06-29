import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BypassBlocks from './BypassBlocks';
import SearchBar from './SearchBar';


class Header extends React.Component{
    constructor(pros){
        super(pros)
        // this.state = {
        //     todos: TodoItemData,
        // }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value){
        this.props.handleChange(value);
    }
    
    render(){
        return (
            <header>
                <BypassBlocks />
                <div className="app-container">
                    <section className="lang-toggle">
                        <h2 className="screen-reader-text">Language selection</h2>
                        <ul>
                            <li>
                                <a lang="fr" href="/">Français</a>
                            </li>
                        </ul>
                    </section>
                    <div className="brand">
                        <img src={require('../images/sig-blk-en.svg')} alt="" />
                        <span className="screen-reader-text">Government of Canada / <span lang="fr">Gouvernement du Canada</span></span>
                    </div>
                </div>
                <section className="app-bar">
                    <div className="app-container">
                        <div className="app-name">
                            <a href='/'>DAaaS</a>
                        </div>
                        <SearchBar handleChange = {this.handleChange}/>
                        <div className="account-icons">
                            <a href="/notifications" className="link-icon"><FontAwesomeIcon icon={["far", "bell"]} size="lg" />
                                <span className="screen-reader-text">notifications</span>
                            </a>
                            <a href="/favourites" className="link-icon"><FontAwesomeIcon icon={["far", "star"]} size="lg" />
                                <span className="screen-reader-text">favourites</span>
                            </a>
                            <a href="/account" className="link-icon"><FontAwesomeIcon icon="user-circle" size="lg" />
                                <span className="screen-reader-text">account</span>
                            </a>
                        </div>
                    </div>
                </section>
            </header>
        )
    }
}

export default Header;