export * from '../models/Administrator';
export * from '../models/AdministratorCollection';
export * from '../models/AuditedFinancialReportStatus';
export * from '../models/AuditedFinancialReportStatusCollection';
export * from '../models/Avatar';
export * from '../models/AverageCompensation';
export * from '../models/COLIAdjusted';
export * from '../models/Category';
export * from '../models/CategoryCollection';
export * from '../models/Coach';
export * from '../models/CoachCollection';
export * from '../models/CoachCompensation';
export * from '../models/CompareColi404Response';
export * from '../models/CompareColi422Response';
export * from '../models/Compensation';
export * from '../models/CompensationCollection';
export * from '../models/Conference';
export * from '../models/ConferenceCollection';
export * from '../models/Conferenceship';
export * from '../models/ConferenceshipCollection';
export * from '../models/Contact';
export * from '../models/ContactCollection';
export * from '../models/Contract';
export * from '../models/ContractCollection';
export * from '../models/Deal';
export * from '../models/DealCollection';
export * from '../models/DealStatus';
export * from '../models/DealStatusCollection';
export * from '../models/Division';
export * from '../models/DivisionCollection';
export * from '../models/DossierReportResponse';
export * from '../models/Filters';
export * from '../models/FinancialQc';
export * from '../models/FoiaLabel';
export * from '../models/FoiaLabelCollection';
export * from '../models/FoiaRequest';
export * from '../models/FoiaRequestCollection';
export * from '../models/Game';
export * from '../models/GameCollection';
export * from '../models/GameContract';
export * from '../models/GameContractCollection';
export * from '../models/GetSchoolAlternateNames200Response';
export * from '../models/GetSchoolAlternateNames404Response';
export * from '../models/GetWireChanges200Response';
export * from '../models/HTTPValidationError';
export * from '../models/HealthCheckFailure';
export * from '../models/HealthCheckSuccess';
export * from '../models/IncomeReport';
export * from '../models/IncomeReportCollection';
export * from '../models/Job';
export * from '../models/JobCandidate';
export * from '../models/JobCollection';
export * from '../models/JobDepartment';
export * from '../models/JobPost';
export * from '../models/JobPostCollection';
export * from '../models/JobSchool';
export * from '../models/JobSport';
export * from '../models/Link';
export * from '../models/LinkCollection';
export * from '../models/LinkCollection1';
export * from '../models/LocationInner';
export * from '../models/Logo';
export * from '../models/Meta';
export * from '../models/NcaaFinancialReportStatus';
export * from '../models/NcaaFinancialReportStatusCollection';
export * from '../models/NewsFeed';
export * from '../models/NewsFeedCollection';
export * from '../models/Position';
export * from '../models/PositionCollection';
export * from '../models/PositionType';
export * from '../models/PositionTypeGroup';
export * from '../models/PredictBody';
export * from '../models/PredictFailure';
export * from '../models/PredictSuccess';
export * from '../models/RawContract';
export * from '../models/RawContractCollection';
export * from '../models/RequestedItem';
export * from '../models/RequestedItemCollection';
export * from '../models/School';
export * from '../models/SchoolCollection';
export * from '../models/Scraper';
export * from '../models/ScraperArgDef';
export * from '../models/Season';
export * from '../models/SeasonCollection';
export * from '../models/Sport';
export * from '../models/SportCollection';
export * from '../models/Subdivision';
export * from '../models/SubdivisionCollection';
export * from '../models/Subscription';
export * from '../models/SubscriptionCollection';
export * from '../models/SystemSetting';
export * from '../models/Tag';
export * from '../models/UnauthorizedError';
export * from '../models/UnprocessableEntity';
export * from '../models/User';
export * from '../models/UserCollection';
export * from '../models/ValidationError';
export * from '../models/Vendor';
export * from '../models/VendorCollection';
export * from '../models/VerifyUserIntercollegiateAccess200Response';
export * from '../models/WireChange';
export * from '../models/WireChangeCoach';
export * from '../models/WireChangeSchool';

