import React, { SyntheticEvent } from "react";

class LoginClassForm extends React.Component {
  state = {
    email: "",
    password: "",
  };
  submitForm(ev: SyntheticEvent) {
    ev.preventDefault();
    const target = ev.target as HTMLFormElement;
    console.log(target, this.state);
  }

  render(): React.ReactNode {
    return (
      <form
        className="flex flex-col gap-4"
        onSubmit={this.submitForm.bind(this)}
      >
        <input
          onChange={(ev) => {
            this.setState({
              email: ev.target.value,
            });
          }}
          type="email"
          placeholder="Enter your email"
        />
        <input
          onChange={(ev) => {
            this.setState({
              password: ev.target.value,
            });
          }}
          type="password"
          placeholder="Enter your password"
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default LoginClassForm;
