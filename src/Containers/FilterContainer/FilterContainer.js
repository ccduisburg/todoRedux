import React from 'react';
import PropTypes from 'prop-types';
import {selectors, actions} from '../../Redux/index';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
    showAll: selectors.Filter.showAll(state),
    showClosed: selectors.Filter.showClosed(state),
    showOpen: selectors.Filter.showOpen(state)
});

const mapDispatchToProps = dispatch => ({
    onShowAllClick: () => dispatch(actions.Filter.filterShowAll()),
    onShowOpenClick: () => dispatch(actions.Filter.filterShowOpen()),
    onShowClosedClick: () => dispatch(actions.Filter.filterShowClosed()),
});

class FilterContainer extends React.PureComponent {
    static propTypes = {
        // store
        showAll: PropTypes.bool.isRequired,
        // dispatch
        onShowAllClick: PropTypes.func.isRequired,
        onShowOpenClick: PropTypes.func.isRequired,
        onShowClosedClick: PropTypes.func.isRequired,
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
                    {this.props.showOpen ?
                        <button onClick={this.props.onShowOpenClick}>Open</button> :
                        <span>Open</span>
                    }
                </li>
                <li>
                    {this.props.showClosed ?
                        <button onClick={this.props.onShowClosedClick}>Closed</button> :
                        <span>closed</span>
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