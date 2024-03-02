import { Text, View , ImageBackground, Image} from 'react-native';
import { Icon } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import styles from "./style/home"
import bg_home from "./assets/bg.png";
import icon from "./assets/icon_nike.png";

export default function App() {
  return (
    <ImageBackground 
        source={bg_home}
        resizeMode='cover'
        style={{flex: 1}}
    >
      <View style={styles.container}>
        <View style={styles.topContent}>
            <Text style={styles.headerText}>
              Just Do It With NIKE
            </Text>
            <View style={styles.image}>
              <Image
                source={icon}
              />
            </View>
        </View>
          <View style={styles.bottomContent}>
          <LinearGradient
            colors={['rgba(255,255,255,0.4)', 'rgba(255,255,255,0.4)']}
            style={{flexDirection: "row", alignItems: "center", borderRadius: 35,}}
          >
              <View style={styles.buttonContent}>
                <Icon
                  name='chevron-right'
                  color={'#ffffff'}
                  style={{fontSize: 32}}
                />
              </View>
              <Text style={styles.bottomText}>
                Get Started ...
              </Text>
              </LinearGradient>
          </View>
      </View>
    </ImageBackground>
  );
}