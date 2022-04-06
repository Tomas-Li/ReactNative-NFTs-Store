import { useState } from "react"
import { View, SafeAreaView, FlatList } from "react-native"

import { COLORS, NFTData } from "../constants"
import { NFTCard, HomeHeader, FocusedStatusBar } from "../components"

const Home = () => {
  //Everything that is before the return is the state manipulation for the search bar
  const [nftData, setNftData] = useState(NFTData)

  const handleSearch = (value) => {
    if(!value.length) return setNftData(NFTData);

    const filteredData = NFTData.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()));

    if(filteredData.length) {
      setNftData(filteredData);
    } else {
      setNftData(NFTData);
    }
  }

  return (
    <SafeAreaView style={{ flex:1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary}/>

      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList 
            data={nftData}
            renderItem={({ item }) => <NFTCard data={item}/>}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch}/>}
          />
        </View>

        {/*The following view is literally the background of Home*/}
        <View style={{
          position: 'absolute',
          top:0,
          bottom:0,
          right:0,
          left:0,
          zIndex:-1
        }}>
          {/*The two following lines are dividing the screen into two parts by colors*/}
          <View style={{height: 300, backgroundColor: COLORS.primary }}/>
          <View style={{ flex:1, backgroundColor: COLORS.white }}/>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home