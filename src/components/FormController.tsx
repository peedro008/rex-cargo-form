import React, { useEffect, useState } from "react";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Preview from "./Preview";

export interface FormFields {
  firstName: string;
  lastName: string;
  email: string;
  verifyEmail: string;
  company: string;
  telephone: string;
  streetAddress: string;
  streetAddressLine2: string;
  city: string;
  region: string;
  postalZipCode: string;
  country: string; // Asumiendo que "Costa Rica" es un valor predeterminado y se desea capturar el país de alguna manera.
  emailProceso: string;
  modeOfService:'air' |'lcs' |
  'fcl',
  countryOfDestination: string; // Se asume que se seleccionará de alguna lista
  termsOfTrade: string; // Se asume que se seleccionará de alguna lista
  carrierName: string; // No está claro qué representa "Type here", se asume un identificador genérico
  cargoReadyDate: Date | string;
  airportOfDeparture: string; // Se asume que se seleccionará de alguna lista
  airportOfArrival: string; // Se asume que se seleccionará de alguna lista
  dimensions: [{
    length: string | number;
    height: string | number;
    width: string | number;
    chargeable: string|number;
  }];
  cautionaryDetails: {
    notStackable: boolean;
    containsFragileMaterial: boolean;
    containsMagnets: boolean;
    containsDangerousGoods: boolean;
  };
  uploadFiles: any[]; // Se asume que podría ser un array de archivos.
  htsCode: string;
  declaredValue:  string | number;
  description: string;
  supplementaryInformation: string;
  destinationServices: {
    documentTurnover: "partner" | "consignee" | null;
    airportHandling: "partner" | "consignee" | null;
    consolidationBreakdown: "partner" | "consignee" | null;
    airportTransfer: "partner" | "consignee" | null;
  };
  optionalServices: {
    customsClearance: "partner" | "consignee" | null;
    deliveryWithin25kmRadius: "partner" | "consignee" | null;
    dutiesAndTaxes: "partner" | "consignee" | null;
  };
  otherServicesRequiredDescription: string;
}
export function FormController() {

  const initialFormState: FormFields = {
    firstName: "",
    lastName: "",
    email: "",
    verifyEmail: "",
    company: "",
    telephone: "",
    streetAddress: "",
    streetAddressLine2: "",
    city: "",
    region: "",
    postalZipCode: "",
    country: "Costa Rica", // Valor predeterminado para el país, ajusta según necesidad
    emailProceso: "",
    modeOfService: 'air',
    countryOfDestination: "",
    termsOfTrade: "",
    carrierName: "",
    cargoReadyDate: "", // Ajusta según necesidad, quizás quieras un valor nulo o una fecha específica
    airportOfDeparture: "",
    airportOfArrival: "",
    dimensions: [{
      length: 0,
      height: 0,
      width: 0,
      chargeable: 0,
    }],
    cautionaryDetails: {
      notStackable: false,
      containsFragileMaterial: false,
      containsMagnets: false,
      containsDangerousGoods: false,
    },
    uploadFiles: [],
    htsCode: "",
    declaredValue: 0,
    description: "",
    supplementaryInformation: "",
    destinationServices: {
      documentTurnover: null,
      airportHandling: null,
      consolidationBreakdown: null,
      airportTransfer: null,
    },
    optionalServices: {
      customsClearance: null,
      deliveryWithin25kmRadius: null,
      dutiesAndTaxes: null,
    },
    otherServicesRequiredDescription: "",
  };
  const [loading, setLoading] = useState(false);
  const [formIndex, setFormIndex] = useState(1);
  const [formState, setFormState] = useState<FormFields>(initialFormState);


  useEffect(()=>{
   
    if(localStorage.getItem("values")){
      const aa: string = localStorage.getItem("values") || ""
      let temp :any=JSON.parse(aa)
     
      setFormState((temp))
    }
  },[])

 // Función para manejar el envío de datos
 const handleSubmit = async () => {
  setLoading(true)
  try {
    localStorage.setItem("values",JSON.stringify(formState) )

    const response = await fetch('http://localhost:3001/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
      
       Nombre:formState.firstName,
       Apellido:formState.lastName,
       Email:formState.email,
       CountryOfDestination:formState.countryOfDestination,
       TermsOfTrade:formState.termsOfTrade,
       PortOfArrival:formState.airportOfArrival,
       Pieces:formState.dimensions.length,
       Volume:formState.dimensions.reduce((acc, {length, height, width}) => acc + (Number(length) * Number(height) * Number(width)), 0),
       Chargeable:formState.dimensions.reduce((acc, {chargeable}) => acc + Number(chargeable), 0),
       PhoneNumber:formState.telephone,
       City:formState.city,
       Company:formState.company,
       ServicesType:formState.modeOfService,
       Files:JSON.stringify(formState.uploadFiles),
       Region:formState.region,
       Departures:formState.airportOfDeparture,
       Arrivals:formState.airportOfArrival,
       Quote:"",
       CarrierName:formState.carrierName,
       CautionaryDetails:JSON.stringify(formState.cautionaryDetails),
       StandardServices:JSON.stringify(formState.destinationServices),
       OptionalServices:JSON.stringify(formState.optionalServices),
       OtherServicesRequiredDescription:formState.otherServicesRequiredDescription,
       HtsCode:formState.htsCode,
       DeclaredValue:formState.declaredValue,
       GoodsDescription:formState.description,
       GoodsSupplementaryInformation:formState.supplementaryInformation,
       CargoReadyDate:formState.cargoReadyDate,
       PostalZipCode:formState.postalZipCode,
       StreetAddress:formState.streetAddress + " " + formState.streetAddressLine2,
      }),
    });

    if (!response.ok) {
      throw new Error('Something went wrong with the request');
    }

    // Manejo de la respuesta
    const data = await response.json();
    console.log(data);
    localStorage.clear()
    setFormIndex(1)
    // Aquí podrías hacer algo con la respuesta, como mostrar un mensaje de éxito
  } catch (error) {
    console.error('Failed to submit form:', error);
    alert("Error al conectar")
    // Aquí podrías manejar el error, posiblemente mostrar algún mensaje al usuario
  }
  setLoading(false)
};

  return formIndex === 1 ? (
    <Form1
      setFormState={setFormState}
      formState={formState}
      setFormIndex={setFormIndex}
    />
  ) : formIndex === 2 ? (
    <Form2
      setFormState={setFormState}
      formState={formState}
      setFormIndex={setFormIndex}
    />
  ) : formIndex === 3?(
    <Form3
      setFormState={setFormState}
      formState={formState}
      setFormIndex={setFormIndex}
      handleSubmit={handleSubmit}
    />): (
      <Preview
        loading={loading}
        formState={formState}
        handleSubmit={handleSubmit}
        setFormIndex={setFormIndex}
      />
  );
}

