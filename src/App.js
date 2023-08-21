import { useState } from "react";
import "./App.css";

function App() {

  const[formData, setFormData] = useState({
    firstName:"", lastName:"", email:"", country:"India", streetAddress:"", city:"",
    state:"Uttar Pradesh", postalCode:"", comments:false, candidates:false, offers:false,
    pushNotifications:""
  })

  function changeHandler(event){
    const{name, value, checked, type} = event.target;
    setFormData((prev) => ({...prev, [name]:type === "checkbox"?checked : value} ));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log(formData);   // printing the value of form data
  }

  return (
  <div className="flex flex-col items-center mt-8">
    <form onSubmit={submitHandler}>

      {/* firstName */}
      <label htmlFor="firstName">First Name</label>
      <br></br>
      <input
      type="text"
      name="firstName"
      id="firstName"
      placeholder="Ram Jee"
      value={formData.firstName}
      onChange={changeHandler}
      className="border py-2 px-3 w-full rounded focus:outline-none focus:ring focus:border-blue-300"
      />
       
       <br/>
      {/* lastname */}
      <label htmlFor="lastName">Last Name</label>
      <br/>
      <input
      type="text"
      name="lastName"
      id="lasttName"
      placeholder="Pal"
      value={formData.lastName}
      onChange={changeHandler}
      className="border py-2 px-3 w-full rounded focus:outline-none focus:ring focus:border-blue-300"
      />

    <br/>
    {/* mail */}
    <label htmlFor="email">Email Address</label>
      <br></br>
      <input
      type="text"
      name="email"
      id="email"
      placeholder="ramgpal912@gmail.com"
      value={formData.email}
      onChange={changeHandler}
      className="border py-2 px-3 w-full rounded focus:outline-none focus:ring focus:border-blue-300"
      />

      <br/>
      {/* country  */}
      <label htmlFor="country">Country</label>
      <br/>
      {/* Dropdown */}
      <select
      id="country"
      name="country"
      value={formData.country}
      onChange={changeHandler}
      className="border py-2 px-3 w-full rounded focus:outline-none focus:ring focus:border-blue-300"
      > 
        <option>United Sates</option>
        <option>India</option>
        <option>UK</option>
        <option>Australia</option>
        <option>Japan</option>
        <option>China</option>
      </select>

      <br/>
      {/* streetAddress */} 
      <label htmlFor="streetAddress">Street Address</label>
      <br/>
      <input
      type="text"
      name="streetAddress"
      id="streetAddress"
      placeholder="Greater Noida"
      value={formData.streetAddress}
      onChange={changeHandler}
      className="border py-2 px-3 w-full rounded focus:outline-none focus:ring focus:border-blue-300"
      />

      <br/>
      {/* streetAddress */} 
      <label htmlFor="city">City</label>
      <br/>
      <input
      type="text"
      name="city"
      id="city"
      placeholder="Noida"
      value={formData.city}
      onChange={changeHandler}
      className="border py-2 px-3 w-full rounded focus:outline-none focus:ring focus:border-blue-300"
      />

<br/>
      {/* state */} 
      <label htmlFor="state">State</label>
      <br/>

     <select
     type="text"
     name="state"
     id="state"
     value={formData.state}
     onChange={changeHandler}
     className="border py-2 px-3 w-full rounded focus:outline-none focus:ring focus:border-blue-300"
     >
      <option>Assam</option>
      <option>Rajsthan</option>
      <option>New Delhi</option>
      <option>Madhya Pradesh</option>
      <option>Gujrat</option>
      <option>Uttar Pradesh</option>
      <option>Bihar</option>
     </select>

     <br/>
      {/* postal Code */} 
      <label htmlFor="postalCode">Postal Code</label>
      <br/>
      <input
      type="text"
      name="postalCode"
      id="postalCode"
      placeholder="201310"
      value={formData.postalCode}
      onChange={changeHandler}
      className="border py-2 px-3 w-full rounded focus:outline-none focus:ring focus:border-blue-300"
      />

<br/> <br/>
{/* By Email */}
<fieldset className="border p-4 rounded-md shadow-md">
  <legend className="text-lg font-semibold">By Email</legend>

  {/* Comments */}
  <div className="flex items-center space-x-2 mb-3">
    <input
      id="comments"
      name="comments"
      type="checkbox"
      checked={formData.comments}
      onChange={changeHandler}
      className="form-checkbox h-5 w-5 text-indigo-600"
    />
    <div>
      <label htmlFor="comments" className="font-medium">Comments</label>
      <p className="text-gray-600">Get notified when someone posts a comment on a posting</p>
    </div>
  </div>

  {/* Candidates */}
  <div className="flex items-center space-x-2 mb-3">
    <input
      id="candidates"
      name="candidates"
      type="checkbox"
      checked={formData.candidates}
      onChange={changeHandler}
      className="form-checkbox h-5 w-5 text-indigo-600"
    />
    <div>
      <label htmlFor="candidates" className="font-medium">Candidates</label>
      <p className="text-gray-600">Get notified when a candidate applies for a job</p>
    </div>
  </div>

  {/* Offers */}
  <div className="flex items-center space-x-2">
    <input
      id="offers"
      name="offers"
      type="checkbox"
      checked={formData.offers}
      onChange={changeHandler}
      className="form-checkbox h-5 w-5 text-indigo-600"
    />
    <div>
      <label htmlFor="offers" className="font-medium">Offers</label>
      <p className="text-gray-600">Get notified when a candidate accepts or rejects an offer</p>
    </div>
  </div>
</fieldset>

      <br/> <br/>

      <fieldset className="border p-4 rounded-md shadow-md">
  <legend className="text-lg font-semibold">Push Notifications</legend>
  <p className="text-gray-600">These are delivered via SMS to your mobile phone.</p>
  
  <div className="mt-4">
    <input
      type="radio"
      name="pushNotifications"
      id="pushEverything"
      value="Everything"
      onChange={changeHandler}
      className="form-radio h-4 w-4 text-indigo-600"
    />
    <label htmlFor="pushEverything" className="ml-2 font-medium">Everything</label>
  </div>

  <div className="mt-2">
    <input
      type="radio"
      name="pushNotifications"
      id="pushEmail"
      value="Same as email"
      onChange={changeHandler}
      className="form-radio h-4 w-4 text-indigo-600"
    />
    <label htmlFor="pushEmail" className="ml-2 font-medium">Same as Email</label>
  </div>

  <div className="mt-2">
    <input
      type="radio"
      name="pushNotifications"
      id="pushNothing"
      value="No Push Notifications"
      onChange={changeHandler}
      className="form-radio h-4 w-4 text-indigo-600"
    />
    <label htmlFor="pushNothing" className="ml-2 font-medium">No Push Notifications</label>
  </div>
</fieldset>


        <button className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300">
          Save
        </button>
    </form>
   </div>
  );
}

export default App;
