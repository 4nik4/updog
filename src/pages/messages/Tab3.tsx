import { IonContent, IonFooter, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab3.css';
import { useEffect, useRef } from 'react';
import { addCircle, send } from 'ionicons/icons';

const Tab3: React.FC = () => {


  useEffect(() => {
    const element = document.getElementById('mes');
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Bob Bobersson</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding" >
        <div id="mes">

          
          <div className="message sent">
            <p>similique mollitia animi</p>
          </div>
          
          <div className="message recieved">
            <p>sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
          </div>
          <div className="message recieved">
            <p> tempora incidunt dolore.</p>
          </div>

          <div className="message sent">
            <p>culpa qui officia deserunt mollitia animi</p>
          </div>
          <div className="message sent">
            <p>similique mollitia animi</p>
          </div>
          <div className="message sent">
            <p>similique sunt in culpa qui officia deserunt mollitia animi &#128517;</p>
          </div>

          <div className="message recieved">
            <p> tempora incidunt dolore.</p>
          </div>
          <div className="message sent">
            <p>similique mollitia animi</p>
          </div>
          <div className="message sent">
            <p>qui in ea voluptate velit esse</p>
          </div>
          <div className="message sent">
            <p>similique sunt in culpa qui officia deserunt mollitia animi</p>
          </div>
          <div className="message recieved">
            <p> Ut enim ad minima. &#128513;</p>
          </div>
          <div className="message recieved">
            <p> Neque porro quisquam est, qui. &#128514; &#128514;</p>
          </div>

        </div>

      </IonContent>
      <IonFooter>
          <IonToolbar>
            <div className='input-area'>
              <IonIcon icon={addCircle} size="large"></IonIcon>
            <input className='message-input' placeholder='Write message'></input>
            <IonIcon icon={send} size="large"></IonIcon>
          </div>
          </IonToolbar>
        </IonFooter>
    </IonPage>
  );
};

export default Tab3;
