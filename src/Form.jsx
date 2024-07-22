import { useState } from "react"
import './Form.css'

export default function Form(){

    const [formData, setFormData] = useState({firstName:"", lastName:"", email:"", country:"", street:"", city:"", state:"",
        postal:"", byEmail:"", pushNotification:""
    });

    function changeHandler(event){
        const {name, value} = event.target;

        setFormData((prevData) => {
            return{
                ...prevData,
                [name]:value
            }
        });
    }

    function suubmitHandler(){
        event.preventDefault();
        confirm("Data will not be changed after submit")
        console.log(formData);
    }

    return(
        <form onSubmit={suubmitHandler} className="form">
            <label htmlFor="firstName" className="labelName">First Name</label>
            <input type="text" name="firstName" placeholder="Pranay" value={formData.firstName} onChange={changeHandler} className="inputbox"/>

            <br />

            <label htmlFor="lastName" className="labelName">Last Name</label>
            <input type="text" name="lastName" placeholder="Gupta" value={formData.lastName} onChange={changeHandler}/>

            <br />

            <label htmlFor="email" className="labelName">Email Address</label>
            <input type="text" name="email" placeholder="pgupta@duck.com" value={formData.email} onChange={changeHandler}/>

            <br />

            <label htmlFor="country" className="labelName">Country</label>
            <select name="country"  id="country" value={formData.country} onChange={changeHandler}>
                <option value="chooseOne">Choose One</option>
                <option value="India">India</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Australia">Australia</option>
                <option value="America">America</option>
            </select>

            <br />

            <label htmlFor="street" className="labelName">Street</label>
            <input type="text" name="street" placeholder="1234 Main st" value={formData.street} onChange={changeHandler}/>

            <br />

            <label htmlFor="city" className="labelName">City</label>
            <input type="text" name="city" placeholder="Asanol" value={formData.city} onChange={changeHandler}/>

            <br />

            <label htmlFor="state/province" className="labelName">State/Province</label>
            <input type="text" name="state" placeholder="West Bengal" value={formData.state} onChange={changeHandler}/>

            <br />

            <label htmlFor="postal" className="labelName">ZIP/Postal Code</label>
            <input type="text" name="postal" placeholder="770203" value={formData.postal} onChange={changeHandler}/>

            <br />

            <fieldset className="fieldSet">
                <legend>By Email</legend>

                <input type="checkbox" name="byEmail" id="comment" value="comment" onChange={changeHandler}/>
                <label htmlFor="comment" className="optionValues">Comment</label><br />
                <input type="checkbox" name="byEmail" id="candidate" value="candidate" onChange={changeHandler}/>
                <label htmlFor="candidate" className="optionValues">Candidates</label><br />
                <input type="checkbox" name="byEmail" id="offers" value="offers" onChange={changeHandler}/>
                <label htmlFor="offers" className="optionValues">Offers</label><br />
            </fieldset>
            

            <br />

            <fieldset className="fieldSet">
                <legend>Push Notifications</legend>

                <div>
                    <input type="radio" name="pushNotification" value="everything" id="everything" onChange={changeHandler}/>
                    <label htmlFor="everything" className="optionValues">Everything</label>
                </div>
                
                <input type="radio" name="pushNotification" value="same-as-email" id="same-as-email" onChange={changeHandler}/>
                <label htmlFor="same-as-email" className="optionValues">Same as email</label><br />
                <input type="radio" name="pushNotification" value="no-push-notification" id="no-push-notification" onChange={changeHandler}/>
                <label htmlFor="no-push-notification" className="optionValues">No push notification</label><br />
            </fieldset>

            <br />

            <button className="button">Save</button>
        </form>
    )
}