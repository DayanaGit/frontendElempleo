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

  const salary = 'api/salaries';
  const industry = 'api/industries';
  const area = 'api/areas';

  const salaries = useInitialState(salary);
  const industries = useInitialState(industry);
  const areas = useInitialState(area);

  return areas.length === 0 || salaries.length === 0 || industries.length === 0 ? (
    <center>
      {' '}
      <h1>Loading...</h1>
      {' '}
    </center>
  ) : (

    <>
      <Header />
      <form>
        <Select />
        <SelectCity />
        <SelectLevEdu />
        <SelectProfession />
        <SelectIndustry {...industries} />
        <SelectSector />
        <SelectSalary {...salaries} />
        <SelectPosition />
        <SelectWorkArea {...areas} />
        <SelectUniversities />
        <SelectGender />
        <SelectPracticing />
        <input type='submit' value='Submit' />
      </form>
    </>
  );
};

export default Home;
