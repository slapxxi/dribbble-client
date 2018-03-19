// @flow
import React from 'react';
import { Animated } from 'react-native';
import { Constants } from 'expo';
import glamorous from 'glamorous-native';
import { TabNavigator, TabBarTop } from 'react-navigation';
import colors from '../lib/styles/colors';
import Logo from '../components/Logo';
import ShotsListScreen from './ShotsListScreen';

const HomeScreenNavigator = TabNavigator(
  {
    Popular: {
      screen: (props) => (
        <ShotsListScreen category="popular" {...props} />
      ),
      navigationOptions: {
        tabBarLabel: createLabel('Popular'),
      },
    },
    Recent: {
      screen: (props) => (
        <ShotsListScreen category="recent" {...props} />
      ),
      navigationOptions: {
        tabBarLabel: createLabel('Recent'),
      },
    },
    Debuts: {
      screen: (props) => (
        <ShotsListScreen category="debuts" {...props} />
      ),
      navigationOptions: {
        tabBarLabel: createLabel('Debuts'),
      },
    },
  },
  {
    tabBarComponent: TabBar,
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: colors.white,
      inactiveTintColor: colors.grey,
      style: {
        backgroundColor: colors.pink,
      },
      tabStyle: {},
      labelStyle: {
        fontSize: 12,
      },
      indicatorStyle: {
        display: 'none',
      },
    },
  },
);

function TabBar(props) {
  return (
    <Container>
      <Header>
        <LogoContainer>
          <Logo />
        </LogoContainer>
      </Header>
      <TabBarTop {...props} useNativeDriver />
    </Container>
  );
}

function createLabel(text) {
  return ({ focused }) => (
    <Label focused={focused}>
      <LabelText>{text.toUpperCase()}</LabelText>
    </Label>
  );
}

const Container = glamorous.view({});

const LogoContainer = glamorous(Animated.View)({ marginVertical: 7 });

const Header = glamorous(Animated.View)({
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  paddingTop: Constants.statusBarHeight || 15,
  backgroundColor: colors.pink,
});

const Label = glamorous.view(({ focused }) => ({
  padding: 6,
  paddingHorizontal: 12,
  borderRadius: 50,
  backgroundColor: focused ? colors.hotpink : colors.pink,
}));

const LabelText = glamorous.text({
  fontSize: 12,
  color: colors.white,
});

export default HomeScreenNavigator;
