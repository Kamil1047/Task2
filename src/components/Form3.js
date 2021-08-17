import React, { useRef, useState } from "react";

const Form3 = () => {
  const name = useRef(null);
  const email = useRef(null);
  const phone = useRef(null);
  const age = useRef(null);
  const gender = useRef(null);
  const hobbies = useRef(null);
  const country = useRef("India");
  const password = useRef(null);
  const [userName, setName] = useState("");
  const [userEmail, setEmail] = useState("");
  const [userPhone, setPhone] = useState("");
  const [userAge, setAge] = useState("");
  const [userGender, setGender] = useState("");
  const [userHobbies, setHobbies] = useState("");
  const [userCountry, setCountry] = useState("");
  const [userPassword, setPassword] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setName(name.current.value);
    setEmail(email.current.value);
    setPhone(phone.current.value);
    setAge(age.current.value);
    setGender(gender.current.value);
    setHobbies(hobbies.current.value);
    setCountry(country.current.value);
    setPassword(password.current.value);
  };
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label>Name:</label>
          <input type="text" ref={name} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" ref={email} />
        </div>
        <div>
          <label>Phone:</label>
          <input type="number" ref={phone} />
        </div>
        <div>
          <label>Age:</label>
          <input type="number" ref={age} />
        </div>
        <div ref={gender}>
          <label>Gender:</label>
          <input type="radio" name="gender" value="Male" />
          <label>Male</label>
          <input type="radio" name="gender" value="Female" />
          <label>Female</label>
        </div>
        <div ref={hobbies}>
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
        <div ref={country}>
          <label>Country:</label>
          <select id="country" name="country">
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Australia">Australia</option>
            <option value="Canada">Canada</option>
          </select>
        </div>
        <div ref={password}>
          <label>Password:</label>
          <input type="password" />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>{userName}</div>
      <div>{userEmail}</div>
      <div>{userPhone}</div>
      <div>{userAge}</div>
      <div>{userGender}</div>
      <div>{userHobbies}</div>
      <div>{userCountry}</div>
      <div>{userPassword}</div>
    </div>
  );
};

export default Form3;
