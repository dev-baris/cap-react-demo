import {
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonItemDivider,
} from '@ionic/react';
import React from 'react';
import { useLocation } from 'react-router-dom';

import routes from '../routes';

import './Menu.css';

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Capacitor React</IonListHeader>
          <IonItemDivider>Navigation</IonItemDivider>
          <IonMenuToggle key="home" autoHide={false}>
            <IonItem
              className={location.pathname === '/home' ? 'selected' : ''}
              routerLink={'/home'}
              routerDirection="none"
              lines="none"
              detail={false}
            >
              <IonLabel>
                Home
              </IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonItemDivider>
            <IonLabel>Capacitor Plugins</IonLabel>
          </IonItemDivider>
          {routes.map((route, i) => (
            <IonMenuToggle key={i} autoHide={false}>
              <IonItem
                className={location.pathname === route.url ? 'selected' : ''}
                routerLink={route.url}
                routerDirection="none"
                lines="none"
                detail={false}
              >
                <IonLabel>
                  {route.title}
                </IonLabel>
              </IonItem>
            </IonMenuToggle>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
