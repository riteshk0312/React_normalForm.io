import React, { useState } from 'react'

const Myform = () => {

    const [firstName, setFirstName] = useState();
    const [fName, setfName] = useState();

    const [lastName, setLastName] = useState();
    const [lName, setlName] = useState();

    const [email, setEmail] = useState();
    const [mail, setmail] = useState();

    const [gender, setGender] = useState();
    const [lgender, setlgender] = useState();

    const [degree, setDegree] = useState();
    const [ldegree, setldegree] = useState();

    const [engineer, setEngineer] = useState();
    const [lengineer, setlengineer] = useState();

    const [hobbies, setHobbies] = useState();
    const [lhobbies, setlhobbies] = useState();

    const [address, setAddress] = useState();
    const [laddress, setladdress] = useState();

    const [file, setFile] = useState();
    const [lfile, setlfile] = useState();



    const handleForm = (e) => {

        e.preventDefault();
        setfName(firstName)
        setlName(lastName)
        setmail(email)
        setlgender(gender)
        setldegree(degree)
        setlengineer(engineer)
        setlhobbies(hobbies)
        setladdress(address)
        setlfile(file)
    }



    return (
        <>
        <div class='isdiv'>
            <div class='thediv'>
                <form onSubmit={handleForm}>
                    <h1>Personal Details</h1>
                    <label htmlFor='fname'>FirstName: </label>
                    <input type='text' id='fname' onChange={(e) => setFirstName(e.target.value)} placeholder='Enter First Name' />
                    <br></br> <br></br>


                    <label htmlFor='lname'>LastName: </label>
                    <input type='text' id='lname' onChange={(e) => setLastName(e.target.value)} placeholder='Enter Last Name' />
                    <br></br><br></br>

                    <label htmlFor='mail'>Email: </label>
                    <input type='email' id='mail' onChange={(e) => setEmail(e.target.value)} placeholder='Enter Last Name' />
                    <br></br><br></br>

                  

                    <label htmlFor='gender'>Gender: </label>
                    <input type="radio" value="Male" name="gender" onChange={(e) => setGender(e.target.value)} /> Male
                    <input type="radio" value="Female" name="gender" onChange={(e) => setGender(e.target.value)} /> Female

                    <h1>Educational Qualification</h1>

                    <label htmlfor="mdegree">Degree:  </label>
                    <select name="mdegree" id="cars" onChange={(e) => setDegree(e.target.value)}>
                        <option value="Bachelor of Arts">B.A.</option>
                        <option value="Bachelor of Commerce"> B.Com</option>
                        <option value="Bachelor of Engineering" >B.E.</option>

                    </select>
                    <br></br><br></br>

                    <label htmlfor="mengineer">Degree:  </label>
                    <select name="mengineer" id="boat" onChange={(e) => setEngineer(e.target.value)}>
                        <option value="Information Technology">I.T.</option>
                        <option value="Computer Science"> C.S.</option>
                        <option value="Electronics and Telecommunication" >Entc.</option>

                    </select>
                    <br></br><br></br>

                    <label htmlFor='hobbies'>Hobbies: </label>
                    <input type="radio" value="Playing Chess" name="hobbies" onChange={(e) => setHobbies(e.target.value)} />Playing Chess
                    <input type="radio" value="Reading Books" name="hobbies" onChange={(e) => setHobbies(e.target.value)} />Reading Books
                    <br></br><br></br>

                     <h1>Address</h1>   
                    
                    <textarea name="address" cols="30" rows="10" placeholder="Enter your Address" required onChange={(e) => setAddress(e.target.value)} ></textarea>
                    <br></br><br></br>

                    <label htmlFor='resume'>Attach resume: </label>
                    <input type='file' id='resume' onChange={(e) => setFile(e.target.value)}  />
                    <br></br> <br></br>

                    <button type='submit'>Submit</button>
                    <br></br><br></br>

                </form>
            </div>
            <div  class='mydiv'>
                <h1>Personal Details</h1>
                <h1>{fName}</h1>
                <h1>{lName}</h1>
                <h1>{mail}</h1>
                <h1>{lgender}</h1>
                <h1>Educational Qualification</h1>
                <h1>{ldegree}</h1>
                <h1>{lengineer}</h1>
                <h1>{lhobbies}</h1>
                <h1>Address</h1>
                <h1>{laddress}</h1>
                {/* <h1>{lfile}</h1> */}
            </div>

            </div>
        </>
    )
}

export default Myform