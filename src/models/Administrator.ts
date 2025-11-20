/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Coach } from './Coach';
import type { PositionType } from './PositionType';
export type Administrator = {
    id?: number;
    coach_id?: number;
    coach_first_name?: string;
    coach_last_name?: string;
    coach_name?: string;
    season_id?: number;
    position_id?: number;
    school_id?: number;
    conference_id?: number;
    division_id?: number;
    geo_division_id?: number;
    compensation_id?: number;
    contract_id?: number;
    year?: number;
    position_title?: string;
    school_name?: string;
    school_short_name?: string;
    state?: string;
    usnwr_ranking?: number;
    directors_cup_ranking?: number;
    compensation_cents?: number;
    compensation_base_salary_cents?: number;
    compensation_type?: Administrator.compensation_type;
    compensation_outside_income_cents?: number;
    compensation_deferred_comp_cents?: number;
    compensation_one_time_bonus_cents?: number;
    compensation_contingent_bonus?: boolean;
    compensation_buyout_terms?: string;
    compensation_is_car_provided?: boolean;
    compensation_country_club_dues_cents?: number;
    compensation_country_club_membership_paid?: boolean;
    compensation_media_link?: string;
    contract_starts_on?: string;
    contract_expires_on?: string;
    diversity?: boolean;
    gender?: Administrator.gender;
    alma_mater_id?: number;
    private?: boolean;
    sport_id?: number;
    coli?: number;
    coach?: Coach;
    departments?: Array<PositionType>;
};
export namespace Administrator {
    export enum compensation_type {
        YEARLY = 'yearly',
        HOURLY = 'hourly',
        _990 = '990',
    }
    export enum gender {
        M = 'M',
        F = 'F',
        EMPTY = '',
    }
}

