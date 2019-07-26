import React from 'react';
import {selectors, actions} from '../../Redux/index';
import {useSelector, useDispatch} from 'react-redux';


/** 
 * This component is functionally equal to FilterContainer and demonstrates how to use hooks
 * from react-redux in a function component. 
 */
function FilterContainerWithHooks() {
    const showAll = useSelector(selectors.Filter.showAll);
    const showOpen = useSelector(selectors.Filter.showOpen);
    const showClosed = useSelector(selectors.Filter.showClosed);
    const dispatch = useDispatch();
    const onShowAllClick = () => dispatch(actions.Filter.filterShowAll());
    const onShowOpenClick = () => dispatch(actions.Filter.filterShowOpen());
    const onShowClosedClick = () => dispatch(actions.Filter.filterShowClosed());

    return (
        <ul className="filters">
            <li>
                {!showAll ?
                    <button onClick={onShowAllClick}>All</button>:
                    <span>All</span>
                }
            </li>
            <li>
                {!showOpen ?
                    <button onClick={onShowOpenClick}>Open</button> :
                    <span>Open</span>
                }
            </li>
            <li>
                {!showClosed ?
                    <button onClick={onShowClosedClick}>Closed</button> :
                    <span>Closed</span>
                }
            </li>
        </ul>
    );
}

export default FilterContainerWithHooks;