import { Administrator                      , AdministratorCompensationTypeEnum              , AdministratorGenderEnum         } from '../models/Administrator';
import { AdministratorCollection } from '../models/AdministratorCollection';
import { AuditedFinancialReportStatus   , AuditedFinancialReportStatusStatusEnum     } from '../models/AuditedFinancialReportStatus';
import { AuditedFinancialReportStatusCollection } from '../models/AuditedFinancialReportStatusCollection';
import { Avatar } from '../models/Avatar';
import { AverageCompensation } from '../models/AverageCompensation';
import { COLIAdjusted } from '../models/COLIAdjusted';
import { Category } from '../models/Category';
import { CategoryCollection } from '../models/CategoryCollection';
import { Coach } from '../models/Coach';
import { CoachCollection } from '../models/CoachCollection';
import { CoachCompensation } from '../models/CoachCompensation';
import { CompareColi404Response } from '../models/CompareColi404Response';
import { CompareColi422Response } from '../models/CompareColi422Response';
import { Compensation } from '../models/Compensation';
import { CompensationCollection } from '../models/CompensationCollection';
import { Conference } from '../models/Conference';
import { ConferenceCollection } from '../models/ConferenceCollection';
import { Conferenceship } from '../models/Conferenceship';
import { ConferenceshipCollection } from '../models/ConferenceshipCollection';
import { Contact } from '../models/Contact';
import { ContactCollection } from '../models/ContactCollection';
import { Contract       , ContractContractableTypeEnum       } from '../models/Contract';
import { ContractCollection } from '../models/ContractCollection';
import { Deal } from '../models/Deal';
import { DealCollection } from '../models/DealCollection';
import { DealStatus } from '../models/DealStatus';
import { DealStatusCollection } from '../models/DealStatusCollection';
import { Division } from '../models/Division';
import { DivisionCollection } from '../models/DivisionCollection';
import { DossierReportResponse } from '../models/DossierReportResponse';
import { Filters } from '../models/Filters';
import { FinancialQc } from '../models/FinancialQc';
import { FoiaLabel } from '../models/FoiaLabel';
import { FoiaLabelCollection } from '../models/FoiaLabelCollection';
import { FoiaRequest    , FoiaRequestStateEnum      } from '../models/FoiaRequest';
import { FoiaRequestCollection } from '../models/FoiaRequestCollection';
import { Game } from '../models/Game';
import { GameCollection } from '../models/GameCollection';
import { GameContract } from '../models/GameContract';
import { GameContractCollection } from '../models/GameContractCollection';
import { GetSchoolAlternateNames200Response } from '../models/GetSchoolAlternateNames200Response';
import { GetSchoolAlternateNames404Response } from '../models/GetSchoolAlternateNames404Response';
import { GetWireChanges200Response } from '../models/GetWireChanges200Response';
import { HTTPValidationError } from '../models/HTTPValidationError';
import { HealthCheckFailure } from '../models/HealthCheckFailure';
import { HealthCheckSuccess } from '../models/HealthCheckSuccess';
import { IncomeReport } from '../models/IncomeReport';
import { IncomeReportCollection } from '../models/IncomeReportCollection';
import { Job } from '../models/Job';
import { JobCandidate } from '../models/JobCandidate';
import { JobCollection } from '../models/JobCollection';
import { JobDepartment } from '../models/JobDepartment';
import { JobPost                     , JobPostStatusEnum   } from '../models/JobPost';
import { JobPostCollection } from '../models/JobPostCollection';
import { JobSchool } from '../models/JobSchool';
import { JobSport } from '../models/JobSport';
import { Link } from '../models/Link';
import { LinkCollection } from '../models/LinkCollection';
import { LinkCollection1 } from '../models/LinkCollection1';
import { LocationInner } from '../models/LocationInner';
import { Logo } from '../models/Logo';
import { Meta } from '../models/Meta';
import { NcaaFinancialReportStatus } from '../models/NcaaFinancialReportStatus';
import { NcaaFinancialReportStatusCollection } from '../models/NcaaFinancialReportStatusCollection';
import { NewsFeed } from '../models/NewsFeed';
import { NewsFeedCollection } from '../models/NewsFeedCollection';
import { Position            , PositionCreationReasonEnum              } from '../models/Position';
import { PositionCollection } from '../models/PositionCollection';
import { PositionType } from '../models/PositionType';
import { PositionTypeGroup } from '../models/PositionTypeGroup';
import { PredictBody } from '../models/PredictBody';
import { PredictFailure } from '../models/PredictFailure';
import { PredictSuccess } from '../models/PredictSuccess';
import { RawContract } from '../models/RawContract';
import { RawContractCollection } from '../models/RawContractCollection';
import { RequestedItem   , RequestedItemRequestableTypeEnum      , RequestedItemStatusEnum   } from '../models/RequestedItem';
import { RequestedItemCollection } from '../models/RequestedItemCollection';
import { School                              , SchoolSchoolStatusEnum           } from '../models/School';
import { SchoolCollection } from '../models/SchoolCollection';
import { Scraper } from '../models/Scraper';
import { ScraperArgDef } from '../models/ScraperArgDef';
import { Season } from '../models/Season';
import { SeasonCollection } from '../models/SeasonCollection';
import { Sport    , SportGenderCodeEnum        } from '../models/Sport';
import { SportCollection } from '../models/SportCollection';
import { Subdivision } from '../models/Subdivision';
import { SubdivisionCollection } from '../models/SubdivisionCollection';
import { Subscription } from '../models/Subscription';
import { SubscriptionCollection } from '../models/SubscriptionCollection';
import { SystemSetting } from '../models/SystemSetting';
import { Tag } from '../models/Tag';
import { UnauthorizedError } from '../models/UnauthorizedError';
import { UnprocessableEntity } from '../models/UnprocessableEntity';
import { User      , UserStateEnum         } from '../models/User';
import { UserCollection } from '../models/UserCollection';
import { ValidationError } from '../models/ValidationError';
import { Vendor } from '../models/Vendor';
import { VendorCollection } from '../models/VendorCollection';
import { VerifyUserIntercollegiateAccess200Response } from '../models/VerifyUserIntercollegiateAccess200Response';
import { WireChange   , WireChangeWireTypeEnum              } from '../models/WireChange';
import { WireChangeCoach } from '../models/WireChangeCoach';
import { WireChangeSchool } from '../models/WireChangeSchool';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: Set<string> = new Set<string>([
    "AdministratorCompensationTypeEnum",
    "AdministratorGenderEnum",
    "AuditedFinancialReportStatusStatusEnum",
    "ContractContractableTypeEnum",
    "FoiaRequestStateEnum",
    "JobPostStatusEnum",
    "PositionCreationReasonEnum",
    "RequestedItemRequestableTypeEnum",
    "RequestedItemStatusEnum",
    "SchoolSchoolStatusEnum",
    "SportGenderCodeEnum",
    "UserStateEnum",
    "WireChangeWireTypeEnum",
]);

