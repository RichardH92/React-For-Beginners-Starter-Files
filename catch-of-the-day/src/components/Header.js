import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";



const Header = ({tagline}) => (
    <Fragment>
        <header className="top">
            <h1>
                Catch
                <span className="ofThe">
                    <span className="of">Of</span>
                    <span className="the">The</span>
                </span>
                Day
            </h1>
            <h3 className="tagline">
                <span>{tagline}</span>                
            </h3>
        </header>
    </Fragment>
);

Header.propTypes = {
    tagline: PropTypes.string.isRequired
};

export default Header;