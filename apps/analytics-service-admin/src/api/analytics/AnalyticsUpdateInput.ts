import { InputJsonValue } from "../../types";

export type AnalyticsUpdateInput = {
  event?: string | null;
  timestamp?: Date | null;
  data?: InputJsonValue;
};
