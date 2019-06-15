// Vendors
import { h, render, Component, Fragment } from "preact";

// App-specific
import "Components/CustomProperty.less";

class CustomProperty extends Component {
  constructor (props) {
    super(props);

    this.state = {
      value: props.value
    };

    this.onCustomPropertyChange = this.onCustomPropertyChange.bind(this);
  }

  onCustomPropertyChange () {
    this.setState({
      value: this.customPropertyInput.value
    });

    this.props.onCustomPropertyChange(this.props.name, this.state.value);
  }

  render () {
    return (
      <Fragment>
        <label htmlFor={this.props.id}>{this.props.name}:&nbsp;</label>
        <input onChange={this.onCustomPropertyChange} ref={input => this.customPropertyInput = input} name={this.props.name} type="text" id={this.props.id} value={this.props.value} />
      </Fragment>
    );
  }
}

export default CustomProperty;
