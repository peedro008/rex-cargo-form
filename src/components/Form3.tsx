import React, { useState } from "react";
import logo from "../assets/logo.png";
import "./Forms.css";

import { FormFields } from "./FormController";

interface Form1Props {
  setFormIndex: (index: number) => void;
  formState: FormFields; // Importa FormFields o asegúrate de que esté definido en este archivo
  setFormState: (state: FormFields) => void;
  handleSubmit: () => void;
}

function Form3({ setFormIndex, formState, setFormState, handleSubmit }: Form1Props) {

  return (
    <div className="Container1">
      <img src={logo} className="logo" />
      <p className="headerTitle">Destination Services</p>
      <div className="divider" />
      <p className="Standar">STANDARD SERVICES</p>
      <p className="Standar2">Bill to:</p>
      <p className="thirdTitle">1.1 Document turnover</p>
      <p className="thirdText">
        HAWB notice of arrival, document validation for customs processing,
        available for pickup by Consignee or Agent/Broker in our customer
        service counter about 24 office hours upon arrival.{" "}
      </p>
      <div className="thirdCont">
        <div className={formState.destinationServices.documentTurnover==="partner"?"checkBoxSelected" : "checkBox"} onClick={()=>setFormState({...formState, destinationServices:{...formState.destinationServices, documentTurnover: "partner"}})} key={35} />
        <p className="checkBoxTitle3">Partner</p>
        <div className={formState.destinationServices.documentTurnover==="consignee"?"checkBoxSelected" : "checkBox"} onClick={()=>setFormState({...formState, destinationServices:{...formState.destinationServices, documentTurnover: "consignee"}})} key={36} />
        <p className="checkBoxTitle3">Consignee</p>
      </div>
      <p className="thirdTitle">1.2 Airport Handling</p>
      <p className="thirdText">
        MAWB recovery from the carrier, Port fees, and carrier handling charges.
        Pre-Paid MAWBs ONLY. Verification of proper Customs registration. Office
        hours only unless prior arrangement with the carrier.
      </p>
      <div className="thirdCont">
        <div className={formState.destinationServices.airportHandling==="partner"?"checkBoxSelected" : "checkBox"} onClick={()=>setFormState({...formState, destinationServices:{...formState.destinationServices, airportHandling: "partner"}})} key={37} />
        <p className="checkBoxTitle3">Partner</p>
        <div className={formState.destinationServices.airportHandling==="consignee"?"checkBoxSelected" : "checkBox"} onClick={()=>setFormState({...formState, destinationServices:{...formState.destinationServices, airportHandling: "consignee"}})}  key={38} />
        <p className="checkBoxTitle3">Consignee</p>
      </div>
      <p className="thirdTitle">1.3 Consolidation Breakdown</p>
      <p className="thirdText">
        Individualized MAWB & HAWB(s) registration within Customs' system.
        Validate Manifest(s), Preliminary external package inspection, piece
        count/weight verification, preparation for bonded Transfer.
      </p>
      <div className="thirdCont">
        <div className={formState.destinationServices.consolidationBreakdown==="partner"?"checkBoxSelected" : "checkBox"} onClick={()=>setFormState({...formState, destinationServices:{...formState.destinationServices, consolidationBreakdown: "partner"}})}  key={39} />
        <p className="checkBoxTitle3">Partner</p>
        <div className={formState.destinationServices.consolidationBreakdown==="consignee"?"checkBoxSelected" : "checkBox"} onClick={()=>setFormState({...formState, destinationServices:{...formState.destinationServices, consolidationBreakdown: "consignee"}})}  key={40} />
        <p className="checkBoxTitle3">Consignee</p>
      </div>
      <p className="thirdTitle">1.4 Airport Transfer</p>
      <p className="thirdText">
        All inbound shipments not subject to Customs clearance on the ramp in
        accordance with prior arrangements, must be transferred to an
        authorized, private Bonded Facility for import processing.
      </p>
      <div className="thirdCont">
        <div  className={formState.destinationServices.airportTransfer==="partner"?"checkBoxSelected" : "checkBox"} onClick={()=>setFormState({...formState, destinationServices:{...formState.destinationServices, airportTransfer: "partner"}})}  key={41} />
        <p className="checkBoxTitle3">Partner</p>
        <div className={formState.destinationServices.airportTransfer==="consignee"?"checkBoxSelected" : "checkBox"} onClick={()=>setFormState({...formState, destinationServices:{...formState.destinationServices, airportTransfer: "consignee"}})}  key={42} />
        <p className="checkBoxTitle3">Consignee</p>
      </div>

      <p className="Optional">OPTIONAL SERVICES</p>
      <p className="Optional2">Bill to:</p>
      <p className="thirdTitle">2.1 Customs Clearance</p>
      <p className="thirdText">
        Definitive Import or Free Trade Zone Customs' schemes clearance.
        Harmonized Tariff classification, document preparation, physical
        inspection, declaration filing for governmental access to the country.
      </p>
      <div className="thirdCont">
        <div className={formState.optionalServices.customsClearance==="partner"?"checkBoxSelected" : "checkBox"} onClick={()=>setFormState({...formState, optionalServices:{...formState.optionalServices, customsClearance: "partner"}})} key={43} />
        <p className="checkBoxTitle3">Partner</p>
        <div className={formState.optionalServices.customsClearance==="consignee"?"checkBoxSelected" : "checkBox"} onClick={()=>setFormState({...formState, optionalServices:{...formState.optionalServices, customsClearance: "consignee"}})} key={44} />
        <p className="checkBoxTitle3">Consignee</p>
      </div>
      <p className="thirdTitle">2.2 Delivery [25km Radius]</p>
      <p className="thirdText">
        Dock delivery or “no touch” load. The driver will not assist in
        unloading. The site’s staff will unload the truck under the driver's
        supervision. 60 minutes wait time. Office hours deliveries only.
      </p>
      <div className="thirdCont">
        <div className={formState.optionalServices.deliveryWithin25kmRadius==="partner"?"checkBoxSelected" : "checkBox"} onClick={()=>setFormState({...formState, optionalServices:{...formState.optionalServices, deliveryWithin25kmRadius: "partner"}})}  key={45} />
        <p className="checkBoxTitle3">Partner</p>
        <div className={formState.optionalServices.deliveryWithin25kmRadius==="consignee"?"checkBoxSelected" : "checkBox"} onClick={()=>setFormState({...formState, optionalServices:{...formState.optionalServices, deliveryWithin25kmRadius: "consignee"}})}  key={46} />
        <p className="checkBoxTitle3">Consignee</p>
      </div>
      <p className="thirdTitle">2.3 Duties and taxes</p>
      <p className="thirdText">
        Import duty (DAI) and Value Added Tax (IVA) are calculated as a
        percentage of the customs value of the import (ad valorem duty/tax). The
        customs value is based on the CIF value.
      </p>
      <div className="thirdCont">
        <div className={formState.optionalServices.dutiesAndTaxes==="partner"?"checkBoxSelected" : "checkBox"} onClick={()=>setFormState({...formState, optionalServices:{...formState.optionalServices, dutiesAndTaxes: "partner"}})}  key={47} />
        <p className="checkBoxTitle3">Partner</p>
        <div className={formState.optionalServices.dutiesAndTaxes==="consignee"?"checkBoxSelected" : "checkBox"} onClick={()=>setFormState({...formState, optionalServices:{...formState.optionalServices, dutiesAndTaxes: "consignee"}})}   key={48} />
        <p className="checkBoxTitle3">Consignee</p>
      </div>

      <p className="FormSubTitle3">Other services required</p>

      <p className="inputTitle3">Description</p>
      <input
        className="FormInput3"
        placeholder="Type here"
        key={49}
        onChange={(e) =>
          setFormState({
            ...formState,
            otherServicesRequiredDescription: e.target.value,
          })
        }
        value={formState.otherServicesRequiredDescription}
      />

<div className="buttonContainer">
        <button
          className="nextPrevButton"
          onClick={() => {
            window.scrollTo(0, 0);
            setFormIndex(2);
          }}
        >
          Previous
        </button>
        <button
          className="nextPrevButton"
          onClick={() => {
            window.scrollTo(0, 0);
            setFormIndex(4);
          }}
        >
          Next page
        </button>
      </div>
    </div>
  );
}

export default Form3;