let typeMap: {[index: string]: any} = {
    "Administrator": Administrator,
    "AdministratorCollection": AdministratorCollection,
    "AuditedFinancialReportStatus": AuditedFinancialReportStatus,
    "AuditedFinancialReportStatusCollection": AuditedFinancialReportStatusCollection,
    "Avatar": Avatar,
    "AverageCompensation": AverageCompensation,
    "COLIAdjusted": COLIAdjusted,
    "Category": Category,
    "CategoryCollection": CategoryCollection,
    "Coach": Coach,
    "CoachCollection": CoachCollection,
    "CoachCompensation": CoachCompensation,
    "CompareColi404Response": CompareColi404Response,
    "CompareColi422Response": CompareColi422Response,
    "Compensation": Compensation,
    "CompensationCollection": CompensationCollection,
    "Conference": Conference,
    "ConferenceCollection": ConferenceCollection,
    "Conferenceship": Conferenceship,
    "ConferenceshipCollection": ConferenceshipCollection,
    "Contact": Contact,
    "ContactCollection": ContactCollection,
    "Contract": Contract,
    "ContractCollection": ContractCollection,
    "Deal": Deal,
    "DealCollection": DealCollection,
    "DealStatus": DealStatus,
    "DealStatusCollection": DealStatusCollection,
    "Division": Division,
    "DivisionCollection": DivisionCollection,
    "DossierReportResponse": DossierReportResponse,
    "Filters": Filters,
    "FinancialQc": FinancialQc,
    "FoiaLabel": FoiaLabel,
    "FoiaLabelCollection": FoiaLabelCollection,
    "FoiaRequest": FoiaRequest,
    "FoiaRequestCollection": FoiaRequestCollection,
    "Game": Game,
    "GameCollection": GameCollection,
    "GameContract": GameContract,
    "GameContractCollection": GameContractCollection,
    "GetSchoolAlternateNames200Response": GetSchoolAlternateNames200Response,
    "GetSchoolAlternateNames404Response": GetSchoolAlternateNames404Response,
    "GetWireChanges200Response": GetWireChanges200Response,
    "HTTPValidationError": HTTPValidationError,
    "HealthCheckFailure": HealthCheckFailure,
    "HealthCheckSuccess": HealthCheckSuccess,
    "IncomeReport": IncomeReport,
    "IncomeReportCollection": IncomeReportCollection,
    "Job": Job,
    "JobCandidate": JobCandidate,
    "JobCollection": JobCollection,
    "JobDepartment": JobDepartment,
    "JobPost": JobPost,
    "JobPostCollection": JobPostCollection,
    "JobSchool": JobSchool,
    "JobSport": JobSport,
    "Link": Link,
    "LinkCollection": LinkCollection,
    "LinkCollection1": LinkCollection1,
    "LocationInner": LocationInner,
    "Logo": Logo,
    "Meta": Meta,
    "NcaaFinancialReportStatus": NcaaFinancialReportStatus,
    "NcaaFinancialReportStatusCollection": NcaaFinancialReportStatusCollection,
    "NewsFeed": NewsFeed,
    "NewsFeedCollection": NewsFeedCollection,
    "Position": Position,
    "PositionCollection": PositionCollection,
    "PositionType": PositionType,
    "PositionTypeGroup": PositionTypeGroup,
    "PredictBody": PredictBody,
    "PredictFailure": PredictFailure,
    "PredictSuccess": PredictSuccess,
    "RawContract": RawContract,
    "RawContractCollection": RawContractCollection,
    "RequestedItem": RequestedItem,
    "RequestedItemCollection": RequestedItemCollection,
    "School": School,
    "SchoolCollection": SchoolCollection,
    "Scraper": Scraper,
    "ScraperArgDef": ScraperArgDef,
    "Season": Season,
    "SeasonCollection": SeasonCollection,
    "Sport": Sport,
    "SportCollection": SportCollection,
    "Subdivision": Subdivision,
    "SubdivisionCollection": SubdivisionCollection,
    "Subscription": Subscription,
    "SubscriptionCollection": SubscriptionCollection,
    "SystemSetting": SystemSetting,
    "Tag": Tag,
    "UnauthorizedError": UnauthorizedError,
    "UnprocessableEntity": UnprocessableEntity,
    "User": User,
    "UserCollection": UserCollection,
    "ValidationError": ValidationError,
    "Vendor": Vendor,
    "VendorCollection": VendorCollection,
    "VerifyUserIntercollegiateAccess200Response": VerifyUserIntercollegiateAccess200Response,
    "WireChange": WireChange,
    "WireChangeCoach": WireChangeCoach,
    "WireChangeSchool": WireChangeSchool,
}

