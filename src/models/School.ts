/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Coach } from './Coach';
import type { Conference } from './Conference';
import type { Division } from './Division';
import type { Logo } from './Logo';
import type { Subdivision } from './Subdivision';
export type School = {
    id?: number;
    name?: string;
    short_name?: string;
    location?: string;
    created_at?: string;
    updated_at?: string;
    city?: string;
    nickname?: string;
    external_url?: string;
    colors?: string;
    state?: string;
    primary_conference_id?: number;
    cost_of_living_index_city_code?: string;
    current_directors_cup_ranking?: number;
    current_usnwr_ranking?: number;
    private?: boolean;
    school_classification_id?: number;
    logo_updated_at?: string;
    youtube_search_name?: string;
    latitude?: number;
    longitude?: number;
    address_1?: string;
    address_2?: string;
    zip_code?: string;
    logo_image?: Logo;
    athletic_director?: Coach;
    athletics_url?: string;
    wikipedia_url?: string;
    athletics_wikipedia_url?: string;
    external_logo_image?: Logo;
    school_status?: School.school_status;
    athletics_instagram_handle?: string;
    athletics_twitter_handle?: string;
    external_instagram_handle?: string;
    external_twitter_handle?: string;
    ncaa_id?: number;
    conference?: Conference;
    division?: Division;
    subdivisions?: Array<Subdivision>;
};
export namespace School {
    export enum school_status {
        ACTIVE = 'active',
        CLOSED = 'closed',
        INTERNATIONAL = 'international',
    }
}

