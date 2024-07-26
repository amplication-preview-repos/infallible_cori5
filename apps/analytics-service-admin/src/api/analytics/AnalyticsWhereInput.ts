import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type AnalyticsWhereInput = {
  id?: StringFilter;
  event?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
  data?: JsonFilter;
};
