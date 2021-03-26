/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
// import { connect } from 'react-redux';
import Header from '../components/Header';
// import Search from '../components/Search';
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

const Home = () => {

  const API = 'api/professions';
  const salary = 'api/salaries';
  const industry = 'api/industries';

  const initialState = useInitialState(API);
  const salaries = useInitialState(salary);
  const industries = useInitialState(industry);
  // console.log(initialState);
  // console.log(initialState2);
  return initialState.length === 0 || salaries.length === 0 || industries.length === 0 ? <h1>Loading...</h1> : (

    <>
      <Header />
      <Select />
      <SelectCity />
      <SelectLevEdu />
      <SelectProfession {...initialState} />
      <SelectIndustry {...industries} />
      <SelectSector />
      <SelectSalary {...salaries} />
      <SelectPosition />
      <SelectWorkArea />
      <SelectUniversities />
      <SelectGender />
      <SelectPracticing />

    </>
  );
};

// const mapStateToProps = state => {
//   return {
//     myList: state.myList,
//     trends: state.trends,
//     originals: state.originals,
//   };
// };

// export default connect(mapStateToProps, null)(Home);
export default Home;
