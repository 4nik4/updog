import { IonAvatar, IonButton, IonContent, IonHeader, IonItem, IonItemDivider, IonLabel, IonNavLink, IonPage, IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/react';
import './messagesList.css';
import MessagesListItem from '../../components/MessageListItem/messageListItem';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router';
import Tab3 from '../messages/Tab3';


const MessagesList: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Messages</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <input className='search-input' placeholder='Search'></input>

        <MessagesListItem photo='https://ionicframework.com/docs/img/demos/avatar.svg'
          name='Mary Jane' preview='Sed ut perspiciatis...'
          sent='21m'
          read={false}
        ></MessagesListItem>

        <MessagesListItem photo='https://ionicframework.com/docs/img/demos/avatar.svg'
          name='Bob Bobersonn' preview='Sed ut perspiciatis...'
          sent='123d'
          read={true}
        ></MessagesListItem>
        <MessagesListItem photo='https://ionicframework.com/docs/img/demos/avatar.svg'
          name='Lorem Ipsum' preview='Sed ut perspiciatis...'
          sent='3d'
          read={false}
        ></MessagesListItem>
        <MessagesListItem photo='https://ionicframework.com/docs/img/demos/avatar.svg'
          name='Jenny Doe' preview='Sed ut perspiciatis...'
          sent='45m'
          read={true}
        ></MessagesListItem>
      </IonContent>
    </IonPage>
  );
};

export default MessagesList;
