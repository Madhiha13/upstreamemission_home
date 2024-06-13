import { useCallback,useState } from "react";
import PropTypes from "prop-types";
import {cart9,datamanagement1,datamanagement2,Group,datamanagement3,datamanagement4,left,next1,next2,user,whiteVariation,vector11,vector13,vectormiddle} from "./../Assets/index"

const UpstreamEmissionsHome = ({ className = "" }) => {
  // eslint-disable-next-line
  const [formData, setFormData] = useState(
);
  const yearRanges = [
    '2022-2023',
    '2021-2022',
    '2020-2021',
    '2019-2020',
    '2018-2019',
    '2017-2018',
];
  const handleYearChange = (event) => {
    const yearValue = event.target.value;
    setFormData(prevData => ({
        ...prevData,
        year: yearValue
    }));
};

  const onDataManagement1IconClick = useCallback(() => {
    // Please sync "Plugin / file cover - 17" to the project
  }, []);

  const onDataManagement4IconClick = useCallback(() => {
    // Please sync "Plugin / file cover - 21" to the project
  }, []);

  const onDataManagement2IconClick = useCallback(() => {
    // Please sync "Plugin / file cover - 20" to the project
  }, []);

  const onDataManagement3IconClick = useCallback(() => {
    // Please sync "Emission Measurement - Home Page" to the project
  }, []);

  const onRectangle121Click = useCallback(() => {
    // Please sync "Purchased Electricity - List" to the project
  }, []);

  return (

    
    <div className={`upstream-emissions-home ${className}`}>
      <div className="upstream-emissions-home-child" />

      <img
        className="white-variation-1"
        alt=""
        src={whiteVariation}
      />
      <img className="user-5-1" alt="" src={user} />
      <img
        className="data-management-1-icon"
        alt=""
        src={datamanagement1}
        onClick={onDataManagement1IconClick}
      />
      <img
        className="data-management-4-icon"
        alt=""
        src={datamanagement4}
        onClick={onDataManagement4IconClick}
      />
      <img
        className="data-management-2-icon"
        alt=""
        src={datamanagement2}
        onClick={onDataManagement2IconClick}
      />
      <div className="co2-parent">
        
        <img className=" co2" alt="" src={Group} />
      </div>
      <div className="dropdown-box">
      <select
                            //  value={formData.selectedYear}
                             onChange={handleYearChange}
                              className="year-dropdown header"
                            >
                         <option value="">Reporting Year</option>
                            {yearRanges.map((year) => (
                                 <option key={year} value={year}>
                                       {year}
                         </option>
                        ))}
                        </select>

      </div>
      <div className="reporting-year">Reporting Year</div>
      <img
        className="data-management-3-icon"
        alt=""
        src={datamanagement3}
        onClick={onDataManagement3IconClick}
      />
      <img
        className="left-arrow-in-circular-button-icon"
        alt=""
        src={left}
      />
      <div className="rectangle-parent">
        <div className="group-item" />
        <div className="div">1423</div>
        <div className="mtco2">MTCO2</div>
        <div className="group-inner" />
      </div>
      <div className="upstream-emissions-home-item" />
      <div className="upstream-emissions-home-inner" />
      <div className="rectangle-div" />
      <div className="upstream-emissions-home-child1" />
      <div className="upstream-emissions-home-child2" />
      <div className="upstream-emissions-home-child3" />
      <div className="upstream-emissions-home-child4" />
      <div className="upstream-emissions-home-child5" />
      <div className="upstream-emissions-home-child6" />
      <div className="upstream-emissions-home-child7" />
      <div className="upstream-emissions-home-child8" />
      <div className="upstream-emissions-home-child9" />
      <div className="container">
      <div className="facility-1">Facility 1</div>
      <div className="line-div" />
      <div className="upstream-emissions-home-child10" />
      <div className="upstream-emissions-home-child11" />
      <div className="upstream-emissions-home-child12" />
      <div className="upstream-emissions-home-child13" />
      <div className="upstream-emissions-home-child14" />
      <div className="upstream-emissions-home-child15" />
      <div className="upstream-emissions-home-child16" />
      <div className="upstream-emissions-home-child17" />
      <div className="upstream-emissions-home-child18" />
      <div className="upstream-emissions-home-child19" />
      <div className="upstream-emissions-home-child20" />
      <div className="upstream-emissions-home-child21" />
      <div className="facility-2">Facility 2</div>
      <div className="facility1-div">
      <div className="upstream-emissions-home-child22" />
      <div className="upstream-emissions-home-child23" />
      <div className="upstream-emissions-home-child24" />
      <div className="upstream-emissions-home-child25" />
      <div className="upstream-emissions-home-child26" />
      <div className="upstream-emissions-home-child27" />
      <div className="upstream-emissions-home-child28" />
      <div className="upstream-emissions-home-child29" />
      <div className="upstream-emissions-home-child30" />
      <div className="upstream-emissions-home-child31" />
      <div className="upstream-emissions-home-child32" />
      <div className="upstream-emissions-home-child33" />
      <div className="upstream-emissions-home-child34" />
      </div>
      <div className="facility-3">Facility 3</div>
      <div className="upstream-emissions-home-child35" />
      <div className="upstream-emissions-home-child36" />
      <div className="upstream-emissions-home-child37" />
      <div className="upstream-emissions-home-child38" />
      <div className="upstream-emissions-home-child39" />
      <div className="upstream-emissions-home-child40" />
      <div className="upstream-emissions-home-child41" />
      <div className="upstream-emissions-home-child42" />
      <div className="upstream-emissions-home-child43" />
      <div className="upstream-emissions-home-child44" />
      <div className="upstream-emissions-home-child45" />
      <div className="upstream-emissions-home-child46" />
      <div className="upstream-emissions-home-child47" />
      <div className="facility-4">Facility 4</div>
      <div className="upstream-emissions-home-child48" />
      <div className="upstream-emissions-home-child49" />
      <div className="upstream-emissions-home-child50" />
      <div className="upstream-emissions-home-child51" />
      <div className="upstream-emissions-home-child52" />
      <div className="upstream-emissions-home-child53" />
      <div className="upstream-emissions-home-child54" />
      <div className="upstream-emissions-home-child55" />
      <div className="upstream-emissions-home-child56" />
      <div className="upstream-emissions-home-child57" />
      <div className="upstream-emissions-home-child58" />
      <div className="upstream-emissions-home-child59" />
      <div className="upstream-emissions-home-child60" />
      <div className="facility-5">Facility 5</div>
      <div className="upstream-emissions-home-child61" />
      <div className="upstream-emissions-home-child62" />
      <div className="upstream-emissions-home-child63" />
      <div className="upstream-emissions-home-child64" />
      <div className="upstream-emissions-home-child65" />
      <div className="upstream-emissions-home-child66" />
      <div className="upstream-emissions-home-child67" />
      <div className="upstream-emissions-home-child68" />
      <div className="upstream-emissions-home-child69" />
      <div className="upstream-emissions-home-child70" />
      <div className="upstream-emissions-home-child71" />
      <div className="upstream-emissions-home-child72" />
      <div className="upstream-emissions-home-child73" />
      <div className="facility-6">Facility 6</div>
      <div className="upstream-emissions-home-child74" />
      <div className="upstream-emissions-home-child75" />
      <div className="upstream-emissions-home-child76" />
      <div className="upstream-emissions-home-child77" />
      <div className="upstream-emissions-home-child78" />
      <div className="upstream-emissions-home-child79" />
      <div className="upstream-emissions-home-child80" />
      <div className="upstream-emissions-home-child81" />
      <div className="upstream-emissions-home-child82" />
      <div className="upstream-emissions-home-child83" />
      <div className="upstream-emissions-home-child84" />
      <div className="upstream-emissions-home-child85" />
      <div className="upstream-emissions-home-child86" />
      <div className="facility-7">Facility 7</div>
      <div className="upstream-emissions-home-child87" />
      <div className="upstream-emissions-home-child88" />
      <div className="upstream-emissions-home-child89" />
      <div className="upstream-emissions-home-child90" />
      <div className="upstream-emissions-home-child91" />
      <div className="upstream-emissions-home-child92" />
      <div className="upstream-emissions-home-child93" />
      <div className="upstream-emissions-home-child94" />
      <div className="upstream-emissions-home-child95" />
      <div className="upstream-emissions-home-child96" />
      <div className="upstream-emissions-home-child97" />
      <div className="upstream-emissions-home-child98" />
      <div className="upstream-emissions-home-child99" />
      <div className="facility-8">Facility 8</div>
      <div className="upstream-emissions-home-child100" />
      <div className="upstream-emissions-home-child101" />
      <div className="upstream-emissions-home-child102" />
      <div className="upstream-emissions-home-child103" />
      <div className="upstream-emissions-home-child104" />
      <div className="upstream-emissions-home-child105" />
      <div className="upstream-emissions-home-child106" />
      <div className="upstream-emissions-home-child107" />
      <div className="upstream-emissions-home-child108" />
      <div className="upstream-emissions-home-child109" />
      <div className="upstream-emissions-home-child110" />
      <div className="upstream-emissions-home-child111" />
      <div className="upstream-emissions-home-child112" />
      <div className="facility-9">Facility 9</div>
      <div className="upstream-emissions-home-child113" />
      <div className="upstream-emissions-home-child114" />
      <div className="upstream-emissions-home-child115" />
      <div className="upstream-emissions-home-child116" />
      <div className="upstream-emissions-home-child117" />
      <div className="upstream-emissions-home-child118" />
      <div className="upstream-emissions-home-child119" />
      <div className="upstream-emissions-home-child120" />
      <div className="upstream-emissions-home-child121" />
      <div className="upstream-emissions-home-child122" />
      <div className="upstream-emissions-home-child123" />
      <div className="upstream-emissions-home-child124" />
      <div className="upstream-emissions-home-child125" />
      <div className="facility-10">Facility 10</div>
      </div>
      <div className="upstream-emissions-home-child126" />
      <img className="vector-icon" alt="" src={vector11} />
      <img
        className="upstream-emissions-home-child127"
        alt=""
        src={vectormiddle}
      />
      <img
        className="upstream-emissions-home-child128"
        alt=""
        src={vector13}
      />
      <div className="ellipse-div" />
      <div className="upstream-emissions-home-child1323" />
      <div className="upstream-emissions-home-child2313" />
      <div className="upstream-emissions-home-child129" />
      
      <div className="div1">4352</div>
      <div className="mtco21">MTCO2</div>
      <div className="welcome">Welcome !</div>
      <div className="name-of-client">Name of Client</div>
      <div className="upstream-emissions-home-child131" />
      <div className="upstream-emissions-home-child132" />
      <div className="upstream-emissions-home-child133" />
      <div
        className="upstream-emissions-home-child134"
        onClick={onRectangle121Click}
      />
      <b className="purchased-electricity">Purchased Electricity</b>
      <img className="cart-9-icon" alt="" src={cart9} />
      <img className="next-3-1" alt="" src={next1} />
      <img className="next-3-2" alt="" src={next2} />
    </div>
  );
};

UpstreamEmissionsHome.propTypes = {
  className: PropTypes.string,
};

export default UpstreamEmissionsHome;
