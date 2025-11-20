/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type FoiaRequest = {
    id?: number;
    school_id: number;
    created_by_id?: number;
    updated_by_id?: number;
    state: FoiaRequest.state;
    foia_label_id?: number;
    created_at?: string;
    updated_at?: string;
};
export namespace FoiaRequest {
    export enum state {
        ACTIVE = 'ACTIVE',
        ARCHIVED = 'ARCHIVED',
    }
}

