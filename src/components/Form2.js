import React, { Component } from "react";

class Form2 extends Component {
  constructor(props) {
    super(props);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.name = React.createRef();
    this.email = React.createRef();
    this.phone = React.createRef();
    this.age = React.createRef();
    this.gender = React.createRef();
    this.hobbies = React.createRef();
    this.country = React.createRef();
    this.password = React.createRef();
    this.refForm = React.createRef();
    this.state = {
      name: "",
      email: "",
      phone: "",
      age: "",
      gender: "",
      hobbies: "",
      country: "",
      password: "",
      genderData: "",
      hobbiesData: [],
    };
  }

  onSubmitHandler(event) {
    event.preventDefault();
    // console.log(this.gender.current.value);
    this.setState({
      name: this.name.current.value,
      email: this.email.current.value,
      phone: this.phone.current.value,
      age: this.age.current.value,
      gender: this.state.genderData,
      hobbies: this.state.hobbiesData && this.state.hobbiesData.join(","),
      country: this.country.current.value,
      password: this.password.current.value,
    });
    this.refForm.current.reset();
    // this.setState({
    //   name: "",
    //   email: "",
    //   phone: "",
    //   age: "",
    //   gender: "",
    //   hobbies: "",
    //   country: "",
    //   password: "",
    // });
  }

  onHobbiesChange(e) {
    const hobbiesData = this.state.hobbiesData;

    const hobbiesIndex = hobbiesData.indexOf(e.target.value);

    if (hobbiesData.includes(e.target.value)) {
      hobbiesData.splice(hobbiesIndex, 1);
      this.setState({ hobbiesData: hobbiesData });
    } else {
      hobbiesData.push(e.target.value);
      this.setState({ hobbiesData: hobbiesData });
    }
  }
  render() {
    return (
      <div>
        <h1>Uncontrolled</h1>
        <form ref={this.refForm} onSubmit={this.onSubmitHandler}>
          <div>
            <label>Name:</label>
            <input type="text" ref={this.name} />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" ref={this.email} />
          </div>
          <div>
            <label>Phone:</label>
            <input type="number" ref={this.phone} />
          </div>
          <div>
            <label>Age:</label>
            <input type="number" ref={this.age} />
          </div>
          <div onChange={(e) => this.setState({ genderData: e.target.value })}>
            <label>Gender:</label>
            <input type="radio" name="gender" value="Male" />
            <label>Male</label>
            <input type="radio" name="gender" value="Female" />
            <label>Female</label>
          </div>
          <div onChange={(e) => this.onHobbiesChange(e)}>
            <label>Hobbies:</label>
            <input type="checkbox" name="hobbies" value="Sports" />
            <label>Sports</label>
            <input type="checkbox" name="hobbies" value="Music" />
            <label>Music</label>
            <input type="checkbox" name="hobbies" value="Reading" />
            <label>Reading</label>
            <input type="checkbox" name="hobbies" value="Swimming" />
            <label>Swimming</label>
          </div>
          <div>
            <label>Country:</label>
            <select id="country" name="country" ref={this.country}>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="Australia">Australia</option>
              <option value="Canada">Canada</option>
            </select>
          </div>
          <div>
            <label>Password: </label>
            <input type="password" ref={this.password} />
          </div>
          <button type="submit">Submit</button>
        </form>
        <div>
          <h2>{this.state.name}</h2>
          <h2>{this.state.email}</h2>
          <h2>{this.state.phone}</h2>
          <h2>{this.state.age}</h2>
          <h2>{this.state.gender}</h2>
          <h2>{this.state.hobbies}</h2>
          <h2>{this.state.country}</h2>
          <h2>{this.state.password}</h2>
        </div>
      </div>
    );
  }
}

export default Form2;
