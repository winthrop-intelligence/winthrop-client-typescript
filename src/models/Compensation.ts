/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Contract } from './Contract';
export type Compensation = {
    id?: number;
    bonus_comp_cents?: number;
    deferred_comp_cents?: number;
    talent_fee?: number;
    is_car_provided?: boolean;
    country_club_dues_cents?: number;
    coach_id?: number;
    buyout_terms?: string;
    executed_on?: string;
    expires_on?: string;
    start_on?: string;
    end_on?: string;
    average_yearly_comp_cents?: number;
    created_at?: string;
    updated_at?: string;
    outside_income_cents?: number;
    one_time_bonus_cents?: number;
    comment?: string;
    country_club_membership_paid?: boolean;
    base_salary_cents?: number;
    bonus_has_contingents?: boolean;
    calculated_guaranteed_comp_cents?: number;
    contingent_bonus?: boolean;
    noncontingent_bonus_comp_cents?: number;
    compensation_type?: string;
    media_link?: string;
    contract_status_id?: number;
    year?: number;
    school_id?: number;
    contract?: Contract;
};

