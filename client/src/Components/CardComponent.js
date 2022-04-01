import React from 'react'

function CardComponent({p}) {
    console.log
  return (
    <div {p.username} >
        <img src={p.image_url} />
        <h4 >
            <h3>
                <h2>

                </h2>
            </h3>
        </h4>
    </div>
  )
}

export default CardComponent