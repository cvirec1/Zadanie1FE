import { WorkItem } from '../shared/workItem';


export interface WorkItemsState {
    readonly items: WorkItem[];
}

export const initializeState: WorkItemsState = {
    items: [] as WorkItem[]
};
