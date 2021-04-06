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
import SelectLanguage from '../components/SelectLanguage';
import SelectPercentage from '../components/SelectPercentage';
import SelectExperience from '../components/SelectExperience';
import SelectAge from '../components/SelectAge';
import SelectHvAct from '../components/SelectHvActualization';
import SelectHvActEnd from '../components/SelectHvActEnd';
import SelectPerEmail from '../components/SelectPerEmail';
import SelectPerRecInf from '../components/SelectPerRecInf';
import SelectPerHvInc from '../components/SelectPerHvInc';
import SelectPerEmailInv from '../components/SelectPerEmailInv';
import Top from '../components/Top';
import Button from '../components/SearchButton';
import useInitialState from '../hooks/useInitialState';

import '../assets/styles/App.scss';

const Home = () => {

  const salary = 'api/salaries';
  const industry = 'api/industries';
  const area = 'api/areas';
  const position = 'api/position';
  const university = 'api/universities';

  const salaries = useInitialState(salary);
  const industries = useInitialState(industry);
  const areas = useInitialState(area);
  const positions = useInitialState(position);
  const universities = useInitialState(university);

  return areas.length === 0 || salaries.length === 0 || industries.length === 0 || positions.length === 0 || universities.length === 0 ? (
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
        <SelectPosition {...positions}/>
        <SelectWorkArea {...areas} />
        <SelectUniversities {...universities} />
        <SelectLanguage />
        <SelectPercentage />
        <SelectExperience />
        <SelectAge />
        <SelectHvAct /> 
        <SelectPracticing />
        <SelectPerEmail />
        <SelectPerRecInf />
        <SelectPerHvInc />
        <SelectPerEmailInv />
        <SelectGender />
        <Top />
        <Button />
      </form>
    </>
  );
};

export default Home;
