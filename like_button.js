'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'Спасибо за внимание к моему портфолио!';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      ''
    );
  }
}

document.querySelectorAll('.like_button')
  .forEach(domContainer => {    
    ReactDOM.render(e(LikeButton), domContainer);
  });