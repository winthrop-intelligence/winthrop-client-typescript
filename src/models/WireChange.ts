/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Avatar } from './Avatar';
import type { Logo } from './Logo';
import type { PositionType } from './PositionType';
import type { Sport } from './Sport';
export type WireChange = {
    id: number;
    school_id: number;
    effective_date?: string | null;
    wire_type?: WireChange.wire_type | null;
    position_title?: string | null;
    article_link?: string | null;
    article_title?: string | null;
    article_description?: string | null;
    article_site_name?: string | null;
    article_publish_time?: string | null;
    article_image_url?: string | null;
    coach?: {
        id?: number;
        first_name?: string;
        last_name?: string;
        avatar?: Avatar | null;
    } | null;
    school?: {
        id?: number;
        logo_image?: Logo | null;
        external_logo_image?: Logo | null;
    } | null;
    position_types?: Array<PositionType>;
    sports?: Array<Sport>;
};
export namespace WireChange {
    export enum wire_type {
        NEW_HIRE = 'new_hire',
        PROMOTION = 'promotion',
        EXTENSION = 'extension',
        DEPARTED = 'departed',
    }
}

