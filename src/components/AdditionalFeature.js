import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addFeature } from '../actions/actions';

const AdditionalFeature = props => {
  const [addedFeat,setAddedFeat] = useState(props.feature);
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => {
        props.addFeature(addedFeat);
      }}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};
const stateToProps = (state) => {
  return  {
    additionalFeatures: state.additionalFeatures,
   }
}
const dispatchToProps = { 
  addFeature: addFeature

}

export default connect(stateToProps,dispatchToProps)(AdditionalFeature);
