import {CameraView, CameraType, useCameraPermissions} from 'expo-camera';
import {useState, useRef} from 'react';
import{Button, StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import{Entypo} from '@expo/vector-icons';
import * as Sharing from 'expo-sharing';

export default function App(){
  const[modo, setModo] = useState<CameraType>('back');
  const[permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView>(null);
  const [foto, setFoto] = useState<string | null>(null);

  if (!permission){
    return <View/>;
  }

  if(!permission.granted){
    return(
      <View style={Styles.container}>
        <Text style={StyleSheet.message}> Precisamos da sua permissão para mostrar a câmera</Text>
        <Button onPress={requestPermission} title='Conceder Permissão'/>
      </View>
    )
  }
}
