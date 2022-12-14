import type { FormResponse } from "../db";

export const formResponseMock: FormResponse =  {
  id: "1234",
  submitted_on: "03/04/2022 3:44 pm",
  first_name: "Malcolm",
  last_name: "Moses",
  email: "malc@aol.com",
  phone_number: "555-5555",
  phone_type: "Mobile",
  address_id: "2133",
  is_black: true,
  live_in_pittsburgh_atlanta: false,
  live_in_southside_atlanta: true,
  has_flu_symptoms: false,
  household_members: 5,
  feminine_health_care_id: "yyyy",
  packages_like_to_receive: "all",
  additional_information: "N/A",
  is_pick_up: false,
  is_volunteering: true,
  is_subscribing: true,
  is_interested_in_membership: false,
};

export const bagItemsMock = {
  "Groceries": [
    { name: "Chicken", quantity: 1 },
    { name: "Eggs", quantity: 2 },
    { name: "Bread", quantity: 2 }
  ],
  "General Hygiene": [
    { name: "Deodorant", quantity: 2 },
    { name: "Body Soap", quantity: 2 },
    { name: "Toilet Paper", quantity: 2 },
    { name: "Toothbrush" , quantity: 2 },
    { name: "Toothpaste" , quantity: 1 }
  ],
  "Feminine Hygiene": [
    { name: "Feminine Wipes", quantity: 5 },
    { name: "Regular Tampons", quantity: 15 },
    { name: "Super Tampons", quantity: 15 },
    { name: "Thin Pads", quantity: 15 },
    { name: "Regular Pads", quantity: 15 }
  ]
};