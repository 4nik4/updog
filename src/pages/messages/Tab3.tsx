import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Messages</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">

        <div className="message">
          <img src="https://www.w3schools.com/w3images/bandmember.jpg" alt="Avatar" />
            <p>Ut enim ad minima veniam</p>
            <span className="time-right">11:00</span>
        </div>

        <div className="message darker">
          <img src="https://www.w3schools.com/w3images/avatar_g2.jpg" alt="Avatar" className="right" />
            <p>similique sunt in culpa qui officia deserunt mollitia animi</p>
            <span className="time-left">11:01</span>
        </div>

        <div className="message">
          <img src="https://www.w3schools.com/w3images/bandmember.jpg" alt="Avatar" />
            <p>Duis aute irure dolor in reprehenderit</p>
            <span className="time-right">11:02</span>
        </div>

        <div className="message darker">
          <img src="https://www.w3schools.com/w3images/avatar_g2.jpg" alt="Avatar" className="right" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <span className="time-left">11:05</span>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
