/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Avatar } from './Avatar';
export type Coach = {
    id?: number;
    first_name?: string;
    last_name?: string;
    email?: string;
    phone?: string;
    leader?: boolean;
    bio?: string;
    bio_text?: string;
    dob?: string;
    /**
     * ID of School, You can view Alma Mater using School API
     */
    alma_mater_id?: number;
    alma_mater_year?: string;
    hometown_city?: string;
    hometown_state?: string;
    twitter_handle?: string;
    linkedin?: string;
    instagram_handle?: string;
    current_tenure_years?: number;
    avatar?: Avatar;
    years_of_experience?: number;
    external_years_experience?: number;
    athletic_years_of_experience?: number;
    avatar_scraping_disabled?: boolean;
    latest_salary?: number;
    latest_salary_year?: number;
    last_bio_text_updated_at?: string;
    instagram_scraping_disabled?: boolean;
    linkedin_scraping_disabled?: boolean;
    twitter_scraping_disabled?: boolean;
    email_scraping_disabled?: boolean;
    mobility_index?: number;
    has_new_job?: boolean;
};

