import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar, useIonModal } from '@ionic/react';
import { add } from 'ionicons/icons';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';


const renderModal = ({ state, onDismiss, onAddItem }) => {
  return (<>
    <IonButton onClick={() => {
        onAddItem(state + 1);
        onDismiss();
      }}
      color="success">
      Add
    </IonButton>
    <IonButton color="warning" onClick={onDismiss}>
      Close
    </IonButton>
  </>)
}

const Tab1 = () => {
  const [cat, setCat] = React.useState([]);

  const handleAddItems = (item) => {
    setCat((_item) => [ ..._item, item ]);
  };

  const handleDismiss = () => {
    dismiss();
  };

  const [present, dismiss] = useIonModal(renderModal, {
    state: cat.length,
    onDismiss: handleDismiss,
    onAddItem: handleAddItems
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Catalouge</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">List of Services</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <ExploreContainer name="Tab 1 page" /> */}
        {cat.map((i) => (
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>Check List {i}</IonCardSubtitle>
              <IonCardTitle></IonCardTitle>
            </IonCardHeader>
              <IonCardContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </IonCardContent>
          </IonCard>
        ))}
        <IonButton color="warning" fill="solid" expand="block" onClick={() => present({
            cssClass: 'my-class'
          })}>
            <IonIcon 
              icon={add} />
              Add
          </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
