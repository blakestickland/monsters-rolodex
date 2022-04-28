import Card from '../card/card.component';

import './card-list.styles.css';

const CardList = ({ monsters }) => ( // can destructure prop directly as we know props is the first attibute
    <div className='card-list'>
      { monsters.map(monster => {
             return  <Card monster={monster} key={monster.id}/>
          }
      )}
    </div>
);
    

export default CardList;