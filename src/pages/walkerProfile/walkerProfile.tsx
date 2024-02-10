import React, { useRef, useState } from 'react';
import './walkerProfile.css'
import { IonContent, IonLabel, IonPage, IonSegment, IonSegmentButton } from '@ionic/react';
import InfoSegment from '../../components/InfoSegment/InfoSegment';
import AvailabilitySegment from '../../components/AvailabilitySegment/AvailabilitySegment';
import ReviewsSegment from '../../components/ReviewsSegment/ReviewsSegment';

interface ContainerProps {
  photo: string
}

const WalkerProfile: React.FC<ContainerProps> = ({ photo }) => {
  
  const segments = ["info", "availability", "reviews"];
  const slider = useRef<HTMLIonListElement>(null);
  const [value, setValue] = useState("info");

  const handleSegmentChange = (e: any) => {
    setValue(e.detail.value!);
  };


  return (
    <IonPage>
      <IonContent>
        <div className='walker-profile'>
          <div className='walker-profile__photo' style={{ backgroundImage: `url(../../../resources/img/walker3_banner.png)` }}>
          </div>
          <div className='walker-profile__card-body'>
            <div className='walker-profile__photo-avatar' style={{ backgroundImage: `url(${photo})` }}>
            </div>
          </div>

        </div>

        <div className='walker-profile__segments'>

          <div className='walker-profile__card-body-details'>

            <div className='row top'>
              <div className='walker-profile__photo-name'>
                Bob Bobbersson
              </div>

            </div>

            <div className='row bottom'>

              <ul className="infos">

                <li>
                  <span className="label">Rating</span>
                  <span className="value">3.9/5</span>
                </li>
                <li className="price">
                  <span className="label">Price</span>
                  <span className="value">50€/h</span>
                </li>
                <li>
                  <span className="label">Distance</span>
                  <span className="value">4.2km</span>
                </li>
              </ul>
            </div>

          </div>

          <IonSegment value={value} onIonChange={(e) => handleSegmentChange(e)}>
            <IonSegmentButton value="info">
              <IonLabel>Info</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="availability">
              <IonLabel>Availability</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="reviews">
              <IonLabel>Reviews</IonLabel>
            </IonSegmentButton>
          </IonSegment>


          {value == 'info' ? <InfoSegment></InfoSegment> : null}
          {value == 'availability' ? <AvailabilitySegment></AvailabilitySegment> : null}
          {value == 'reviews' ? <ReviewsSegment></ReviewsSegment> : null}

        </div>

      </IonContent>
    </IonPage>
  );
}

export default WalkerProfile;