export interface Folder {
  name: string;
  owner: string;
  protected: boolean;
  backup: boolean;
}

export interface Task {
  name: string;
  completed: boolean;
  owner: string;
}

export interface TriggerEventsNode {
  children?:TriggerEventsNode[];
  expandable: boolean;
  startDateTime: Date;
  endDateTime: Date;
  recalculatedDate: Date;
  authority: string;
  description: string;
  excluded: boolean;
  locked: boolean;
  delete: boolean;
  jurisdictionId: string;
  uniqueFormulaId: string;
  groupId: string;
  parentFormulaId: string;
  eventId: number;
  heirarchy: string;
  cnsStatus: string;
  hasChanges: boolean;
  version: number;
  level: number;
  calculationSummary: string;
  action: string;
  eventSysId: number;
  isManualDateOverride: boolean;
  isManualTimeOverride: boolean;
  categoryCode: string;
  categoryName: string;
  isPrimaryKeyEvent: boolean;
  parent?: TriggerEventsNode;
  selected?: boolean;
  indeterminate?: boolean;
}