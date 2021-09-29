import React, { useState } from "react"
import { getCurrentDate } from "./Date"

export const PropsAndState = ({ myUser }) => {
  let [countClicks, setCountClicks] = useState(0)
  let [saveNow, setSaveNow] = useState(false)
  const handleClick = () => {
    //good practice:
    //make a copy of state, modify it, and then setState to the copy
    const newCountClicks = ++countClicks
    setCountClicks(newCountClicks)
  }

  const handleChange = (event) => {
    console.log("what is event", event.target.value)
    let newSaveNow = saveNow;
    newSaveNow = true;
    setSaveNow(newSaveNow);
    // above is the same as this
    // setSaveNow(true);
  }

  return (
    <>
      <h3 class="welcome">Welcome, {myUser.name} and {myUser.paramore}! </h3>
      <h5>Today is {getCurrentDate()}</h5>
      <p>{countClicks}</p>
      <button onClick={(handleClick)}>Click Me</button>
      <hr/>

      <div>
          <textarea type="text" name="notes" placeholder='notes' onChange={handleChange}/>
          <button id="save" disabled={saveNow ? false : true}>Save Note</button>
      </div>
    </>
  )
}