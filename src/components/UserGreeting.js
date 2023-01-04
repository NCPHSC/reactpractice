import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }

  render() {
    if (this.state.isLoggedIn){
        return(
           <div>
            Welcom Hari.
           </div>
        )
    }
    else{
        return(
            <div>
                Welcome Guest.
            </div>
        )
    }
   /* return (
      <div>
       <div> Welcome to react tutorials.</div>
       <div>Welcome to Node js Turorial.</div>
      </div>
    )*/
  }
}

export default UserGreeting