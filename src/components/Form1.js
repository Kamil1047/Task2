import React, { useState } from "react";

const Form1 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [hobbies, setHobbies] = useState([]);
  const [country, setCountry] = useState("India");
  const [password, setPassword] = useState("");
  const [onSubmit, setOnSubmit] = useState("");

  const onSubmitHandler = (submitEvent) => {
    submitEvent.preventDefault();
    const formData = {
      name: name,
      email: email,
      phone: phone,
      age: age,
      gender: gender,
      hobbies: hobbies,
      country: country,
      password: password,
    };
    //props.onFormData(formData);
    // console.log(formData);
    setOnSubmit(formData);
    setName("");
    setEmail("");
    setPhone("");
    setAge("");
    setGender("");
    setHobbies("");
    setCountry("");
    setPassword("");
    //props.onGetData(formData);
  };
  const hobbiesChange = (e) => {
    let hobbiesData = hobbies;

    let hobbiesIndex = hobbiesData.indexOf(e.target.value);

    if (hobbiesData.includes(e.target.value)) {
      hobbiesData.splice(hobbiesIndex, 1);
      setHobbies(hobbiesData);
    } else {
      hobbiesData.push(e.target.value);
      setHobbies(hobbiesData);
    }
  };
  return (
    <div>
      <h1> Controlled</h1>
      <form onSubmit={onSubmitHandler}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(nameChangeEvent) => setName(nameChangeEvent.target.value)}
        />

        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(emailChangeEvent) =>
              setEmail(emailChangeEvent.target.value)
            }
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="number"
            value={phone}
            onChange={(phoneChangeEvent) =>
              setPhone(phoneChangeEvent.target.value)
            }
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            value={age}
            onChange={(ageChangeEvent) => setAge(ageChangeEvent.target.value)}
          />
        </div>
        <div
          value={gender}
          onChange={(genderChangeEvent) =>
            setGender(genderChangeEvent.target.value)
          }
        >
          <label>Gender:</label>
          <input
            type="radio"
            defaultChecked={gender === "Male"}
            name="gender"
            value="Male"
          />
          <label>Male</label>
          <input
            type="radio"
            defaultChecked={gender === "Female"}
            name="gender"
            defaultValue="Female"
          />
          <label>Female</label>
        </div>
        <div
          onChange={(e) =>
            hobbiesChange(e.target.value, e.target.value.checked)
          }
        >
          <label>Hobbies:</label>
          <input
            type="checkbox"
            checked={hobbies.includes(hobbies) ? true : false}
            value="Sports"
            name="hobbies"
          />
          <label>Sports</label>
          <input
            type="checkbox"
            checked={hobbies.includes(hobbies) ? true : false}
            value="Music"
            name="hobbies"
          />
          <label>Music</label>
          <input
            type="checkbox"
            checked={hobbies.includes(hobbies) ? true : false}
            value="Reading"
            name="hobbies"
          />
          <label>Reading</label>
          <input
            type="checkbox"
            checked={hobbies.includes(hobbies) ? true : false}
            value="Swimming"
            name="hobbies"
          />
          <label>Swimming</label>
        </div>
        <div
          onChange={(countryChangeEvent) =>
            setCountry(countryChangeEvent.target.value)
          }
        >
          <label>Country:</label>
          <select name="country" defaultValue={country}>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Australia">Australia</option>
            <option value="Canada">Canada</option>
          </select>
        </div>
        <div>
          <label>password:</label>
          <input
            type="password"
            value={password}
            onChange={(passwordChangeEvent) =>
              setPassword(passwordChangeEvent.target.value)
            }
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        <div>{onSubmit.name}</div>
        <div>{onSubmit.email}</div>
        <div>{onSubmit.phone}</div>
        <div>{onSubmit.age}</div>
        <div>{onSubmit.gender}</div>
        <div>{onSubmit.hobbies && onSubmit.hobbies.join(",")}</div>
        <div>{onSubmit.country}</div>
        <div>{onSubmit.password}</div>
      </div>
    </div>
  );
};

export default Form1;
