import { AppBarProps as AppBarPropsMUI, AppBar as AppBarMUI } from '@mui/material'
import { styled } from '@mui/material/styles'

import { makeStyles } from '../../../utils'

export const useStyles = makeStyles()((theme) => ({
  profile: {
    display: 'flex',
    alignItems: 'center',
    
  },
  name: {
    paddingLeft: '1em',
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  button: {
    color: 'white !important',
    marginLeft: 'auto',
  },
}))

export const AppBarSpacer = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  ...(theme.mixins.toolbar as any),
}))

interface AppBarProps extends AppBarPropsMUI {
  open?: boolean
  drawerWidth: number
}

export const AppBar = styled(AppBarMUI, {
  shouldForwardProp: (prop) => prop !== 'open' && prop !== 'drawerWidth',
})<AppBarProps>(({ theme, open, drawerWidth }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: '240px',
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))
