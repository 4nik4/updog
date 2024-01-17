import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonItem, IonThumbnail, IonLabel } from '@ionic/react'
import './ReviewsSegment.css'

const ReviewsSegment: React.FC = ({ }) => {

    return (
        <div className='reviews-segment'>
            <IonCard>
                <IonCardContent>
                    <IonList>
                        <IonItem>
                            <IonThumbnail slot="start">
                                <img alt="Silhouette of mountains" src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                            </IonThumbnail>
                            <IonLabel>Sed ut perspiciatis unde omnis iste natus error sit</IonLabel>
                        </IonItem>

                        <IonItem>
                            <IonThumbnail slot="start">
                                <img alt="Silhouette of mountains" src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                            </IonThumbnail>
                            <IonLabel>Ut enim ad minima veniam</IonLabel>
                        </IonItem>

                        <IonItem>
                            <IonThumbnail slot="start">
                                <img alt="Silhouette of mountains" src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                            </IonThumbnail>
                            <IonLabel>Nor again is there anyone who loves or pursues</IonLabel>
                        </IonItem>

                        <IonItem lines="none">
                            <IonThumbnail slot="start">
                                <img alt="Silhouette of mountains" src="https://plus.unsplash.com/premium_photo-1664541336979-3765585f5ec1?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                            </IonThumbnail>
                            <IonLabel>placeat facere possimus, omnis voluptas assumenda est</IonLabel>
                        </IonItem>
                    </IonList>
                </IonCardContent>
            </IonCard>

        </div>
    )
}

export default ReviewsSegment