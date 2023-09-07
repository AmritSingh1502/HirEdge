import { useState } from "react";
import { View , ScrollView, SafeAreaView, Text } from "react-native";
import { Stack , useRouter } from  "expo-router";
import { COLORS , icons, images, SIZES } from "../constants";
import { Nearbyjobs , Popularjobs, ScreenHeaderBtn, Welcome } from "../components";

const Home = () => {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("");


    return (
        <SafeAreaView style={{ flex:2 ,backgroundColor:COLORS.gray1 }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor:COLORS.gray2},
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl = {icons.menu} dimension="60%" />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl = {images.profile} dimension="100%" />
                    ),
                    headerTitle: ""
                }}
            />

            <ScrollView showsHorizontalScrollIndicator={false}>
                <View style={{flex:1 , padding: SIZES.medium}}>

                    <Welcome
                        searchTerm ={searchTerm}
                        setSearchTerm ={setSearchTerm}
                        handleClick = {() =>{
                            if(searchTerm){
                                router.push(`/search/${searchTerm}`)
                            }
                        }}
                    />

                    <Popularjobs />
                    <Nearbyjobs />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;