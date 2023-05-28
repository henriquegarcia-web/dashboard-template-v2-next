import {
  HiOutlineChartPie,
  HiOutlineChatAlt2,
  HiOutlineUserGroup,
  HiOutlineCog
} from 'react-icons/hi'

import ResumeView from '@/components/admin/views/ResumeView'
import CommentsView from '@/components/admin/views/CommentsView'
import FollowersView from '@/components/admin/views/FollowersView'
import SettingsView from '@/components/admin/views/SettingsView'

export const viewsMainMenuData = [
  {
    viewId: 'view-resume',
    viewPath: 'resume',
    viewLabel: 'Resumo',
    viewTitle: 'Resumo',
    viewLegend: 'Lorem impsum qua quers koda',
    viewIcon: <HiOutlineChartPie />,
    viewComponent: <ResumeView />
  },
  {
    viewId: 'view-comments',
    viewPath: 'comments',
    viewLabel: 'Comentários',
    viewTitle: 'Gerenciador de Comentários',
    viewLegend: 'Lorem impsum qua quers koda',
    viewIcon: <HiOutlineChatAlt2 />,
    viewComponent: <CommentsView />
  },
  {
    viewId: 'view-followers',
    viewPath: 'followers',
    viewLabel: 'Seguidores',
    viewTitle: 'Gerenciador de Seguidores',
    viewLegend: 'Lorem impsum qua quers koda',
    viewIcon: <HiOutlineUserGroup />,
    viewComponent: <FollowersView />
  }
]

export const viewsSecondaryMenuData = [
  {
    viewId: 'view-settings',
    viewPath: 'settings',
    viewLabel: 'Configurações',
    viewTitle: 'Configurações',
    viewLegend: 'Lorem impsum qua quers koda',
    viewIcon: <HiOutlineCog />,
    viewComponent: <SettingsView />
  }
]
