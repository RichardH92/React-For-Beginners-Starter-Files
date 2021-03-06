import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { getFunName } from '../helpers';

class StorePicker extends Component {
    static PropTypes = {
        history: PropTypes.object
    }

    myInput = React.createRef();

    goToStore = event => {
        event.preventDefault();
        const storeName = this.myInput.value.value;
        this.props.history.push(`/store/${storeName}`);
    }

    render() {
        return (
            <Fragment>
                <form className="store-selector" onSubmit={this.goToStore}>
                    <h2>Please Enter A Store</h2>
                    <input 
                        type="text"
                        ref={this.myInput}
                        required 
                        placeholder="Store name" 
                        defaultValue={getFunName()}
                    />
                    <button type="submit">Visit store -></button>
                </form>
            </Fragment>
        )
    }
}

export default StorePicker;
