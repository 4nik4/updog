import { IonAvatar, IonItem, IonLabel } from '@ionic/react';
import './messageListItem.css'

interface ContainerProps {
    name: string;
    photo: string;
    preview: string;
    sent: string;
    read: boolean
}

const MessagesListItem: React.FC<ContainerProps> = ({ name, photo, preview, sent, read }) => {
    return (

        <IonItem routerLink="/message" routerDirection="none">
            <IonAvatar aria-hidden="true" slot="start">
                <img alt="" src={photo} />
            </IonAvatar>
            <IonLabel>
                <h3 className={(read ? 'read' : '')}>{name}</h3>
                <p>{preview} • {sent}</p>
            </IonLabel>
            {read ? <div className="unread-indicator-wrapper" slot="end">
                <div className="unread-indicator"></div></div>: ''}

        </IonItem>

    );
};

export default MessagesListItem;
