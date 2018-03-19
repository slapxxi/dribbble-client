// @flow
import React from 'react';
import {
  ActivityIndicator,
  TouchableOpacity,
  View,
  Text,
  RefreshControl,
  FlatList,
} from 'react-native';
import ShotPreview from './ShotPreview';
import colors from '../lib/styles/colors';
import type { Shots } from '../lib/types';

type Props = {
  shots: Shots,
  isLoading: boolean,
  onPressItem: () => void,
  onScroll?: () => void,
  onLoadMore?: () => void,
};

type FooterProps = {
  isLoading: boolean,
  onPress?: () => void,
};

function ShotsList({
  shots,
  onScroll,
  onLoadMore,
  isLoading,
  onPressItem,
  onRefresh,
  refreshing,
}: Props) {
  return shots.length === 0 ? (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text style={{ color: 'grey' }}>There are no shots yet.</Text>
    </View>
  ) : (
    <FlatList
      ListFooterComponent={
        <ShotsListFooter isLoading={isLoading} onPress={onLoadMore} />
      }
      style={{ width: '100%' }}
      onScroll={onScroll}
      data={shots}
      scrollEventThrottle={16}
      keyExtractor={({ id }) => id}
      numColumns={2}
      refreshing={refreshing}
      onRefresh={onRefresh}
      refreshControl={<RefreshControl refreshing={refreshing} />}
      renderItem={({ item }) => (
        <ShotPreview onPress={onPressItem} shot={item} />
      )}
      contentContainerStyle={{
        margin: 5,
      }}
    />
  );
}

function ShotsListFooter({ onPress, isLoading }: FooterProps) {
  return (
    <TouchableOpacity
      style={{
        padding: 10,
        marginVertical: 20,
        backgroundColor: colors.pink,
        borderRadius: 10,
        alignItems: 'center',
      }}
      onPress={onPress}
    >
      {isLoading ? (
        <ActivityIndicator color={colors.white} />
      ) : (
        <Text
          style={{
            color: colors.white,
          }}
        >
          Load More
        </Text>
      )}
    </TouchableOpacity>
  );
}

ShotsList.defaultProps = { onScroll: () => null };
ShotsListFooter.defaultProps = { onPress: () => null };

export default ShotsList;
