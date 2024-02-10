import { IonAvatar, IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenuButton, IonModal, IonPage, IonRange, IonSelect, IonSelectOption, IonTitle, IonToggle, IonToolbar } from '@ionic/react';
import './Walkers.css';
import WalkerCard from '../../components/walkerCard/walkerCard';
import { arrowBack, closeOutline, filter } from 'ionicons/icons';
import { useRef, useState } from 'react';
import WalkerProfile from '../walkerProfile/walkerProfile';

/*

Add detailed filters modal
Link walker card to walker profile

*/

const Walkers: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modal = useRef<HTMLIonModalElement>(null);
  const filterModal = useRef<HTMLIonModalElement>(null);
  const input = useRef<HTMLIonInputElement>(null);
  function confirm() {
    modal.current?.dismiss(input.current?.value, 'confirm');
  }
  return (
    <IonPage>

<IonHeader>
          <IonToolbar slot="start">
            <IonButton fill='clear' size="small">
              <IonIcon slot="icon-only" icon={arrowBack}></IonIcon>
            </IonButton>
            <IonButtons slot="end">
              <IonMenuButton>
                <IonAvatar className='avatar'>
                  <img alt="Silhouette of a person's head" src="../../../resources/img/user.png" />
                </IonAvatar>
              </IonMenuButton>
            </IonButtons>

          </IonToolbar>
        </IonHeader>

      <IonContent fullscreen className="ion-padding">

        <div className='filters'>
          <IonButton color="primary" size="small" fill="clear" className='filter-button' id='filter-modal' expand="block">
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

        <IonModal className='filters' ref={filterModal} trigger='filter-modal' initialBreakpoint={1} breakpoints={[0, 1]}>
          <div className="block">

            <div className='filter-item'>
              <IonToggle justify="space-between">Verified</IonToggle>
            </div>

            <div className='filter-item'>
              <IonSelect label="Min. experiance" value="2">
                <IonSelectOption value="1"> {'< 1 year'}</IonSelectOption>
                <IonSelectOption value="2"> 1 years - 5 years </IonSelectOption>
                <IonSelectOption value="3">5 years - 10 years</IonSelectOption>
                <IonSelectOption value="4">{' 10 year +'}</IonSelectOption>

              </IonSelect>

            </div>

            <div className='filter-item'>
              <div>
                Price Range
              </div>
              <IonRange
                aria-label="Dual Knobs Range"
                dualKnobs={true}
                value={{
                  lower: 20,
                  upper: 80,
                }}
                max={100}
                pin={true} pinFormatter={(value: number) => `${value} €`}
              ></IonRange>
            </div>

            <div className='filter-item'>
              <div>
                Distance
              </div>
              <IonRange
                aria-label="Dual Knobs Range"
                value={{
                  lower: 1,
                  upper: 33,
                }}
                max={50}
                pin={true} pinFormatter={(value: number) => `${value} km`}
              ></IonRange>
            </div>

            <div className='filter-item'>
              <div>
                Average rating
              </div>
              <IonRange
                aria-label="Dual Knobs Range"
                value={{
                  lower: 1,
                  upper: 3,
                }}
                max={5}
                snaps={true}
                pin={true} pinFormatter={(value: number) => `${value}`}
              ></IonRange>
            </div>

          </div>
        </IonModal>


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
                  location.assign(window.location.origin + '/message-new');
                  setIsOpen(false)
                }}
                routerLink="/message" expand="full" routerDirection="none">Contact</IonButton>
            </IonToolbar>
          </IonFooter>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Walkers;
