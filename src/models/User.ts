/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Division } from './Division';
export type User = {
    id?: number;
    email?: string;
    first_name?: string;
    last_name?: string;
    created_at?: string;
    updated_at?: string;
    state?: User.state;
    title?: string;
    accountable_id?: number;
    accountable_type?: string;
    coach_id?: number;
    divisions?: Array<Division>;
    roles?: Array<string>;
};
export namespace User {
    export enum state {
        CREATED = 'created',
        SUSPENDED = 'suspended',
        ACTIVE = 'active',
        PENDING = 'pending',
    }
}

