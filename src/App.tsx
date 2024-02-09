import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonAvatar,
  IonBadge,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { pawOutline, chatbubbleOutline, calendarOutline } from 'ionicons/icons';
import Walkers from './pages/walkers/Walkers';
import Tab2 from './pages/schedule/Tab2';
import Tab3 from './pages/messages/Tab3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import MessagesList from './pages/messages-list/messagesList';
import MessageNew from './pages/message-new/MessageNew';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>

    <IonMenu side="end" contentId="main-content">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu Content</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonButton fill="clear">Profile</IonButton>
        </IonItem>
        <IonItem>
          <IonButton fill="clear">Settings</IonButton>
        </IonItem>
        <IonItem>
          <IonButton fill="clear">Log out</IonButton>
        </IonItem>
      </IonContent>
    </IonMenu>

    <IonPage id="main-content">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="end">
            <IonMenuButton>
              <IonAvatar className='avatar'>
                <img alt="Silhouette of a person's head" src="../../../resources/img/user.png" />
              </IonAvatar>
            </IonMenuButton>
          </IonButtons>

        </IonToolbar>
      </IonHeader>


      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/tab1">
              <Walkers />
            </Route>
            <Route exact path="/tab2">
              <Tab2 />
            </Route>
            <Route path="/messages">
              <MessagesList />
            </Route>
            <Route exact path="/">
              <Redirect to="/tab1" />
            </Route>
            <Route exact path="/message">
              <Tab3 />
            </Route>
            <Route exact path="/message-new">
              <MessageNew />
            </Route>
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            <IonTabButton tab="tab1" href="/tab1">
              <IonIcon aria-hidden="true" icon={pawOutline} />
              <IonLabel>Walkers</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/tab2">
              <IonIcon aria-hidden="true" icon={calendarOutline} />
              <IonLabel>My Schedule</IonLabel>
              <IonBadge color="dark">1</IonBadge>
            </IonTabButton>
            <IonTabButton tab="messages" href="/messages">
              <IonIcon aria-hidden="true" icon={chatbubbleOutline} />
              <IonLabel>Messages</IonLabel>
              <IonBadge color="dark">2</IonBadge>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonPage>
  </IonApp>
);

export default App;
