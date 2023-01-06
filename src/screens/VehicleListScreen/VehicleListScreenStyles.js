import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 10,
        backgroundColor: "#fff",
    },
    textStyle: {
        fontFamily: 'Poppins',
        fontSize: 22,
        borderBottomColor: "rgb(227, 232, 234)",
    },
    errorMessage:{
        color: "red",
        marginTop: 5,
        fontFamily: "Poppins"
    },
    vehicleList:{
        marginTop: 15
    },
    search:{
        padding: 15,
        marginTop: 15,
        fontSize: 16,
        borderRadius: 30,
        backgroundColor: "rgb(227, 232, 234)",
        fontFamily: "Poppins"
    },
    loading:{
        marginTop: 30,
        textAlign: "center"
    },
    noMatchText:{
        fontFamily: "Poppins",
        marginTop: 15
    }
})

export default styles;