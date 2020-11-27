import { createReducer } from '@ngrx/store';
import { Observable } from 'rxjs';
import { WorkGeneratorService } from '../core-modul/work-generator.service';
import { WorkItem } from '../core-modul/workItem';

export interface State {
    items: Observable<WorkItem[]>;
}

export const initialState: State = {
    items: new WorkGeneratorService().items$
};

export const todos = createReducer(
    initialState,
    on()
)

};
