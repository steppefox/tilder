import React, { Component } from 'react';

const defaultState: IState = {
  name: '',
};

export default class ProjectAddForm extends Component<IProps, IState> {
  constructor(props) {
    super(props);

    this.state = defaultState;
  }

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      name: e.target.value,
    });
  }

  onSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.setState(defaultState);
  }

  render(): JSX.Element {
    return <div className="main">
      <form method="post" onSubmit={this.onSubmit}>
        <input value={this.state.name} onChange={this.onChange} name="name" />

        <button type="submit">Add</button>
      </form>
    </div>;
  }
}

interface IOwnProps {
  onSubmit: (IState) => void,
};
interface IState {
  name: string,
};
interface IProps extends IOwnProps {};
