import React, { Component } from 'react'

import GenericCard from './GenericCard'

class LetterheadCard extends Component {
  render() {
    return (
      <div className="col s12 m6" style={{paddingBottom: '0.75rem'}}>
        <GenericCard
          cardTitle={this.props.title}
          mediaImgSrc={this.props.image}
          actions={this.props.actions}
        >
        </GenericCard>
      </div>
    )
  }
}

export default LetterheadCard