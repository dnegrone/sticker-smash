import { Link, Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ headerTitle: "Oops! Not Found" }} />
            <View style={styles.container}>
                <Link href={"/"} style={styles.button}>
                    Go back to Home Screen
                </Link>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#25292e",
    },
    text: {
        color: "#fff",
    },
    button: {
        fontSize: 20,
        color: "#fff",
        textDecorationLine: "underline",
    },
})
