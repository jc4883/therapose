import React from 'react';

class CategoryDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(category) {
        this.props.fetchTherapists(category);
    }

    render() {
        return (
            <>
                <div id="effect-1">
                    <ul>
                        <li id="drpdwn-tab-one"> 
                            <h2>How can we help?</h2>
                            <ul className="drpdwn-menu menu-one">
                                <li onClick={() => this.handleClick("Anxiety")}>Anxiety</li>
                                <li onClick={() => this.handleClick("Death")}>Death</li>
                                <li>Eating</li>
                                <li>Friendship</li>
                                <li>Romance</li>
                                <li>Mediocrity</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </>
        )
    }
}

export default CategoryDropdown;