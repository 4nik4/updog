import { IonIcon } from '@ionic/react';
import './walkerCard.css';
import { mapOutline, starOutline } from 'ionicons/icons';

interface ContainerProps {
  name: string;
  price: number;
  rating: number;
  photo: string;
  distance: number;
}

/**
 * 
 * @param param0 
 * @returns 
 * 
 * todo bigger photo
 * change font
 */

const WalkerCard: React.FC<ContainerProps> = ({ name, distance, price, photo, rating }) => {
  return (
    <div className='walker-card'>
        <div className='walker-card__photo'>
            <img src={photo}></img>
        </div>
        <div className='walker-card__body'>
            <div className='walker-card__header'>
                <div>
                    <div className='walker-card__name'>{name}</div>
                </div>
            </div>
            <div className='walker-card__footer'>
                <div className='walker-card__footer-right'>
                    <div className='walker-card__distance'>
                        <IonIcon icon={mapOutline}></IonIcon>
                        {distance}km
                    </div>
                    <div className='walker-card__rating'>
                        <IonIcon icon={starOutline}></IonIcon>
                        {rating}/5
                    </div>
                    
                </div>
                <div className='walker-card__price'>
                    {price}€
                </div>
            </div>
        </div>
    </div>
  );
};

export default WalkerCard;
