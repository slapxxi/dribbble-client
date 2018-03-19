import React from 'react';
import glamorous from 'glamorous-native';
import { Text, TouchableOpacity } from 'react-native';
import type { Filter as ItemFilter } from '../lib/types';

type Props = {
  count: number,
  filter: ItemFilter,
  onFilter: (string) => void,
  onClearComplete: () => void,
};

function Footer({
  count, filter, onFilter, onClearComplete,
}: Props) {
  return (
    <Container>
      <Count>{count} count</Count>
      <FiltersContainer>
        <Filter
          selected={filter === 'ALL'}
          onPress={() => onFilter('ALL')}
        >
          <Text>All</Text>
        </Filter>
        <Filter
          selected={filter === 'ACTIVE'}
          onPress={() => onFilter('ACTIVE')}
        >
          <Text>Active</Text>
        </Filter>
        <Filter
          selected={filter === 'COMPLETED'}
          onPress={() => onFilter('COMPLETED')}
        >
          <Text>Completed</Text>
        </Filter>
      </FiltersContainer>
      <TouchableOpacity onPress={onClearComplete}>
        <Text>Clear Completed</Text>
      </TouchableOpacity>
    </Container>
  );
}

const Container = glamorous.view({
  justifyContent: 'space-between',
  flexDirection: 'row',
  alignItems: 'center',
  padding: 16,
});

const Count = glamorous.text({
});

const FiltersContainer = glamorous.view({
  flexDirection: 'row',
});

const Filter = glamorous.touchableopacity(({ selected }) => ({
  padding: 8,
  borderRadius: 5,
  borderWidth: 1,
  borderColor: selected ? 'rgba(167, 157, 187, 0.2)' : 'transparent',
}));

export default Footer;
