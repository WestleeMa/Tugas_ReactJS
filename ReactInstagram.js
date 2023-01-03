//412021012 Westlee Matthew Agustinus

const bbb = React.createElement;

class IG extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
  }

  render() {
    if (this.state.hover) {
      return 'deboraaaableeeee';
    }

    return bbb(
      'paragraph',
      { onMouseEnter: () => this.setState({ hover: true })},
      'Instagram'
    );
  }
}

  const aaaaaaaaaaaaa = document.getElementById('Insta');
  const root = ReactDOM.createRoot(aaaaaaaaaaaaa);
  root.render(bbb(IG));