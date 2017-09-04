import React, { Component } from 'react'
import GenericCard from './../components/GenericCard'
import { CardTitle } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

class Logos extends Component {
  render() {
    return (
      <div className="row">
        <div className="col m6">
          <GenericCard
            headerTitle="Hello"
            headerSubtitle="I am Jose Marquez"
            headerAvatar="http://via.placeholder.com/100x200"
            mediaImgSrc="http://via.placeholder.com/120x100"
            overlay={
              <CardTitle
                title="Nice job"
                subtitle="Congratulations on this great Achievement"
              />
            }
            cardTitle="Nice one"
            cardSubtitle="looking good"
            actions={
              <div>
                <FlatButton label='Action1' />
                <FlatButton label='Action2' />
              </div>
            }
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </GenericCard>
        </div>
      </div>
    )
  }
}

export default Logos