import React, { Component } from 'react';
import glamorous from 'glamorous-native';
import ProgressBar from './ProgressBar';
import colors from '../lib/styles/colors';

type URI = string;
type CSSProperty = string | number;

type Props = {
  width: CSSProperty,
  height: CSSProperty,
  teaser: URI,
  normal: URI,
  renderImage: () => void,
};

type State = {
  isLoading: boolean,
  loaded: number,
  total: number,
};

class NetworkImage extends Component<Props, State> {
  state = {
    isLoading: true,
    loaded: 0,
    total: 0,
  };

  handlePartialLoad = ({ nativeEvent: { loaded, total } }) => {
    this.setState({ loaded, total });
  };

  handleLoad = () => {
    this.setState({ isLoading: false });
  };

  render() {
    const { width, height, teaser, normal, renderImage } = this.props;
    const { isLoading, loaded, total } = this.state;
    return isLoading ? (
      <ImageContainer>
        <TeaserImage source={{ uri: teaser }} />
        <Image
          isLoading
          width={width}
          height={height}
          source={{ uri: normal }}
          onLoad={this.handleLoad}
          onProgress={this.handlePartialLoad}
        />
        <ProgressBar
          color={colors.green}
          loaded={loaded}
          total={total}
        />
      </ImageContainer>
    ) : (
      <ImageContainer>
        <TeaserImage source={{ uri: teaser }} />
        {renderImage()}
        <ProgressBar color="white" loaded={1} total={1} />
      </ImageContainer>
    );
  }
}

const ImageContainer = glamorous.view({
  position: 'relative',
  overflow: 'hidden',
});

const Image = glamorous.image(({ width, height, isLoading }) => ({
  width: width,
  height: height,
  opacity: isLoading ? 0 : 1,
  backgroundColor: 'rgba(0, 0, 0, 0)',
}));

const TeaserImage = glamorous.image({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 3,
});

export default NetworkImage;
