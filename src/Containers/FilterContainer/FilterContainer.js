import React from 'react';
import PropTypes from 'prop-types';
import {selectors, actions} from '../../Redux/index';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
    showAll: selectors.Filter.showAll(state)
});

const mapDispatchToProps = dispatch => ({
    onShowAllClick: () => dispatch(actions.Filter.filterShowAll()),
    onShowOpenClick: () => dispatch(actions.Filter.filterShowOpen()),
});

class FilterContainer extends React.PureComponent {
    static propTypes = {
        // store
        showAll: PropTypes.bool.isRequired,
        // dispatch
        onShowAllClick: PropTypes.func.isRequired,
        onShowOpenClick: PropTypes.func.isRequired,
    };

    render() {
        return (
            <ul className="filters">
                <li>
                    {this.props.showAll ?
                        <span>All</span> :
                        <button onClick={this.props.onShowAllClick}>All</button>
                    }
                </li>
                <li>
                    {this.props.showAll ?
                        <button onClick={this.props.onShowOpenClick}>Open</button> :
                        <span>Open</span>
                    }
                </li>
            </ul>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(FilterContainer);