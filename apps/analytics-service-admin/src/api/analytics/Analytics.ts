import { JsonValue } from "type-fest";

export type Analytics = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  event: string | null;
  timestamp: Date | null;
  data: JsonValue;
};
