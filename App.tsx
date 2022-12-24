/* <-- dependencies --> */
import React, { useEffect } from 'react';
import { ScrollView, LogBox } from 'react-native';

/* <-- imports src --> */
import Home from '@src/screens/Home';
import Sale from '@src/screens/Sale';
import Header from '@src/components/Header'
import Footer from '@src/components/Footer'

const App = () => {

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, [])

  return (
    <ScrollView className='bg-[#EBEAE8]' showsVerticalScrollIndicator={false}>
      <Header />
      <Home />
      <Sale />
      <Footer />
    </ScrollView>
  );
};

export default App