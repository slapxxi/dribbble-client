// @flow
import React, { Component } from 'react';
import { Animated, StatusBar } from 'react-native';
import glamorous from 'glamorous-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import type { NavigationScreenProp } from 'react-navigation';
import NetworkImage from '../components/NetworkImage';
import stripHTML from '../lib/stripHTML';
import colors from '../lib/styles/colors';
import type { Shot } from '../lib/types';

type NavigationState = { params: { shot: Shot } };
type Props = { navigation: NavigationScreenProp<NavigationState> };
type State = {
  scrollY: Animated.Value,
};

class ShotScreen extends Component<Props, State> {
  state = {
    scrollY: new Animated.Value(0),
  };

  render() {
    const interpolated = this.state.scrollY.interpolate({
      inputRange: [-200, 0],
      outputRange: [2, 1],
      extrapolate: 'clamp',
    });
    const imageStyle = {
      transform: [{ scale: interpolated }],
    };
    const { shot } = this.props.navigation.state.params;
    return (
      <PageContainer>
        <StatusBar hidden showHideTransition="slide" />
        <NetworkImage
          width="100%"
          height={300}
          teaser={shot.images.teaser}
          normal={shot.images.hidpi}
          renderImage={() => (
            <Image
              style={imageStyle}
              source={{ uri: shot.images.hidpi }}
            />
          )}
        />
        <Container
          contentContainerStyle={{ flex: 1 }}
          scrollEventThrottle={16}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: { y: this.state.scrollY },
              },
            },
          ])}
        >
          <InfoContainer>
            <Heading>{shot.title}</Heading>
            <Description numberOfLines={2}>
              {stripHTML(
                shot.description || 'There is no description.',
              )}
            </Description>
          </InfoContainer>
        </Container>
        <Toolbar>
          <ToolbarItem>
            <Icon name="user-circle-o" size={18} />
            <ToolbarItemText>{shot.commentsCount}</ToolbarItemText>
          </ToolbarItem>
          <ToolbarItem>
            <Icon name="eye" size={18} />
            <ToolbarItemText>{shot.viewsCount}</ToolbarItemText>
          </ToolbarItem>
          <ToolbarItem>
            <Icon name="heart-o" size={18} />
            <ToolbarItemText>{shot.likesCount}</ToolbarItemText>
          </ToolbarItem>
        </Toolbar>
      </PageContainer>
    );
  }
}

const PageContainer = glamorous.view({
  flex: 1,
});

const Container = glamorous.scrollview({
  flex: 1,
  backgroundColor: 'white',
});

const Image = glamorous(Animated.Image)(({ isLoading }) => ({
  width: '100%',
  height: 300,
  opacity: isLoading ? 0 : 1,
  backgroundColor: 'rgba(0, 0, 0, 0)',
}));

const Heading = glamorous.text({
  marginBottom: 10,
  fontWeight: 'bold',
  fontSize: 18,
  color: '#333',
});

const InfoContainer = glamorous.view({
  flexGrow: 1,
  padding: 15,
});

const Description = glamorous.text({
  fontSize: 16,
  color: colors.lightGrey,
});

const Toolbar = glamorous.view({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  padding: 15,
  backgroundColor: 'white',
});

const ToolbarItem = glamorous.touchableopacity({
  flexDirection: 'row',
  alignItems: 'center',
});

const ToolbarItemText = glamorous.text({
  marginLeft: 10,
});

export default ShotScreen;
