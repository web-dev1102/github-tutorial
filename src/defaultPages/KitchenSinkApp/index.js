import React from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Global } from "@emotion/core";

import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { CometChatAvatar } from "../../cometchat-pro-react-ui-kit/CometChatWorkspace/src";
import { COMETCHAT_CONSTANTS } from "../../consts";

import {
  errorStyle,
  form,
  input_item,
  input_item1,
  eye,
  input_form_input,
  submits,
  form_con,
  header,
  header_p,
  header_h2,
  input_txt_input,
  button,
  sign_up,
  body,
} from "./style";
import { loaderStyle } from "./loader";
import * as actions from "../../store/action";
import "./custom.css";

class KitchenSinkApp extends React.PureComponent {
  constructor(props) {
    super(props);

    this.myRef = React.createRef();
    this.state = {
      psdType: "password",
    };
  }

  login = (uid) => {
    if (!uid) {
      uid = this.myRef.current.value;
    }

    this.uid = uid;
    this.props.onLogin(this.uid, COMETCHAT_CONSTANTS.AUTH_KEY);
  };

  psdShow = () => {
    this.setState({
      psdType: this.state.psdType === "password" ? "text" : "password",
    });
  };

  render() {
    let loader = null;
    if (this.props.loading) {
      loader = <div className="loading">Loading...</div>;
    }

    let errorMessage = null;
    if (this.props.error) {
      errorMessage = <p css={errorStyle()}>{this.props.error.message}</p>;
    }

    let authRedirect = null;
    if (this.props.isLoggedIn) {
      authRedirect = <Redirect to="/" />;
    }

    return (
      <React.Fragment>
        <Global styles={loaderStyle} />
        {authRedirect}
        {loader}
        {errorMessage}
        <div>
          <form css={form()}>
            <div css={form_con()}>
              <header className="head-form" css={header()}>
                <h2 css={header_h2()}>Log In</h2>
                <p css={header_p()}>
                  login here using your username and password
                </p>
              </header>
              <br />
              <div className="field-set">
                <span css={input_item()}>
                  <i className="fa fa-user-circle"></i>
                </span>
                <input
                  css={input_txt_input()}
                  ref={this.myRef}
                  id="txt-input"
                  type="text"
                  placeholder="UserName"
                  required
                />
                <br />
                <span css={input_item1()}>
                  <i className="fa fa-key"></i>
                </span>
                <input
                  css={input_form_input()}
                  type={this.state.psdType}
                  placeholder="Password"
                  id="pwd"
                  name="password"
                  required
                />
                <span>
                  <i
                    className="fa fa-eye"
                    aria-hidden="true"
                    type="button"
                    css={eye()}
                    onClick={() => this.psdShow()}
                  ></i>
                </span>
                <br />
                <button
                  className="log-in"
                  css={button()}
                  type="button"
                  onClick={() => this.login()}
                >
                  {" "}
                  Log In{" "}
                </button>
              </div>
              <div className="other">
                <button className="btn" css={submits()}>
                  Forgot Password
                </button>
                <button className="btn" css={sign_up()}>
                  Sign Up&nbsp;
                  <i className="fa fa-user-plus" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
    isLoggedIn: state.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (uid, authKey) => dispatch(actions.auth(uid, authKey)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(KitchenSinkApp);
