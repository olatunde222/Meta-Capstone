import React, {useEffect, useState} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './Reservation.css'


function ErrorMessage({children}){
  return(
      <div className="error">
          {children}
      </div>
  );
}

function Reservation({availableTimes, dispatch, submitForm}){
  const dateToday = getToday();
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const {handleSubmit, handleBlur, handleChange, errors, values, touched, isValid} = useFormik({
      initialValues: {
          fname: '',
          lname: '',
          email: '',
          phonenum: '',
          occasion: '',
          peoplenum: '',
          seating: '',
      },
      onSubmit: (values) => {
          const newValues = {
              ...values,
              date: date,
              time: time
          }
          submitForm(newValues);
      },
      validationSchema: Yup.object({
          name: Yup.string().required('Required'),
          email: Yup.string().email('Enter a valid email address').required('Required'),
          phone: Yup.string().matches(phoneRegExp, 'Enter a valid phone number').required('Required')
        }),
  });

  const [date, updateDate] = useState(dateToday);
  const [time, updateTime] = useState(availableTimes[0]);

  function getToday(){
      const date = new Date();
      let month = date.getMonth() + 1;
      if(month < 10) month = '0' + month;
      let day = date.getMonth() + 1;
      if(day < 10) day = '0' + day;
      const stringDate = `${date.getFullYear()}-${month}-${day}`;
      return stringDate;
  }

  function onDateChange(e){
      updateDate(e.target.value);
      dispatch({
          type:'update',
          date: e.target.value
      });
  }

  function onTimeChange(e){
      updateTime(e.target.value);
      dispatch({
        type:'update',
        time:e.target.value
      });
  }

  useEffect(() => {
      //update time when available times changes
      updateTime(availableTimes[0])
  }, [availableTimes])

  return (
    <div className='reservation-container'>
      <form className='reservation-form' method='post' onSubmit={handleSubmit}>
        <h1>Book a Table</h1>
        <div>
          <label htmlFor="fname">First Name</label><br/>
          <input type="text" name='fname' id='fname' onChange={handleChange("fname")} onBlur={handleBlur("fname")} value={values.fname} placeholder='First Name' minLength={3} maxlength="25" required/>
          {touched.fname && <ErrorMessage>{errors.fname}</ErrorMessage>}
        </div>
        <div>
          <label htmlFor="lname">Last Name</label><br/>
          <input type="text" name="lname" id="lname" onChange={handleChange("lname")} onBlur={handleBlur("lname")} value={values.lname} placeholder='Last Name' minLength={3} maxlength="25" required/>
          {touched.lname && <ErrorMessage>{errors.lname}</ErrorMessage>}
        </div>
        <div>
          <label htmlFor="email">Email</label><br/>
          <input type="email" name='email' onChange={handleChange("email")} onBlur={handleBlur("email")} value={values.email} placeholder='Email' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" size="30" required/>
          {touched.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </div>
        <div>
          <label htmlFor="phonenum">Phone Number</label><br/>
          <input type="tel" name="phonenum" onChange={handleChange("phonenum")} onBlur={handleBlur("phonenum")} value={values.phonenum} placeholder='Phone Number' pattern="[0-9]{3} [0-9]{3} [0-9]{4}" required/>
          {touched.phonenum && <ErrorMessage>{errors.phonenum}</ErrorMessage>}
        </div>
        <div>
          <label htmlFor="peoplenum">Number of People</label><br/>
          <input type='number'  name='peoplenum' onChange={handleChange("peoplenum")} value={values.peoplenum} placeholder='Number of people' min="1" max="100" required/>
          {touched.peoplenum && <ErrorMessage>{errors.peoplenum}</ErrorMessage>}
        </div>
      
        <div>
          <label htmlFor="date">Select Date</label><br/>
          <input type="date" name="date" id="date" onChange={onDateChange} value={date}/>
        </div>
        <div>
          <label htmlFor="time">Select Time</label><br/>
          <input type="time" name="time" onChange={onTimeChange} value={time} placeholder='Select Time' id="time" min="2018-01-01" max="2018-12-31" required/>
        </div>
        <div>
          <label htmlFor="celebration">Occasion</label><br/>
          <select id="occasion" name="occasion" value={values.occasion} onChange={handleChange("occasion")}>
            <option value="" name="seating">Occasions</option>
            <option value="Birth day" name="celebration"> Birth day</option>
            <option value="Graduation" name="celebration"> Graduation</option>
            <option value="Anniversary" name="celebration"> Anniversary</option>
            <option value="Wedding+" name="celebration"> Wedding</option>
          </select>
        </div>
        <div>
          <label htmlFor="seating">Seating Preference</label><br/>
          <select id='sitting' value={values.seating} onChange={handleChange("seating")}>
           <option value="Choose Your Preference" name="seating">Choose Your Preference</option>
            <option value="Inside" name="seating">Inside</option>
            <option value="Outside" name="seating">Outside</option>
          </select>
        </div>
        <div>
          <label htmlFor="comment">Additional Comment</label><br/>
          <textarea name="comment" id="comment" cols="57" rows="5"></textarea>
        </div>
        <button type="submit" disabled={!isValid}>Reserve a Table</button>
        
      </form>
    </div>
  )
}

export default Reservation;