type MimeTypeDescriptor = {
    type: string;
    subtype: string;
    subtypeTokens: string[];
};

/**
 * Every mime-type consists of a type, subtype, and optional parameters.
 * The subtype can be composite, including information about the content format.
 * For example: `application/json-patch+json`, `application/merge-patch+json`.
 *
 * This helper transforms a string mime-type into an internal representation.
 * This simplifies the implementation of predicates that in turn define common rules for parsing or stringifying
 * the payload.
 */
const parseMimeType = (mimeType: string): MimeTypeDescriptor => {
    const [type = '', subtype = ''] = mimeType.split('/');
    return {
        type,
        subtype,
        subtypeTokens: subtype.split('+'),
    };
};

type MimeTypePredicate = (mimeType: string) => boolean;

// This factory creates a predicate function that checks a string mime-type against defined rules.
const mimeTypePredicateFactory = (predicate: (descriptor: MimeTypeDescriptor) => boolean): MimeTypePredicate => (mimeType) => predicate(parseMimeType(mimeType));

// Use this factory when you need to define a simple predicate based only on type and, if applicable, subtype.
const mimeTypeSimplePredicateFactory = (type: string, subtype?: string): MimeTypePredicate => mimeTypePredicateFactory((descriptor) => {
    if (descriptor.type !== type) return false;
    if (subtype != null && descriptor.subtype !== subtype) return false;
    return true;
});

