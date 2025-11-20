/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Coach } from './Coach';
export type Season = {
    id?: number;
    name?: string;
    description?: string;
    school_id?: number;
    sport_id?: number;
    year?: number;
    wins?: number;
    losses?: number;
    conference_wins?: number;
    conference_losses?: number;
    apr?: number;
    created_at?: string;
    updated_at?: string;
    win_percent?: number;
    ties?: number;
    rpi?: number;
    prev_rpi?: number;
    conference_position?: number;
    conference_num_positions?: number;
    coach_apr?: number;
    attendance?: number;
    conference_ties?: number;
    recruit_ranking?: number;
    offensive_efficiency?: number;
    defensive_efficiency?: number;
    sos_ranking?: number;
    sos?: number;
    home_wins?: number;
    home_losses?: number;
    home_win_percent?: number;
    asr?: number;
    head_coach?: Coach;
    assistant_coaches?: Array<Coach>;
};

