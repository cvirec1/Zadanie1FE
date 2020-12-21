import { createAction, props } from '@ngrx/store';
import { WorkItem } from '../core-modul/workItem';

export const createWorkItemsAction =  createAction(
    '[WorkItems] - create work items',
    props<WorkItem>()
);
