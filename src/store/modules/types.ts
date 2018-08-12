import { TProjectsModule } from './projects/types';
import { TGroupsModule } from './groups/types';

export interface IStore {
  projects: TProjectsModule,
  groups: TGroupsModule,
};

export * from './projects/types';
export * from './groups/types';
