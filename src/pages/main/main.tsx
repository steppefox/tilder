import React, { Component } from 'react';
import { connect } from 'react-redux';

import Link from '../../components/Link';
import ProjectAddForm from '../../components/ProjectAddForm';

import { IStore, TProjectsItems, TProjectsIndex } from '../../store/modules/types';
import { loadProjects, addProject } from '../../store/modules/actions';

export class AppPage extends Component<IProps> {
  static async getInitialProps ({ store }) {
    await store.dispatch(loadProjects());
    return {};
  }

  onSubmit = (data) => {
    this.props.addProject(data);
  }

  render(): JSX.Element {
    const { items, index } = this.props;
    return <div className="main">

      <ProjectAddForm onSubmit={this.onSubmit} />

      {index.map((id) => {
        const item = items[id];

        return <div className="main__project" key={item.id}>
          <Link href={`/project/${item.id}`}>
            {item.title}
          </Link>
        </div>
      })}
    </div>;
  }
}

interface IStateProps {
  items: TProjectsItems,
  index: TProjectsIndex,
};

interface IDispatchProps {
  loadProjects: () => void,
  addProject: (any) => void,
}

interface IOwnProps {};
interface IProps extends IStateProps, IOwnProps, IDispatchProps {};

const mapStateToProps = (state: IStore): IStateProps => ({
  items: state.projects.items,
  index: state.projects.index,
});

const mapDispatchToProps = {
  loadProjects,
  addProject,
};

export default connect<IStateProps, IDispatchProps>(mapStateToProps, mapDispatchToProps)(AppPage);
