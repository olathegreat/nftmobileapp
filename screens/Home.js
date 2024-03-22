import {useState} from "react"
import {Text, SafeAreaView, View, FlatList} from "react-native"

import { COLORS, NFTData } from "../constants/"
import { NFTCard, HomeHeader, FocusStatusBar } from "../components"

const Home = () => {

  const [nftData, setnftData] = useState(NFTData);

  const handleSearch = ( value) =>{

    if(!value.length ) return setnftData(NFTData)

    const filteredData= NFTData?.filter((item)=> item.name.toLowerCase().includes(value.toLowerCase()))


     if(filteredData.length){
      setnftData(filteredData)
     } else{
      setnftData(NFTData)
     }
  }





  return (
    <SafeAreaView style={{
        flex:1
    }}>
        <FocusStatusBar background={COLORS.primary}/>
        <View style={{
            flex: 1,
        }}>

            <View style={{zIndex: 0}}>
                  <FlatList
                      data={nftData}
                      showsVerticalScrollIndicator={false}
                      ListHeaderComponent={<HomeHeader onSearch={handleSearch}/>}
                      keyExtractor={(item) => item.id}
                      renderItem={({item})=>   <NFTCard data={item}/>
                      }
                  />
            </View>


            <View
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                zIndex: -1
              }}
            >
                <View style={{
                    height: 300,
                    backgroundColor: COLORS.primary
                }}>

                </View>
                <View
                  style={{
                    flex:1,
                    backgroundColor: COLORS.white
                  }}
                >

                </View>


            </View>

        </View>


    </SafeAreaView>
  
   
  )
}

export default Home