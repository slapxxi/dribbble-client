import { TabNavigator } from 'react-navigation';

const CategoryNavigation = TabNavigator({
  Popular: {
    screen: PopularScreen,
  },
  Recent: {
    screen: RecentScreen,
  },
  Debuts: {
    screen: DebutsScreen,
  },
});

export default CategoryNavigation;
