import React from 'react';
import NavBar from '../../nav_bar/nav_bar';
import CategoryDropdown from './category_dropdown/category_dropdown_container';
import IndexItem from '../index_item';

class TherapistIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchTherapists("New York", "Anxiety");
    }

    render() {
        if (!this.props.therapists) {
            return null;
        }
        let therapists = Object.values(this.props.therapists);

        return (
            <>
                <NavBar currentUser={this.props.currentUser} logout={this.props.logout}/>
                <div className="therapist-index">
                    <section id="categories">
                        <CategoryDropdown/>
                    </section>
                    <div className="row">
                        {therapists.map((therapist) => {
                            return <IndexItem key={therapist.id} person={therapist}/>
                        })}
                    </div>
                    
                </div>
            </>
        )
    }
}

export default TherapistIndex;