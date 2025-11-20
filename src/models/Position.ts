/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Coach } from './Coach';
import type { PositionType } from './PositionType';
import type { School } from './School';
import type { Sport } from './Sport';
export type Position = {
    id?: number;
    season_id?: number;
    coach_id?: number;
    start_on?: string;
    end_on?: string;
    partial_season?: boolean;
    compensation_id?: number;
    coach_apr?: number;
    title?: string;
    name_display?: string;
    departing?: boolean;
    departing_set_at?: string;
    creation_reason?: Position.creation_reason | null;
    creation_reason_updated_at?: string;
    coach?: Coach;
    sport?: Sport;
    school?: School;
    article_link?: string;
    article_title?: string;
    article_description?: string;
    article_site_name?: string;
    article_publish_time?: string;
    article_image_url?: string;
    position_types?: Array<PositionType>;
};
export namespace Position {
    export enum creation_reason {
        RENEWED = 'renewed',
        NEW_HIRE = 'new_hire',
        PROMOTION = 'promotion',
        EXTENSION = 'extension',
    }
}

