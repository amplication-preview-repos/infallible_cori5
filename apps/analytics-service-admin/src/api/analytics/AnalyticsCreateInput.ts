import { InputJsonValue } from "../../types";

export type AnalyticsCreateInput = {
  event?: string | null;
  timestamp?: Date | null;
  data?: InputJsonValue;
};
