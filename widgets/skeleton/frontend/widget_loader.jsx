import React from "react";

import Clock from './clock';
import Weather from './weather';
import AutoComplete from './autocomplete';

const WidgetLoader = () => (
  <div>
    <Clock/>
    <br />
    <Weather/>
    <br />
    <AutoComplete props={names}/>
  </div>

);

export default WidgetLoader;

const names = ['Pedro','Adrian','Priya'];
