/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Subscription = {
    id?: number;
    accountable_id?: number;
    creator_id?: number;
    start_at?: string;
    end_at?: string;
    amount_cents?: number;
    created_at?: string;
    updated_at?: string;
    subscription_type_id?: number;
    autorenew?: boolean;
    activity_cache_id?: number;
    old_email_domain?: string;
    account_id?: number;
    contract_term?: number;
    raw_contract_id?: number;
    slug?: string;
    contract_accepted?: boolean;
    active?: boolean;
    contract_accepted_ip_address?: string;
    renewal?: boolean;
    renewing?: boolean;
    invoicing?: boolean;
    notes?: string;
    send_renewal?: boolean;
    standard_agreement?: boolean;
    active_users_count?: number;
    has_intercollegiate_access?: boolean;
};

