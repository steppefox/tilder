import React, { Component } from 'react';

const defaultState: IState = {
  name: '',
};

export default class GroupAdd extends Component<IProps, IState> {
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
    return <div className="add-form">
      <form method="post" onSubmit={this.onSubmit}>
        <div className="field has-addons">
          <div className="control">
            <input
              name="name"
              className="input"
              value={this.state.name}
              onChange={this.onChange}
              placeholder="Enter the group name"
            />
          </div>
          <div className="control">
            <button className="button is-info" type="submit">Add</button>
          </div>
        </div>
      </form>
    </div>;
  }
}

interface IProps {
  onSubmit: (IState) => void,
};

interface IState {
  name: string,
};
