import React from 'react'
import "./chancellor.css"

function Chancellor() {
    return (
        <div className="wrapperch">
            
            <Card
        img="https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        title="The Everyday Salad"
        description="Take your boring salads up a knotch. This recipe is perfect for lunch
          and only contains 5 ingredients!"
          study="unpad"
        addr="Sharnbasva University, Kalaburagi"
      />

<Card
        img="http://sharnbasvauniversity.edu.in/img/sliders/Appaji2.jpg"
        title="Poojya Dr.Sharnbaswappa Appa"
        description="Chancellar and President"
        study="unpad"
        addr="Sharnbasva University, Kalaburagi"
      />

<Card
        img="https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        title="The Everyday Salad"
        description="Take your boring salads up a knotch. This recipe is perfect for lunch
          and only contains 5 ingredients!"
          study="unpad"
        addr="Sharnbasva University, Kalaburagi" 
      />

        </div>
    )
}


function Card(props) {
    return (
      <div className="card1">
        <div className="card__body1">
          <img src={props.img} className="card__image1" alt="" />
          <h2 className="card__title1">{props.title}</h2>
          <p className="card__description1">{props.study}</p>
          <h5 className="card__description1">{props.description}</h5>
          <p className="card__description1">{props.addr}</p>
        </div>
        
      </div>
    );
  }

export default Chancellor
