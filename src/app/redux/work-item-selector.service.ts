import { Injectable } from '@angular/core';
import { createSelector, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { WorkItem } from '../shared/workItem';
import { WorkItemsState } from './work-item-state';

export const workItems = (state: {items: WorkItemsState}) => state.items.items;

export const selectWorkItemById = createSelector(
    workItems,
    (items: WorkItem[], id: number) => items.find(i => i.id === id));

export const allItems = createSelector(workItems, _ => _);

export const countLevel = createSelector(
    workItems,
    (items: WorkItem[], level: string) => items.filter(_ => _.level === level).length);

@Injectable({
    providedIn: 'root'
  })
  export class WorkItemSelectorService {

    constructor(private store: Store<{items: WorkItemsState}>) {
    }

    getItem$(id: number): Observable<WorkItem> {
      return this.store.select(selectWorkItemById, id);
    }

    getAllItems$(): Observable<WorkItem[]> {
      return this.store.select(allItems);
    }

    getLevelCount$(level: string): Observable<number> {
        return this.store.select(countLevel, level);
    }

  }
