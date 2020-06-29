import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => (
    <footer>
        <div className="brand">
            <div className="app-container">
                <Row>
                    <Col md={10}>
                        <nav>
                            <h2 className="screen-reader-text">About this Web application</h2>
                            <ul className="list-inline">
                                <li><a href="https://www.canada.ca/en/contact.html">Contact information</a></li>
                                <li><a href="https://www.canada.ca/en/transparency/terms.html">Terms and conditions</a></li>
                                <li><a href="https://www.canada.ca/en/transparency/privacy.html">Privacy</a></li>
                            </ul>
                        </nav>
                    </Col>
                    <Col xs={7} md={9} className="top-of-page visible-xs visible-sm">
                        <a href="#content">
                            Top of Page
                                    <FontAwesomeIcon icon="chevron-up" />
                        </a>
                    </Col>
                    <Col xs={5} md={3} lg={2}>
                        <img src={require('../images/wmms-blk.svg')} alt="Symbol of the Government of Canada" />
                    </Col>
                </Row>
            </div>
        </div>
    </footer>
)

export default Footer;

