export interface FormResponse {
	id: string;
    submitted_on: string;
	first_name: string;
	last_name: string;
	email: string;
	phone_number: string;
	phone_type: string;
	address_id?: string;
	is_black: boolean;
	live_in_pittsburgh_atlanta: boolean;
    live_in_southside_atlanta: boolean;
	has_flu_symptoms: boolean;
	household_members: number;
	feminine_health_care_id? : string;
	packages_like_to_receive: string;
	additional_information: string;
	is_pick_up: boolean;
	is_volunteering: boolean;
	is_subscribing: boolean;
	is_interested_in_membership: boolean;
};

export interface User {
    id: number;
    name: string;
};