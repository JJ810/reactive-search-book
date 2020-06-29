import React, { Component } from 'react';

class BypassBlocks extends Component {
    handleOnFocus = (e) => {
        e.target.className = "";
    };

    handleOnBlur = (e) => {
        e.target.className = "screen-reader-text";
    }

    render() {
        return (
            <div>
                <ul className="bypass-blocks">
                    <li><a
                        className="screen-reader-text"
                        onFocus={this.handleOnFocus}
                        onBlur={this.handleOnBlur}
                        href="/"
                    >Skip to main content</a></li>
                    <li><a
                        className="screen-reader-text"
                        onFocus={this.handleOnFocus}
                        onBlur={this.handleOnBlur}
                        href="/"
                    >Skip to "About this Web application"</a></li>
                </ul>
            </div>
        )
    }
}

export default BypassBlocks;