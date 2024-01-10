import React, { useRef, useState } from 'react';
import './walkerProfile.css'
import { IonLabel, IonPage, IonSegment, IonSegmentButton } from '@ionic/react';

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
      <div className='walker-profile__photo'>
          <img src={photo}></img>
      </div>

      <div className='walker-profile__segments'>
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


        {value == 'info' ? <div>Info segment</div> : null}
        {value == 'availability' ? <div>availability segment</div> : null}
        {value == 'reviews' ? <div>reviews segment</div> : null}

      </div>
    </IonPage>
  );
}

export default WalkerProfile;