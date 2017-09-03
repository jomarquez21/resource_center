import React, { Component } from 'react'
import {Card, CardText} from 'material-ui/Card'

class Story extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <Card>
              <CardText>
                HELLO MUNDO
              </CardText>
            </Card>
          </div>
        </div>
      </div>
    )
  }
}

export default Story