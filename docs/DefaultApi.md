# DefaultApi

All URIs are relative to *http://api-gateway.default.svc.cluster.local*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**averageConferenceComp**](DefaultApi.md#averageconferencecomp) | **GET** /api/v1/compensations/average_conference_comp |  |
| [**averageDivisionComp**](DefaultApi.md#averagedivisioncomp) | **GET** /api/v1/compensations/average_division_comp |  |
| [**averageSchoolComp**](DefaultApi.md#averageschoolcomp) | **GET** /api/v1/compensations/average_school_comp |  |
| [**averageSubdivisionComp**](DefaultApi.md#averagesubdivisioncomp) | **GET** /api/v1/compensations/average_subdivision_comp |  |
| [**compareColi**](DefaultApi.md#comparecoli) | **GET** /api/v1/schools/compare_coli |  |
| [**createCashflow**](DefaultApi.md#createcashflow) | **POST** /api/v1/cashflows |  |
| [**createCoach**](DefaultApi.md#createcoach) | **POST** /api/v1/coaches |  |
| [**createConference**](DefaultApi.md#createconference) | **POST** /api/v1/conferences |  |
| [**createConferenceship**](DefaultApi.md#createconferenceship) | **POST** /api/v1/conferenceships |  |
| [**createFavorite**](DefaultApi.md#createfavoriteoperation) | **POST** /api/v1/favorites |  |
| [**createFavoritesCategory**](DefaultApi.md#createfavoritescategoryoperation) | **POST** /api/v1/favorites_categories |  |
| [**createFoiaLabel**](DefaultApi.md#createfoialabel) | **POST** /api/v1/foia_labels |  |
| [**createFoiaRequest**](DefaultApi.md#createfoiarequest) | **POST** /api/v1/foia_requests |  |
| [**createGamePostSearch**](DefaultApi.md#creategamepostsearchoperation) | **POST** /api/v1/game_post_searches |  |
| [**createJobPost**](DefaultApi.md#createjobpost) | **POST** /central_jobs/job_posts | Create a job post |
| [**createNote**](DefaultApi.md#createnoteoperation) | **POST** /api/v1/notes |  |
| [**createPasswordReset**](DefaultApi.md#createpasswordresetoperation) | **POST** /api/v1/password_reset |  |
| [**createPosition**](DefaultApi.md#createposition) | **POST** /api/v1/positions |  |
| [**createRequestedItem**](DefaultApi.md#createrequesteditem) | **POST** /api/v1/requested_items |  |
| [**createSeason**](DefaultApi.md#createseason) | **POST** /api/v1/seasons |  |
| [**createTeamScheduleFavorite**](DefaultApi.md#createteamschedulefavoriteoperation) | **POST** /api/v1/team_schedule_favorites |  |
| [**deleteCashflow**](DefaultApi.md#deletecashflow) | **DELETE** /api/v1/cashflows/{cashflowId} |  |
| [**deleteConference**](DefaultApi.md#deleteconference) | **DELETE** /api/v1/conferences/{conferenceId} |  |
| [**deleteConferenceship**](DefaultApi.md#deleteconferenceship) | **DELETE** /api/v1/conferenceships/{conferenceshipId} |  |
| [**deleteFavorite**](DefaultApi.md#deletefavorite) | **DELETE** /api/v1/favorites/{id} |  |
| [**deleteFavoritesCategory**](DefaultApi.md#deletefavoritescategory) | **DELETE** /api/v1/favorites_categories/{id} |  |
| [**deleteFoiaLabel**](DefaultApi.md#deletefoialabel) | **DELETE** /api/v1/foia_labels/{foiaLabelId} |  |
| [**deleteFoiaRequest**](DefaultApi.md#deletefoiarequest) | **DELETE** /api/v1/foia_requests/{foiaRequestId} |  |
| [**deleteGameContractRawContract**](DefaultApi.md#deletegamecontractrawcontract) | **DELETE** /api/v1/game_contracts/{game_contractId}/delete_raw_contract |  |
| [**deleteGamePostSearch**](DefaultApi.md#deletegamepostsearch) | **DELETE** /api/v1/game_post_searches/{gamePostSearchId} |  |
| [**deleteJobPost**](DefaultApi.md#deletejobpost) | **DELETE** /central_jobs/job_posts/{jobPostId} | Delete a job post |
| [**deleteNote**](DefaultApi.md#deletenote) | **DELETE** /api/v1/notes/{id} |  |
| [**deletePosition**](DefaultApi.md#deleteposition) | **DELETE** /api/v1/positions/{positionId} |  |
| [**deleteRequestedItem**](DefaultApi.md#deleterequesteditem) | **DELETE** /api/v1/requested_items/{requestedItemId} |  |
| [**deleteSeason**](DefaultApi.md#deleteseason) | **DELETE** /api/v1/seasons/{seasonId} |  |
| [**deleteTeamScheduleFavorite**](DefaultApi.md#deleteteamschedulefavorite) | **DELETE** /api/v1/team_schedule_favorites/{id} |  |
| [**deleteTeamScheduleNote**](DefaultApi.md#deleteteamschedulenote) | **DELETE** /api/v1/team_schedule_notes/{fil_team_id} |  |
| [**getAdministrator**](DefaultApi.md#getadministrator) | **GET** /api/v1/administrators/{administratorId} |  |
| [**getAdministratorSearches**](DefaultApi.md#getadministratorsearches) | **GET** /api/v1/administrator_searches |  |
| [**getAdministrators**](DefaultApi.md#getadministrators) | **GET** /api/v1/administrators |  |
| [**getAthleticProfileSearch**](DefaultApi.md#getathleticprofilesearch) | **GET** /api/v1/athletic_profile_searches/{athleticProfileSearchId} |  |
| [**getAuditedFinancialReportStatus**](DefaultApi.md#getauditedfinancialreportstatus) | **GET** /api/v1/audited_financial_report_statuses/{auditedFinancialReportStatusId} |  |
| [**getAuditedFinancialReportStatuses**](DefaultApi.md#getauditedfinancialreportstatuses) | **GET** /api/v1/audited_financial_report_statuses |  |
| [**getCashflow**](DefaultApi.md#getcashflow) | **GET** /api/v1/cashflows/{cashflowId} |  |
| [**getCashflowGroups**](DefaultApi.md#getcashflowgroups) | **GET** /api/v1/cashflow_groups |  |
| [**getCashflows**](DefaultApi.md#getcashflows) | **GET** /api/v1/cashflows |  |
| [**getCategories**](DefaultApi.md#getcategories) | **GET** /central_jobs/categories | List all categories |
| [**getCoach**](DefaultApi.md#getcoach) | **GET** /api/v1/coaches/{coachId} |  |
| [**getCoachCompensation**](DefaultApi.md#getcoachcompensation) | **GET** /api/v1/coach_compensations/get_coach_compensation |  |
| [**getCoachSearch**](DefaultApi.md#getcoachsearch) | **GET** /api/v1/coach_searches/{id} |  |
| [**getCoachSearchColi**](DefaultApi.md#getcoachsearchcoli) | **GET** /api/v1/coach_searches/{id}/coli |  |
| [**getCoachSearchCompensation**](DefaultApi.md#getcoachsearchcompensation) | **GET** /api/v1/coach_searches/{id}/compensation |  |
| [**getCoachSearchCoworkerHistory**](DefaultApi.md#getcoachsearchcoworkerhistory) | **GET** /api/v1/coach_searches/{id}/coworker_history |  |
| [**getCoachSearchOverview**](DefaultApi.md#getcoachsearchoverview) | **GET** /api/v1/coach_searches/{id}/overview |  |
| [**getCoachSearchRecord**](DefaultApi.md#getcoachsearchrecord) | **GET** /api/v1/coach_searches/{id}/record |  |
| [**getCoachSearchVideos**](DefaultApi.md#getcoachsearchvideos) | **GET** /api/v1/coach_searches/{id}/videos |  |
| [**getCoachSearches**](DefaultApi.md#getcoachsearches) | **GET** /api/v1/coach_searches |  |
| [**getCoaches**](DefaultApi.md#getcoaches) | **GET** /api/v1/coaches |  |
| [**getCompensation**](DefaultApi.md#getcompensation) | **GET** /api/v1/compensations/{compensationId} |  |
| [**getCompensations**](DefaultApi.md#getcompensations) | **GET** /api/v1/compensations |  |
| [**getConference**](DefaultApi.md#getconference) | **GET** /api/v1/conferences/{conferenceId} |  |
| [**getConferenceAdminCompensation**](DefaultApi.md#getconferenceadmincompensation) | **GET** /api/v1/conferences/{conferenceId}/admin_compensation |  |
| [**getConferenceCashflowStats**](DefaultApi.md#getconferencecashflowstats) | **GET** /api/v1/conferences/{conferenceId}/cashflow_stats |  |
| [**getConferenceDepartmentStaff**](DefaultApi.md#getconferencedepartmentstaff) | **GET** /api/v1/conferences/{conferenceId}/department_staff |  |
| [**getConferenceDirectorsCup**](DefaultApi.md#getconferencedirectorscup) | **GET** /api/v1/conferences/{conferenceId}/directors_cup |  |
| [**getConferencePositionStats**](DefaultApi.md#getconferencepositionstats) | **GET** /api/v1/conferences/{conferenceId}/position_stats |  |
| [**getConferenceSportCompensation**](DefaultApi.md#getconferencesportcompensation) | **GET** /api/v1/conferences/{conferenceId}/sport_compensation |  |
| [**getConferences**](DefaultApi.md#getconferences) | **GET** /api/v1/conferences |  |
| [**getConferenceship**](DefaultApi.md#getconferenceship) | **GET** /api/v1/conferenceships/{conferenceshipId} |  |
| [**getConferenceships**](DefaultApi.md#getconferenceships) | **GET** /api/v1/conferenceships |  |
| [**getContact**](DefaultApi.md#getcontact) | **GET** /api/v1/contacts/{contactId} |  |
| [**getContacts**](DefaultApi.md#getcontacts) | **GET** /api/v1/contacts |  |
| [**getContract**](DefaultApi.md#getcontract) | **GET** /api/v1/contracts/{contractId} |  |
| [**getContracts**](DefaultApi.md#getcontracts) | **GET** /api/v1/contracts |  |
| [**getDeal**](DefaultApi.md#getdeal) | **GET** /api/v1/deals/{dealId} |  |
| [**getDealSearches**](DefaultApi.md#getdealsearches) | **GET** /api/v1/deal_searches |  |
| [**getDealStatus**](DefaultApi.md#getdealstatus) | **GET** /api/v1/deal_statuses/{dealStatusId} |  |
| [**getDealStatuses**](DefaultApi.md#getdealstatuses) | **GET** /api/v1/deal_statuses |  |
| [**getDeals**](DefaultApi.md#getdeals) | **GET** /api/v1/deals |  |
| [**getDepartmentSearches**](DefaultApi.md#getdepartmentsearches) | **GET** /api/v1/department_searches |  |
| [**getDivision**](DefaultApi.md#getdivision) | **GET** /api/v1/divisions/{divisionId} |  |
| [**getDivisions**](DefaultApi.md#getdivisions) | **GET** /api/v1/divisions |  |
| [**getFavorites**](DefaultApi.md#getfavorites) | **GET** /api/v1/favorites |  |
| [**getFavoritesCategories**](DefaultApi.md#getfavoritescategories) | **GET** /api/v1/favorites_categories |  |
| [**getFilterOptions**](DefaultApi.md#getfilteroptions) | **GET** /api/v1/filter_options |  |
| [**getFilterOptionsAllSchools**](DefaultApi.md#getfilteroptionsallschools) | **GET** /api/v1/filter_options/all_schools |  |
| [**getFilterOptionsConferences**](DefaultApi.md#getfilteroptionsconferences) | **GET** /api/v1/filter_options/conferences |  |
| [**getFilterOptionsDealTypes**](DefaultApi.md#getfilteroptionsdealtypes) | **GET** /api/v1/filter_options/deal_types |  |
| [**getFilterOptionsGameTypes**](DefaultApi.md#getfilteroptionsgametypes) | **GET** /api/v1/filter_options/game_types |  |
| [**getFilterOptionsSchoolGroups**](DefaultApi.md#getfilteroptionsschoolgroups) | **GET** /api/v1/filter_options/school_groups |  |
| [**getFilterOptionsSchools**](DefaultApi.md#getfilteroptionsschools) | **GET** /api/v1/filter_options/schools |  |
| [**getFilterOptionsSubdivisions**](DefaultApi.md#getfilteroptionssubdivisions) | **GET** /api/v1/filter_options/subdivisions |  |
| [**getFilterOptionsVendors**](DefaultApi.md#getfilteroptionsvendors) | **GET** /api/v1/filter_options/vendors |  |
| [**getFinancialSearches**](DefaultApi.md#getfinancialsearches) | **GET** /api/v1/financial_searches |  |
| [**getFoiaLabel**](DefaultApi.md#getfoialabel) | **GET** /api/v1/foia_labels/{foiaLabelId} |  |
| [**getFoiaLabels**](DefaultApi.md#getfoialabels) | **GET** /api/v1/foia_labels |  |
| [**getFoiaRequest**](DefaultApi.md#getfoiarequest) | **GET** /api/v1/foia_requests/{foiaRequestId} |  |
| [**getFoiaRequests**](DefaultApi.md#getfoiarequests) | **GET** /api/v1/foia_requests |  |
| [**getGadSearchDetail**](DefaultApi.md#getgadsearchdetail) | **GET** /api/v1/gad_searches/{id}/detail |  |
| [**getGadSearches**](DefaultApi.md#getgadsearches) | **GET** /api/v1/gad_searches |  |
| [**getGame**](DefaultApi.md#getgame) | **GET** /api/v1/games/{gameId} |  |
| [**getGameContract**](DefaultApi.md#getgamecontract) | **GET** /api/v1/game_contracts/{game_contractId} |  |
| [**getGameContractSeries**](DefaultApi.md#getgamecontractseries) | **GET** /api/v1/game_contracts/{game_contractId}/series |  |
| [**getGameContracts**](DefaultApi.md#getgamecontracts) | **GET** /api/v1/game_contracts |  |
| [**getGamePost**](DefaultApi.md#getgamepost) | **GET** /api/v1/game_posts/{gamePostId} |  |
| [**getGamePostSearch**](DefaultApi.md#getgamepostsearch) | **GET** /api/v1/game_post_searches/{gamePostSearchId} |  |
| [**getGamePostSearches**](DefaultApi.md#getgamepostsearches) | **GET** /api/v1/game_post_searches |  |
| [**getGamePosts**](DefaultApi.md#getgameposts) | **GET** /api/v1/game_posts |  |
| [**getGames**](DefaultApi.md#getgames) | **GET** /api/v1/games |  |
| [**getIncomeReport**](DefaultApi.md#getincomereport) | **GET** /api/v1/income_reports/{incomeReportId} |  |
| [**getIncomeReports**](DefaultApi.md#getincomereports) | **GET** /api/v1/income_reports |  |
| [**getJobPost**](DefaultApi.md#getjobpost) | **GET** /central_jobs/job_posts/{jobPostId} | Get a job post |
| [**getJobPosts**](DefaultApi.md#getjobposts) | **GET** /central_jobs/job_posts | List all job posts |
| [**getLadFilterOptions**](DefaultApi.md#getladfilteroptions) | **GET** /api/v1/lad_filter_options |  |
| [**getNcaaFinancialReportStatus**](DefaultApi.md#getncaafinancialreportstatus) | **GET** /api/v1/ncaa_financial_report_statuses/{ncaaFinancialReportStatusId} |  |
| [**getNcaaFinancialReportStatuses**](DefaultApi.md#getncaafinancialreportstatuses) | **GET** /api/v1/ncaa_financial_report_statuses |  |
| [**getNewsFeed**](DefaultApi.md#getnewsfeed) | **GET** /wi_jobs/news_feeds/{newsFeedId} | Get a news feed |
| [**getNote**](DefaultApi.md#getnote) | **GET** /api/v1/notes |  |
| [**getPosition**](DefaultApi.md#getposition) | **GET** /api/v1/positions/{positionId} |  |
| [**getPositions**](DefaultApi.md#getpositions) | **GET** /api/v1/positions |  |
| [**getRawContract**](DefaultApi.md#getrawcontract) | **GET** /api/v1/raw_contracts/{raw_contractId} |  |
| [**getRawContracts**](DefaultApi.md#getrawcontracts) | **GET** /api/v1/raw_contracts |  |
| [**getRequestedItem**](DefaultApi.md#getrequesteditem) | **GET** /api/v1/requested_items/{requestedItemId} |  |
| [**getRequestedItems**](DefaultApi.md#getrequesteditems) | **GET** /api/v1/requested_items |  |
| [**getRevenueSearch**](DefaultApi.md#getrevenuesearch) | **GET** /api/v1/revenue_searches/{revenueSearchId} |  |
| [**getRevenueSearches**](DefaultApi.md#getrevenuesearches) | **GET** /api/v1/revenue_searches |  |
| [**getSchool**](DefaultApi.md#getschool) | **GET** /api/v1/schools/{schoolId} |  |
| [**getSchoolAlternateNames**](DefaultApi.md#getschoolalternatenames) | **GET** /api/v1/schools/{schoolId}/alternate_names |  |
| [**getSchoolGameContracts**](DefaultApi.md#getschoolgamecontracts) | **GET** /api/v1/schools/{schoolId}/game_contracts |  |
| [**getSchoolGroup**](DefaultApi.md#getschoolgroup) | **GET** /api/v1/school_groups/{schoolGroupId} |  |
| [**getSchoolGroupAdminCompensation**](DefaultApi.md#getschoolgroupadmincompensation) | **GET** /api/v1/school_groups/{schoolGroupId}/admin_compensation |  |
| [**getSchoolGroupCashflowStats**](DefaultApi.md#getschoolgroupcashflowstats) | **GET** /api/v1/school_groups/{schoolGroupId}/cashflow_stats |  |
| [**getSchoolGroupDepartmentStaff**](DefaultApi.md#getschoolgroupdepartmentstaff) | **GET** /api/v1/school_groups/{schoolGroupId}/department_staff |  |
| [**getSchoolGroupDirectorsCup**](DefaultApi.md#getschoolgroupdirectorscup) | **GET** /api/v1/school_groups/{schoolGroupId}/directors_cup |  |
| [**getSchoolGroupPositionStats**](DefaultApi.md#getschoolgrouppositionstats) | **GET** /api/v1/school_groups/{schoolGroupId}/position_stats |  |
| [**getSchoolGroupSportCompensation**](DefaultApi.md#getschoolgroupsportcompensation) | **GET** /api/v1/school_groups/{schoolGroupId}/sport_compensation |  |
| [**getSchools**](DefaultApi.md#getschools) | **GET** /api/v1/schools |  |
| [**getSchoolsAlmaMater**](DefaultApi.md#getschoolsalmamater) | **GET** /api/v1/schools/alma_mater |  |
| [**getSeason**](DefaultApi.md#getseason) | **GET** /api/v1/seasons/{seasonId} |  |
| [**getSeasons**](DefaultApi.md#getseasons) | **GET** /api/v1/seasons |  |
| [**getSimilarCoaches**](DefaultApi.md#getsimilarcoaches) | **GET** /api/v1/coaches/{coachId}/similar_coaches |  |
| [**getSport**](DefaultApi.md#getsport) | **GET** /api/v1/sports/{sportId} |  |
| [**getSports**](DefaultApi.md#getsports) | **GET** /api/v1/sports |  |
| [**getSubdivision**](DefaultApi.md#getsubdivision) | **GET** /api/v1/subdivisions/{subdivisionId} |  |
| [**getSubdivisionAdminCompensation**](DefaultApi.md#getsubdivisionadmincompensation) | **GET** /api/v1/subdivisions/{subdivisionId}/admin_compensation |  |
| [**getSubdivisionCashflowStats**](DefaultApi.md#getsubdivisioncashflowstats) | **GET** /api/v1/subdivisions/{subdivisionId}/cashflow_stats |  |
| [**getSubdivisionDepartmentStaff**](DefaultApi.md#getsubdivisiondepartmentstaff) | **GET** /api/v1/subdivisions/{subdivisionId}/department_staff |  |
| [**getSubdivisionDirectorsCup**](DefaultApi.md#getsubdivisiondirectorscup) | **GET** /api/v1/subdivisions/{subdivisionId}/directors_cup |  |
| [**getSubdivisionPositionStats**](DefaultApi.md#getsubdivisionpositionstats) | **GET** /api/v1/subdivisions/{subdivisionId}/position_stats |  |
| [**getSubdivisionSportCompensation**](DefaultApi.md#getsubdivisionsportcompensation) | **GET** /api/v1/subdivisions/{subdivisionId}/sport_compensation |  |
| [**getSubdivisions**](DefaultApi.md#getsubdivisions) | **GET** /api/v1/subdivisions |  |
| [**getSubscription**](DefaultApi.md#getsubscription) | **GET** /api/v1/subscriptions/{subscriptionId} |  |
| [**getSubscriptions**](DefaultApi.md#getsubscriptions) | **GET** /api/v1/subscriptions |  |
| [**getSystemSettings**](DefaultApi.md#getsystemsettings) | **GET** /api/v1/system_setting |  |
| [**getTeamScheduleDetail**](DefaultApi.md#getteamscheduledetail) | **GET** /api/v1/team_schedule_details/{sport_name}/{school_id} |  |
| [**getTeamScheduleDetailCoaches**](DefaultApi.md#getteamscheduledetailcoaches) | **GET** /api/v1/team_schedule_details/{sport_name}/{school_id}/coaches |  |
| [**getTeamScheduleDetailGamePosts**](DefaultApi.md#getteamscheduledetailgameposts) | **GET** /api/v1/team_schedule_details/{sport_name}/{school_id}/game_posts |  |
| [**getTeamScheduleDetailPlayerData**](DefaultApi.md#getteamscheduledetailplayerdata) | **GET** /api/v1/team_schedule_details/{sport_name}/{school_id}/player_data |  |
| [**getTeamScheduleDetailSchedule**](DefaultApi.md#getteamscheduledetailschedule) | **GET** /api/v1/team_schedule_details/{sport_name}/{school_id}/schedule |  |
| [**getTeamScheduleDetailScheduleOverlap**](DefaultApi.md#getteamscheduledetailscheduleoverlap) | **GET** /api/v1/team_schedule_details/{sport_name}/{school_id}/schedule_overlap |  |
| [**getTeamScheduleFavorites**](DefaultApi.md#getteamschedulefavorites) | **GET** /api/v1/team_schedule_favorites |  |
| [**getTeamScheduleNote**](DefaultApi.md#getteamschedulenote) | **GET** /api/v1/team_schedule_notes/{fil_team_id} |  |
| [**getTeamScheduleSearches**](DefaultApi.md#getteamschedulesearches) | **GET** /api/v1/team_schedule_searches |  |
| [**getUser**](DefaultApi.md#getuser) | **GET** /api/v1/users/{userId} |  |
| [**getUserActivitySummaries**](DefaultApi.md#getuseractivitysummaries) | **GET** /api/v1/user_activity_summaries |  |
| [**getUserActivitySummary**](DefaultApi.md#getuseractivitysummary) | **GET** /api/v1/user_activity_summaries/{user_activity_summaryId} |  |
| [**getUserRequest**](DefaultApi.md#getuserrequest) | **GET** /api/v1/user_requests/{user_requestId} |  |
| [**getUserRequests**](DefaultApi.md#getuserrequests) | **GET** /api/v1/user_requests |  |
| [**getUsers**](DefaultApi.md#getusers) | **GET** /api/v1/users |  |
| [**getVendor**](DefaultApi.md#getvendor) | **GET** /api/v1/vendors/{vendorId} |  |
| [**getVendors**](DefaultApi.md#getvendors) | **GET** /api/v1/vendors |  |
| [**getWireChanges**](DefaultApi.md#getwirechanges) | **GET** /api/v1/wire_changes |  |
| [**listNotes**](DefaultApi.md#listnotes) | **GET** /api/v1/notes/list |  |
| [**regenerateRawContractPdf**](DefaultApi.md#regeneraterawcontractpdf) | **POST** /api/v1/raw_contracts/{raw_contractId}/regenerate_pdf |  |
| [**searchCoaches**](DefaultApi.md#searchcoaches) | **POST** /api/v1/coaches/search |  |
| [**sendOtpCode**](DefaultApi.md#sendotpcode) | **POST** /api/v1/otp/send_code |  |
| [**unstractRawContractPdfText**](DefaultApi.md#unstractrawcontractpdftextoperation) | **POST** /api/v1/raw_contracts/{raw_contractId}/unstract_pdf_text |  |
| [**updateCashflow**](DefaultApi.md#updatecashflow) | **PUT** /api/v1/cashflows/{cashflowId} |  |
| [**updateCoach**](DefaultApi.md#updatecoach) | **PATCH** /api/v1/coaches/{coachId} |  |
| [**updateCompensation**](DefaultApi.md#updatecompensation) | **PATCH** /api/v1/compensations/{compensationId} |  |
| [**updateConference**](DefaultApi.md#updateconference) | **PUT** /api/v1/conferences/{conferenceId} |  |
| [**updateConferenceship**](DefaultApi.md#updateconferenceship) | **PUT** /api/v1/conferenceships/{conferenceshipId} |  |
| [**updateFavorite**](DefaultApi.md#updatefavoriteoperation) | **PATCH** /api/v1/favorites/{id} |  |
| [**updateFavoritesCategory**](DefaultApi.md#updatefavoritescategoryoperation) | **PATCH** /api/v1/favorites_categories/{id} |  |
| [**updateFoiaLabel**](DefaultApi.md#updatefoialabel) | **PATCH** /api/v1/foia_labels/{foiaLabelId} |  |
| [**updateFoiaRequest**](DefaultApi.md#updatefoiarequest) | **PATCH** /api/v1/foia_requests/{foiaRequestId} |  |
| [**updateGameContract**](DefaultApi.md#updategamecontract) | **PATCH** /api/v1/game_contracts/{game_contractId} |  |
| [**updateGamePostSearch**](DefaultApi.md#updategamepostsearchoperation) | **PATCH** /api/v1/game_post_searches/{gamePostSearchId} |  |
| [**updateJobPost**](DefaultApi.md#updatejobpost) | **PATCH** /central_jobs/job_posts/{jobPostId} | Update a job post |
| [**updateNote**](DefaultApi.md#updatenoteoperation) | **PATCH** /api/v1/notes/{id} |  |
| [**updatePasswordReset**](DefaultApi.md#updatepasswordresetoperation) | **PUT** /api/v1/password_reset |  |
| [**updatePosition**](DefaultApi.md#updateposition) | **PATCH** /api/v1/positions/{positionId} |  |
| [**updateRequestedItem**](DefaultApi.md#updaterequesteditem) | **PATCH** /api/v1/requested_items/{requestedItemId} |  |
| [**updateSeason**](DefaultApi.md#updateseason) | **PUT** /api/v1/seasons/{seasonId} |  |
| [**updateTeamScheduleFavorite**](DefaultApi.md#updateteamschedulefavoriteoperation) | **PATCH** /api/v1/team_schedule_favorites/{id} |  |
| [**upsertTeamScheduleNote**](DefaultApi.md#upsertteamschedulenoteoperation) | **PUT** /api/v1/team_schedule_notes/{fil_team_id} |  |
| [**userMe**](DefaultApi.md#userme) | **GET** /api/v1/users/me |  |
| [**verifyOtpCode**](DefaultApi.md#verifyotpcodeoperation) | **POST** /api/v1/otp/verify |  |
| [**verifyUserIntercollegiateAccess**](DefaultApi.md#verifyuserintercollegiateaccess) | **GET** /api/v1/users/verify_user_intercollegiate_access |  |



## averageConferenceComp

> AverageCompensation averageConferenceComp(conferenceId, seasonYears, sportIds, positionTypeIds)



Retrieve average compensation for a conference

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { AverageConferenceCompRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of the conference
    conferenceId: 56,
    // Array<number> | Season years
    seasonYears: ...,
    // Array<number> | IDs of the sports
    sportIds: ...,
    // Array<number> | IDs of the position types
    positionTypeIds: ...,
  } satisfies AverageConferenceCompRequest;

  try {
    const data = await api.averageConferenceComp(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **conferenceId** | `number` | ID of the conference | [Defaults to `undefined`] |
| **seasonYears** | `Array<number>` | Season years | |
| **sportIds** | `Array<number>` | IDs of the sports | |
| **positionTypeIds** | `Array<number>` | IDs of the position types | |

### Return type

[**AverageCompensation**](AverageCompensation.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Average compensation calculated |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## averageDivisionComp

> AverageCompensation averageDivisionComp(divisionId, seasonYears, sportIds, positionTypeIds)



Retrieve average compensation for a division

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { AverageDivisionCompRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of the division
    divisionId: 56,
    // Array<number> | Season years
    seasonYears: ...,
    // Array<number> | IDs of the sports
    sportIds: ...,
    // Array<number> | IDs of the position types
    positionTypeIds: ...,
  } satisfies AverageDivisionCompRequest;

  try {
    const data = await api.averageDivisionComp(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **divisionId** | `number` | ID of the division | [Defaults to `undefined`] |
| **seasonYears** | `Array<number>` | Season years | |
| **sportIds** | `Array<number>` | IDs of the sports | |
| **positionTypeIds** | `Array<number>` | IDs of the position types | |

### Return type

[**AverageCompensation**](AverageCompensation.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Average compensation calculated |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## averageSchoolComp

> AverageCompensation averageSchoolComp(schoolId, seasonYears, sportIds, positionTypeIds)



Retrieve average compensation for a school

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { AverageSchoolCompRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of the school
    schoolId: 56,
    // Array<number> | Season years
    seasonYears: ...,
    // Array<number> | IDs of the sports
    sportIds: ...,
    // Array<number> | IDs of the position types
    positionTypeIds: ...,
  } satisfies AverageSchoolCompRequest;

  try {
    const data = await api.averageSchoolComp(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **schoolId** | `number` | ID of the school | [Defaults to `undefined`] |
| **seasonYears** | `Array<number>` | Season years | |
| **sportIds** | `Array<number>` | IDs of the sports | |
| **positionTypeIds** | `Array<number>` | IDs of the position types | |

### Return type

[**AverageCompensation**](AverageCompensation.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Average compensation calculated |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## averageSubdivisionComp

> AverageCompensation averageSubdivisionComp(subdivisionId, seasonYears, sportIds, positionTypeIds)



Retrieve average compensation for a subdivision

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { AverageSubdivisionCompRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of the subdivision
    subdivisionId: 56,
    // Array<number> | Season years
    seasonYears: ...,
    // Array<number> | IDs of the sports
    sportIds: ...,
    // Array<number> | IDs of the position types
    positionTypeIds: ...,
  } satisfies AverageSubdivisionCompRequest;

  try {
    const data = await api.averageSubdivisionComp(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **subdivisionId** | `number` | ID of the subdivision | [Defaults to `undefined`] |
| **seasonYears** | `Array<number>` | Season years | |
| **sportIds** | `Array<number>` | IDs of the sports | |
| **positionTypeIds** | `Array<number>` | IDs of the position types | |

### Return type

[**AverageCompensation**](AverageCompensation.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Average compensation calculated |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## compareColi

> COLIAdjusted compareColi(schoolId, otherPersonSchoolId, otherPersonTotalCompensation)



Retrieve the COLI-adjusted compensation

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { CompareColiRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of the School
    schoolId: 56,
    // number | ID of the other person School
    otherPersonSchoolId: 56,
    // number | Other person total compensation amount
    otherPersonTotalCompensation: 56,
  } satisfies CompareColiRequest;

  try {
    const data = await api.compareColi(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **schoolId** | `number` | ID of the School | [Defaults to `undefined`] |
| **otherPersonSchoolId** | `number` | ID of the other person School | [Defaults to `undefined`] |
| **otherPersonTotalCompensation** | `number` | Other person total compensation amount | [Defaults to `undefined`] |

### Return type

[**COLIAdjusted**](COLIAdjusted.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | COLI-adjusted compensation found |  -  |
| **404** | Not Found |  -  |
| **422** | Unprocessable Entity |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createCashflow

> Cashflow createCashflow(cashflow)



Create a new Cashflow

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { CreateCashflowRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // Cashflow (optional)
    cashflow: ...,
  } satisfies CreateCashflowRequest;

  try {
    const data = await api.createCashflow(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **cashflow** | [Cashflow](Cashflow.md) |  | [Optional] |

### Return type

[**Cashflow**](Cashflow.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Cashflow was created |  -  |
| **401** | Unauthorized |  -  |
| **422** | Unable to create the Cashflow |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createCoach

> Coach createCoach(coach)



Create a coach

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { CreateCoachRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // Coach | Coach attributes to create. Accepts standard coach fields including first_name, last_name, email, phone, bio, bio_text, and related profile fields.
    coach: ...,
  } satisfies CreateCoachRequest;

  try {
    const data = await api.createCoach(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **coach** | [Coach](Coach.md) | Coach attributes to create. Accepts standard coach fields including first_name, last_name, email, phone, bio, bio_text, and related profile fields. | |

### Return type

[**Coach**](Coach.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Coach was created |  -  |
| **401** | Unauthorized |  -  |
| **422** | Unable to create coach |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createConference

> Conference createConference(conference)



Create a new Conference

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { CreateConferenceRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // Conference (optional)
    conference: ...,
  } satisfies CreateConferenceRequest;

  try {
    const data = await api.createConference(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **conference** | [Conference](Conference.md) |  | [Optional] |

### Return type

[**Conference**](Conference.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Conference was created |  -  |
| **401** | Unauthorized |  -  |
| **422** | Unable to create the Conference |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createConferenceship

> Conferenceship createConferenceship(conferenceship)



Create a new Conferenceship

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { CreateConferenceshipRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // Conferenceship (optional)
    conferenceship: ...,
  } satisfies CreateConferenceshipRequest;

  try {
    const data = await api.createConferenceship(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **conferenceship** | [Conferenceship](Conferenceship.md) |  | [Optional] |

### Return type

[**Conferenceship**](Conferenceship.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Conferenceship was created |  -  |
| **401** | Unauthorized |  -  |
| **422** | Unable to create the Conferenceship |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createFavorite

> CreateFavorite201Response createFavorite(createFavoriteRequest)



Add a favorite for the current user

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { CreateFavoriteOperationRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // CreateFavoriteRequest
    createFavoriteRequest: ...,
  } satisfies CreateFavoriteOperationRequest;

  try {
    const data = await api.createFavorite(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **createFavoriteRequest** | [CreateFavoriteRequest](CreateFavoriteRequest.md) |  | |

### Return type

[**CreateFavorite201Response**](CreateFavorite201Response.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Favorite created |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createFavoritesCategory

> GetFavoritesCategories200ResponseInner createFavoritesCategory(createFavoritesCategoryRequest)



Create a new favorites category

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { CreateFavoritesCategoryOperationRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // CreateFavoritesCategoryRequest
    createFavoritesCategoryRequest: ...,
  } satisfies CreateFavoritesCategoryOperationRequest;

  try {
    const data = await api.createFavoritesCategory(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **createFavoritesCategoryRequest** | [CreateFavoritesCategoryRequest](CreateFavoritesCategoryRequest.md) |  | |

### Return type

[**GetFavoritesCategories200ResponseInner**](GetFavoritesCategories200ResponseInner.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Category created |  -  |
| **401** | Unauthorized |  -  |
| **422** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createFoiaLabel

> FoiaLabel createFoiaLabel(foiaLabel)



Create a new foia label

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { CreateFoiaLabelRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // FoiaLabel | Foia label to create
    foiaLabel: ...,
  } satisfies CreateFoiaLabelRequest;

  try {
    const data = await api.createFoiaLabel(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **foiaLabel** | [FoiaLabel](FoiaLabel.md) | Foia label to create | |

### Return type

[**FoiaLabel**](FoiaLabel.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Foia label was created |  -  |
| **401** | Unauthorized |  -  |
| **422** | Unable to create foia label |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createFoiaRequest

> FoiaRequest createFoiaRequest(foiaRequest)



Create a new foia request

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { CreateFoiaRequestRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // FoiaRequest | Foia request to create
    foiaRequest: ...,
  } satisfies CreateFoiaRequestRequest;

  try {
    const data = await api.createFoiaRequest(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **foiaRequest** | [FoiaRequest](FoiaRequest.md) | Foia request to create | |

### Return type

[**FoiaRequest**](FoiaRequest.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Foia request was created |  -  |
| **401** | Unauthorized |  -  |
| **422** | Unable to create foia request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createGamePostSearch

> GamePostDetail createGamePostSearch(createGamePostSearchRequest)



Create a new game post

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { CreateGamePostSearchOperationRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // CreateGamePostSearchRequest
    createGamePostSearchRequest: ...,
  } satisfies CreateGamePostSearchOperationRequest;

  try {
    const data = await api.createGamePostSearch(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **createGamePostSearchRequest** | [CreateGamePostSearchRequest](CreateGamePostSearchRequest.md) |  | |

### Return type

[**GamePostDetail**](GamePostDetail.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Game post created |  -  |
| **422** | Validation error |  -  |
| **403** | Forbidden — only school accounts can create game posts |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createJobPost

> JobPost createJobPost(jobPost)

Create a job post

Create a job post

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { CreateJobPostRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // JobPost (optional)
    jobPost: ...,
  } satisfies CreateJobPostRequest;

  try {
    const data = await api.createJobPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **jobPost** | [JobPost](JobPost.md) |  | [Optional] |

### Return type

[**JobPost**](JobPost.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Job post was created |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createNote

> Note createNote(createNoteRequest)



Create a note for the current user on a notable object

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { CreateNoteOperationRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // CreateNoteRequest
    createNoteRequest: ...,
  } satisfies CreateNoteOperationRequest;

  try {
    const data = await api.createNote(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **createNoteRequest** | [CreateNoteRequest](CreateNoteRequest.md) |  | |

### Return type

[**Note**](Note.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Note created |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createPasswordReset

> CreatePasswordReset200Response createPasswordReset(createPasswordResetRequest)



Send password reset instructions to the given email address

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { CreatePasswordResetOperationRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const api = new DefaultApi();

  const body = {
    // CreatePasswordResetRequest
    createPasswordResetRequest: ...,
  } satisfies CreatePasswordResetOperationRequest;

  try {
    const data = await api.createPasswordReset(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **createPasswordResetRequest** | [CreatePasswordResetRequest](CreatePasswordResetRequest.md) |  | |

### Return type

[**CreatePasswordReset200Response**](CreatePasswordReset200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Reset instructions sent successfully |  -  |
| **400** | Missing or blank email parameter |  -  |
| **422** | Email not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createPosition

> Position createPosition(position)



Create a position. If season_id is omitted, a season will be created (or reused) when school_id, sport_id, and year are provided.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { CreatePositionRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // Position | Position attributes to create. Accepts season_id or school_id/sport_id/year, coach_id, title, creation_reason, and position_type_ids.
    position: ...,
  } satisfies CreatePositionRequest;

  try {
    const data = await api.createPosition(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **position** | [Position](Position.md) | Position attributes to create. Accepts season_id or school_id/sport_id/year, coach_id, title, creation_reason, and position_type_ids. | |

### Return type

[**Position**](Position.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Position was created |  -  |
| **401** | Unauthorized |  -  |
| **422** | Unable to create position |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createRequestedItem

> RequestedItem createRequestedItem(requestedItem)



Create a new requested item

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { CreateRequestedItemRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // RequestedItem | Requested item to create
    requestedItem: ...,
  } satisfies CreateRequestedItemRequest;

  try {
    const data = await api.createRequestedItem(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **requestedItem** | [RequestedItem](RequestedItem.md) | Requested item to create | |

### Return type

[**RequestedItem**](RequestedItem.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Requested item was created |  -  |
| **401** | Unauthorized |  -  |
| **422** | Unable to create requested item |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createSeason

> Season createSeason(season)



Create a new Season

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { CreateSeasonRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // Season (optional)
    season: ...,
  } satisfies CreateSeasonRequest;

  try {
    const data = await api.createSeason(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **season** | [Season](Season.md) |  | [Optional] |

### Return type

[**Season**](Season.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Season was created |  -  |
| **401** | Unauthorized |  -  |
| **422** | Unable to create the Season |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createTeamScheduleFavorite

> CreateTeamScheduleFavorite201Response createTeamScheduleFavorite(createTeamScheduleFavoriteRequest)



Add a FilTeam to favorites

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { CreateTeamScheduleFavoriteOperationRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // CreateTeamScheduleFavoriteRequest
    createTeamScheduleFavoriteRequest: ...,
  } satisfies CreateTeamScheduleFavoriteOperationRequest;

  try {
    const data = await api.createTeamScheduleFavorite(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **createTeamScheduleFavoriteRequest** | [CreateTeamScheduleFavoriteRequest](CreateTeamScheduleFavoriteRequest.md) |  | |

### Return type

[**CreateTeamScheduleFavorite201Response**](CreateTeamScheduleFavorite201Response.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Favorite created |  -  |
| **400** | Bad request (missing favoritable_id) |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteCashflow

> deleteCashflow(cashflowId)



Delete a single Cashflow

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { DeleteCashflowRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of the Cashflow
    cashflowId: 56,
  } satisfies DeleteCashflowRequest;

  try {
    const data = await api.deleteCashflow(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **cashflowId** | `number` | ID of the Cashflow | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Cashflow was deleted |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteConference

> deleteConference(conferenceId)



Delete a single Conference

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { DeleteConferenceRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of the Conference
    conferenceId: 56,
  } satisfies DeleteConferenceRequest;

  try {
    const data = await api.deleteConference(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **conferenceId** | `number` | ID of the Conference | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Conference was deleted |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteConferenceship

> deleteConferenceship(conferenceshipId)



Delete a single Conferenceship

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { DeleteConferenceshipRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of the Conferenceship
    conferenceshipId: 56,
  } satisfies DeleteConferenceshipRequest;

  try {
    const data = await api.deleteConferenceship(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **conferenceshipId** | `number` | ID of the Conferenceship | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Conferenceship was deleted |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteFavorite

> DeleteFavorite200Response deleteFavorite(id)



Remove a favorite by its ID

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { DeleteFavoriteRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | The favorite record ID
    id: 56,
  } satisfies DeleteFavoriteRequest;

  try {
    const data = await api.deleteFavorite(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `number` | The favorite record ID | [Defaults to `undefined`] |

### Return type

[**DeleteFavorite200Response**](DeleteFavorite200Response.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Favorite removed |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteFavoritesCategory

> DeleteFavorite200Response deleteFavoritesCategory(id)



Delete a favorites category

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { DeleteFavoritesCategoryRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | The category ID
    id: 56,
  } satisfies DeleteFavoritesCategoryRequest;

  try {
    const data = await api.deleteFavoritesCategory(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `number` | The category ID | [Defaults to `undefined`] |

### Return type

[**DeleteFavorite200Response**](DeleteFavorite200Response.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Category deleted |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteFoiaLabel

> deleteFoiaLabel(foiaLabelId)



Delete a single foia label

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { DeleteFoiaLabelRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of foia label to delete
    foiaLabelId: 56,
  } satisfies DeleteFoiaLabelRequest;

  try {
    const data = await api.deleteFoiaLabel(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **foiaLabelId** | `number` | ID of foia label to delete | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Foia label was deleted |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteFoiaRequest

> deleteFoiaRequest(foiaRequestId)



Delete a single foia request

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { DeleteFoiaRequestRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of foia request to delete
    foiaRequestId: 56,
  } satisfies DeleteFoiaRequestRequest;

  try {
    const data = await api.deleteFoiaRequest(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **foiaRequestId** | `number` | ID of foia request to delete | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Foia request was deleted |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteGameContractRawContract

> deleteGameContractRawContract(gameContractId)



Delete the raw contract attached to a game contract

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { DeleteGameContractRawContractRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of the GameContract
    gameContractId: 56,
  } satisfies DeleteGameContractRawContractRequest;

  try {
    const data = await api.deleteGameContractRawContract(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **gameContractId** | `number` | ID of the GameContract | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Raw contract was deleted |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteGamePostSearch

> DeleteGamePostSearch200Response deleteGamePostSearch(gamePostSearchId)



Delete a game post

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { DeleteGamePostSearchRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number
    gamePostSearchId: 56,
  } satisfies DeleteGamePostSearchRequest;

  try {
    const data = await api.deleteGamePostSearch(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **gamePostSearchId** | `number` |  | [Defaults to `undefined`] |

### Return type

[**DeleteGamePostSearch200Response**](DeleteGamePostSearch200Response.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Game post deleted |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteJobPost

> deleteJobPost(jobPostId)

Delete a job post

Delete a job post

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { DeleteJobPostRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of job post to delete
    jobPostId: 789,
  } satisfies DeleteJobPostRequest;

  try {
    const data = await api.deleteJobPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **jobPostId** | `number` | ID of job post to delete | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Job post was deleted |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteNote

> DeleteNote200Response deleteNote(id)



Delete a note

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { DeleteNoteRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number
    id: 56,
  } satisfies DeleteNoteRequest;

  try {
    const data = await api.deleteNote(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `number` |  | [Defaults to `undefined`] |

### Return type

[**DeleteNote200Response**](DeleteNote200Response.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Note deleted |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deletePosition

> deletePosition(positionId)



Delete a single position

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { DeletePositionRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of position to delete
    positionId: 56,
  } satisfies DeletePositionRequest;

  try {
    const data = await api.deletePosition(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **positionId** | `number` | ID of position to delete | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Position was deleted |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteRequestedItem

> deleteRequestedItem(requestedItemId)



Delete a single requested item

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { DeleteRequestedItemRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of requested item to delete
    requestedItemId: 56,
  } satisfies DeleteRequestedItemRequest;

  try {
    const data = await api.deleteRequestedItem(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **requestedItemId** | `number` | ID of requested item to delete | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Requested item was deleted |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteSeason

> deleteSeason(seasonId)



Delete a single Season

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { DeleteSeasonRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of the Season
    seasonId: 56,
  } satisfies DeleteSeasonRequest;

  try {
    const data = await api.deleteSeason(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **seasonId** | `number` | ID of the Season | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Season was deleted |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteTeamScheduleFavorite

> DeleteNote200Response deleteTeamScheduleFavorite(id)



Remove a FilTeam favorite

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { DeleteTeamScheduleFavoriteRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | The favorite record ID
    id: 56,
  } satisfies DeleteTeamScheduleFavoriteRequest;

  try {
    const data = await api.deleteTeamScheduleFavorite(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `number` | The favorite record ID | [Defaults to `undefined`] |

### Return type

[**DeleteNote200Response**](DeleteNote200Response.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Favorite removed |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteTeamScheduleNote

> deleteTeamScheduleNote(filTeamId)



Delete the current user\&#39;s note for a team.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { DeleteTeamScheduleNoteRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string
    filTeamId: filTeamId_example,
  } satisfies DeleteTeamScheduleNoteRequest;

  try {
    const data = await api.deleteTeamScheduleNote(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **filTeamId** | `string` |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Note deleted |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAdministrator

> Administrator getAdministrator(administratorId)



Retrieve a single administrator

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetAdministratorRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of administrator to retrieve
    administratorId: 56,
  } satisfies GetAdministratorRequest;

  try {
    const data = await api.getAdministrator(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **administratorId** | `number` | ID of administrator to retrieve | [Defaults to `undefined`] |

### Return type

[**Administrator**](Administrator.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Administrator was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAdministratorSearches

> AdministratorSearchResultCollection getAdministratorSearches(page, perPage, q, favoritesOnly, contractExpiresOn)



Search administrators with filtering, pagination, and comp stats (React UI endpoint)

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetAdministratorSearchesRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
    // string | When \"1\" or \"true\", restrict results to the current user\'s favorited administrators (optional)
    favoritesOnly: favoritesOnly_example,
    // string | Filter by contract expiration. Use \"expired\" or a date range like \"2025-01-01..2025-12-31\" (optional)
    contractExpiresOn: contractExpiresOn_example,
  } satisfies GetAdministratorSearchesRequest;

  try {
    const data = await api.getAdministratorSearches(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |
| **favoritesOnly** | `string` | When \&quot;1\&quot; or \&quot;true\&quot;, restrict results to the current user\&#39;s favorited administrators | [Optional] [Defaults to `undefined`] |
| **contractExpiresOn** | `string` | Filter by contract expiration. Use \&quot;expired\&quot; or a date range like \&quot;2025-01-01..2025-12-31\&quot; | [Optional] [Defaults to `undefined`] |

### Return type

[**AdministratorSearchResultCollection**](AdministratorSearchResultCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Administrator search results |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAdministrators

> AdministratorCollection getAdministrators(page, perPage, q)



Retrieve some or all administrators

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetAdministratorsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetAdministratorsRequest;

  try {
    const data = await api.getAdministrators(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**AdministratorCollection**](AdministratorCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Administrators were found |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAthleticProfileSearch

> AthleticProfileShow getAthleticProfileSearch(athleticProfileSearchId, sport, year)



Get school athletic profile with overview data

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetAthleticProfileSearchRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | School ID
    athleticProfileSearchId: 56,
    // string | Sport key (defaults to ADMIN for department overview) (optional)
    sport: sport_example,
    // number | Performance year (optional)
    year: 56,
  } satisfies GetAthleticProfileSearchRequest;

  try {
    const data = await api.getAthleticProfileSearch(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **athleticProfileSearchId** | `number` | School ID | [Defaults to `undefined`] |
| **sport** | `string` | Sport key (defaults to ADMIN for department overview) | [Optional] [Defaults to `&#39;ADMIN&#39;`] |
| **year** | `number` | Performance year | [Optional] [Defaults to `undefined`] |

### Return type

[**AthleticProfileShow**](AthleticProfileShow.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Athletic profile data |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAuditedFinancialReportStatus

> AuditedFinancialReportStatus getAuditedFinancialReportStatus(auditedFinancialReportStatusId)



Retrieve a single audited financial report status

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetAuditedFinancialReportStatusRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of audited financial report status to retrieve
    auditedFinancialReportStatusId: 56,
  } satisfies GetAuditedFinancialReportStatusRequest;

  try {
    const data = await api.getAuditedFinancialReportStatus(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **auditedFinancialReportStatusId** | `number` | ID of audited financial report status to retrieve | [Defaults to `undefined`] |

### Return type

[**AuditedFinancialReportStatus**](AuditedFinancialReportStatus.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Audited financial report status was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAuditedFinancialReportStatuses

> AuditedFinancialReportStatusCollection getAuditedFinancialReportStatuses(page, perPage, q)



Retrieve some or all audited financial report statuses

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetAuditedFinancialReportStatusesRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetAuditedFinancialReportStatusesRequest;

  try {
    const data = await api.getAuditedFinancialReportStatuses(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**AuditedFinancialReportStatusCollection**](AuditedFinancialReportStatusCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Audited financial report statuses were found |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCashflow

> Cashflow getCashflow(cashflowId)



Retrieve a single Cashflow

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetCashflowRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of the Cashflow
    cashflowId: 56,
  } satisfies GetCashflowRequest;

  try {
    const data = await api.getCashflow(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **cashflowId** | `number` | ID of the Cashflow | [Defaults to `undefined`] |

### Return type

[**Cashflow**](Cashflow.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Cashflow was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCashflowGroups

> CashflowGroupsResponse getCashflowGroups()



Retrieve all cashflow groups (revenues and expenses) for Select Tables UI

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetCashflowGroupsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  try {
    const data = await api.getCashflowGroups();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**CashflowGroupsResponse**](CashflowGroupsResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Cashflow groups were found |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCashflows

> CashflowCollection getCashflows(page, perPage, q)



Retrieve some or all cashflows

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetCashflowsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetCashflowsRequest;

  try {
    const data = await api.getCashflows(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**CashflowCollection**](CashflowCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Cashflows were found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCategories

> CategoryCollection getCategories(page, perPage, q)

List all categories

List all categories

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetCategoriesRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetCategoriesRequest;

  try {
    const data = await api.getCategories(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**CategoryCollection**](CategoryCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Categories were found |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCoach

> Coach getCoach(coachId)



Retrieve a single coach

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetCoachRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of coach to retrieve
    coachId: 56,
  } satisfies GetCoachRequest;

  try {
    const data = await api.getCoach(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **coachId** | `number` | ID of coach to retrieve | [Defaults to `undefined`] |

### Return type

[**Coach**](Coach.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Coach was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCoachCompensation

> CoachCompensation getCoachCompensation(coachesIds, userSchoolId)



Retrieve compensation estimate (base salary, year, and COL-adjusted salary) for a private school coach

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetCoachCompensationRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // Array<number> | IDs of the coaches
    coachesIds: ...,
    // number | ID of the school whose cost-of-living index should be used
    userSchoolId: 56,
  } satisfies GetCoachCompensationRequest;

  try {
    const data = await api.getCoachCompensation(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **coachesIds** | `Array<number>` | IDs of the coaches | |
| **userSchoolId** | `number` | ID of the school whose cost-of-living index should be used | [Defaults to `undefined`] |

### Return type

[**CoachCompensation**](CoachCompensation.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Coach compensation calculated successfully |  -  |
| **401** | Unauthorized |  -  |
| **404** | Coach or school not found |  -  |
| **422** | Missing or invalid parameters |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCoachSearch

> CoachProfile getCoachSearch(id)



Get coach profile header data

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetCoachSearchRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string | Coach ID or friendly slug
    id: id_example,
  } satisfies GetCoachSearchRequest;

  try {
    const data = await api.getCoachSearch(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | Coach ID or friendly slug | [Defaults to `undefined`] |

### Return type

[**CoachProfile**](CoachProfile.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Coach profile data |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCoachSearchColi

> ColiData getCoachSearchColi(id, schoolId)



Get cost-of-living adjusted salary for a coach relative to a given school

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetCoachSearchColiRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string | Coach ID or friendly slug
    id: id_example,
    // number | School ID to compare cost of living against
    schoolId: 56,
  } satisfies GetCoachSearchColiRequest;

  try {
    const data = await api.getCoachSearchColi(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | Coach ID or friendly slug | [Defaults to `undefined`] |
| **schoolId** | `number` | School ID to compare cost of living against | [Defaults to `undefined`] |

### Return type

[**ColiData**](ColiData.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Cost of living adjusted salary data |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCoachSearchCompensation

> CoachCompensationTab getCoachSearchCompensation(id)



Get coach compensation tab data including charts, full history, comparisons, and sidebar

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetCoachSearchCompensationRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string | Coach ID or friendly slug
    id: id_example,
  } satisfies GetCoachSearchCompensationRequest;

  try {
    const data = await api.getCoachSearchCompensation(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | Coach ID or friendly slug | [Defaults to `undefined`] |

### Return type

[**CoachCompensationTab**](CoachCompensationTab.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Coach compensation tab data |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCoachSearchCoworkerHistory

> CoachCoworkerHistoryTab getCoachSearchCoworkerHistory(id)



Get coach coworker history tab data showing coaches and administrators who worked at the same school

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetCoachSearchCoworkerHistoryRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string | Coach ID or friendly slug
    id: id_example,
  } satisfies GetCoachSearchCoworkerHistoryRequest;

  try {
    const data = await api.getCoachSearchCoworkerHistory(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | Coach ID or friendly slug | [Defaults to `undefined`] |

### Return type

[**CoachCoworkerHistoryTab**](CoachCoworkerHistoryTab.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Coach coworker history tab data |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCoachSearchOverview

> CoachProfileOverview getCoachSearchOverview(id)



Get coach profile overview tab data including compensations, positions, snapshot, and videos

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetCoachSearchOverviewRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string | Coach ID or friendly slug
    id: id_example,
  } satisfies GetCoachSearchOverviewRequest;

  try {
    const data = await api.getCoachSearchOverview(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | Coach ID or friendly slug | [Defaults to `undefined`] |

### Return type

[**CoachProfileOverview**](CoachProfileOverview.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Coach profile overview data |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCoachSearchRecord

> CoachRecordTab getCoachSearchRecord(id)



Get coach record tab data with full position/season details and conference/postseason data

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetCoachSearchRecordRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string | Coach ID or friendly slug
    id: id_example,
  } satisfies GetCoachSearchRecordRequest;

  try {
    const data = await api.getCoachSearchRecord(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | Coach ID or friendly slug | [Defaults to `undefined`] |

### Return type

[**CoachRecordTab**](CoachRecordTab.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Coach record tab data |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCoachSearchVideos

> CoachVideosTab getCoachSearchVideos(id)



Get coach videos tab data with all approved YouTube videos

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetCoachSearchVideosRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string | Coach ID or friendly slug
    id: id_example,
  } satisfies GetCoachSearchVideosRequest;

  try {
    const data = await api.getCoachSearchVideos(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | Coach ID or friendly slug | [Defaults to `undefined`] |

### Return type

[**CoachVideosTab**](CoachVideosTab.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Coach videos tab data |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCoachSearches

> CoachSearchResultCollection getCoachSearches(page, perPage, q, positionTypeId, contractExpiresOn)



Search coaches with filtering and pagination

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetCoachSearchesRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
    // number | Filter by position type (expands to group if position is a group stub) (optional)
    positionTypeId: 56,
    // string | Filter by contract expiration. Use \"expired\" for expired contracts, or a date range in \"YYYY-MM-DD..YYYY-MM-DD\" format. (optional)
    contractExpiresOn: contractExpiresOn_example,
  } satisfies GetCoachSearchesRequest;

  try {
    const data = await api.getCoachSearches(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |
| **positionTypeId** | `number` | Filter by position type (expands to group if position is a group stub) | [Optional] [Defaults to `undefined`] |
| **contractExpiresOn** | `string` | Filter by contract expiration. Use \&quot;expired\&quot; for expired contracts, or a date range in \&quot;YYYY-MM-DD..YYYY-MM-DD\&quot; format. | [Optional] [Defaults to `undefined`] |

### Return type

[**CoachSearchResultCollection**](CoachSearchResultCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Coach search results |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCoaches

> CoachCollection getCoaches(page, perPage, q)



Retrieve some or all coaches

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetCoachesRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetCoachesRequest;

  try {
    const data = await api.getCoaches(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**CoachCollection**](CoachCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Coaches were found |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCompensation

> Compensation getCompensation(compensationId)



Retrieve a single compensation

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetCompensationRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of compensation to retrieve
    compensationId: 56,
  } satisfies GetCompensationRequest;

  try {
    const data = await api.getCompensation(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **compensationId** | `number` | ID of compensation to retrieve | [Defaults to `undefined`] |

### Return type

[**Compensation**](Compensation.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Compensation was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCompensations

> CompensationCollection getCompensations(page, perPage, q)



Retrieve some or all compensations

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetCompensationsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetCompensationsRequest;

  try {
    const data = await api.getCompensations(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**CompensationCollection**](CompensationCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Compensations were found |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getConference

> Conference getConference(conferenceId)



Retrieve a single Conference

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetConferenceRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of the Conference
    conferenceId: 56,
  } satisfies GetConferenceRequest;

  try {
    const data = await api.getConference(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **conferenceId** | `number` | ID of the Conference | [Defaults to `undefined`] |

### Return type

[**Conference**](Conference.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Conference was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getConferenceAdminCompensation

> ConferenceAdminCompensationResponse getConferenceAdminCompensation(conferenceId, year)



Retrieve athletic director compensation table for a conference

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetConferenceAdminCompensationRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of the Conference
    conferenceId: 56,
    // number | Season year (optional)
    year: 56,
  } satisfies GetConferenceAdminCompensationRequest;

  try {
    const data = await api.getConferenceAdminCompensation(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **conferenceId** | `number` | ID of the Conference | [Defaults to `undefined`] |
| **year** | `number` | Season year | [Optional] [Defaults to `undefined`] |

### Return type

[**ConferenceAdminCompensationResponse**](ConferenceAdminCompensationResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Admin compensation data was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getConferenceCashflowStats

> ConferenceCashflowStatsResponse getConferenceCashflowStats(conferenceId, groupIds, year)



Retrieve aggregated cashflow stats (High/Low/Median per sport) for selected cashflow groups

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetConferenceCashflowStatsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of the Conference
    conferenceId: 56,
    // Array<number> | Array of cashflow group IDs to include (optional)
    groupIds: ...,
    // number | Financial year (optional)
    year: 56,
  } satisfies GetConferenceCashflowStatsRequest;

  try {
    const data = await api.getConferenceCashflowStats(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **conferenceId** | `number` | ID of the Conference | [Defaults to `undefined`] |
| **groupIds** | `Array<number>` | Array of cashflow group IDs to include | [Optional] |
| **year** | `number` | Financial year | [Optional] [Defaults to `undefined`] |

### Return type

[**ConferenceCashflowStatsResponse**](ConferenceCashflowStatsResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Conference cashflow stats were found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getConferenceDepartmentStaff

> ConferenceDepartmentStaffResponse getConferenceDepartmentStaff(conferenceId, year, departmentId)



Retrieve department staff compensation for a conference

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetConferenceDepartmentStaffRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of the Conference
    conferenceId: 56,
    // number | Season year (optional)
    year: 56,
    // number | ID of the department PositionType to filter by (optional)
    departmentId: 56,
  } satisfies GetConferenceDepartmentStaffRequest;

  try {
    const data = await api.getConferenceDepartmentStaff(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **conferenceId** | `number` | ID of the Conference | [Defaults to `undefined`] |
| **year** | `number` | Season year | [Optional] [Defaults to `undefined`] |
| **departmentId** | `number` | ID of the department PositionType to filter by | [Optional] [Defaults to `undefined`] |

### Return type

[**ConferenceDepartmentStaffResponse**](ConferenceDepartmentStaffResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Department staff data was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getConferenceDirectorsCup

> ConferenceDirectorsCupResponse getConferenceDirectorsCup(conferenceId)



Retrieve Directors Cup rankings for schools in a conference

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetConferenceDirectorsCupRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of the Conference
    conferenceId: 56,
  } satisfies GetConferenceDirectorsCupRequest;

  try {
    const data = await api.getConferenceDirectorsCup(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **conferenceId** | `number` | ID of the Conference | [Defaults to `undefined`] |

### Return type

[**ConferenceDirectorsCupResponse**](ConferenceDirectorsCupResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Directors Cup data was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getConferencePositionStats

> ConferencePositionStatsResponse getConferencePositionStats(conferenceId, year)



Retrieve aggregated assistant coach position stats (High/Low/Median per sport)

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetConferencePositionStatsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of the Conference
    conferenceId: 56,
    // number | Financial year (optional)
    year: 56,
  } satisfies GetConferencePositionStatsRequest;

  try {
    const data = await api.getConferencePositionStats(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **conferenceId** | `number` | ID of the Conference | [Defaults to `undefined`] |
| **year** | `number` | Financial year | [Optional] [Defaults to `undefined`] |

### Return type

[**ConferencePositionStatsResponse**](ConferencePositionStatsResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Conference position stats were found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getConferenceSportCompensation

> SportCompensationResponse getConferenceSportCompensation(conferenceId, sportId, year)



Retrieve head coach compensation table for a conference sport

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetConferenceSportCompensationRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of the Conference
    conferenceId: 56,
    // number | ID of the Sport
    sportId: 56,
    // number | Season year (optional)
    year: 56,
  } satisfies GetConferenceSportCompensationRequest;

  try {
    const data = await api.getConferenceSportCompensation(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **conferenceId** | `number` | ID of the Conference | [Defaults to `undefined`] |
| **sportId** | `number` | ID of the Sport | [Defaults to `undefined`] |
| **year** | `number` | Season year | [Optional] [Defaults to `undefined`] |

### Return type

[**SportCompensationResponse**](SportCompensationResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Sport compensation data was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getConferences

> ConferenceCollection getConferences(page, perPage, q)



Retrieve some or all conferences

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetConferencesRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetConferencesRequest;

  try {
    const data = await api.getConferences(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**ConferenceCollection**](ConferenceCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Conferences were found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getConferenceship

> Conferenceship getConferenceship(conferenceshipId)



Retrieve a single Conferenceship

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetConferenceshipRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of the Conferenceship
    conferenceshipId: 56,
  } satisfies GetConferenceshipRequest;

  try {
    const data = await api.getConferenceship(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **conferenceshipId** | `number` | ID of the Conferenceship | [Defaults to `undefined`] |

### Return type

[**Conferenceship**](Conferenceship.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Conferenceship was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getConferenceships

> ConferenceshipCollection getConferenceships(page, perPage, q)



Retrieve some or all conferenceships

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetConferenceshipsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetConferenceshipsRequest;

  try {
    const data = await api.getConferenceships(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**ConferenceshipCollection**](ConferenceshipCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Conferenceships were found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getContact

> Contact getContact(contactId)



Retrieve a single contact

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetContactRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of contact to retrieve
    contactId: 56,
  } satisfies GetContactRequest;

  try {
    const data = await api.getContact(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **contactId** | `number` | ID of contact to retrieve | [Defaults to `undefined`] |

### Return type

[**Contact**](Contact.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Contact was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getContacts

> ContactCollection getContacts(page, perPage, q)



Retrieve some or all contacts

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetContactsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetContactsRequest;

  try {
    const data = await api.getContacts(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**ContactCollection**](ContactCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Contacts were found |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getContract

> Contract getContract(contractId)



Retrieve a single contract

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetContractRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of contract to retrieve
    contractId: 56,
  } satisfies GetContractRequest;

  try {
    const data = await api.getContract(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **contractId** | `number` | ID of contract to retrieve | [Defaults to `undefined`] |

### Return type

[**Contract**](Contract.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Contract was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getContracts

> ContractCollection getContracts(page, perPage, q)



Retrieve some or all contracts

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetContractsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetContractsRequest;

  try {
    const data = await api.getContracts(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**ContractCollection**](ContractCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Contracts were found |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDeal

> Deal getDeal(dealId)



Retrieve a single Deal

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetDealRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of the Deal
    dealId: 56,
  } satisfies GetDealRequest;

  try {
    const data = await api.getDeal(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **dealId** | `number` | ID of the Deal | [Defaults to `undefined`] |

### Return type

[**Deal**](Deal.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Deal was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDealSearches

> DealSearchResultCollection getDealSearches(page, perPage, q)



Search deals with filtering and pagination

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetDealSearchesRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetDealSearchesRequest;

  try {
    const data = await api.getDealSearches(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**DealSearchResultCollection**](DealSearchResultCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Deal search results |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDealStatus

> DealStatus getDealStatus(dealStatusId)



Retrieve a single deal status

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetDealStatusRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of deal status to retrieve
    dealStatusId: 56,
  } satisfies GetDealStatusRequest;

  try {
    const data = await api.getDealStatus(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **dealStatusId** | `number` | ID of deal status to retrieve | [Defaults to `undefined`] |

### Return type

[**DealStatus**](DealStatus.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Deal status was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDealStatuses

> DealStatusCollection getDealStatuses(page, perPage, q)



Retrieve some or all deal statuses

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetDealStatusesRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetDealStatusesRequest;

  try {
    const data = await api.getDealStatuses(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**DealStatusCollection**](DealStatusCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Deal statuses were found |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDeals

> DealCollection getDeals(page, perPage, q)



Retrieve some or all deals

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetDealsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetDealsRequest;

  try {
    const data = await api.getDeals(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**DealCollection**](DealCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Deals were found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDepartmentSearches

> DepartmentSearchResultCollection getDepartmentSearches(page, q)



Search school departments with filtering and pagination

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetDepartmentSearchesRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | results page to retrieve. (optional)
    page: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetDepartmentSearchesRequest;

  try {
    const data = await api.getDepartmentSearches(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**DepartmentSearchResultCollection**](DepartmentSearchResultCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Department search results |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDivision

> Division getDivision(divisionId)



Retrieve a single Division

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetDivisionRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of the Division
    divisionId: 56,
  } satisfies GetDivisionRequest;

  try {
    const data = await api.getDivision(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **divisionId** | `number` | ID of the Division | [Defaults to `undefined`] |

### Return type

[**Division**](Division.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Division was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDivisions

> DivisionCollection getDivisions(page, perPage, q)



Retrieve some or all divisions

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetDivisionsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetDivisionsRequest;

  try {
    const data = await api.getDivisions(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**DivisionCollection**](DivisionCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Divisions were found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFavorites

> Array&lt;GetFavorites200ResponseInner&gt; getFavorites(favoritableType, detailed)



Retrieve the current user\&#39;s favorites for a given type. Pass detailed&#x3D;1 for category info.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetFavoritesRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string | The model type (e.g. \"Coach\")
    favoritableType: favoritableType_example,
    // '1' | Pass \"1\" to include category info and favoritable name (optional)
    detailed: detailed_example,
  } satisfies GetFavoritesRequest;

  try {
    const data = await api.getFavorites(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **favoritableType** | `string` | The model type (e.g. \&quot;Coach\&quot;) | [Defaults to `undefined`] |
| **detailed** | `1` | Pass \&quot;1\&quot; to include category info and favoritable name | [Optional] [Defaults to `undefined`] [Enum: 1] |

### Return type

[**Array&lt;GetFavorites200ResponseInner&gt;**](GetFavorites200ResponseInner.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of favorite entries. Shape depends on detailed param. |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFavoritesCategories

> Array&lt;GetFavoritesCategories200ResponseInner&gt; getFavoritesCategories()



List the current user\&#39;s favorites categories

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetFavoritesCategoriesRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  try {
    const data = await api.getFavoritesCategories();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;GetFavoritesCategories200ResponseInner&gt;**](GetFavoritesCategories200ResponseInner.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of categories |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFilterOptions

> GetFilterOptions200Response getFilterOptions(context)



Retrieve static filter options for coach/admin search (years, divisions, sports, position types, geo regions)

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetFilterOptionsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // 'gad' | Filter context: \'gad\' returns only D1/D2 divisions and guarantee sports (Football, M/W Basketball, Baseball, Softball, M/W Volleyball) (optional)
    context: context_example,
  } satisfies GetFilterOptionsRequest;

  try {
    const data = await api.getFilterOptions(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **context** | `gad` | Filter context: \&#39;gad\&#39; returns only D1/D2 divisions and guarantee sports (Football, M/W Basketball, Baseball, Softball, M/W Volleyball) | [Optional] [Defaults to `undefined`] [Enum: gad] |

### Return type

[**GetFilterOptions200Response**](GetFilterOptions200Response.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Filter options retrieved |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFilterOptionsAllSchools

> Array&lt;IdName&gt; getFilterOptionsAllSchools()



Retrieve all accessible schools for filter dropdowns

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetFilterOptionsAllSchoolsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  try {
    const data = await api.getFilterOptionsAllSchools();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;IdName&gt;**](IdName.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Schools retrieved |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFilterOptionsConferences

> Array&lt;IdName&gt; getFilterOptionsConferences(divisionId, sportId)



Retrieve conferences filtered by division and/or sport

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetFilterOptionsConferencesRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number (optional)
    divisionId: 56,
    // number (optional)
    sportId: 56,
  } satisfies GetFilterOptionsConferencesRequest;

  try {
    const data = await api.getFilterOptionsConferences(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **divisionId** | `number` |  | [Optional] [Defaults to `undefined`] |
| **sportId** | `number` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**Array&lt;IdName&gt;**](IdName.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Conferences retrieved |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFilterOptionsDealTypes

> Array&lt;IdName&gt; getFilterOptionsDealTypes()



Retrieve all available deal types for vendor deal filtering

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetFilterOptionsDealTypesRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  try {
    const data = await api.getFilterOptionsDealTypes();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;IdName&gt;**](IdName.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Deal types retrieved |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFilterOptionsGameTypes

> Array&lt;GameType&gt; getFilterOptionsGameTypes()



Retrieve all available game types for game post filtering

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetFilterOptionsGameTypesRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  try {
    const data = await api.getFilterOptionsGameTypes();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;GameType&gt;**](GameType.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Game types retrieved |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFilterOptionsSchoolGroups

> Array&lt;IdName&gt; getFilterOptionsSchoolGroups()



Retrieve the current user\&#39;s school groups for filtering

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetFilterOptionsSchoolGroupsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  try {
    const data = await api.getFilterOptionsSchoolGroups();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;IdName&gt;**](IdName.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | School groups retrieved |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFilterOptionsSchools

> Array&lt;IdName&gt; getFilterOptionsSchools(conferenceId, divisionId, sportId)



Retrieve schools filtered by conference, division, and/or sport

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetFilterOptionsSchoolsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number (optional)
    conferenceId: 56,
    // number (optional)
    divisionId: 56,
    // number (optional)
    sportId: 56,
  } satisfies GetFilterOptionsSchoolsRequest;

  try {
    const data = await api.getFilterOptionsSchools(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **conferenceId** | `number` |  | [Optional] [Defaults to `undefined`] |
| **divisionId** | `number` |  | [Optional] [Defaults to `undefined`] |
| **sportId** | `number` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**Array&lt;IdName&gt;**](IdName.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Schools retrieved |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFilterOptionsSubdivisions

> Array&lt;IdName&gt; getFilterOptionsSubdivisions(divisionId)



Retrieve subdivisions filtered by division

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetFilterOptionsSubdivisionsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number (optional)
    divisionId: 56,
  } satisfies GetFilterOptionsSubdivisionsRequest;

  try {
    const data = await api.getFilterOptionsSubdivisions(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **divisionId** | `number` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**Array&lt;IdName&gt;**](IdName.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Subdivisions retrieved |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFilterOptionsVendors

> Array&lt;IdName&gt; getFilterOptionsVendors(dealTypeId)



Retrieve vendors for filter dropdown, optionally filtered by deal type

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetFilterOptionsVendorsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number (optional)
    dealTypeId: 56,
  } satisfies GetFilterOptionsVendorsRequest;

  try {
    const data = await api.getFilterOptionsVendors(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **dealTypeId** | `number` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**Array&lt;IdName&gt;**](IdName.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Vendors retrieved |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFinancialSearches

> FinancialSearchResultCollection getFinancialSearches(page, perPage, q)



Search NCAA financial data with filtering and pagination

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetFinancialSearchesRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetFinancialSearchesRequest;

  try {
    const data = await api.getFinancialSearches(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**FinancialSearchResultCollection**](FinancialSearchResultCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Financial search results |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFoiaLabel

> FoiaLabel getFoiaLabel(foiaLabelId)



Retrieve a single foia label

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetFoiaLabelRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of foia label to retrieve
    foiaLabelId: 56,
  } satisfies GetFoiaLabelRequest;

  try {
    const data = await api.getFoiaLabel(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **foiaLabelId** | `number` | ID of foia label to retrieve | [Defaults to `undefined`] |

### Return type

[**FoiaLabel**](FoiaLabel.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Foia label was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFoiaLabels

> FoiaLabelCollection getFoiaLabels(page, perPage, q)



Retrieve some or all foia labels

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetFoiaLabelsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetFoiaLabelsRequest;

  try {
    const data = await api.getFoiaLabels(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**FoiaLabelCollection**](FoiaLabelCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Foia labels were found |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFoiaRequest

> FoiaRequest getFoiaRequest(foiaRequestId)



Retrieve a single foia request

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetFoiaRequestRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of foia request to retrieve
    foiaRequestId: 56,
  } satisfies GetFoiaRequestRequest;

  try {
    const data = await api.getFoiaRequest(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **foiaRequestId** | `number` | ID of foia request to retrieve | [Defaults to `undefined`] |

### Return type

[**FoiaRequest**](FoiaRequest.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Foia request was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFoiaRequests

> FoiaRequestCollection getFoiaRequests(page, perPage, q)



Retrieve some or all foia requests

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetFoiaRequestsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetFoiaRequestsRequest;

  try {
    const data = await api.getFoiaRequests(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**FoiaRequestCollection**](FoiaRequestCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Foia requests were found |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getGadSearchDetail

> GadContractDetail getGadSearchDetail(id)



Retrieve detailed game contract data for the GAD detail page

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetGadSearchDetailRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number
    id: 56,
  } satisfies GetGadSearchDetailRequest;

  try {
    const data = await api.getGadSearchDetail(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `number` |  | [Defaults to `undefined`] |

### Return type

[**GadContractDetail**](GadContractDetail.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Game contract detail |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getGadSearches

> GadSearchResultCollection getGadSearches(page, perPage, q)



Search game contracts (GAD) with filtering and pagination

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetGadSearchesRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetGadSearchesRequest;

  try {
    const data = await api.getGadSearches(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**GadSearchResultCollection**](GadSearchResultCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | GAD search results |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getGame

> Game getGame(gameId)



Retrieve a single game

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetGameRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of game to retrieve
    gameId: 56,
  } satisfies GetGameRequest;

  try {
    const data = await api.getGame(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **gameId** | `number` | ID of game to retrieve | [Defaults to `undefined`] |

### Return type

[**Game**](Game.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Game was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getGameContract

> GameContract getGameContract(gameContractId)



Retrieve a single GameContract

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetGameContractRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of the GameContract
    gameContractId: 56,
  } satisfies GetGameContractRequest;

  try {
    const data = await api.getGameContract(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **gameContractId** | `number` | ID of the GameContract | [Defaults to `undefined`] |

### Return type

[**GameContract**](GameContract.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Game Contract was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getGameContractSeries

> GameContractSeriesResponse getGameContractSeries(gameContractId)



Retrieve the series of game contracts related to this contract

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetGameContractSeriesRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of the GameContract
    gameContractId: 56,
  } satisfies GetGameContractSeriesRequest;

  try {
    const data = await api.getGameContractSeries(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **gameContractId** | `number` | ID of the GameContract | [Defaults to `undefined`] |

### Return type

[**GameContractSeriesResponse**](GameContractSeriesResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Game contract series |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getGameContracts

> GameContractCollection getGameContracts(page, perPage, q)



Retrieve some or all game_contracts

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetGameContractsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetGameContractsRequest;

  try {
    const data = await api.getGameContracts(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**GameContractCollection**](GameContractCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Game Contracts were found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getGamePost

> GamePost getGamePost(gamePostId)



Retrieve a single GamePost

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetGamePostRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of the GamePost
    gamePostId: 56,
  } satisfies GetGamePostRequest;

  try {
    const data = await api.getGamePost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **gamePostId** | `number` | ID of the GamePost | [Defaults to `undefined`] |

### Return type

[**GamePost**](GamePost.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Game Post was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getGamePostSearch

> GamePostDetail getGamePostSearch(gamePostSearchId)



Get a single game post with enriched details including contacts

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetGamePostSearchRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number
    gamePostSearchId: 56,
  } satisfies GetGamePostSearchRequest;

  try {
    const data = await api.getGamePostSearch(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **gamePostSearchId** | `number` |  | [Defaults to `undefined`] |

### Return type

[**GamePostDetail**](GamePostDetail.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Game post detail |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getGamePostSearches

> GamePostSearchResultCollection getGamePostSearches(page, perPage, q)



Search game posts with enriched data including school info, location, RPI, etc.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetGamePostSearchesRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetGamePostSearchesRequest;

  try {
    const data = await api.getGamePostSearches(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**GamePostSearchResultCollection**](GamePostSearchResultCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Game post search results |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getGamePosts

> GamePostCollection getGamePosts(page, perPage, q)



Retrieve some or all game_posts

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetGamePostsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetGamePostsRequest;

  try {
    const data = await api.getGamePosts(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**GamePostCollection**](GamePostCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Game Posts were found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getGames

> GameCollection getGames(page, perPage, q)



Retrieve some or all games

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetGamesRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetGamesRequest;

  try {
    const data = await api.getGames(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**GameCollection**](GameCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Games were found |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getIncomeReport

> IncomeReport getIncomeReport(incomeReportId)



Retrieve a single income report

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetIncomeReportRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of income report to retrieve
    incomeReportId: 56,
  } satisfies GetIncomeReportRequest;

  try {
    const data = await api.getIncomeReport(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **incomeReportId** | `number` | ID of income report to retrieve | [Defaults to `undefined`] |

### Return type

[**IncomeReport**](IncomeReport.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Income report was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getIncomeReports

> IncomeReportCollection getIncomeReports(page, perPage, q)



Retrieve some or all income reports

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetIncomeReportsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetIncomeReportsRequest;

  try {
    const data = await api.getIncomeReports(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**IncomeReportCollection**](IncomeReportCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Income reports were found |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getJobPost

> JobPost getJobPost(jobPostId)

Get a job post

Get a job post

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetJobPostRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of job post to return
    jobPostId: 789,
  } satisfies GetJobPostRequest;

  try {
    const data = await api.getJobPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **jobPostId** | `number` | ID of job post to return | [Defaults to `undefined`] |

### Return type

[**JobPost**](JobPost.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Job post was found |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getJobPosts

> JobPostCollection getJobPosts(page, perPage, q)

List all job posts

List all job posts

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetJobPostsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetJobPostsRequest;

  try {
    const data = await api.getJobPosts(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**JobPostCollection**](JobPostCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Job posts were found |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getLadFilterOptions

> GetLadFilterOptions200Response getLadFilterOptions()



Retrieve filter options specific to the leader/administrator (LAD) search — position types, departments, and school groups

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetLadFilterOptionsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  try {
    const data = await api.getLadFilterOptions();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetLadFilterOptions200Response**](GetLadFilterOptions200Response.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | LAD filter options retrieved |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getNcaaFinancialReportStatus

> NcaaFinancialReportStatus getNcaaFinancialReportStatus(ncaaFinancialReportStatusId)



Retrieve a single ncaa financial report status

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetNcaaFinancialReportStatusRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of ncaa financial report status to retrieve
    ncaaFinancialReportStatusId: 56,
  } satisfies GetNcaaFinancialReportStatusRequest;

  try {
    const data = await api.getNcaaFinancialReportStatus(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **ncaaFinancialReportStatusId** | `number` | ID of ncaa financial report status to retrieve | [Defaults to `undefined`] |

### Return type

[**NcaaFinancialReportStatus**](NcaaFinancialReportStatus.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Ncaa financial report status was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getNcaaFinancialReportStatuses

> NcaaFinancialReportStatusCollection getNcaaFinancialReportStatuses(page, perPage, q)



Retrieve some or all ncaa financial report statuses

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetNcaaFinancialReportStatusesRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetNcaaFinancialReportStatusesRequest;

  try {
    const data = await api.getNcaaFinancialReportStatuses(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**NcaaFinancialReportStatusCollection**](NcaaFinancialReportStatusCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Ncaa financial report statuses were found |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getNewsFeed

> NewsFeed getNewsFeed(newsFeedId)

Get a news feed

Get a news feed

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetNewsFeedRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of news feed to return
    newsFeedId: 56,
  } satisfies GetNewsFeedRequest;

  try {
    const data = await api.getNewsFeed(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **newsFeedId** | `number` | ID of news feed to return | [Defaults to `undefined`] |

### Return type

[**NewsFeed**](NewsFeed.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | News Feed was found |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getNote

> Note getNote(notableType, notableId)



Retrieve the current user\&#39;s note for a given notable object. Returns null if no note exists.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetNoteRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string | The model type (e.g. \"Coach\")
    notableType: notableType_example,
    // number | The ID of the notable record
    notableId: 56,
  } satisfies GetNoteRequest;

  try {
    const data = await api.getNote(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **notableType** | `string` | The model type (e.g. \&quot;Coach\&quot;) | [Defaults to `undefined`] |
| **notableId** | `number` | The ID of the notable record | [Defaults to `undefined`] |

### Return type

[**Note**](Note.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The user\&#39;s note or null |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPosition

> Position getPosition(positionId)



Retrieve a single position

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetPositionRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of position to retrieve
    positionId: 56,
  } satisfies GetPositionRequest;

  try {
    const data = await api.getPosition(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **positionId** | `number` | ID of position to retrieve | [Defaults to `undefined`] |

### Return type

[**Position**](Position.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Position was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPositions

> PositionCollection getPositions(page, perPage, q)



Retrieve some or all positions

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetPositionsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetPositionsRequest;

  try {
    const data = await api.getPositions(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**PositionCollection**](PositionCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Positions were found |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRawContract

> RawContract getRawContract(rawContractId)



Retrieve a single RawContract

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetRawContractRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of the RawContract
    rawContractId: 56,
  } satisfies GetRawContractRequest;

  try {
    const data = await api.getRawContract(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **rawContractId** | `number` | ID of the RawContract | [Defaults to `undefined`] |

### Return type

[**RawContract**](RawContract.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Raw Contract was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRawContracts

> RawContractCollection getRawContracts(page, perPage, q)



Retrieve some or all raw_contracts

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetRawContractsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetRawContractsRequest;

  try {
    const data = await api.getRawContracts(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**RawContractCollection**](RawContractCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Raw Contracts were found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRequestedItem

> RequestedItem getRequestedItem(requestedItemId)



Retrieve a single requested item

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetRequestedItemRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of requested item to retrieve
    requestedItemId: 56,
  } satisfies GetRequestedItemRequest;

  try {
    const data = await api.getRequestedItem(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **requestedItemId** | `number` | ID of requested item to retrieve | [Defaults to `undefined`] |

### Return type

[**RequestedItem**](RequestedItem.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Requested item was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRequestedItems

> RequestedItemCollection getRequestedItems(page, perPage, q)



Retrieve some or all requested items

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetRequestedItemsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetRequestedItemsRequest;

  try {
    const data = await api.getRequestedItems(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**RequestedItemCollection**](RequestedItemCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Requested items were found |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRevenueSearch

> SchoolFinancialDetail getRevenueSearch(revenueSearchId, schoolId, year)



Get revenue/expense line item detail with sport breakdown

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetRevenueSearchRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number
    revenueSearchId: 56,
    // number
    schoolId: 56,
    // number (optional)
    year: 56,
  } satisfies GetRevenueSearchRequest;

  try {
    const data = await api.getRevenueSearch(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **revenueSearchId** | `number` |  | [Defaults to `undefined`] |
| **schoolId** | `number` |  | [Defaults to `undefined`] |
| **year** | `number` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**SchoolFinancialDetail**](SchoolFinancialDetail.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Financial line item detail |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRevenueSearches

> SchoolFinancialSummary getRevenueSearches(schoolId, year)



Get school financial summary with revenue/expense breakdown by sport

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetRevenueSearchesRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number
    schoolId: 56,
    // number (optional)
    year: 56,
  } satisfies GetRevenueSearchesRequest;

  try {
    const data = await api.getRevenueSearches(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **schoolId** | `number` |  | [Defaults to `undefined`] |
| **year** | `number` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**SchoolFinancialSummary**](SchoolFinancialSummary.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | School financial summary |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSchool

> School getSchool(schoolId)



Retrieve a single school

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetSchoolRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of school to retrieve
    schoolId: 56,
  } satisfies GetSchoolRequest;

  try {
    const data = await api.getSchool(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **schoolId** | `number` | ID of school to retrieve | [Defaults to `undefined`] |

### Return type

[**School**](School.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | School was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSchoolAlternateNames

> GetSchoolAlternateNames200Response getSchoolAlternateNames(schoolId)



Retrieve alternate names for a specific school

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetSchoolAlternateNamesRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of school to retrieve alternate names for
    schoolId: 56,
  } satisfies GetSchoolAlternateNamesRequest;

  try {
    const data = await api.getSchoolAlternateNames(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **schoolId** | `number` | ID of school to retrieve alternate names for | [Defaults to `undefined`] |

### Return type

[**GetSchoolAlternateNames200Response**](GetSchoolAlternateNames200Response.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Alternate names were found |  -  |
| **401** | Unauthorized |  -  |
| **404** | School not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSchoolGameContracts

> SchoolGameContractsResponse getSchoolGameContracts(schoolId)



Retrieve game contracts for a school grouped by sport

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetSchoolGameContractsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of the School
    schoolId: 56,
  } satisfies GetSchoolGameContractsRequest;

  try {
    const data = await api.getSchoolGameContracts(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **schoolId** | `number` | ID of the School | [Defaults to `undefined`] |

### Return type

[**SchoolGameContractsResponse**](SchoolGameContractsResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | School game contracts |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSchoolGroup

> SchoolGroupShow getSchoolGroup(schoolGroupId)



Retrieve a single School Group

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetSchoolGroupRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of the School Group
    schoolGroupId: 56,
  } satisfies GetSchoolGroupRequest;

  try {
    const data = await api.getSchoolGroup(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **schoolGroupId** | `number` | ID of the School Group | [Defaults to `undefined`] |

### Return type

[**SchoolGroupShow**](SchoolGroupShow.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | School Group was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSchoolGroupAdminCompensation

> ConferenceAdminCompensationResponse getSchoolGroupAdminCompensation(schoolGroupId, year)



Retrieve athletic director compensation for a custom school group

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetSchoolGroupAdminCompensationRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of the School Group
    schoolGroupId: 56,
    // number | Financial year (optional)
    year: 56,
  } satisfies GetSchoolGroupAdminCompensationRequest;

  try {
    const data = await api.getSchoolGroupAdminCompensation(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **schoolGroupId** | `number` | ID of the School Group | [Defaults to `undefined`] |
| **year** | `number` | Financial year | [Optional] [Defaults to `undefined`] |

### Return type

[**ConferenceAdminCompensationResponse**](ConferenceAdminCompensationResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Admin compensation data was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSchoolGroupCashflowStats

> ConferenceCashflowStatsResponse getSchoolGroupCashflowStats(schoolGroupId, groupIds, year)



Retrieve aggregated cashflow stats for a custom school group

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetSchoolGroupCashflowStatsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of the School Group
    schoolGroupId: 56,
    // Array<number> | Array of cashflow group IDs to include (optional)
    groupIds: ...,
    // number | Financial year (optional)
    year: 56,
  } satisfies GetSchoolGroupCashflowStatsRequest;

  try {
    const data = await api.getSchoolGroupCashflowStats(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **schoolGroupId** | `number` | ID of the School Group | [Defaults to `undefined`] |
| **groupIds** | `Array<number>` | Array of cashflow group IDs to include | [Optional] |
| **year** | `number` | Financial year | [Optional] [Defaults to `undefined`] |

### Return type

[**ConferenceCashflowStatsResponse**](ConferenceCashflowStatsResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | School group cashflow stats were found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSchoolGroupDepartmentStaff

> ConferenceDepartmentStaffResponse getSchoolGroupDepartmentStaff(schoolGroupId, year, departmentId)



Retrieve department staff compensation for a custom school group

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetSchoolGroupDepartmentStaffRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of the School Group
    schoolGroupId: 56,
    // number | Financial year (optional)
    year: 56,
    // number | ID of the department (PositionType) (optional)
    departmentId: 56,
  } satisfies GetSchoolGroupDepartmentStaffRequest;

  try {
    const data = await api.getSchoolGroupDepartmentStaff(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **schoolGroupId** | `number` | ID of the School Group | [Defaults to `undefined`] |
| **year** | `number` | Financial year | [Optional] [Defaults to `undefined`] |
| **departmentId** | `number` | ID of the department (PositionType) | [Optional] [Defaults to `undefined`] |

### Return type

[**ConferenceDepartmentStaffResponse**](ConferenceDepartmentStaffResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Department staff data was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSchoolGroupDirectorsCup

> ConferenceDirectorsCupResponse getSchoolGroupDirectorsCup(schoolGroupId)



Retrieve Director\&#39;s Cup rankings for schools in a custom school group

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetSchoolGroupDirectorsCupRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of the School Group
    schoolGroupId: 56,
  } satisfies GetSchoolGroupDirectorsCupRequest;

  try {
    const data = await api.getSchoolGroupDirectorsCup(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **schoolGroupId** | `number` | ID of the School Group | [Defaults to `undefined`] |

### Return type

[**ConferenceDirectorsCupResponse**](ConferenceDirectorsCupResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Director\&#39;s Cup data was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSchoolGroupPositionStats

> ConferencePositionStatsResponse getSchoolGroupPositionStats(schoolGroupId, year)



Retrieve aggregated assistant coach position stats for a custom school group

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetSchoolGroupPositionStatsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of the School Group
    schoolGroupId: 56,
    // number | Season year (optional)
    year: 56,
  } satisfies GetSchoolGroupPositionStatsRequest;

  try {
    const data = await api.getSchoolGroupPositionStats(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **schoolGroupId** | `number` | ID of the School Group | [Defaults to `undefined`] |
| **year** | `number` | Season year | [Optional] [Defaults to `undefined`] |

### Return type

[**ConferencePositionStatsResponse**](ConferencePositionStatsResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | School group position stats were found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSchoolGroupSportCompensation

> SportCompensationResponse getSchoolGroupSportCompensation(schoolGroupId, sportId, year)



Retrieve head coach compensation table for a custom school group sport

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetSchoolGroupSportCompensationRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of the School Group
    schoolGroupId: 56,
    // number | ID of the Sport
    sportId: 56,
    // number | Season year (optional)
    year: 56,
  } satisfies GetSchoolGroupSportCompensationRequest;

  try {
    const data = await api.getSchoolGroupSportCompensation(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **schoolGroupId** | `number` | ID of the School Group | [Defaults to `undefined`] |
| **sportId** | `number` | ID of the Sport | [Defaults to `undefined`] |
| **year** | `number` | Season year | [Optional] [Defaults to `undefined`] |

### Return type

[**SportCompensationResponse**](SportCompensationResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Sport compensation data was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSchools

> SchoolCollection getSchools(page, perPage, q)



Retrieve some or all schools

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetSchoolsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetSchoolsRequest;

  try {
    const data = await api.getSchools(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**SchoolCollection**](SchoolCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Schools were found |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSchoolsAlmaMater

> Array&lt;IdName&gt; getSchoolsAlmaMater()



Retrieve all schools as a flat list for alma mater filtering

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetSchoolsAlmaMaterRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  try {
    const data = await api.getSchoolsAlmaMater();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;IdName&gt;**](IdName.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Schools retrieved |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSeason

> Season getSeason(seasonId)



Retrieve a single Season

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetSeasonRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of the Season
    seasonId: 56,
  } satisfies GetSeasonRequest;

  try {
    const data = await api.getSeason(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **seasonId** | `number` | ID of the Season | [Defaults to `undefined`] |

### Return type

[**Season**](Season.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Season was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSeasons

> SeasonCollection getSeasons(page, perPage, q)



Retrieve some or all seasons

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetSeasonsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetSeasonsRequest;

  try {
    const data = await api.getSeasons(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**SeasonCollection**](SeasonCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Seasons were found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSimilarCoaches

> CoachCollection getSimilarCoaches(coachId, q, page, perPage)



Retrieve similar coaches based on coach ID

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetSimilarCoachesRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of coach to retrieve
    coachId: 56,
    // object | Ransack query (optional)
    q: Object,
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
  } satisfies GetSimilarCoachesRequest;

  try {
    const data = await api.getSimilarCoaches(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **coachId** | `number` | ID of coach to retrieve | [Defaults to `undefined`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |

### Return type

[**CoachCollection**](CoachCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Coaches were found |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSport

> Sport getSport(sportId)



Retrieve a single sport

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetSportRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of sport to retrieve
    sportId: 56,
  } satisfies GetSportRequest;

  try {
    const data = await api.getSport(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **sportId** | `number` | ID of sport to retrieve | [Defaults to `undefined`] |

### Return type

[**Sport**](Sport.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Sport was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSports

> SportCollection getSports(page, perPage, q)



Retrieve some or all sports

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetSportsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetSportsRequest;

  try {
    const data = await api.getSports(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**SportCollection**](SportCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Sports were found |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSubdivision

> Subdivision getSubdivision(subdivisionId)



Retrieve a single Subdivision

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetSubdivisionRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of the Subdivision
    subdivisionId: 56,
  } satisfies GetSubdivisionRequest;

  try {
    const data = await api.getSubdivision(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **subdivisionId** | `number` | ID of the Subdivision | [Defaults to `undefined`] |

### Return type

[**Subdivision**](Subdivision.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Subdivision was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSubdivisionAdminCompensation

> ConferenceAdminCompensationResponse getSubdivisionAdminCompensation(subdivisionId, year)



Retrieve athletic director compensation for a subdivision

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetSubdivisionAdminCompensationRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of the Subdivision
    subdivisionId: 56,
    // number | Financial year (optional)
    year: 56,
  } satisfies GetSubdivisionAdminCompensationRequest;

  try {
    const data = await api.getSubdivisionAdminCompensation(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **subdivisionId** | `number` | ID of the Subdivision | [Defaults to `undefined`] |
| **year** | `number` | Financial year | [Optional] [Defaults to `undefined`] |

### Return type

[**ConferenceAdminCompensationResponse**](ConferenceAdminCompensationResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Admin compensation data was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSubdivisionCashflowStats

> ConferenceCashflowStatsResponse getSubdivisionCashflowStats(subdivisionId, groupIds, year)



Retrieve aggregated cashflow stats for a subdivision

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetSubdivisionCashflowStatsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of the Subdivision
    subdivisionId: 56,
    // Array<number> | Array of cashflow group IDs to include (optional)
    groupIds: ...,
    // number | Financial year (optional)
    year: 56,
  } satisfies GetSubdivisionCashflowStatsRequest;

  try {
    const data = await api.getSubdivisionCashflowStats(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **subdivisionId** | `number` | ID of the Subdivision | [Defaults to `undefined`] |
| **groupIds** | `Array<number>` | Array of cashflow group IDs to include | [Optional] |
| **year** | `number` | Financial year | [Optional] [Defaults to `undefined`] |

### Return type

[**ConferenceCashflowStatsResponse**](ConferenceCashflowStatsResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Subdivision cashflow stats were found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSubdivisionDepartmentStaff

> ConferenceDepartmentStaffResponse getSubdivisionDepartmentStaff(subdivisionId, year, departmentId)



Retrieve department staff compensation for a subdivision

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetSubdivisionDepartmentStaffRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of the Subdivision
    subdivisionId: 56,
    // number | Financial year (optional)
    year: 56,
    // number | ID of the department (PositionType) (optional)
    departmentId: 56,
  } satisfies GetSubdivisionDepartmentStaffRequest;

  try {
    const data = await api.getSubdivisionDepartmentStaff(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **subdivisionId** | `number` | ID of the Subdivision | [Defaults to `undefined`] |
| **year** | `number` | Financial year | [Optional] [Defaults to `undefined`] |
| **departmentId** | `number` | ID of the department (PositionType) | [Optional] [Defaults to `undefined`] |

### Return type

[**ConferenceDepartmentStaffResponse**](ConferenceDepartmentStaffResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Department staff data was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSubdivisionDirectorsCup

> ConferenceDirectorsCupResponse getSubdivisionDirectorsCup(subdivisionId)



Retrieve Director\&#39;s Cup rankings for schools in a subdivision

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetSubdivisionDirectorsCupRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of the Subdivision
    subdivisionId: 56,
  } satisfies GetSubdivisionDirectorsCupRequest;

  try {
    const data = await api.getSubdivisionDirectorsCup(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **subdivisionId** | `number` | ID of the Subdivision | [Defaults to `undefined`] |

### Return type

[**ConferenceDirectorsCupResponse**](ConferenceDirectorsCupResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Director\&#39;s Cup data was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSubdivisionPositionStats

> ConferencePositionStatsResponse getSubdivisionPositionStats(subdivisionId, year)



Retrieve aggregated assistant coach position stats for a subdivision

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetSubdivisionPositionStatsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of the Subdivision
    subdivisionId: 56,
    // number | Season year (optional)
    year: 56,
  } satisfies GetSubdivisionPositionStatsRequest;

  try {
    const data = await api.getSubdivisionPositionStats(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **subdivisionId** | `number` | ID of the Subdivision | [Defaults to `undefined`] |
| **year** | `number` | Season year | [Optional] [Defaults to `undefined`] |

### Return type

[**ConferencePositionStatsResponse**](ConferencePositionStatsResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Subdivision position stats were found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSubdivisionSportCompensation

> SportCompensationResponse getSubdivisionSportCompensation(subdivisionId, sportId, year)



Retrieve head coach compensation table for a subdivision sport

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetSubdivisionSportCompensationRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of the Subdivision
    subdivisionId: 56,
    // number | ID of the Sport
    sportId: 56,
    // number | Season year (optional)
    year: 56,
  } satisfies GetSubdivisionSportCompensationRequest;

  try {
    const data = await api.getSubdivisionSportCompensation(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **subdivisionId** | `number` | ID of the Subdivision | [Defaults to `undefined`] |
| **sportId** | `number` | ID of the Sport | [Defaults to `undefined`] |
| **year** | `number` | Season year | [Optional] [Defaults to `undefined`] |

### Return type

[**SportCompensationResponse**](SportCompensationResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Sport compensation data was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSubdivisions

> SubdivisionCollection getSubdivisions(page, perPage, q)



Retrieve some or all subdivisions

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetSubdivisionsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetSubdivisionsRequest;

  try {
    const data = await api.getSubdivisions(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**SubdivisionCollection**](SubdivisionCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Subdivisions were found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSubscription

> Subscription getSubscription(subscriptionId)



Retrieve a single Subscription

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetSubscriptionRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of the Subscription
    subscriptionId: 56,
  } satisfies GetSubscriptionRequest;

  try {
    const data = await api.getSubscription(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **subscriptionId** | `number` | ID of the Subscription | [Defaults to `undefined`] |

### Return type

[**Subscription**](Subscription.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Subscription was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSubscriptions

> SubscriptionCollection getSubscriptions(page, perPage, q)



Retrieve the all subscriptions

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetSubscriptionsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetSubscriptionsRequest;

  try {
    const data = await api.getSubscriptions(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**SubscriptionCollection**](SubscriptionCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Subscriptions were found |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSystemSettings

> SystemSetting getSystemSettings()



Retrieve the current system settings

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetSystemSettingsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  try {
    const data = await api.getSystemSettings();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**SystemSetting**](SystemSetting.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | System settings were found |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTeamScheduleDetail

> TeamScheduleDetail getTeamScheduleDetail(sportName, schoolId, performanceYear)



Get detailed team schedule info including school overview, season stats, contacts, and games for the scouting report tab.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetTeamScheduleDetailRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string | Sport name (e.g. BASKETBALL_M)
    sportName: sportName_example,
    // number | School ID
    schoolId: 56,
    // number | Performance year to load games for (defaults to current season year) (optional)
    performanceYear: 56,
  } satisfies GetTeamScheduleDetailRequest;

  try {
    const data = await api.getTeamScheduleDetail(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **sportName** | `string` | Sport name (e.g. BASKETBALL_M) | [Defaults to `undefined`] |
| **schoolId** | `number` | School ID | [Defaults to `undefined`] |
| **performanceYear** | `number` | Performance year to load games for (defaults to current season year) | [Optional] [Defaults to `undefined`] |

### Return type

[**TeamScheduleDetail**](TeamScheduleDetail.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Team schedule detail |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTeamScheduleDetailCoaches

> TeamScheduleCoaches getTeamScheduleDetailCoaches(sportName, schoolId, performanceYear)



Get coaches and performance data for a team across recent seasons.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetTeamScheduleDetailCoachesRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string
    sportName: sportName_example,
    // number
    schoolId: 56,
    // number | Year to load coach roster for (optional)
    performanceYear: 56,
  } satisfies GetTeamScheduleDetailCoachesRequest;

  try {
    const data = await api.getTeamScheduleDetailCoaches(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **sportName** | `string` |  | [Defaults to `undefined`] |
| **schoolId** | `number` |  | [Defaults to `undefined`] |
| **performanceYear** | `number` | Year to load coach roster for | [Optional] [Defaults to `undefined`] |

### Return type

[**TeamScheduleCoaches**](TeamScheduleCoaches.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Coaches and performance data |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTeamScheduleDetailGamePosts

> TeamScheduleGamePosts getTeamScheduleDetailGamePosts(sportName, schoolId)



Get games wanted posts for a team.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetTeamScheduleDetailGamePostsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string
    sportName: sportName_example,
    // number
    schoolId: 56,
  } satisfies GetTeamScheduleDetailGamePostsRequest;

  try {
    const data = await api.getTeamScheduleDetailGamePosts(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **sportName** | `string` |  | [Defaults to `undefined`] |
| **schoolId** | `number` |  | [Defaults to `undefined`] |

### Return type

[**TeamScheduleGamePosts**](TeamScheduleGamePosts.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Game posts list |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTeamScheduleDetailPlayerData

> TeamSchedulePlayerData getTeamScheduleDetailPlayerData(sportName, schoolId)



Get player data for a team (Men\&#39;s Basketball only).

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetTeamScheduleDetailPlayerDataRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string
    sportName: sportName_example,
    // number
    schoolId: 56,
  } satisfies GetTeamScheduleDetailPlayerDataRequest;

  try {
    const data = await api.getTeamScheduleDetailPlayerData(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **sportName** | `string` |  | [Defaults to `undefined`] |
| **schoolId** | `number` |  | [Defaults to `undefined`] |

### Return type

[**TeamSchedulePlayerData**](TeamSchedulePlayerData.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Player data |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTeamScheduleDetailSchedule

> TeamScheduleSchedule getTeamScheduleDetailSchedule(sportName, schoolId, year)



Get the full game schedule list for a team and season year.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetTeamScheduleDetailScheduleRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string
    sportName: sportName_example,
    // number
    schoolId: 56,
    // number | Season year (defaults to current schedule season year) (optional)
    year: 56,
  } satisfies GetTeamScheduleDetailScheduleRequest;

  try {
    const data = await api.getTeamScheduleDetailSchedule(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **sportName** | `string` |  | [Defaults to `undefined`] |
| **schoolId** | `number` |  | [Defaults to `undefined`] |
| **year** | `number` | Season year (defaults to current schedule season year) | [Optional] [Defaults to `undefined`] |

### Return type

[**TeamScheduleSchedule**](TeamScheduleSchedule.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Schedule games list |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTeamScheduleDetailScheduleOverlap

> TeamScheduleOverlap getTeamScheduleDetailScheduleOverlap(sportName, schoolId)



Check schedule overlap between a team and the current user\&#39;s team.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetTeamScheduleDetailScheduleOverlapRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string
    sportName: sportName_example,
    // number
    schoolId: 56,
  } satisfies GetTeamScheduleDetailScheduleOverlapRequest;

  try {
    const data = await api.getTeamScheduleDetailScheduleOverlap(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **sportName** | `string` |  | [Defaults to `undefined`] |
| **schoolId** | `number` |  | [Defaults to `undefined`] |

### Return type

[**TeamScheduleOverlap**](TeamScheduleOverlap.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Schedule overlap data |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTeamScheduleFavorites

> Array&lt;GetTeamScheduleFavorites200ResponseInner&gt; getTeamScheduleFavorites(detailed)



Retrieve the current user\&#39;s FilTeam favorites. Returns favoritable_id as a string to avoid JavaScript precision loss with large numeric IDs.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetTeamScheduleFavoritesRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // '1' | When set to \"1\", includes category and favoritable name (optional)
    detailed: detailed_example,
  } satisfies GetTeamScheduleFavoritesRequest;

  try {
    const data = await api.getTeamScheduleFavorites(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **detailed** | `1` | When set to \&quot;1\&quot;, includes category and favoritable name | [Optional] [Defaults to `undefined`] [Enum: 1] |

### Return type

[**Array&lt;GetTeamScheduleFavorites200ResponseInner&gt;**](GetTeamScheduleFavorites200ResponseInner.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of FilTeam favorites |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTeamScheduleNote

> TeamScheduleNote getTeamScheduleNote(filTeamId)



Get the current user\&#39;s note for a team.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetTeamScheduleNoteRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string | FilTeam ID
    filTeamId: filTeamId_example,
  } satisfies GetTeamScheduleNoteRequest;

  try {
    const data = await api.getTeamScheduleNote(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **filTeamId** | `string` | FilTeam ID | [Defaults to `undefined`] |

### Return type

[**TeamScheduleNote**](TeamScheduleNote.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Note (id/content may be null if no note exists) |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTeamScheduleSearches

> TeamScheduleSearchResultCollection getTeamScheduleSearches(page, perPage, q, sportName, excludeAlreadyScheduled, excludeConference)



Search team schedules with enriched data including contacts, RPI, returning percentages, and guarantee contract info.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetTeamScheduleSearchesRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
    // string | Sport name filter (e.g. BASKETBALL_M) (optional)
    sportName: sportName_example,
    // '1' | Exclude schools already on the user\'s schedule (optional)
    excludeAlreadyScheduled: excludeAlreadyScheduled_example,
    // '1' | Exclude schools in the user\'s conference (optional)
    excludeConference: excludeConference_example,
  } satisfies GetTeamScheduleSearchesRequest;

  try {
    const data = await api.getTeamScheduleSearches(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |
| **sportName** | `string` | Sport name filter (e.g. BASKETBALL_M) | [Optional] [Defaults to `undefined`] |
| **excludeAlreadyScheduled** | `1` | Exclude schools already on the user\&#39;s schedule | [Optional] [Defaults to `undefined`] [Enum: 1] |
| **excludeConference** | `1` | Exclude schools in the user\&#39;s conference | [Optional] [Defaults to `undefined`] [Enum: 1] |

### Return type

[**TeamScheduleSearchResultCollection**](TeamScheduleSearchResultCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Team schedule search results |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUser

> User getUser(userId)



Retrieve a single user

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetUserRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of user to retrieve
    userId: 56,
  } satisfies GetUserRequest;

  try {
    const data = await api.getUser(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **userId** | `number` | ID of user to retrieve | [Defaults to `undefined`] |

### Return type

[**User**](User.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | User was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserActivitySummaries

> UserActivitySummaryCollection getUserActivitySummaries(page, perPage, q)



Retrieve some or all user_activity_summaries

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetUserActivitySummariesRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetUserActivitySummariesRequest;

  try {
    const data = await api.getUserActivitySummaries(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**UserActivitySummaryCollection**](UserActivitySummaryCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | User Activity Summaries were found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserActivitySummary

> UserActivitySummary getUserActivitySummary(userActivitySummaryId)



Retrieve a single UserActivitySummary

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetUserActivitySummaryRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of the UserActivitySummary
    userActivitySummaryId: 56,
  } satisfies GetUserActivitySummaryRequest;

  try {
    const data = await api.getUserActivitySummary(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **userActivitySummaryId** | `number` | ID of the UserActivitySummary | [Defaults to `undefined`] |

### Return type

[**UserActivitySummary**](UserActivitySummary.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | User Activity Summary was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserRequest

> UserRequest getUserRequest(userRequestId)



Retrieve a single UserRequest

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetUserRequestRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of the UserRequest
    userRequestId: 56,
  } satisfies GetUserRequestRequest;

  try {
    const data = await api.getUserRequest(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **userRequestId** | `number` | ID of the UserRequest | [Defaults to `undefined`] |

### Return type

[**UserRequest**](UserRequest.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | User Request was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserRequests

> UserRequestCollection getUserRequests(page, perPage, q)



Retrieve some or all user_requests

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetUserRequestsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetUserRequestsRequest;

  try {
    const data = await api.getUserRequests(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**UserRequestCollection**](UserRequestCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | User Requests were found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUsers

> UserCollection getUsers(page, perPage, q)



Retrieve some or all users

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetUsersRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetUsersRequest;

  try {
    const data = await api.getUsers(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**UserCollection**](UserCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Users were found |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getVendor

> Vendor getVendor(vendorId)



Retrieve a single Vendor

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetVendorRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of the Vendor
    vendorId: 56,
  } satisfies GetVendorRequest;

  try {
    const data = await api.getVendor(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **vendorId** | `number` | ID of the Vendor | [Defaults to `undefined`] |

### Return type

[**Vendor**](Vendor.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Vendor was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getVendors

> VendorCollection getVendors(page, perPage, q)



Retrieve some or all vendors

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetVendorsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetVendorsRequest;

  try {
    const data = await api.getVendors(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**VendorCollection**](VendorCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Vendors were found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getWireChanges

> GetWireChanges200Response getWireChanges(page, perPage, q, qCoachIdEq, qSchoolIdEq, qSportIdEq)



Returns WireChange records. Supports Ransack-style filters (&#x60;q[...]&#x60;). Includes related position_types and sports arrays in each object. Each item also includes coach avatar (if present) and school logo images.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetWireChangesRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
    // number | Filter by coach ID (optional)
    qCoachIdEq: 56,
    // number | Filter by school ID (optional)
    qSchoolIdEq: 56,
    // number | Filter by sport ID (optional)
    qSportIdEq: 56,
  } satisfies GetWireChangesRequest;

  try {
    const data = await api.getWireChanges(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |
| **qCoachIdEq** | `number` | Filter by coach ID | [Optional] [Defaults to `undefined`] |
| **qSchoolIdEq** | `number` | Filter by school ID | [Optional] [Defaults to `undefined`] |
| **qSportIdEq** | `number` | Filter by sport ID | [Optional] [Defaults to `undefined`] |

### Return type

[**GetWireChanges200Response**](GetWireChanges200Response.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Wire changes found |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listNotes

> Array&lt;ListNotes200ResponseInner&gt; listNotes()



Retrieve all of the current user\&#39;s notes, ordered by most recent first. Includes the notable record\&#39;s name.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { ListNotesRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  try {
    const data = await api.listNotes();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;ListNotes200ResponseInner&gt;**](ListNotes200ResponseInner.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of all user notes |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## regenerateRawContractPdf

> RegenerateRawContractPdf200Response regenerateRawContractPdf(rawContractId)



Regenerate the PDF for a raw contract

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { RegenerateRawContractPdfRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of the RawContract
    rawContractId: 56,
  } satisfies RegenerateRawContractPdfRequest;

  try {
    const data = await api.regenerateRawContractPdf(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **rawContractId** | `number` | ID of the RawContract | [Defaults to `undefined`] |

### Return type

[**RegenerateRawContractPdf200Response**](RegenerateRawContractPdf200Response.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | PDF regeneration started |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchCoaches

> CoachCollection searchCoaches(filters)



Search Coaches by priority_ids

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { SearchCoachesRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // Filters (optional)
    filters: ...,
  } satisfies SearchCoachesRequest;

  try {
    const data = await api.searchCoaches(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **filters** | [Filters](Filters.md) |  | [Optional] |

### Return type

[**CoachCollection**](CoachCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Coaches were found |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## sendOtpCode

> CreatePasswordReset200Response sendOtpCode()



Send an OTP verification code to the authenticated user\&#39;s email

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { SendOtpCodeRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  try {
    const data = await api.sendOtpCode();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**CreatePasswordReset200Response**](CreatePasswordReset200Response.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OTP code sent successfully |  -  |
| **401** | Unauthorized |  -  |
| **422** | OTP not required for this user |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## unstractRawContractPdfText

> RegenerateRawContractPdf200Response unstractRawContractPdfText(rawContractId, unstractRawContractPdfTextRequest)



Extract text from a raw contract PDF

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { UnstractRawContractPdfTextOperationRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of the RawContract
    rawContractId: 56,
    // UnstractRawContractPdfTextRequest (optional)
    unstractRawContractPdfTextRequest: ...,
  } satisfies UnstractRawContractPdfTextOperationRequest;

  try {
    const data = await api.unstractRawContractPdfText(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **rawContractId** | `number` | ID of the RawContract | [Defaults to `undefined`] |
| **unstractRawContractPdfTextRequest** | [UnstractRawContractPdfTextRequest](UnstractRawContractPdfTextRequest.md) |  | [Optional] |

### Return type

[**RegenerateRawContractPdf200Response**](RegenerateRawContractPdf200Response.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Text extraction started |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateCashflow

> Cashflow updateCashflow(cashflowId, cashflow)



Update a single Cashflow

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { UpdateCashflowRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of the Cashflow
    cashflowId: 56,
    // Cashflow | Cashflow attributes to update
    cashflow: ...,
  } satisfies UpdateCashflowRequest;

  try {
    const data = await api.updateCashflow(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **cashflowId** | `number` | ID of the Cashflow | [Defaults to `undefined`] |
| **cashflow** | [Cashflow](Cashflow.md) | Cashflow attributes to update | |

### Return type

[**Cashflow**](Cashflow.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Cashflow was updated |  -  |
| **401** | Unauthorized |  -  |
| **422** | Unable to update the Cashflow |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateCoach

> Coach updateCoach(coachId, coach)



Update a coach

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { UpdateCoachRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of coach to update
    coachId: 56,
    // Coach | Coach attributes to update. Supports standard coach fields including first_name, last_name, email, phone, bio, bio_text, and related profile fields.
    coach: ...,
  } satisfies UpdateCoachRequest;

  try {
    const data = await api.updateCoach(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **coachId** | `number` | ID of coach to update | [Defaults to `undefined`] |
| **coach** | [Coach](Coach.md) | Coach attributes to update. Supports standard coach fields including first_name, last_name, email, phone, bio, bio_text, and related profile fields. | |

### Return type

[**Coach**](Coach.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Coach was updated |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateCompensation

> Compensation updateCompensation(compensationId, compensation)



Update a compensation

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { UpdateCompensationRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of compensation to update
    compensationId: 56,
    // Compensation | Compensation to update
    compensation: ...,
  } satisfies UpdateCompensationRequest;

  try {
    const data = await api.updateCompensation(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **compensationId** | `number` | ID of compensation to update | [Defaults to `undefined`] |
| **compensation** | [Compensation](Compensation.md) | Compensation to update | |

### Return type

[**Compensation**](Compensation.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Compensation was updated |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateConference

> Conference updateConference(conferenceId, conference)



Update a single Conference

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { UpdateConferenceRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of the Conference
    conferenceId: 56,
    // Conference | Conference attributes to update
    conference: ...,
  } satisfies UpdateConferenceRequest;

  try {
    const data = await api.updateConference(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **conferenceId** | `number` | ID of the Conference | [Defaults to `undefined`] |
| **conference** | [Conference](Conference.md) | Conference attributes to update | |

### Return type

[**Conference**](Conference.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Conference was updated |  -  |
| **401** | Unauthorized |  -  |
| **422** | Unable to update the Conference |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateConferenceship

> Conferenceship updateConferenceship(conferenceshipId, conferenceship)



Update a single Conferenceship

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { UpdateConferenceshipRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of the Conferenceship
    conferenceshipId: 56,
    // Conferenceship | Conferenceship attributes to update
    conferenceship: ...,
  } satisfies UpdateConferenceshipRequest;

  try {
    const data = await api.updateConferenceship(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **conferenceshipId** | `number` | ID of the Conferenceship | [Defaults to `undefined`] |
| **conferenceship** | [Conferenceship](Conferenceship.md) | Conferenceship attributes to update | |

### Return type

[**Conferenceship**](Conferenceship.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Conferenceship was updated |  -  |
| **401** | Unauthorized |  -  |
| **422** | Unable to update the Conferenceship |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateFavorite

> CreateFavorite201Response updateFavorite(id, updateFavoriteRequest)



Update a favorite (e.g. reassign to a different category)

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { UpdateFavoriteOperationRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | The favorite record ID
    id: 56,
    // UpdateFavoriteRequest
    updateFavoriteRequest: ...,
  } satisfies UpdateFavoriteOperationRequest;

  try {
    const data = await api.updateFavorite(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `number` | The favorite record ID | [Defaults to `undefined`] |
| **updateFavoriteRequest** | [UpdateFavoriteRequest](UpdateFavoriteRequest.md) |  | |

### Return type

[**CreateFavorite201Response**](CreateFavorite201Response.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Favorite updated |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateFavoritesCategory

> GetFavoritesCategories200ResponseInner updateFavoritesCategory(id, updateFavoritesCategoryRequest)



Update a favorites category name

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { UpdateFavoritesCategoryOperationRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | The category ID
    id: 56,
    // UpdateFavoritesCategoryRequest
    updateFavoritesCategoryRequest: ...,
  } satisfies UpdateFavoritesCategoryOperationRequest;

  try {
    const data = await api.updateFavoritesCategory(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `number` | The category ID | [Defaults to `undefined`] |
| **updateFavoritesCategoryRequest** | [UpdateFavoritesCategoryRequest](UpdateFavoritesCategoryRequest.md) |  | |

### Return type

[**GetFavoritesCategories200ResponseInner**](GetFavoritesCategories200ResponseInner.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Category updated |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateFoiaLabel

> FoiaLabel updateFoiaLabel(foiaLabelId, foiaLabel)



Update a single foia label

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { UpdateFoiaLabelRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of foia label to update
    foiaLabelId: 56,
    // FoiaLabel | Foia label to update
    foiaLabel: ...,
  } satisfies UpdateFoiaLabelRequest;

  try {
    const data = await api.updateFoiaLabel(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **foiaLabelId** | `number` | ID of foia label to update | [Defaults to `undefined`] |
| **foiaLabel** | [FoiaLabel](FoiaLabel.md) | Foia label to update | |

### Return type

[**FoiaLabel**](FoiaLabel.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Foia label was updated |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateFoiaRequest

> FoiaRequest updateFoiaRequest(foiaRequestId, foiaRequest)



Update a single foia request

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { UpdateFoiaRequestRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of foia request to update
    foiaRequestId: 56,
    // FoiaRequest | Foia request to update
    foiaRequest: ...,
  } satisfies UpdateFoiaRequestRequest;

  try {
    const data = await api.updateFoiaRequest(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **foiaRequestId** | `number` | ID of foia request to update | [Defaults to `undefined`] |
| **foiaRequest** | [FoiaRequest](FoiaRequest.md) | Foia request to update | |

### Return type

[**FoiaRequest**](FoiaRequest.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Foia request was updated |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateGameContract

> DeleteNote200Response updateGameContract(gameContractId, gameContractHomeSchoolId, gameContractAwaySchoolId, gameContractSportId, gameContractGameType, gameContractGameDate, gameContractGameDateTbd, gameContractOffSiteLocation, gameContractCompDollars, gameContractCompTbd, gameContractVariable, gameContractCancelFeeDollars, gameContractCancelled, gameContractVerified, gameContractSignedOn, rawContractFile)



Update a GameContract

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { UpdateGameContractRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of the GameContract
    gameContractId: 56,
    // number (optional)
    gameContractHomeSchoolId: 56,
    // number (optional)
    gameContractAwaySchoolId: 56,
    // number (optional)
    gameContractSportId: 56,
    // string (optional)
    gameContractGameType: gameContractGameType_example,
    // string (optional)
    gameContractGameDate: gameContractGameDate_example,
    // string (optional)
    gameContractGameDateTbd: gameContractGameDateTbd_example,
    // string (optional)
    gameContractOffSiteLocation: gameContractOffSiteLocation_example,
    // string (optional)
    gameContractCompDollars: gameContractCompDollars_example,
    // string (optional)
    gameContractCompTbd: gameContractCompTbd_example,
    // string (optional)
    gameContractVariable: gameContractVariable_example,
    // string (optional)
    gameContractCancelFeeDollars: gameContractCancelFeeDollars_example,
    // string (optional)
    gameContractCancelled: gameContractCancelled_example,
    // string (optional)
    gameContractVerified: gameContractVerified_example,
    // string (optional)
    gameContractSignedOn: gameContractSignedOn_example,
    // Blob (optional)
    rawContractFile: BINARY_DATA_HERE,
  } satisfies UpdateGameContractRequest;

  try {
    const data = await api.updateGameContract(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **gameContractId** | `number` | ID of the GameContract | [Defaults to `undefined`] |
| **gameContractHomeSchoolId** | `number` |  | [Optional] [Defaults to `undefined`] |
| **gameContractAwaySchoolId** | `number` |  | [Optional] [Defaults to `undefined`] |
| **gameContractSportId** | `number` |  | [Optional] [Defaults to `undefined`] |
| **gameContractGameType** | `string` |  | [Optional] [Defaults to `undefined`] |
| **gameContractGameDate** | `string` |  | [Optional] [Defaults to `undefined`] |
| **gameContractGameDateTbd** | `string` |  | [Optional] [Defaults to `undefined`] |
| **gameContractOffSiteLocation** | `string` |  | [Optional] [Defaults to `undefined`] |
| **gameContractCompDollars** | `string` |  | [Optional] [Defaults to `undefined`] |
| **gameContractCompTbd** | `string` |  | [Optional] [Defaults to `undefined`] |
| **gameContractVariable** | `string` |  | [Optional] [Defaults to `undefined`] |
| **gameContractCancelFeeDollars** | `string` |  | [Optional] [Defaults to `undefined`] |
| **gameContractCancelled** | `string` |  | [Optional] [Defaults to `undefined`] |
| **gameContractVerified** | `string` |  | [Optional] [Defaults to `undefined`] |
| **gameContractSignedOn** | `string` |  | [Optional] [Defaults to `undefined`] |
| **rawContractFile** | `Blob` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**DeleteNote200Response**](DeleteNote200Response.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Game Contract was updated |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |
| **422** | Unprocessable Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateGamePostSearch

> GamePostDetail updateGamePostSearch(gamePostSearchId, updateGamePostSearchRequest)



Update a game post. Accepts status/expires_on for expire/renew, or full form fields for editing.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { UpdateGamePostSearchOperationRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number
    gamePostSearchId: 56,
    // UpdateGamePostSearchRequest (optional)
    updateGamePostSearchRequest: ...,
  } satisfies UpdateGamePostSearchOperationRequest;

  try {
    const data = await api.updateGamePostSearch(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **gamePostSearchId** | `number` |  | [Defaults to `undefined`] |
| **updateGamePostSearchRequest** | [UpdateGamePostSearchRequest](UpdateGamePostSearchRequest.md) |  | [Optional] |

### Return type

[**GamePostDetail**](GamePostDetail.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Game post updated |  -  |
| **422** | Validation error |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateJobPost

> JobPost updateJobPost(jobPostId, jobPost)

Update a job post

Update a job post

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { UpdateJobPostRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of job post to update
    jobPostId: 789,
    // JobPost (optional)
    jobPost: ...,
  } satisfies UpdateJobPostRequest;

  try {
    const data = await api.updateJobPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **jobPostId** | `number` | ID of job post to update | [Defaults to `undefined`] |
| **jobPost** | [JobPost](JobPost.md) |  | [Optional] |

### Return type

[**JobPost**](JobPost.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Job post was updated |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateNote

> Note updateNote(id, updateNoteRequest)



Update a note\&#39;s content

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { UpdateNoteOperationRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number
    id: 56,
    // UpdateNoteRequest
    updateNoteRequest: ...,
  } satisfies UpdateNoteOperationRequest;

  try {
    const data = await api.updateNote(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `number` |  | [Defaults to `undefined`] |
| **updateNoteRequest** | [UpdateNoteRequest](UpdateNoteRequest.md) |  | |

### Return type

[**Note**](Note.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Note updated |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updatePasswordReset

> UpdatePasswordReset200Response updatePasswordReset(updatePasswordResetRequest)



Reset password using the token from the reset email

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { UpdatePasswordResetOperationRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const api = new DefaultApi();

  const body = {
    // UpdatePasswordResetRequest
    updatePasswordResetRequest: ...,
  } satisfies UpdatePasswordResetOperationRequest;

  try {
    const data = await api.updatePasswordReset(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **updatePasswordResetRequest** | [UpdatePasswordResetRequest](UpdatePasswordResetRequest.md) |  | |

### Return type

[**UpdatePasswordReset200Response**](UpdatePasswordReset200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Password reset successfully |  -  |
| **400** | Missing required parameters |  -  |
| **422** | Validation errors (invalid token, password mismatch, etc.) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updatePosition

> Position updatePosition(positionId, position)



Update a position

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { UpdatePositionRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of position to update
    positionId: 56,
    // Position | Position attributes to update.
    position: ...,
  } satisfies UpdatePositionRequest;

  try {
    const data = await api.updatePosition(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **positionId** | `number` | ID of position to update | [Defaults to `undefined`] |
| **position** | [Position](Position.md) | Position attributes to update. | |

### Return type

[**Position**](Position.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Position was updated |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |
| **422** | Unable to update position |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateRequestedItem

> RequestedItem updateRequestedItem(requestedItemId, requestedItem)



Update a single requested item

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { UpdateRequestedItemRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of requested item to update
    requestedItemId: 56,
    // RequestedItem | Requested item to update
    requestedItem: ...,
  } satisfies UpdateRequestedItemRequest;

  try {
    const data = await api.updateRequestedItem(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **requestedItemId** | `number` | ID of requested item to update | [Defaults to `undefined`] |
| **requestedItem** | [RequestedItem](RequestedItem.md) | Requested item to update | |

### Return type

[**RequestedItem**](RequestedItem.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Requested item was updated |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateSeason

> Season updateSeason(seasonId, season)



Update a single Season

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { UpdateSeasonRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | ID of the Season
    seasonId: 56,
    // Season | Season attributes to update
    season: ...,
  } satisfies UpdateSeasonRequest;

  try {
    const data = await api.updateSeason(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **seasonId** | `number` | ID of the Season | [Defaults to `undefined`] |
| **season** | [Season](Season.md) | Season attributes to update | |

### Return type

[**Season**](Season.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Season was updated |  -  |
| **401** | Unauthorized |  -  |
| **422** | Unable to update the Season |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateTeamScheduleFavorite

> CreateTeamScheduleFavorite201Response updateTeamScheduleFavorite(id, updateTeamScheduleFavoriteRequest)



Update a FilTeam favorite\&#39;s category

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { UpdateTeamScheduleFavoriteOperationRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number | The favorite record ID
    id: 56,
    // UpdateTeamScheduleFavoriteRequest
    updateTeamScheduleFavoriteRequest: ...,
  } satisfies UpdateTeamScheduleFavoriteOperationRequest;

  try {
    const data = await api.updateTeamScheduleFavorite(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `number` | The favorite record ID | [Defaults to `undefined`] |
| **updateTeamScheduleFavoriteRequest** | [UpdateTeamScheduleFavoriteRequest](UpdateTeamScheduleFavoriteRequest.md) |  | |

### Return type

[**CreateTeamScheduleFavorite201Response**](CreateTeamScheduleFavorite201Response.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Favorite updated |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## upsertTeamScheduleNote

> TeamScheduleNote upsertTeamScheduleNote(filTeamId, upsertTeamScheduleNoteRequest)



Create or update the current user\&#39;s note for a team.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { UpsertTeamScheduleNoteOperationRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string
    filTeamId: filTeamId_example,
    // UpsertTeamScheduleNoteRequest
    upsertTeamScheduleNoteRequest: ...,
  } satisfies UpsertTeamScheduleNoteOperationRequest;

  try {
    const data = await api.upsertTeamScheduleNote(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **filTeamId** | `string` |  | [Defaults to `undefined`] |
| **upsertTeamScheduleNoteRequest** | [UpsertTeamScheduleNoteRequest](UpsertTeamScheduleNoteRequest.md) |  | |

### Return type

[**TeamScheduleNote**](TeamScheduleNote.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Note saved |  -  |
| **401** | Unauthorized |  -  |
| **422** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## userMe

> User userMe()



Retrieve a single user

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { UserMeRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  try {
    const data = await api.userMe();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**User**](User.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | User was found |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## verifyOtpCode

> VerifyOtpCode200Response verifyOtpCode(verifyOtpCodeRequest)



Verify an OTP code for the authenticated user

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { VerifyOtpCodeOperationRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // VerifyOtpCodeRequest
    verifyOtpCodeRequest: ...,
  } satisfies VerifyOtpCodeOperationRequest;

  try {
    const data = await api.verifyOtpCode(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **verifyOtpCodeRequest** | [VerifyOtpCodeRequest](VerifyOtpCodeRequest.md) |  | |

### Return type

[**VerifyOtpCode200Response**](VerifyOtpCode200Response.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OTP verified successfully |  -  |
| **401** | Unauthorized |  -  |
| **422** | Invalid or expired OTP code |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## verifyUserIntercollegiateAccess

> VerifyUserIntercollegiateAccess200Response verifyUserIntercollegiateAccess(userEmail)



Verifies whether the user has intercollegiate access based on their email.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { VerifyUserIntercollegiateAccessRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string | The email of the user whose intercollegiate access is being verified.
    userEmail: userEmail_example,
  } satisfies VerifyUserIntercollegiateAccessRequest;

  try {
    const data = await api.verifyUserIntercollegiateAccess(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **userEmail** | `string` | The email of the user whose intercollegiate access is being verified. | [Defaults to `undefined`] |

### Return type

[**VerifyUserIntercollegiateAccess200Response**](VerifyUserIntercollegiateAccess200Response.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response with the access granted status |  -  |
| **401** | Unauthorized |  -  |
| **404** | User Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