// Creating a set of named predicates that will help us determine how to handle different mime-types
const isTextLikeMimeType = mimeTypeSimplePredicateFactory('text');
const isJsonMimeType = mimeTypeSimplePredicateFactory('application', 'json');
const isJsonLikeMimeType = mimeTypePredicateFactory((descriptor) => descriptor.type === 'application' && descriptor.subtypeTokens.some((item) => item === 'json'));
const isOctetStreamMimeType = mimeTypeSimplePredicateFactory('application', 'octet-stream');
const isFormUrlencodedMimeType = mimeTypeSimplePredicateFactory('application', 'x-www-form-urlencoded');

// Defining a list of mime-types in the order of prioritization for handling.
const supportedMimeTypePredicatesWithPriority: MimeTypePredicate[] = [
    isJsonMimeType,
    isJsonLikeMimeType,
    isTextLikeMimeType,
    isOctetStreamMimeType,
    isFormUrlencodedMimeType,
];

const nullableSuffix = " | null";
const optionalSuffix = " | undefined";
const arrayPrefix = "Array<";
const arraySuffix = ">";
const mapPrefix = "{ [key: string]: ";
const mapSuffix = "; }";

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    let mapping = typeMap[expectedType].mapping;
                    if (mapping != undefined && mapping[discriminatorType]) {
                        return mapping[discriminatorType]; // use the type given in the discriminator
                    } else if(typeMap[discriminatorType]) {
                        return discriminatorType;
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string): any {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.endsWith(nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.serialize(data, subType, format);
        } else if (type.endsWith(optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.serialize(data, subType, format);
        } else if (type.startsWith(arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type.startsWith(mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.serialize(
                    data[key],
                    subType,
                    format,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            if (!(data instanceof Date)) {
                return data;
            }
            if (format == "date") {
                let month = data.getMonth()+1
                let monthStr = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                let dayStr = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + monthStr + "-" + dayStr;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let attributeType of attributeTypes) {
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string): any {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.endsWith(nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.deserialize(data, subType, format);
        } else if (type.endsWith(optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.deserialize(data, subType, format);
        } else if (type.startsWith(arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type.startsWith(mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.deserialize(
                    data[key],
                    subType,
                    format,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let attributeType of attributeTypes) {
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return (mediaType.split(";")[0] ?? '').trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (mediaTypes.length === 0) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(ObjectSerializer.normalizeMediaType);

        for (const predicate of supportedMimeTypePredicatesWithPriority) {
            for (const mediaType of normalMediaTypes) {
                if (mediaType != null && predicate(mediaType)) {
                    return mediaType;
                }
            }
        }

        throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (isTextLikeMimeType(mediaType)) {
            return String(data);
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (isTextLikeMimeType(mediaType)) {
            return rawData;
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.parse(rawData);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
