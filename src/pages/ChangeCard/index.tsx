import React, { useRef, useCallback, useEffect, useState } from 'react';
import { Button, TextInput } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useTheme } from 'styled-components';

import { Input, Picker } from '@src/components';
import { serviceClasses, serviceRaces } from '@src/services';
import { Container } from './styles';
import { IPickerItem } from '@src/types/components';
import { ICardForm } from '@src/types';

const schema = Yup.object().shape({
  name: Yup.string().required('Você precisa informar o nome!'),

  level: Yup.number()
    .required('Você precisa informar o nível!')
    .typeError('Esta entrada precisa ser do tipo númerica!')
    .integer('Você precisa passar um número inteiro!'),

  class: Yup.string().required(),

  races: Yup.string().required(),
});

const ChangeCard: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      level: '',
      class: '',
      races: '',
    },
    resolver: yupResolver(schema),
  });

  const nameRef = useRef<TextInput>(null);
  const levelRef = useRef<TextInput>(null);

  const [classes, setClasses] = useState<IPickerItem[]>([]);
  const [races, setRaces] = useState<IPickerItem[]>([]);

  const theme = useTheme();

  const onSubmit = useCallback((data: ICardForm) => {
    console.log(data);
  }, []);

  useEffect(() => {
    serviceClasses.get().then((response) => {
      const newClasses = response.map((item) => ({
        label: item.name,
        value: item.index,
        image: item.image,
      }));

      setClasses(newClasses);
    });
  }, []);

  useEffect(() => {
    serviceRaces.get().then((response) => {
      const newRaces = response.map((item) => ({
        label: item.name,
        value: item.index,
        image: item.image,
        description: item.description,
      }));

      setRaces(newRaces);
    });
  }, []);

  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholder="Name..."
            reference={nameRef}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            maxLength={40}
            errorMessage={errors.name && errors.name.message}
            onSubmitEditing={() => levelRef.current?.focus()}
          />
        )}
        name="name"
      />

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholder="Level..."
            reference={levelRef}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            keyboardType="decimal-pad"
            autoCorrect={false}
            maxLength={3}
            errorMessage={errors.level && errors.level.message}
          />
        )}
        name="level"
      />

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Picker
            title="Race"
            items={races}
            selectedValue={value}
            onValueChange={onChange}
            onBlur={onBlur}
          />
        )}
        name="races"
      />

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Picker
            title="Classe"
            items={classes}
            selectedValue={value}
            onValueChange={onChange}
            onBlur={onBlur}
          />
        )}
        name="class"
      />

      <Button
        title="Confirm"
        onPress={handleSubmit(onSubmit)}
        color={theme.colors.secondary}
      />
    </Container>
  );
};

export { ChangeCard };
