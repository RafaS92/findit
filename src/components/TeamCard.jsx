import React from 'react'

function TeamCard({name,position,img}) {
  return (
    <div className="team-card-container">
        <div className='team-overlay'>
                    <img alt="" src={img} className="team-card-icon" />
            <div className="team-card-text">
                 <h2>{position}</h2>
                 <h3>{name}</h3>
            </div>
        </div>
    </div>
    )
}

export default TeamCard