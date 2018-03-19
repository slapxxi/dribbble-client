import React from 'react';
import glamorous from 'glamorous-native';
import { TouchableOpacity } from 'react-native';

type Props = {
  value: string,
  onToggleAllComplete: Function,
  onChange: Function,
  onAddItem: Function,
};

function Header({
  value,
  onToggleAllComplete,
  onChange,
  onAddItem,
}: Props) {
  return (
    <Container>
      <TouchableOpacity onPress={onToggleAllComplete}>
        <CheckMark>{String.fromCharCode(10003)}</CheckMark>
      </TouchableOpacity>
      <Input
        value={value}
        onChangeText={onChange}
        onSubmitEditing={onAddItem}
        placeholder="What needs to be done?"
        blurOnSubmit={false}
        returnKeyType="done"
      />
    </Container>
  );
}

const Container = glamorous.view({
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  paddingHorizontal: 16,
});

const CheckMark = glamorous.text({
  fontSize: 30,
  color: 'hotpink',
});

const Input = glamorous.textinput({
  flex: 1,
  height: 50,
  marginLeft: 16,
  fontSize: 20,
});

export default Header;
