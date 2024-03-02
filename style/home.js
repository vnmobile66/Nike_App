import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between"
    },
    topContent: {
      marginHorizontal: 20,
      marginVertical: 30,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between"
    },
    headerText: {
      color: '#ffffff',
      fontSize: 26
    },
    bottomContent: {
      width: 307,
      height: 70,
      marginBottom: 60,
      marginLeft: 159,
      overflow: "hidden"
    },
    buttonContent: {
      width: 60,
      height: 60,
      borderRadius: 100,
      backgroundColor: "#FFBE00",
      margin: 5,
      justifyContent: "center",
      alignItems: "center"
    },
    bottomText: {
      color: "#ffffff",
      fontSize: 20
    }
});

export default styles;