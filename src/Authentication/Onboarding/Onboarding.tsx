import React from 'react';
import { View } from 'react-native';

interface ComponentProps { }

const ComponentName = (props: ComponentProps) => { 
    return (
        <View style={{flex: 1, backgroundColor: "cyan"}}/>
    )
}

export default ComponentName;