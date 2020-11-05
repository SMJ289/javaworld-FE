import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { View } from './Themed'

export default function Map({ path }: { path: string}) {
  return (
    <View>
      <MapView>
      showsUserLocation={true}
      </MapView>
    </View>
    )
};