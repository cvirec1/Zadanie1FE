import { WorkItem } from '../core-modul/workItem';


export interface WorkItemsState {
    readonly items: WorkItem[];
}

export const initializeState: WorkItemsState = {
    items: [] as WorkItem[]
};
