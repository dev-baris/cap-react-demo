import React from 'react';

import ActionSheetPage from './pages/ActionSheet';
import AppPage from './pages/App';
import Browser from './pages/Browser';
import CameraPage from './pages/Camera';
import ClipboardPage from './pages/Clipboard';
import Console from './pages/Console';
import CookiesPage from './pages/Cookies';
import DevicePage from './pages/Device';
import DialogPage from './pages/Dialog';
import FilesystemPage from './pages/Filesystem';
import GeolocationPage from './pages/Geolocation';
import HapticsPage from './pages/Haptics';
import HttpPage from './pages/Http';
import KeyboardPage from './pages/Keyboard';
import LocalNotificationsPage from './pages/LocalNotifications';
import MotionPage from './pages/Motion';
import NetworkPage from './pages/Network';
import ScreenReader from './pages/ScreenReader';
import ScreenOrientation from './pages/ScreenOrientation';
import SharePage from './pages/Share';
import SplashScreenPage from './pages/SplashScreen';
import StatusBarPage from './pages/StatusBar';
import Preferences from './pages/Preferences';
import TextZoom from './pages/TextZoom';
import ToastPage from './pages/Toast';

interface Page {
  readonly url: string;
  readonly title: string;
  readonly component: typeof React.Component | React.FC;
}

const routes: Page[] = [
  {
    title: 'Action Sheet',
    url: '/action-sheet',
    component: ActionSheetPage,
  },
  {
    title: 'App',
    url: '/app',
    component: AppPage,
  },
  {
    title: 'Browser',
    url: '/browser',
    component: Browser,
  },
  {
    title: 'Camera',
    url: '/camera',
    component: CameraPage,
  },
  {
    title: 'Clipboard',
    url: '/clipboard',
    component: ClipboardPage,
  },
  {
    title: 'Cookies',
    url: '/cookies',
    component: CookiesPage,
  },
  {
    title: 'Console',
    url: '/console',
    component: Console,
  },
  {
    title: 'Device',
    url: '/device',
    component: DevicePage,
  },
  {
    title: 'Dialog',
    url: '/dialog',
    component: DialogPage,
  },
  {
    title: 'Filesystem',
    url: '/filesystem',
    component: FilesystemPage,
  },
  {
    title: 'Geolocation',
    url: '/geolocation',
    component: GeolocationPage,
  },
  {
    title: 'Haptics',
    url: '/haptics',
    component: HapticsPage,
  },
  {
    title: 'HTTP',
    url: '/http',
    component: HttpPage,
  },
  {
    title: 'Keyboard',
    url: '/keyboard',
    component: KeyboardPage,
  },
  {
    title: 'Local Notifications',
    url: '/local-notifications',
    component: LocalNotificationsPage,
  },
  {
    title: 'Motion',
    url: '/motion',
    component: MotionPage,
  },
  {
    title: 'Network',
    url: '/network',
    component: NetworkPage,
  },
  {
    title: 'Screen Reader',
    url: '/screen-reader',
    component: ScreenReader,
  },
  {
    title: 'Screen Orientation',
    url: '/screen-orientation',
    component: ScreenOrientation,
  },
  {
    title: 'Share',
    url: '/share',
    component: SharePage,
  },
  {
    title: 'Splash Screen',
    url: '/splash-screen',
    component: SplashScreenPage,
  },
  {
    title: 'Status Bar',
    url: '/status-bar',
    component: StatusBarPage,
  },
  {
    title: 'Preferences',
    url: '/preferences',
    component: Preferences,
  },
  {
    title: 'Text Zoom',
    url: '/text-zoom',
    component: TextZoom,
  },
  {
    title: 'Toast',
    url: '/toast',
    component: ToastPage,
  },
];

export default routes;
