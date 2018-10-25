import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, map, tap, switchMap} from 'rxjs/operators';
import { GET_ALL_ROLE, SetRole } from '../actions/role.actions';
import { ConfigurationService } from '../../../services/configuration.service';
 
 
@Injectable()
export class RoleEffects {
 
    constructor(private actions$: Actions, private configurationService: ConfigurationService) {}

    // @Effect()
    // public init$: Observable<Action> = this.actions$.pipe(switchMap((): any => {
    //     return this.configurationService.getAllRoles().pipe(map((result) => {
    //         return new SetRole(result);
    //     }))
    // }));

    @Effect()
    getAllRole$: Observable<Action> = this.actions$.ofType(GET_ALL_ROLE).pipe(switchMap(() => {
        return this.configurationService.getAllRoles().pipe(map((result) => {
            return new SetRole(result);
        }))
    }))

}