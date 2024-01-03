import { IonButton, IonContent, IonIcon, IonPage } from '@ionic/react';
import './Walkers.css';
import WalkerCard from '../../components/walkerCard/walkerCard';
import { filter } from 'ionicons/icons';

/*

Add detailed filters modal
Link walker card to walker profile

*/

const Walkers: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">

          <div className='filters'>
            <IonButton color="primary" size="small" fill="clear" className='filter-button'>
              <IonIcon icon={filter}></IonIcon>
              Filters
            </IonButton>
          </div>

          <WalkerCard name="John Doe" price={44} rating={4.3} photo={'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} distance={0.5}></WalkerCard>
          <WalkerCard name="Johnatan Doesohn" price={34} rating={4} photo={'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} distance={2}></WalkerCard>
          <WalkerCard name="Lorem Ipsum" price={50} rating={3.9} photo={'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=3023&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} distance={4.2}></WalkerCard>
          <WalkerCard name="Mary Jane" price={30} rating={4.4} photo={'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=3761&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} distance={5}></WalkerCard>
          <WalkerCard name="Sophie June" price={20} rating={3.8} photo={'https://plus.unsplash.com/premium_photo-1675034377239-a839117fe934?q=80&w=3064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} distance={6}></WalkerCard>

      </IonContent>
    </IonPage>
  );
};

export default Walkers;
