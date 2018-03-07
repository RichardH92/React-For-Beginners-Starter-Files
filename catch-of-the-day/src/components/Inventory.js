import React, { Component, Fragment } from "react";
import AddFishForm from "./AddFishForm";

class Inventory extends Component {
    render() {
        return (
            <Fragment>
                <div className="inventory">
                    <h2>Inventory</h2>
                    <AddFishForm addFish={this.props.addFish}/>
                </div>
            </Fragment>
        );
    }
}

export default Inventory;