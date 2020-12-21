import { Action, createReducer, on } from '@ngrx/store';
import { WorkItem } from '../core-modul/workItem';
import { initializeState, WorkItemsState } from './work-item-state';
import * as WorkItemActions from './work-item-actions';

const reducer = createReducer(
    initializeState,
    on(WorkItemActions.createWorkItemsAction, (s: WorkItemsState, item: WorkItem) => {
        return {...s.items, items: [item, ...s.items]};
    })
);

export function addWorkItem(s: WorkItemsState | undefined, action: Action): WorkItemsState{
    return reducer(s, action);
}
