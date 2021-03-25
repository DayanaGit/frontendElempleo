import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Search from '../components/Search';
import Select from '../components/SelectCountry';
import SelectCity from '../components/SelectCity';
import SelectLevEdu from '../components/SelectLevEdu';
import SelectProfession from '../components/SelectProfession';
import SelectIndustry from '../components/SelectIndustry';
import SelectSector from '../components/SelectSector';
import SelectSalary from '../components/SelectSalary';
import SelectPosition from '../components/SelectPosition';
import SelectWorkArea from '../components/SelectWorkArea';
import SelectUniversities from '../components/SelectUniversities';
import SelectGender from '../components/SelectGender';
import SelectPracticing from '../components/SelectPracticing';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const Home = ({ myList, trends, originals }) => {
  return (
    <>
      <Header />
      <Search isHome />
      {myList.length > 0 &&
        <Categories title="Mi Lista">
          <Carousel>
            {myList.map(item =>
              <CarouselItem 
                key={item.id} 
                {...item}
                isList
              />
            )}
          </Carousel>
        </Categories>
      }
       <Select />
       <SelectCity />
       <SelectLevEdu />
       <SelectProfession />
       <SelectIndustry />
       <SelectSector />
       <SelectSalary />
       <SelectPosition />
       <SelectWorkArea />
       <SelectUniversities />
       <SelectGender />
       <SelectPracticing />
       console.log('test2')
    </>
  );
}

const mapStateToProps = state => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);