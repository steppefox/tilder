export type TKeyItem = {
  id: string,
  name: string,
};

export type TKeysItems = {
  [key:string]: TKeyItem
};

export type TKeysIndex = string[];

export type TKeysModule = {
  items: TKeysItems,
  index: TKeysIndex,
};
