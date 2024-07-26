import { Analytics as TAnalytics } from "../api/analytics/Analytics";

export const ANALYTICS_TITLE_FIELD = "event";

export const AnalyticsTitle = (record: TAnalytics): string => {
  return record.event?.toString() || String(record.id);
};
