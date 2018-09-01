export type TGroupItem = {
  id: string,
  name: string,
};

export type TGroupsItems = {
  [key:string]: TGroupItem
};

export type TGroupsIndex = string[];

export type TGroupsModule = {
  items: TGroupsItems,
  index: TGroupsIndex,
};
