import React from 'react';

const gasLitreCost = 0.838;


export default function Distance({ leg }) {
  if (!leg.distance || !leg.duration) return null;

  const cost = Math.floor(
    (leg.distance.value / 1000) * gasLitreCost
  );

  const shortAddress = (str) => {
    let substr = str.substring(0, str.indexOf(","));
    return substr;
  }

  return (
    <div className='data-find-container'>
        <p className="result-container ">
             Start: 
         <span className="result">
                { shortAddress(leg.start_address)}
         </span>
        </p>
        <p className="result-container ">
             End: 
         <span className="result">
                { shortAddress(leg.end_address)}
         </span>

        </p>
        <p className='result-container '>
            Distance: <span className="result highlight">{leg.distance.text}</span>
        </p>
        <p className='result-container '>
            ETA: <span className="result highlight" >{leg.duration.text}</span>
        </p>
        <p className='result-container '>
        Commuting costs:
            <span className="result highlight">
                ${new Intl.NumberFormat().format(cost)}
            </span>
        </p>
    </div>
  );
}