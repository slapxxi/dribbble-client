import React from 'react';
import { Switch, TouchableOpacity } from 'react-native';
import glamorous from 'glamorous-native';

type Props = {
  text: string,
  complete: boolean,
  onComplete: Function,
  onRemove: Function,
};

function Row({
  text, complete, onComplete, onRemove,
}: Props) {
  return (
    <Container>
      <Switch value={complete} onValueChange={onComplete} />
      <TextContainer>
        <Text complete={complete}>{text}</Text>
      </TextContainer>
      <TouchableOpacity onPress={onRemove}>
        <Destroy>X</Destroy>
      </TouchableOpacity>
    </Container>
  );
}

const Container = glamorous.view({
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  padding: 20,
});

const TextContainer = glamorous.view({
  flex: 1,
  marginHorizontal: 10,
});

const Text = glamorous.text(({ complete }) => ({
  fontSize: 20,
  color: '#4D4D4F',
  textDecorationLine: complete ? 'line-through' : 'none',
}));

const Destroy = glamorous.text({
  fontSize: 20,
  color: '#CC9A9A',
});

export default Row;
