import { IonAvatar, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './messagesList.css';
import MessagesListItem from '../../components/MessageListItem/MessageListItem';
import { arrowBack } from 'ionicons/icons';


const MessagesList: React.FC = () => {
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
        <input className='search-input' placeholder='Search'></input>

        <MessagesListItem photo='../../../resources/img/walker2.png'
          name='Mary Jane' preview='Sed ut perspiciatis...'
          sent='21m'
          read={false}
        ></MessagesListItem>

        <MessagesListItem photo='../../../resources/img/walker3.png'
          name='Bob Bobersonn' preview='Sed ut perspiciatis...'
          sent='123d'
          read={true}
        ></MessagesListItem>
        <MessagesListItem photo='../../../resources/img/walker1.png'
          name='John Doe' preview='Sed ut perspiciatis...'
          sent='3d'
          read={false}
        ></MessagesListItem>
        <MessagesListItem photo='../../../resources/img/walker8.png'
          name='April May' preview='Sed ut perspiciatis...'
          sent='45m'
          read={true}
        ></MessagesListItem>
      </IonContent>
    </IonPage>
  );
};

export default MessagesList;
