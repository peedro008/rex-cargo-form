import React from "react";
import banner from "../assets/banner.png";
import logo from "../assets/logo.png";
import "./Forms.css";
import { FaAngleDown } from "react-icons/fa6";
import { FormFields } from "./FormController";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { arrPorts, country, depPorts, termsOfTrade } from "./data";
import Select from 'react-select';
interface Form1Props {
  setFormIndex: (index: number) => void;
  formState: FormFields; // Importa FormFields o asegúrate de que esté definido en este archivo
  setFormState: (state: FormFields) => void;
}

function Form2({ setFormIndex, formState, setFormState }: Form1Props) {

  const handleFileUpload = (event:any) => {
    const fileList = event.target.files;

    // Convertir los archivos a cadenas base64
    const promises = Array.from(fileList).map((file:any) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    });

    // Una vez que todas las promesas se resuelvan, actualizar el estado con las cadenas base64
    Promise.all(promises)
      .then(base64Strings => {
        setFormState({
          ...formState,
          uploadFiles: base64Strings
        });
      })
      .catch(error => {
        console.error('Error al leer archivos:', error);
        // Manejo de errores, si es necesario
      });
  };


  const validate = () =>{
    if(formState.dimensions[0].length&&formState.dimensions[0].height&&formState.dimensions[0].width && formState.countryOfDestination.length){
      return true
    }
    return false
  }
  return (
    <div className="Container">
      <img src={logo} className="logo" />
      <p className="headerTitle">Destination Services</p>
      <div className="divider" />
      <div className="HalfInputCont">
        <div className="SelectCont">
          <p className="selectTitle"> Country of Destination*</p>
          <Select  classNamePrefix="FormHalftSelect1" key={17}
      options={country.map(e=> {return{value:e.index, label:e.value}})}
      onChange={(e)=>setFormState({...formState, countryOfDestination: `${e? e.value : ""}`})}
      />
          
        </div>
        <div className="SelectCont">
          <p className="selectTitle">Terms of trade</p>
          <Select  classNamePrefix="FormHalftSelect1" key={18}
      options={termsOfTrade.map(e=> {return{value:e.index, label:e.value}})}
      onChange={(e)=>setFormState({...formState, termsOfTrade: `${e? e.value : ""}`})}
      />
         
        </div>
      </div>
      <p className="inputTitle">Carrier Name</p>
      <input
        className="FormInput"
        placeholder="Type here"
        key={19}
        onChange={(e) =>
          setFormState({ ...formState, carrierName: e.target.value })
        }
        value={formState.carrierName}
      />
      <p className="inputTitle2">Cargo Ready Date</p>
      <input
        type="date"
        onChange={(e) =>
          setFormState({
            ...formState,
            cargoReadyDate: new Date(e.target.value),
          })
        }
        className="FormInputDate"
        key={20}
      />
    
      <p className="inputTitle">
        {formState.modeOfService === "air" ? "Airport" : "Port"} of Departure
      </p>
      <Select  classNamePrefix="FormSelect" key={21}
      options={depPorts.map(e=> {return{value:e.index, label:e.value}})}
      onChange={(e)=>setFormState({...formState, airportOfDeparture: `${e? e.value : ""}`})}
      />
 
      <p className="inputTitle">
        {formState.modeOfService === "air" ? "Airport" : "Port"} of Arrival
      </p>
      <Select  classNamePrefix="FormSelect" key={22}
      options={arrPorts.map(e=> {return{value:e.index, label:e.value}})}
      onChange={(e)=>setFormState({...formState, airportOfArrival: `${e? e.value : ""}`})}
      />

      {formState.modeOfService === "lcs" ? 
        <></>
       : 
      formState.dimensions.map((e,i:number)=>{
        return(
          <>
          <div className="Input3Cont">
            <div className="Form3InputCont">
              <p className="selectTitle">Long*</p>
              <input
                type="number"
                className="Form3Input"
                placeholder="Type here"
                key={23}
                onChange={(e) => {
                  let newDimensions = formState.dimensions;
                  newDimensions[i] = {
                    ...newDimensions[i],
                    length: e.target.value,
                  };
                  setFormState({ ...formState, dimensions: newDimensions });
                }}
                value={e.length}
              />
            </div>
            <div className="Form3InputCont">
              <p className="selectTitle">High*</p>

              <input
                type="number"
                className="Form3Input"
                placeholder="Type here"
                key={24}
                onChange={(e) => {
                  let newDimensions = formState.dimensions;
                  newDimensions[i] = {
                    ...newDimensions[i],
                    height: e.target.value,
                  };
                  setFormState({ ...formState, dimensions: newDimensions });
                }}
                value={e.height}
              />
            </div>
            <div className="Form3InputCont">
              <p className="selectTitle">Wide*</p>

              <input
                type="number"
                className="Form3Input"
                placeholder="Type here"
                key={25}
                onChange={(e) => {
                  let newDimensions = formState.dimensions;
                  newDimensions[i] = {
                    ...newDimensions[i],
                    width: e.target.value,
                  };
                  setFormState({ ...formState, dimensions: newDimensions });
                }}
                value={e.width}
              />
            </div>
            <div className="Form3InputCont">
              <p className="selectTitle">Chargeable*</p>

              <input
                type="number"
                className="Form3Input"
                placeholder="Type here"
                key={255}
                onChange={(e) => {
                  let newDimensions = formState.dimensions;
                  newDimensions[i] = {
                    ...newDimensions[i],
                    chargeable: e.target.value,
                  };
                  setFormState({ ...formState, dimensions: newDimensions });
                }}
                value={e.chargeable}
              />
            </div>{
              i!==0&&  <IoIosCloseCircleOutline
              onClick={() => {
                let newDimensions = formState.dimensions;
                newDimensions.splice(i, 1)
                setFormState({
                  ...formState,
                  dimensions: newDimensions,
                });
              }}
              className="dimensionClose"/>
            }
           
          </div>

        </>
        )
      }
        

      )}
         {formState.modeOfService !== "lcs" && <button
            onClick={() => {
              let newDimensions = formState.dimensions;
              newDimensions.push({ length: 0, height: 0, width: 0, chargeable:0 })
              setFormState({
                ...formState,
                dimensions: newDimensions,
              });
            }}
            className="FormAddButton"
          >
            + add more pieces
          </button>}
      <p className="FormSubTitle">Cautionary details</p>

      <div className="HalfInputCont">
        <div className="checkCont">
          <div
            onClick={() =>
              setFormState({
                ...formState,
                cautionaryDetails: {
                  ...formState.cautionaryDetails,
                  notStackable: !formState.cautionaryDetails.notStackable,
                },
              })
            }
            className={
              formState.cautionaryDetails.notStackable
                ? "checkBox1Selected"
                : "checkBox1"
            }
            key={26}
          />
          <p className="checkBoxTitle1">Cargo is NOT stackable</p>
        </div>
        <div className="checkCont">
          <div
            onClick={() =>
              setFormState({
                ...formState,
                cautionaryDetails: {
                  ...formState.cautionaryDetails,
                  containsFragileMaterial:
                    !formState.cautionaryDetails.containsFragileMaterial,
                },
              })
            }
            className={
              formState.cautionaryDetails.containsFragileMaterial
                ? "checkBox1Selected"
                : "checkBox1"
            }
            key={27}
          />
          <p className="checkBoxTitle1">Contains fragile material</p>
        </div>
        <div className="checkCont">
          <div
            onClick={() =>
              setFormState({
                ...formState,
                cautionaryDetails: {
                  ...formState.cautionaryDetails,
                  containsMagnets: !formState.cautionaryDetails.containsMagnets,
                },
              })
            }
            className={
              formState.cautionaryDetails.containsMagnets
                ? "checkBox1Selected"
                : "checkBox1"
            }
            key={28}
          />
          <p className="checkBoxTitle1">Contains magnets</p>
        </div>
        <div className="checkCont">
          <div
            onClick={() =>
              setFormState({
                ...formState,
                cautionaryDetails: {
                  ...formState.cautionaryDetails,
                  containsDangerousGoods:
                    !formState.cautionaryDetails.containsDangerousGoods,
                },
              })
            }
            className={
              formState.cautionaryDetails.containsDangerousGoods
                ? "checkBox1Selected"
                : "checkBox1"
            }
            key={29}
          />
          <p className="checkBoxTitle1">Contains dangerous goods</p>
        </div>
      </div>

      <p className="FormSubTitle">Upload files or images here</p>
      <label htmlFor="imageUpload" className="FormInput">
        Choose files
      </label>

      <input
        id="imageUpload"
        className="FormInput"
        style={{ display: "none" }}
        placeholder="Choose files"
        key={30}
        onChange={handleFileUpload}
        type={"file"}
      />
      <p className="formAbout">
        Include photos, MSDS or any document or images support.{" "}
      </p>

      <p className="FormSubTitle">Nature of goods</p>
      <div className="HalfInputCont">
        <div className="Form3InputCont">
          <p className="selectTitle">HTS Code</p>
          <input
            className="FormHalftInput"
            placeholder="Type here"
            key={31}
            onChange={(e) =>
              setFormState({ ...formState, htsCode: e.target.value })
            }
            value={formState.htsCode}
          />
        </div>

        <div className="Form3InputCont">
          <p className="selectTitle">Declared value</p>
          <input
            type="number"
            className="FormHalftInput"
            placeholder="USD 0.000"
            key={32}
            onChange={(e) =>
              setFormState({ ...formState, declaredValue: e.target.value })
            }
            value={formState.declaredValue}
          />
        </div>
      </div>

      <p className="FormSubTitle">Description</p>
      <input
        className="FormInput"
        placeholder="Type here"
        key={33}
        onChange={(e) =>
          setFormState({ ...formState, description: e.target.value })
        }
        value={formState.description}
      />

      <p className="FormSubTitle">Suplementary information</p>
      <input
        className="FormInput"
        placeholder="Type here"
        key={34}
        onChange={(e) =>
          setFormState({
            ...formState,
            supplementaryInformation: e.target.value,
          })
        }
        value={formState.supplementaryInformation}
      />

      <div className="buttonContainer">
        <button
          className="nextPrevButton"
          onClick={() => {
            window.scrollTo(0, 0);
            setFormIndex(1);
          }}
        >
          Previous
        </button>
        <button
        disabled={!validate()}
        style={{ backgroundColor:!validate() ? "grey" : "#374A81" }} 
          className="nextPrevButton"
          onClick={() => {
            window.scrollTo(0, 0);
            setFormIndex(3);
          }}
        >
          Next page
        </button>
      </div>
    </div>
  );
}

export default Form2;
