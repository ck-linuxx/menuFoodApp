import { Text, View, ScrollView } from "react-native";
import Constants from "expo-constants"

import { Header } from "../components/header";
import { Banner } from "../components/banner";
import { Search } from "../components/search";
import { Section } from "../components/section";
import { TrendingFoods } from "../components/trending";
import { Restaurants } from "../components/restaurants";
import { ListRestaurants } from "../components/listRestaurantes";

const statusBarHeight = Constants.statusBarHeight

export default function Index() {
  return (
    <ScrollView 
      style={{ flex: 1 }} 
      className="bg-slate-200" 
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4" style={{ marginTop: statusBarHeight  + 8}} >
        <Header />
        <Banner />  
        <Search />
        <Section 
          name="Comidas em alta"
          label="Veja mais!"
          action={() => console.log("veja mais")}
          size="text-2xl"
        />
        <TrendingFoods />
        <Section 
          name="Famosos no DevFood"
          label="Veja todas!"
          action={() => console.log("veja mais")}
          size="text-xl"
        />
        <Restaurants />
        <Section 
          name={"Restaurantes"} 
          size={"text-2xl"} 
          label={"Veja todos os restaurantes próximos"} 
          action={() => {}}      
        />
        <ListRestaurants />
      </View>
    </ScrollView>
  );
}
