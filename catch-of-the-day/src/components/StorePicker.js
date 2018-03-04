import React, { Component, Fragment } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends Component {
    render() {
        return (
            <Fragment>
                <form className="store-selector">
                    <h2>Please Enter A Store</h2>
                    <input type="text" required placeholder="Store name" defaultValue={getFunName()}/>
                    <button type="submit">Visit store -></button>
                </form>
            </Fragment>
        )
    }
}

export default StorePicker;
