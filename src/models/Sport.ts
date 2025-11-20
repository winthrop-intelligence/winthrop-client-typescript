/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Sport = {
    id?: number;
    name?: string;
    name_aka?: string;
    name_display?: string;
    gender_code?: Sport.gender_code;
    emerging?: boolean;
    meet_sport?: boolean;
    created_at?: string;
    updated_at?: string;
    ncaa_id?: string;
};
export namespace Sport {
    export enum gender_code {
        M = 'M',
        W = 'W',
    }
}

