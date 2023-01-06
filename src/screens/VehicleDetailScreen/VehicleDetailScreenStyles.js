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
        fontSize: 22
    },
    detail:{
        marginTop: 20,
        marginBottom: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 5,
        borderBottomColor: "rgb(227, 232, 234)",
        borderBottomWidth: 1
    },
    registrationNumber:{
        fontSize: 15,
        fontWeight: "400",
        fontFamily: "Poppins"
    },
    type:{
        fontFamily: "Poppins",
        fontWeight: "400",
        fontSize: 15
    },
    errorMessage:{
        color: "red"
    },
    totalOdometer:{
        fontFamily: "Poppins"
    }
})

export default styles;