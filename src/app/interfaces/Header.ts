import { Data } from "./Data";

export interface Header {
    key: keyof Data,
    label: string,
  }