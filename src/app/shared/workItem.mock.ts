import { WorkItem } from './workItem';
import { WorkItemLevel } from './workItemLevelCount';

export const workItem: WorkItem[] = [
    {
        id: 1,
        createDate: new Date(2020, 0, 1),
        level: 'high',
        point: 6,
        workName: 'testWork1'
    },
    {
        id: 2,
        createDate: new Date(2020, 2, 1),
        level: 'low',
        point: 4,
        workName: 'testWork2'
    }
];

export const workItemLevelCount: WorkItemLevel[] = [
    {
        description: 'low',
        count: 1
    },
    {
        description: 'high',
        count: 1
    }
];
