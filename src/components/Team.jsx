import React from 'react'
import TeamCard from './TeamCard'

function Team() {

    const data = [{
        id:1,
        name: 'Farrah Goordeen',
        position: 'Executive Director',
        img: 'https://m.media-amazon.com/images/M/MV5BMTI5NDY5NjU3NF5BMl5BanBnXkFtZTcwMzQ0MTMyMw@@._V1_FMjpg_UX1000_.jpg'},
        {
        id:2,
        name: 'Robert Kurzius',
        position: 'Customer Officer',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Robert_Downey_Jr_2014_Comic_Con_%28cropped%29.jpg/800px-Robert_Downey_Jr_2014_Comic_Con_%28cropped%29.jpg'},
        {
        id:3,
        name: 'Marti Wolf',
        position: 'Chief Operating Officer',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_pblA7fqQVXQi0LcacK3DTMVcle7kDo8F-2w74OANdGqodpcy'},
        {
        id:4,
        name: 'John Lee',
        position: 'Chief Culture Officer',
        img: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRgoCDcGnPUsvsiS2GqOnN82gayxG_qeNqBmSc3hOKJJHzpEKzam4iPqHKoD1U8SvBNF24SrvpYPOzuXWs'},
        {
        id:5,
        name: 'Martha Rainbow',
        position: 'IT Director',
        img: 'https://resizing.flixster.com/KLxcE36ZNENLC_23WoChmpOkvMA=/ems.ZW1zLXByZC1hc3NldHMvY2VsZWJyaXRpZXMvMzkzZTdmN2UtNDlhYi00NzllLWJlOTktZDVkYWU2ZWFmYzgwLmpwZw=='},
        {    
        id:6,
        name: 'Tony Montana',
        position: 'Chief Marketing Officer',
        img: 'https://www.themoviedb.org/t/p/w500/fMDFeVf0pjopTJbyRSLFwNDm8Wr.jpg'}
    ]


  return (
    <>
        <div className='team-container'>
            <div className='team-intro'>
                Meet our team!
            </div>
            <div className='team-cards-container'>
                {data.length > 0 ? data.map((employee) => {
                    return <TeamCard 
                    key={employee.id} 
                    name={employee.name}
                    position={employee.position}
                    img={employee.img}
                     />
                }) : null}
            </div>
        </div>
    </>
  )
}

export default Team