// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Button, Confirm} from 'semantic-ui-react'
import autobind from '../utils/autobind';
import compose from '../utils/compose';

import type {
  Dispatch,
  MapStateToProps,
  MapDispatchToProps,
  RouterHistory,
  State,
} from '../types';

import ContactView from '../views/contact';

type Props = {

};

type ContainerState = {

};

const mapStateToProps: MapStateToProps<Props> = (state: State) => ({

});

const mapDispatchToProps: MapDispatchToProps<Props> = (dispath: Dispatch) => ({

});

class ContactContainer extends Component {
  props: Props;
  state: ContainerState;
  
  state = { open: false }
  show = () => this.setState({ open: true })
  handleConfirm = () => this.setState({ open: false })
  handleCancel = () => this.setState({ open: false })

  constructor(props, context) {
    super(props, context);
    autobind(this);
    this.state = {

    };
  }
  render() {

    return (
      <ContactView
        {...this.props}
        {...this.state}
      />
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(ContactContainer);
