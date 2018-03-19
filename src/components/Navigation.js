// @flow
import React, { Component } from 'react';
import glamorous from 'glamorous-native';
import colors from '../lib/styles/colors';
import type { ShotCategory } from '../lib/types';

type Props = { onPress: string => void, type: ShotCategory };

class Navigation extends Component<Props> {
  handlePress = (item: ShotCategory) => {
    this.props.onPress(item);
  };

  render() {
    return (
      <NavigationContainer>
        <NavigationItemContainer
          onPress={() => this.props.onPress('popular')}
        >
          <NavigationItem active={this.props.type === 'popular'}>
            <NavigationText active={this.props.type === 'popular'}>
              POPULAR
            </NavigationText>
          </NavigationItem>
        </NavigationItemContainer>
        <NavigationItemContainer
          onPress={() => this.props.onPress('recent')}
        >
          <NavigationItem active={this.props.type === 'recent'}>
            <NavigationText active={this.props.type === 'recent'}>
              RECENT
            </NavigationText>
          </NavigationItem>
        </NavigationItemContainer>
        <NavigationItemContainer
          onPress={() => this.props.onPress('debuts')}
        >
          <NavigationItem active={this.props.type === 'debuts'}>
            <NavigationText active={this.props.type === 'debuts'}>
              DEBUTS
            </NavigationText>
          </NavigationItem>
        </NavigationItemContainer>
      </NavigationContainer>
    );
  }
}

const NavigationContainer = glamorous.view({
  flexDirection: 'row',
  width: '90%',
  justifyContent: 'center',
  marginTop: 5,
  marginBottom: 10,
});

const NavigationItemContainer = glamorous.touchableopacity({
  flex: 1,
  alignItems: 'center',
});

const NavigationItem = glamorous.view(({ active }) => ({
  paddingVertical: 5,
  paddingHorizontal: 10,
  borderRadius: 50,
  backgroundColor: active ? colors.hotpink : 'rgba(0, 0, 0, 0)',
}));

const NavigationText = glamorous.text(({ active }) => ({
  fontSize: 12,
  color: active ? colors.white : colors.grey,
}));

export default Navigation;
