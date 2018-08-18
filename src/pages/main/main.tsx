import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from '../../components/Link';
import { IStore, TProjectsItems, TProjectsIndex } from '../../store/modules/types';
import { loadProjects } from '../../store/modules/actions';

export class AppPage extends Component<IProps> {
  static async getInitialProps ({ store }) {
    await store.dispatch(loadProjects());
    return {};
  }

  render(): JSX.Element {
    const { items, index } = this.props;
    return <div className="main">
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
  loadProjects: Function,
}

interface IOwnProps {};
interface IProps extends IStateProps, IOwnProps, IDispatchProps {};

const mapStateToProps = (state: IStore): IStateProps => ({
  items: state.projects.items,
  index: state.projects.index,
});

const mapDispatchToProps = {
  loadProjects,
};

export default connect<IStateProps, IDispatchProps>(mapStateToProps, mapDispatchToProps)(AppPage);
