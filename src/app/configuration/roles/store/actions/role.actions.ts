import { Injectable, OnInit } from '@angular/core';
import { Action } from '@ngrx/store';
import { Role } from '../../role.model';
import { ConfigurationService } from '../../../services/configuration.service';

export const GET_ALL_ROLE = 'Role_Get_All';
export const SET_ROLE = 'Role_Set';
export const CREATE_ROLE = 'Role_Create';
export const EDIT_ROLE = 'Role_Edit';

export class GetAllRole implements Action {
    readonly type = GET_ALL_ROLE;

    constructor(public payload: Role) { }
}

export class SetRole implements Action {
    readonly type = SET_ROLE;
   
    constructor(public payload: any) {}
}

export class CreateRole implements Action {
    readonly type = CREATE_ROLE;

    constructor(public payload: Role) { }
}

export class DeleteRole implements Action {
    readonly type = EDIT_ROLE;

    constructor(public id: string) { }
}

export type RoleActions = GetAllRole | SetRole | CreateRole | DeleteRole;