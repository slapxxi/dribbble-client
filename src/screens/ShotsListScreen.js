import React, { Component } from 'react';
import glamorous from 'glamorous-native';
import { ActivityIndicator, Animated, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import type { NavigationScreenProp } from 'react-navigation';
import type { Animated as An } from 'react-native';
import ShotsList from '../components/ShotsList';
import colors from '../lib/styles/colors';
import { fetchShots, refreshShots } from '../store/shots/actions';
import {
  selectRecentShots,
  selectPopularShots,
  selectDebutShots,
} from '../store/shots/selectors';
import type { Shot, Shots, ShotCategory, AppState } from '../lib/types';

type Props = {
  category: ShotCategory,
  navigation: NavigationScreenProp<AppState>,
  popularShots: Shots,
  recentShots: Shots,
  debutShots: Shots,
  isLoading: boolean,
  isRefreshing: boolean,
  isLoadingMore: boolean,
  fetchShots: Function,
  refreshShots: Function,
};
type State = {
  type: ShotCategory,
  currentPage: number,
  scrollY: An.Value,
};

class ShotsListScreen extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      scrollY: new Animated.Value(0),
    };
  }

  componentWillMount() {
    StatusBar.setBarStyle('light-content');
  }

  componentDidMount() {
    const { category, fetchShots } = this.props;
    const { currentPage } = this.state;
    fetchShots(category, currentPage);
  }

  handleLoadNextPage = () => {
    const { currentPage } = this.state;
    const { category } = this.props;
    const nextPage = currentPage + 1;
    this.props.fetchShots(category, nextPage);
    this.setState({ currentPage: nextPage });
  };

  handlePressItem = (shot: Shot) => {
    const { navigation } = this.props;
    navigation.navigate('Shot', { shot });
  };

  handleRefresh = () => {
    const { category, refreshShots } = this.props;
    refreshShots(category);
    this.setState({ currentPage: 1 });
  };

  render() {
    let shots = [];
    const { category } = this.props;
    if (category === 'popular') {
      ({ popularShots: shots } = this.props);
    }
    if (category === 'recent') {
      ({ recentShots: shots } = this.props);
    }
    if (category === 'debuts') {
      ({ debutShots: shots } = this.props);
    }
    const interpolated = Animated.diffClamp(
      this.state.scrollY,
      0,
      60,
    ).interpolate({
      inputRange: [0, 60],
      outputRange: [0, 100],
    });
    const animatedStyle = {
      transform: [{ translateY: interpolated }],
    };
    return (
      <Container>
        {this.props.isLoading ? (
          <ActivityIndicator style={{ flex: 1 }} />
        ) : (
          <ShotsList
            shots={shots}
            refreshing={this.props.isRefreshing}
            isLoading={this.props.isLoadingMore}
            onRefresh={this.handleRefresh}
            onLoadMore={this.handleLoadNextPage}
            onScroll={Animated.event([
              {
                nativeEvent: {
                  contentOffset: { y: this.state.scrollY },
                },
              },
            ])}
            onPressItem={this.handlePressItem}
          />
        )}
        <Footer style={animatedStyle}>
          <Icon name="folder-open-o" color={colors.white} size={20} />
          <Icon name="cloud-download" color={colors.white} size={20} />
          <Icon name="sliders" color={colors.white} size={20} />
        </Footer>
      </Container>
    );
  }
}

const enhance = connect(
  ({ shots }) => ({
    popularShots: selectPopularShots(shots),
    debutShots: selectDebutShots(shots),
    recentShots: selectRecentShots(shots),
    isLoading: shots.isLoading,
    isRefreshing: shots.isRefreshing,
    isLoadingMore: shots.isLoadingMore,
  }),
  { fetchShots, refreshShots },
);

const Container = glamorous.view({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
});

const Footer = glamorous(Animated.View)({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around',
  backgroundColor: colors.pink,
  padding: 10,
});

export default enhance(ShotsListScreen);
