import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const AnalyticsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="event" source="event" />
        <DateTimeInput label="timestamp" source="timestamp" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
