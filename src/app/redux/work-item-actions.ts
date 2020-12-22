import { createAction, props } from '@ngrx/store';
import { WorkItem } from '../shared/workItem';

export const createWorkItemsAction =  createAction(
    '[WorkItems] - create work items',
    props<WorkItem>()
);
