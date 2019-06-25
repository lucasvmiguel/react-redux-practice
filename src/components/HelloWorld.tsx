import * as React from 'react';

interface IProps {
  text: string;
}

class HelloWorld extends React.Component<IProps> {
  public render() {
    const { text } = this.props;

    return (
      <h1>{text}</h1>
    );
  }
}

export default HelloWorld;
