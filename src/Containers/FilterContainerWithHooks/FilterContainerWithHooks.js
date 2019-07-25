import React from 'react';
import {selectors, actions} from '../../Redux/index';
import {useSelector, useDispatch} from 'react-redux';


/** 
 * This component is functionally equal to FilterContainer and demonstrates how to use hooks
 * from react-redux in a function component. 
 */
function FilterContainerWithHooks() {
    const showAll = useSelector(selectors.Filter.showAll);
    const dispatch = useDispatch();
    const onShowAllClick = () => dispatch(actions.Filter.filterShowAll());
    const onShowOpenClick = () => dispatch(actions.Filter.filterShowOpen());

    return (
        <ul className="filters">
            <li>
                {showAll ?
                    <span>All</span> :
                    <button onClick={onShowAllClick}>All</button>
                }
            </li>
            <li>
                {showAll ?
                    <button onClick={onShowOpenClick}>Open</button> :
                    <span>Open</span>
                }
            </li>
        </ul>
    );
}

export default FilterContainerWithHooks;