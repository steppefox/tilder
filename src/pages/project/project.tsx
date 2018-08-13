import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IStore, TGroupsItems, TGroupsIndex } from '../../store/modules/types';
import Link from '../../components/Link';

import { loadGroups } from '../../store/modules/actions';

export class ProjectPage extends Component<IProps> {
  static async getInitialProps ({ query, store }) {
    const id = query.id;

    await store.dispatch(loadGroups(id));
    return {};
  }

  render() {
    const { groups, index } = this.props;

    return <div className="project">
      <div className="project__breadcrumbs">
        <Link href="/">Go to projects list</Link>
      </div>
      <div>
        <div>
          {index.map((index) =>
            <div key={groups[index].id}>
              {groups[index].id}
            </div>
          )}
        </div>

        <div>
          Keys will be here
        </div>
      </div>
    </div>;
  }
}

interface IStateProps {
  groups: TGroupsItems,
  index: TGroupsIndex,
};

interface IOwnProps {}
interface IProps extends IStateProps, IOwnProps {}

const mapStateToProps = (state: IStore):IStateProps => ({
  groups: state.groups.items,
  index: state.groups.index,
});

export default connect<IStateProps>(mapStateToProps)(ProjectPage);
