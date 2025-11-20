/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Contract = {
    id?: number;
    executed_on?: string;
    expires_on?: string;
    start_on?: string;
    end_on?: string;
    at_will?: boolean;
    verified?: boolean;
    contractable_type?: Contract.contractable_type;
    contractable_id?: number;
    raw_contract_id?: number;
    created_at?: string;
    updated_at?: string;
};
export namespace Contract {
    export enum contractable_type {
        COACH = 'Coach',
        PERSON = 'Person',
    }
}

