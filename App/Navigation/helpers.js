import { StackActions, NavigationActions } from 'react-navigation';

export const removeStartUp = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'Launches' })],
});

