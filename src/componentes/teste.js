import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';

export default function teste({ style }) {

   
    return <View>
        <MaterialCommunityIcons name={'delete-outline'} style={style} color={"white"} />
    </View>
}

