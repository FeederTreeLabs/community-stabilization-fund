import React from "react";

import { BasicTable } from "../../../components";
import { formResponseMock } from "../../../mocks";
import { FORM_RESPONSE_QUESTIONS } from "../constants";
import { mapBooleanToResponse } from "../utils";

import type { FormResponse } from "../../../db";
import type { DataTableHeader, DataTableRow } from "carbon-components-react/lib/components/DataTable";


import styles from '../styles/form-responses.module.css';

const mockData = formResponseMock;

interface FormResponsesTableProps {
  formResponses?: FormResponse[];
}

const FormResponsesTable = ({formResponses = [mockData]}: FormResponsesTableProps) => {
  const createHeaders = (formResponseQuestions: string[]) => formResponseQuestions.map(
    (header: string) => ({key: header.toLowerCase().replaceAll(" ", "_"), header})
  );
  
  const createRows = (formResponses: FormResponse[]) => formResponses.map(resp => {
    const feminine_health_care = !!resp.feminine_health_care_id;
    const r = {...resp, feminine_health_care};
  
    FORM_RESPONSE_QUESTIONS.forEach(q => mapBooleanToResponse(r, q));
    return r;
  });

  const rows = createRows(formResponses) as DataTableRow<string>[];
  const headers = createHeaders(FORM_RESPONSE_QUESTIONS) as DataTableHeader<string>[];

  return (
    <div className={styles.form_responses_table}>
      <BasicTable rows={rows} headers={headers} />
    </div>
  );
};

export { FormResponsesTable };