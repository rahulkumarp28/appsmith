import { DEFAULT_ACTION_TIMEOUT } from "@appsmith/constants/ApiConstants";
import type { ActionConfig } from "entities/Action";

// Appsmith AI Default Config
export const DEFAULT_APPSMITH_AI_ACTION_CONFIG: ActionConfig = {
  timeoutInMillisecond: DEFAULT_ACTION_TIMEOUT,
  formData: {
    usecase: { data: "TEXT_GENERATE" },
  },
};
export const DEFAULT_CREATE_APPSMITH_AI_CONFIG = {
  config: DEFAULT_APPSMITH_AI_ACTION_CONFIG,
  datasource: {
    name: "DEFAULT_APPSMITH_AI_DATASOURCE",
    datasourceConfiguration: {},
  },
  eventData: {
    actionType: "APPSMITH_AI",
  },
};
