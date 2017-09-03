import React, { Component } from 'react'
import {Card, CardText} from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class Story extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 flow-text">
            <p>
              The Marketing and Communications Department shares the
              accomplishments of Franciscan University faculty, students, staff,
              and alumni with many different audiences over many different
              platforms. But we’re always looking for more stories—especially
              yours.
            </p>
            <p>
              Tell us about the interesting projects, research, classroom
              experiences, extracurricular activities, volunteer work, or other
              endeavors you’re undertaking. Or share tips about what other
              Franciscan faculty, students, staff, and alumni are doing. Please
              fill out the story idea form below, and help us keep a finger on
              the pulse of what’s happening in the classroom, on campus, and in
              our community.
            </p>
            <p>
              We will look into each tip and determine where it might fit—on the
              website, in admissions materials, as a media story, social media
              post, and so on.
            </p>
            <p>
              Thank you for your help identifying the great work happening in
              the Franciscan University family.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m6">
            <TextField
              hintText="Hint Text"
              floatingLabelText="Floating Label Text"
              fullWidth={true}
            />
          </div>
          <div className="col s12 m6">
            <TextField
              hintText="Hint Text"
              floatingLabelText="Floating Label Text"
              fullWidth={true}
            />
          </div>
          <div className="col s12">
            <TextField
              hintText="Message Field"
              floatingLabelText="MultiLine and FloatingLabel"
              multiLine={true}
              rows={2}
              fullWidth={true}
            />
          </div>
          <div className="">
            <RaisedButton label="Submit" primary={true}  />
          </div>
        </div>
      </div>
    )
  }
}

export default Story