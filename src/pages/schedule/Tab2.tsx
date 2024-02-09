import { IonAvatar, IonButton, IonButtons, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonItem, IonLabel, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab2.css';
import { Link } from 'react-router-dom';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

const Tab2: React.FC = () => (
    <IonPage className='offset-top'>

      <IonContent fullscreen>
        <div className="no-walkers ion-padding">

          <p>It seems you have nothing upcoming.</p>
          <Link to="/">
            <IonButton>
              <IonLabel>Schedule a walk</IonLabel>
            </IonButton>
          </Link>
        </div>


        <div className="has-walkers">

          <div className='live-header'>
            <h4 className='ion-padding'>Live feed</h4> <img height='50' src="../../../resources/img/dog-walk.gif" />
          </div>

          <img src="../../../resources/img/map.png" />


          <div className='upcoming-header'>
            <h4 className='ion-padding'>Upcoming walks</h4>
            <div className='see-more'>
              <IonButton fill="clear">See all</IonButton>
            </div>

          </div>


          <Swiper
            slidesPerView={2}
            spaceBetween={1}
            centeredSlides={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <IonCard className='event-card'>
                <IonCardHeader>
                  <IonCardSubtitle>11:00 am</IonCardSubtitle>
                  <IonCardSubtitle className='date'>02. Feb</IonCardSubtitle>
                  <IonCardSubtitle className='walker'>Bob Bobersson</IonCardSubtitle>
                  <div className='avatar-row'>

                    <IonAvatar className='avatar'>
                      <img alt="Silhouette of a person's head" src="../../../resources/img/walker3.png" />
                    </IonAvatar>
                    &
                    <IonAvatar className='avatar'>
                      <img alt="Dog profile" src="../../../resources/img/kongo_front.png" />
                    </IonAvatar>

                  </div>


                </IonCardHeader>

              </IonCard>
            </SwiperSlide>
            <SwiperSlide>
              <IonCard className='event-card'>
                <IonCardHeader>

                  <IonCardSubtitle>11:00 am</IonCardSubtitle>
                  <IonCardSubtitle className='date'>05. Feb</IonCardSubtitle>
                  <IonCardSubtitle className='walker'>Mary Jane</IonCardSubtitle>
                  <div className='avatar-row'>

                    <IonAvatar className='avatar'>
                      <img alt="Silhouette of a person's head" src="../../../resources/img/walker4.png" />
                    </IonAvatar>
                    &
                    <IonAvatar className='avatar'>
                      <img alt="Dog profile" src="../../../resources/img/kairo_front.png" />
                    </IonAvatar>
                    <IonAvatar className='avatar'>
                      <img alt="Dog profile" src="../../../resources/img/kongo_front.png" />
                    </IonAvatar>

                  </div>

                </IonCardHeader>

              </IonCard>
            </SwiperSlide>
            <SwiperSlide>
              <IonCard className='event-card'>
                <IonCardHeader>

                  <IonCardSubtitle>10:30 am</IonCardSubtitle>
                  <IonCardSubtitle className='date'>07. Feb</IonCardSubtitle>
                  <IonCardSubtitle className='walker'>Joe Joesonn</IonCardSubtitle>
                  <div className='avatar-row'>

                    <IonAvatar className='avatar'>
                      <img alt="Silhouette of a person's head" src="../../../resources/img/walker7.png" />
                    </IonAvatar>
                    &
                    <IonAvatar className='avatar'>
                      <img alt="Dog profile" src="../../../resources/img/kongo_front.png" />
                    </IonAvatar>

                  </div>
                </IonCardHeader>

              </IonCard>
            </SwiperSlide>
            <SwiperSlide>
              <IonCard className='event-card'>
                <IonCardHeader>
                  <IonCardSubtitle>10:30 pm</IonCardSubtitle>
                  <IonCardSubtitle className='date'>10. Feb</IonCardSubtitle>
                  <IonCardSubtitle className='walker'>April May</IonCardSubtitle>
                  <div className='avatar-row'>

                    <IonAvatar className='avatar'>
                      <img alt="Silhouette of a person's head" src="../../../resources/img/walker8.png" />
                    </IonAvatar>
                    &
                    <IonAvatar className='avatar'>
                      <img alt="Dog profile" src="../../../resources/img/kairo_front.png" />
                    </IonAvatar>

                  </div>
                </IonCardHeader>

              </IonCard></SwiperSlide>
          </Swiper>

        </div>
      </IonContent>
    </IonPage>
);

export default Tab2;
