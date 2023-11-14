import { t } from "src/i18n";
import { HomeIcon } from "src/icons";
import { HomeScreen } from "src/screens";
import { TabBarRoute } from "./types";

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
  PROFILE = 'PROFILE',
}

export const TabRoutes: TabBarRoute[] = [
  {
    name: APP_ROUTES.HOME,
    component: HomeScreen,
    Icon: HomeIcon,
    title: t('tabbar.home'),
  },
]