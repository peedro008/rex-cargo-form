import React from 'react'
import banner from "../assets/banner.png"
import logo from "../assets/logo.png"
import './Forms.css'
import {FormFields} from "./FormController" 

interface Form1Props {
  setFormIndex: (index: number) => void;
  formState: FormFields; // Importa FormFields o asegúrate de que esté definido en este archivo
  setFormState: (state: FormFields) => void;
}
function Form1({ setFormIndex, formState, setFormState }: Form1Props) {
  const validarEmail= () => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(formState.email);
}
  return (
    <div className='Container'>
        <img src={logo} className='logo'/>
        <p className='headerTitle'>Destination Services</p>
        <div className='divider'/>
        <p className='headerText'>Thank you for contacting our pricing desk. We are very pleased to offer this ‘RFP form’ where you will be able to specify your requirements. Upon receipt, we will process a response As Soon As Possible.</p>
        <img src={banner} className='banner'/>
        <p className='FormTitle'>Please fill up your contact details:</p>
        <div className='divider'/>
        <p className='inputTitle'>Name</p>
        <input onChange={(e)=>setFormState({...formState, firstName:e.target.value})} value={formState.firstName} className='FormInput' placeholder='First' key={1}/>
        <input onChange={(e)=>setFormState({...formState, lastName:e.target.value})} value={formState.lastName} className='FormInput' placeholder='Last' key={2}/>
        <p className='inputTitle'>Email *</p>
        <input className='FormInput' onChange={(e)=>setFormState({...formState, email:e.target.value})} value={formState.email} key={3}/>
        <p className='inputTitle2'>Verify email</p>
        <input className='FormInput' onChange={(e)=>setFormState({...formState, verifyEmail:e.target.value})} value={formState.verifyEmail} key={4}/>
        <p className='inputTitle'>Company</p>
        <input className='FormInput' onChange={(e)=>setFormState({...formState, company:e.target.value})} value={formState.company} key={5}/>
        <p className='inputTitle'>Telephone</p>
        <input className='FormInput' onChange={(e)=>setFormState({...formState, telephone:e.target.value})} value={formState.telephone} key={6}/>
        <p className='inputTitle'>Address</p>
        <input className='FormInput' onChange={(e)=>setFormState({...formState, streetAddress:e.target.value})} value={formState.streetAddress} placeholder='Street Address' key={7}/>
        <input className='FormInput' placeholder='Street Address line 2' onChange={(e)=>setFormState({...formState, streetAddressLine2:e.target.value})} value={formState.streetAddressLine2} key={8}/>
        <div className='HalfInputCont'>
            <input className='FormHalftInput' placeholder='City' onChange={(e)=>setFormState({...formState, city:e.target.value})} value={formState.city} key={9}/>
            <input className='FormHalftInput' placeholder='Region' onChange={(e)=>setFormState({...formState, region:e.target.value})} value={formState.region} key={10}/>
            <input className='FormHalftInput' placeholder='Postal/Zip Code' onChange={(e)=>setFormState({...formState, postalZipCode:e.target.value})} value={formState.postalZipCode} key={11}/>
            <input className='FormHalftInput' placeholder='Costa Rica' onChange={(e)=>setFormState({...formState, country:e.target.value})} value={formState.country} key={12}/>
        </div>
        <p className='inputTitle2'>email proceso</p>
        <input className='FormInput' placeholder='amalpizar@me.com' onChange={(e)=>setFormState({...formState, emailProceso:e.target.value})} value={formState.emailProceso} key={13}/>
        <p className='inputTitle'>Mode of service</p>
        <div className='checkBoxCont'>
            <div onClick={()=>setFormState({...formState, modeOfService: 'air'})} className={formState.modeOfService === 'air' ? 'checkBoxSelected' :'checkBox'} key={14}/><p className='checkBoxTitle' >Air</p>
            <div onClick={()=>setFormState({...formState, modeOfService: 'lcs'})} className={formState.modeOfService === 'lcs' ? 'checkBoxSelected' :'checkBox'} key={15}/><p className='checkBoxTitle'>LCS</p>
            <div onClick={()=>setFormState({...formState, modeOfService: 'fcl'})} className={formState.modeOfService === 'fcl' ? 'checkBoxSelected' :'checkBox'} key={16}/><p className='checkBoxTitle'>FCL</p>
        </div>
        <button className='nextButton' style={{ backgroundColor: !validarEmail() ? "grey" : "#374A81" }} disabled={!validarEmail()} onClick={()=>{
          window.scrollTo(0,0)
          setFormIndex(2)}}>Next page</button>
    </div>
  )
}

export default Form1