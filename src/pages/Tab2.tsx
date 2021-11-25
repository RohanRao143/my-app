import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard,
  IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';

export const CardExamples: React.FC = () => {
  const [showContent, setShowContent] = React.useState<Boolean>(false);
  const [cardContent, setCardContent] = React.useState({
    one: `ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
    mollit anim id est laborum. ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
    mollit anim id est laborum. ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
    mollit anim id est laborum.`
  });

  const moreClicked = () => setShowContent((showContent) => !showContent);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Services</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Hello</IonCardSubtitle>
            <IonCardTitle>List of Services</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi {showContent ? cardContent.one : ''}
          </IonCardContent>
          <IonButton fill="solid" expand="block" onClick={moreClicked}>
              {showContent ? 'Less' : 'More' }
          </IonButton>
        </IonCard>

        <IonCard>
          <IonItem>
            <IonIcon icon={pin} slot="start" />
            <IonLabel>Label</IonLabel>
            <IonButton fill="outline" slot="end">View</IonButton>
          </IonItem>

          <IonCardContent>
            This is content, without any paragraph or header tags,
            within an ion-cardContent element.
      </IonCardContent>
        </IonCard>

        <IonCard>
          <IonItem href="#" className="ion-activated">
            <IonIcon icon={wifi} slot="start" />
            <IonLabel>Link activated</IonLabel>
          </IonItem>

          <IonItem className="ion-activated">
            <IonIcon icon={warning} slot="start" />
            <IonLabel>Button activated</IonLabel>
          </IonItem>

        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default CardExamples;
