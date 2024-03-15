import React, { useState } from "react";
import { FormFields } from "./FormController";
import ReCAPTCHA from "react-google-recaptcha";
import logo from "../assets/logo.png";
import "./Forms.css";
import { arrPorts, country, depPorts, termsOfTrade } from "./data";
import { AiOutlineLoading } from "react-icons/ai";
interface PreviewProps {
  formState: FormFields; // Importa FormFields o asegúrate de que esté definido en este archivo
  handleSubmit: () => void;
  loading: boolean,
  setFormIndex: (index: number) => void;
}
function Preview({ formState, handleSubmit, setFormIndex, loading }: PreviewProps) {
  const [captchaVal, setCaptchaVal] = useState(null);
  let datee = new Date(formState.cargoReadyDate);
  function formatDate(date: any) {
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // El mes está basado en cero, así que sumamos 1
    const day = date.getDate().toString().padStart(2, "0");
    const year = date.getFullYear().toString().substr(-2); // Tomamos los últimos dos dígitos del año

    return `${month}/${day}/${year}`;
  }
  function renderServiceEntries(services: any, title: any) {
    return (
      <div className="servicePreview">
        <p className="fieldGroup">{title}</p>
        {Object.entries(services).map(([key, value], index) => {
          // Transforma el valor nulo a 'Not Specified' y la clave a un formato más legible
          const formattedKey = key.replace(/([A-Z])/g, " $1").toLowerCase();
          const formattedValue = value ? value.toString() : "Not Specified";
          return (
            <p
              key={index}
              className="fieldValue"
              style={{
                marginBlock: "2px",
                fontSize: "0.9rem",
                textTransform: "capitalize",
              }}
            >
              <p
                className="fieldGroup"
                style={{ fontSize: "0.9rem", textTransform: "capitalize" }}
              >
                {formattedKey}
              </p>
              : {formattedValue}
            </p>
          );
        })}
      </div>
    );
  }
  function renderCautionaryDetails(details: any) {
    const detailEntries = Object.entries(details)
      .map(([key, value]) => {
        if (!value) return null; // Ignoramos los valores falsos

        // Transformamos la clave a un formato legible
        switch (key) {
          case "notStackable":
            return "Not Stackable";
          case "containsFragileMaterial":
            return "Contains Fragile Material";
          case "containsMagnets":
            return "Contains Magnets";
          case "containsDangerousGoods":
            return "Contains Dangerous Goods";
          default:
            return "";
        }
      })
      .filter((entry) => entry !== null); // Filtramos las entradas nulas

    // Mapeamos las entradas a elementos JSX si existen
    return detailEntries.length > 0 ? (
      <div className="cautionaryDetailsPreview" style={{ marginBottom: "8px" }}>
        {detailEntries.map((entry, index) => (
          <p key={index} className="fieldValue" style={{ fontSize: "0.9rem" }}>
            - {entry}
          </p>
        ))}
      </div>
    ) : (
      <p className="fieldValue">No cautionary details specified</p>
    );
  }
  return (
    <div className="Container1">
      <img src={logo} className="logo" />
      <p className="headerTitle">Preview</p>
      <div className="formPreview">
        <div className="fieldGroup">
          <p className="fieldName">First Name: </p>
          <p className="fieldValue"> &nbsp; {formState.firstName}</p>
        </div>
        <div className="fieldGroup">
          <p className="fieldName">Last Name: </p>
          <p className="fieldValue"> &nbsp; {formState.lastName}</p>
        </div>
        <div className="fieldGroup">
          <p className="fieldName">Email: </p>
          <p className="fieldValue"> &nbsp; {formState.email}</p>
        </div>
        <div className="fieldGroup">
          <p className="fieldName">Verify Email: </p>
          <p className="fieldValue"> &nbsp; {formState.verifyEmail}</p>
        </div>
        <div className="fieldGroup">
          <p className="fieldName">Company: </p>
          <p className="fieldValue"> &nbsp; {formState.company}</p>
        </div>
        <div className="fieldGroup">
          <p className="fieldName">Telephone: </p>
          <p className="fieldValue"> &nbsp; {formState.telephone}</p>
        </div>
        <div className="fieldGroup">
          <p className="fieldName">Street Address: </p>
          <p className="fieldValue"> &nbsp; {formState.streetAddress}</p>
        </div>
        <div className="fieldGroup">
          <p className="fieldName">Street Address Line 2: </p>
          <p className="fieldValue"> &nbsp; {formState.streetAddressLine2}</p>
        </div>
        <div className="fieldGroup">
          <p className="fieldName">City: </p>
          <p className="fieldValue"> &nbsp; {formState.city}</p>
        </div>
        <div className="fieldGroup">
          <p className="fieldName">Region: </p>
          <p className="fieldValue"> &nbsp; {formState.region}</p>
        </div>
        <div className="fieldGroup">
          <p className="fieldName">Postal/Zip Code: </p>
          <p className="fieldValue"> &nbsp; {formState.postalZipCode}</p>
        </div>
        <div className="fieldGroup">
          <p className="fieldName">Country: </p>
          <p className="fieldValue"> &nbsp; {formState.country}</p>
        </div>
        <div className="fieldGroup">
          <p className="fieldName">Mode of Service: </p>
          <p className="fieldValue">
            
            &nbsp; {formState.modeOfService.toUpperCase()}
          </p>
        </div>
        <div className="fieldGroup">
          <p className="fieldName">Country of Destination: </p>
          <p className="fieldValue">
            
            &nbsp;
            {
              country.find((e) => e.index === formState.countryOfDestination)
                ?.value
            }
          </p>
        </div>
        <div className="fieldGroup">
          <p className="fieldName">Terms of Trade: </p>
          <p className="fieldValue">
            
            &nbsp;
            {termsOfTrade
              .find((e) => e.index === formState.termsOfTrade)
              ?.value.toUpperCase()}
          </p>
        </div>
        <div className="fieldGroup">
          <p className="fieldName">Carrier Name: </p>
          <p className="fieldValue"> &nbsp; {formState.carrierName}</p>
        </div>
        <div className="fieldGroup">
          <p className="fieldName">Cargo Ready Date: </p>
          <p className="fieldValue"> &nbsp; {formatDate(datee)}</p>
        </div>
        <div className="fieldGroup2">
          <p className="fieldName">Departure: </p>
          <p className="fieldValue2">
            
            &nbsp;
            {
              depPorts.find((e) => e.index === formState.airportOfDeparture)
                ?.value
            }
          </p>
        </div>
        <div className="fieldGroup2">
          <p className="fieldName">Arrival: </p>
          <p className="fieldValue2">
            
            &nbsp;
            {
              arrPorts.find((e) => e.index === formState.airportOfArrival)
                ?.value
            }
          </p>
        </div>
        <div className="fieldGroup">
          <p className="fieldName">Pieces:</p>
        </div>
        <div className="PiecesPreview">
          {formState.dimensions.map((e, i) => {
            return (
              <p className="fieldValue">
                <p className="fieldGroup">{i + 1}:</p> &nbsp;{e.width}mt x
                {e.height}mt x {e.length}mt, chargeable: {e.chargeable}kg
              </p>
            );
          })}
        </div>

        <p
          className="fieldGroup"
          style={{ marginTop: "8px", marginBottom: "4px" }}
        >
          Cautionary Details:
        </p>
        {renderCautionaryDetails(formState.cautionaryDetails)}

        <div className="fieldGroup">
          <p className="fieldName">HTS Code: </p>
          <p className="fieldValue"> &nbsp; {formState.htsCode}</p>
        </div>
        <div className="fieldGroup">
          <p className="fieldName">Declared Value: </p>
          <p className="fieldValue"> {formState.declaredValue}</p>
        </div>
        <div className="fieldGroup3" >
          <p className="fieldName3">Description: </p>
          <p className="fieldValue3">{formState.description}asfdasfasd,sandsahd,asasfdasfasd,sandsahd,asasfdasfasd,sandsahd,asasfdasfasd,sandsahd,asasfdasfasd,sandsahd,asasfdasfasd,sandsahd,asasfdasfasd,sandsahd,asasfdasfasd,sandsahd,as</p>
        </div>
        <div className="fieldGroup3">
          <p className="fieldName3">Supplementary Information: </p>
          <p className="fieldValue3">
            
            &nbsp; {formState.supplementaryInformation},asasfdasfasd,sandsahd,asasfdasfasd,san
          </p>
        </div>
        {renderServiceEntries(
          formState.destinationServices,
          "Destination Services"
        )}
        {renderServiceEntries(formState.optionalServices, "Optional Services")}
        <div className="fieldGroup3">
          <p className="fieldName3">Other Services Required Description: </p>
          <p className="fieldValue3">
            
            &nbsp; {formState.otherServicesRequiredDescription}
          </p>
        </div>
      </div>
      <div className="CaptchaCont">
        <ReCAPTCHA
          sitekey="6LeQAHYpAAAAAApUc1cyeAw4EXucRUhAI1STL25V"
          onChange={(e: any) => setCaptchaVal(e)}
        />
      </div>

      <div className="buttonContainer">
        <button
          className="nextPrevButton"
          onClick={() => {
            window.scrollTo(0, 0);
            setFormIndex(3);
          }}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: !captchaVal ? "grey" : "#374A81" }}
          disabled={!captchaVal}
          className="nextPrevButton"
          onClick={handleSubmit}
        >
          {!loading?"Submit":<div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
         <img style={{width:"2.6rem", backgroundColor:"transparent"}} src="https://www.devo.com/wp-content/plugins/berg-custom/src/block/post-block-modified/inc/views/layouts/loader.gif" alt="Descripción Alternativa" />
         Submit </div>}
        </button>
      </div>
    </div>
  );
}

export default Preview;
