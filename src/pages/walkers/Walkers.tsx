import { IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Walkers.css';
import WalkerCard from '../../components/walkerCard/walkerCard';
import { closeOutline, filter } from 'ionicons/icons';
import { useRef, useState } from 'react';
import WalkerProfile from '../walkerProfile/walkerProfile';

/*

Add detailed filters modal
Link walker card to walker profile

*/

const Walkers: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modal = useRef<HTMLIonModalElement>(null);
  const input = useRef<HTMLIonInputElement>(null);
  function confirm() {
    modal.current?.dismiss(input.current?.value, 'confirm');
  }
  return (
    <IonPage className='offset-top'>

      <IonContent fullscreen className="ion-padding">

        <div className='filters'>
          <IonButton color="primary" size="small" fill="clear" className='filter-button'>
            <IonIcon icon={filter}></IonIcon>
            Filters
          </IonButton>
        </div>

        <WalkerCard name="John Doe" price={44} rating={4.3} photo={'../../../resources/img/walker1.png'} distance={0.5} openProfile={() => setIsOpen(true)}></WalkerCard>
        <WalkerCard name="Mary Jane" price={34} rating={4} photo={'../../../resources/img/walker2.png'} distance={2} openProfile={() => setIsOpen(true)}></WalkerCard>
        <WalkerCard name="Bob Bobersson" price={50} rating={3.9} photo={'../../../resources/img/walker3.png'} distance={4.2} openProfile={() => setIsOpen(true)}></WalkerCard>
        <WalkerCard name="Mary Jane" price={30} rating={4.4} photo={'../../../resources/img/walker4.png'} distance={5} openProfile={() => setIsOpen(true)}></WalkerCard>
        <WalkerCard name="Sophie June" price={5326} rating={3.8} photo={'../../../resources/img/walker5.png'} distance={6} openProfile={() => setIsOpen(true)}></WalkerCard>
        <WalkerCard name="Beatrice Bell" price={50} rating={3.9} photo={'../../../resources/img/walker6.png'} distance={4.2} openProfile={() => setIsOpen(true)}></WalkerCard>
        <WalkerCard name="Joe Joesonn" price={30} rating={4.4} photo={'../../../resources/img/walker7.png'} distance={5} openProfile={() => setIsOpen(true)}></WalkerCard>
        <WalkerCard name="April May" price={5326} rating={3.8} photo={'../../../resources/img/walker8.png'} distance={6} openProfile={() => setIsOpen(true)}></WalkerCard>


        <IonModal isOpen={isOpen}>
          <IonHeader>
            <IonToolbar>
              <IonTitle></IonTitle>
              <IonButtons slot="end">
                <IonButton className='close-btn' onClick={() => setIsOpen(false)}>
                  <IonIcon icon={closeOutline}></IonIcon>
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent>

            <WalkerProfile
              photo={'../../../resources/img/walker3.png'}
            ></WalkerProfile>
          </IonContent>
          <IonFooter collapse="fade" className='walker-footer'>
            <IonToolbar>
              <IonButton
                strong={true} onClick={(e) => {
                  e.preventDefault(); 
                  location.assign('http://localhost:5173/message-new'); 
                  setIsOpen(false)}}
                routerLink="/message" expand="full" routerDirection="none">Contact</IonButton>
            </IonToolbar>
          </IonFooter>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Walkers;
