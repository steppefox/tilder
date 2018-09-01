export type TProjectsItem = {
  id: string,
  name: string,
};

export type TProjectsItems = {
  [key:string]: TProjectsItem
};

export type TProjectsIndex = string[];

export type TProjectsModule = {
  items: TProjectsItems,
  index: TProjectsIndex,
};
