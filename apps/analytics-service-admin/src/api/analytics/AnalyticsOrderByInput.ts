import { SortOrder } from "../../util/SortOrder";

export type AnalyticsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  event?: SortOrder;
  timestamp?: SortOrder;
  data?: SortOrder;
};
