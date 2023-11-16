import { t } from 'src/i18n'
import { HomeIcon, InfoIcon } from 'src/icons'
import { AboutAppScreen, HomeScreen } from 'src/screens'

import { type TabBarRoute } from './types'

export enum ROUTES {
  TAB = 'TAB',
  AUTH_NAVIGATOR = 'AUTH_NAVIGATOR',
  MAIN_NAVIGATOR = 'MAIN_NAVIGATOR',
  EXHIBITION = 'EXHIBITION',
}

export enum APP_ROUTES {
  HOME = 'HOME',
  TICKETS = 'TICKETS',
  COLLECTION = 'COLLECTION',
  ABOUT_APP = 'ABOUT_APP',
}

export enum AUTH_ROUTES {
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',
}

export const TabRoutes: TabBarRoute[] = [
  {
    name: APP_ROUTES.HOME,
    component: HomeScreen,
    Icon: HomeIcon,
    title: t('tabbar.home'),
  },
  {
    name: APP_ROUTES.ABOUT_APP,
    component: AboutAppScreen,
    Icon: InfoIcon,
    title: t('tabbar.aboutApp'),
  },
]
