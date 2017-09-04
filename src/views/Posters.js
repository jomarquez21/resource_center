import React, { Component } from 'react'
import GenericCard from './../components/GenericCard'
import FlatButton from 'material-ui/FlatButton'

class Posters extends Component {
  render() {
    return (
    	<div className="container">
        <div className="row">
          <div className="col s12 m6">
            <GenericCard
              cardTitle="Card title" 
              subtitle="Card subtitle"
              actions={
                <div>
                  <FlatButton label='Action1' />
                  <FlatButton label='Action2' />
                </div>
              }
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </GenericCard>
          </div>
          <div className="col s12 m6">
            <GenericCard
              cardTitle="Card title" 
              subtitle="Card subtitle"
              actions={
                <div>
                  <FlatButton label='Action1' />
                  <FlatButton label='Action2' />
                </div>
              }
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </GenericCard>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m6">
            <GenericCard
              cardTitle="Card title" 
              subtitle="Card subtitle"
              actions={
                <div>
                  <FlatButton label='Action1' />
                  <FlatButton label='Action2' />
                </div>
              }
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </GenericCard>
          </div>
          <div className="col s12 m6">
            <GenericCard
              cardTitle="Card title" 
              subtitle="Card subtitle"
              actions={
                <div>
                  <FlatButton label='Action1' />
                  <FlatButton label='Action2' />
                </div>
              }
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </GenericCard>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m6">
            <GenericCard
              cardTitle="Card title" 
              subtitle="Card subtitle"
              actions={
                <div>
                  <FlatButton label='Action1' />
                  <FlatButton label='Action2' />
                </div>
              }
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </GenericCard>
          </div>
          <div className="col s12 m6">
            <GenericCard
              cardTitle="Card title" 
              subtitle="Card subtitle"
              actions={
                <div>
                  <FlatButton label='Action1' />
                  <FlatButton label='Action2' />
                </div>
              }
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </GenericCard>
          </div>
        </div>
      </div>
    )
  }
}

export default Posters