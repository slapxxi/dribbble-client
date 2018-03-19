// @flow
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import glamorous from 'glamorous-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../lib/styles/colors';
import extractImageType from '../lib/extractImageType';
import type { Shot, Author } from '../lib/types';

type Props = { shot: Shot, author?: Author, onPress: Shot => void };

function ShotPreview({ shot, author, onPress }: Props) {
  return (
    <Container>
      <InfoContainer>
        <TouchableOpacity onPress={() => onPress(shot)}>
          <Image source={{ uri: shot.images.teaser }} />
          {extractImageType(shot.images.hidpi) === 'GIF' ? (
            <ImageType>
              <Text style={{ fontSize: 10, color: 'white' }}>GIF</Text>
            </ImageType>
          ) : null}
        </TouchableOpacity>
        <Toolbar>
          <ToolbarItem>
            <Icon
              name="user-circle-o"
              size={12}
              color={colors.greyDark}
            />
            <ToolbarItemText>{shot.commentsCount}</ToolbarItemText>
          </ToolbarItem>
          <ToolbarItem>
            <Icon name="eye" size={12} color={colors.greyDark} />
            <ToolbarItemText>{shot.viewsCount}</ToolbarItemText>
          </ToolbarItem>
          <ToolbarItem>
            <Icon name="heart-o" size={12} color={colors.greyDark} />
            <ToolbarItemText>{shot.likesCount}</ToolbarItemText>
          </ToolbarItem>
        </Toolbar>
      </InfoContainer>
      {/* <AuthorContainer>
        <AuthorAvatar source={{ uri: author.avatarURL }} />
        <AuthorName>{author.name}</AuthorName>
      </AuthorContainer> */}
    </Container>
  );
}

ShotPreview.defaultProps = {
  author: {},
};

const Container = glamorous.view({
  flex: 0.5,
  margin: 5,
});

const InfoContainer = glamorous.view({
  overflow: 'hidden',
  flex: 1,
  borderRadius: 5,
  borderWidth: 2,
  borderColor: colors.border,
});

const Image = glamorous.image({
  width: '100%',
  height: 120,
});

const ImageType = glamorous.view({
  position: 'absolute',
  top: 3,
  right: 3,
  padding: 3,
  borderRadius: 5,
  backgroundColor: 'rgba(80, 80, 80, 0.3)',
});

const AuthorContainer = glamorous.view({
  padding: 5,
  flexDirection: 'row',
  alignItems: 'center',
});

const AuthorAvatar = glamorous.image({
  width: 20,
  height: 20,
  borderRadius: 10,
});

const AuthorName = glamorous.text({
  fontSize: 12,
  marginLeft: 10,
  color: colors.blue,
});

const Toolbar = glamorous.view({
  flexDirection: 'row',
  justifyContent: 'space-around',
  paddingTop: 12,
  paddingBottom: 12,
  backgroundColor: 'white',
});

const ToolbarItem = glamorous.view({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const ToolbarItemText = glamorous.text({
  fontSize: 12,
  marginLeft: 5,
  color: colors.greyDark,
});

export default ShotPreview;
