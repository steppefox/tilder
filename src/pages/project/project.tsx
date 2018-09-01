import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IStore, TGroupsItems, TGroupsIndex } from '../../store/modules/types';
import Link from '../../components/Link';
import GroupAdd from '../../components/forms/GroupAdd/GroupAdd';

import {
  loadGroups,
  addGroup,
  addKey,
  TAddKeyArgs,
} from '../../store/modules/actions';

export class ProjectPage extends Component<IProps> {
  static async getInitialProps ({ query, store }) {
    const id = query.id;
    let groupId = query.groupId;

    await store.dispatch(loadGroups(id));

    if (!groupId) {
      groupId = store.getState().groups.index[0];
    }

    // LOAD KEYS LIST

    return {
      projectId: id,
      groupId: groupId,
    };
  }

  onSubmit = ({ name }) => {
    this.props.addGroup({
      name,
      projectId: this.props.projectId
    });
  }

  onSubmitKey = ({ name } : { name: string }) => {
    this.props.addKey({
      name,
      groupId: this.props.groupId,
      projectId: this.props.projectId
    });
  }

  render() {
    const { groups, index, projectId, groupId } = this.props;

    return <div className="project">
      <div className="project__breadcrumbs">
        <Link href="/">Go to projects list</Link>

        <button type="button" className="button is-primary is-small">
          Add key
        </button>
      </div>
      <div className="project__form">
        <GroupAdd onSubmit={this.onSubmit} />
      </div>
      <div>
        <div>
          {index.map((id) =>
            <div key={id}>
              {id === groupId ?
                <span>{groups[id].name}</span> :
                <Link href={`/project/${projectId}/group/${id}`}>
                  {groups[id].name}
                </Link>
              }
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

interface IActionProps {
  addGroup: (object) => void,
  addKey: (object: TAddKeyArgs) => void,
}

interface IOwnProps {
  projectId: string,
  groupId: string,
};

interface IProps extends IStateProps, IActionProps, IOwnProps {}

const mapStateToProps = (state: IStore):IStateProps => ({
  groups: state.groups.items,
  index: state.groups.index,
});

const mapDispatchToProps: IActionProps = {
  addGroup,
  addKey,
};

export default connect<IStateProps, IActionProps>(mapStateToProps, mapDispatchToProps)(ProjectPage);
