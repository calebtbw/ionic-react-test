import {
  IonHeader, 
  IonApp,
  IonButton, 
  IonIcon, 
  IonToast,
  IonContent,
  IonToolbar,
  IonTitle,
} from '@ionic/react';
import { play as playIcon } from 'ionicons/icons';
import React, { useState } from 'react';

function App() {
  const [showToast, setShowToast] = useState(false);
  const handleClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 1500);
  };
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
        <IonTitle>Ionic-React-Test</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton onClick={handleClick}>
          <IonIcon icon={playIcon} slot="start" />
          Click Me
        </IonButton>
        <IonToast isOpen={showToast} message="Successful!" />
      </IonContent>
    </IonApp>
  );
}

export default App;
