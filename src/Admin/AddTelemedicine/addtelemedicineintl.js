import React, { Component } from "react";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";
export default class AddTelemedicineNatl extends Component {
  constructor() {
    super();
    this.state = {
      addDept: [],
      docId: "",
      docName: "",
      speciality: "",
      fee:'',
      responceTime:'',
      rating:'',
      hospital:'',
      hospitalAddress:'',
      pmcStatus:'',
      degrees:'',
      experience:'',
      selectedTime:'',
      daysList:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      selectedDay:'Monday',
      reviews:'',
      about:'',
      standardArr:["National","International"],
     selectedLevel:'',
      tags:'',
      hospitalArr:[{
        hospital:'',
        hospitalAddress:'',
      }],
      status:['Active','InActive'],
      selectedStatus:'Active',
      addClick: false,
      added: false,
      editClick:false
    };
  }
  onChange = async (e) => {
    let id = e.target.id;
    let value = e.target.value;
    await this.setState({
      [id]: value,
    });
  };
  onHospitalChange = async (index,e) => {
    let id = e.target.id;
    let value = e.target.value;
  if(index){
    await this.setState({
      [id]: value,
    });
  }
    
  };
onPlusClick(){
  let hosArr=this.state.hospitalArr
  hosArr.push({
    hospital:'',
    hospitalAddress:''
  })
  this.setState({
    hospitalArr:hosArr
  })
  console.log(this.state.hospitalArr)
}
  onClick = async (index) => {
  

    let arr = this.state.addDept;
   
    if (this.state.added === true) {
      arr.push({
        docId: this.state.docId,
        docName: this.state.docName,
        speciality: this.state.speciality,
        fee:this.state.fee,
        responceTime:this.state.responceTime,
        rating:this.state.rating,
        hospital:this.state.hospital,
        hospitalAddress:this.state.hospitalAddress,
        pmcStatus:this.state.pmcStatus,
        degrees:this.state.degrees,
        experience:this.state.experience,
        selectedTime:this.state.selectedTime,
        selectedDay:this.state.selectedDay,
        reviews:this.state.reviews,
        about:this.state.about,
        selectedLevel:this.state.selectedLevel,
        tags:this.state.tags,
        selectedStatus:this.state.selectedStatus
      });
    console.log(this.state.addDept)

    }
else{
  this.setState({
    editClick:false
  })
for(let obj of arr){
  if(obj.docId===index){
    obj.docId= this.state.docId;
    obj.docName= this.state.docName;
    obj.speciality= this.state.speciality;
    obj.fee=this.state.fee;
    obj.responceTime=this.state.responceTime;
    obj.rating=this.state.rating;
    obj.hospital=this.state.hospital
    obj.hospitalAddress=this.state.hospitalAddress
    obj.pmcStatus=this.state.pmcStatus
    obj.degrees=this.state.degrees
    obj.experience=this.state.experience
    obj.selectedTime=this.state.selectedTime
    obj.selectedDay=this.state.selectedDay
    obj.reviews=this.state.reviews
    obj.about=this.state.about
    obj.selectedLevel=this.state.selectedLevel
    obj.tags=this.state.tags
    obj.selectedStatus=this.state.selectedStatus
  }
}
console.log(arr)
}
    this.setState({
      addClick: false,
      addDept: arr,
      docId: '',
      docName: '',
      speciality: '',
      fee:'',
      responceTime:'',
      rating:'',
      hospital:'',
      hospitalAddress:'',
      pmcStatus:'',
      degrees:'',
      experience:'',
      selectedTime:'',
      selectedDay:'',
      reviews:'',
      about:'',
      selectedLevel:'',
      tags:'',
      selectedStatus:'',
    });
  };
  onAddClick = async () => {
    await this.setState({
      addClick: true,
      added: true,
    });
  };
  editClick =  (item, index) => {
    this.setState({
      addClick: true,
      editClick:true,
      added: false,
      docId: item.docId,
      docName: item.docName,
      speciality: item.speciality,
      fee: item.fee,
      responceTime: item.responceTime,
      rating: item.rating,
      hospital: item.hospital,
      hospitalAddress: item.hospitalAddress,
      pmcStatus: item.pmcStatus,
      degrees: item.degrees,
      experience: item.experience,
      selectedTime: item.selectedTime,
      selectedDay: item.selectedDay,
      reviews: item.reviews,
      about: item.about,
      selectedLevel: item.selectedLevel,
      tags: item.tags,
      selectedStatus: item.selectedStatus
    });
 
    console.log(item.selectedLevel)
  };
  deleteClick(item, index) {
    let array = this.state.addDept;

    array.splice(index, 1);
    this.setState({
      addDept: array,
    });
  }
  render() {
    return (
      <div className="p-5">
         <div className="row text-center ">
                  <h2 className="text-success mb-4">Doctors</h2>
                  
                </div>
        {this.state.addClick === true && (
          <div className="bg-secondary card shadow-lg mb-5">
            <h3 className="text-center ">Add New Doctor</h3>
            <div className="row mt-2 px-5">
              <div className="col-6">
                <label>Doctor ID</label>
                {this.state.editClick===false?(
                   <input
                   id="docId"
                   type="number"
                   className="form-control"
                   value={this.state.docId}
                   onChange={this.onChange.bind(this)}
                 />
                ):(
                  <input
                  disabled
                  id="docId"
                  type="number"
                  className="form-control"
                  value={this.state.docId}
                  onChange={this.onChange.bind(this)}
                />
                )}
               
              </div>

              <div className="col-6">
                <label>Doctor Name</label>
                <input
                  id="docName"
                  className="form-control"
                  value={this.state.docName}
                  onChange={this.onChange.bind(this)}
                />
              </div>
            </div>
            <div className="row px-5">
              <div className="col-6">
                <label>speciality Name</label>
                <input
                  id="speciality"
                  className="form-control"
                  value={this.state.speciality}
                  onChange={this.onChange.bind(this)}
                />
              </div>

              <div className="col-6">
                <label>Fee</label>
                <input
                type='number'
                  id="fee"
                  className="form-control"
                  value={this.state.fee}
                  onChange={this.onChange.bind(this)}
                />
              </div>
            </div>
            <div className="row px-5">
              <div className="col-6">
                <label>Response Time</label>
                <input
                type='text'
                  id="responceTime"
                  className="form-control"
                  value={this.state.responceTime}
                  onChange={this.onChange.bind(this)}
                />
              </div>

              <div className="col-6">
                <label>Level</label>
                <input
                  id="rating"
                  className="form-control"
                  value={this.state.rating}
                  onChange={this.onChange.bind(this)}
                />
              </div>
            </div>
           
            <div className="row px-5">
              <div className="col-6">
                <label>PMC Status</label>
                <input
                type='text'
                  id="pmcStatus"
                  className="form-control"
                  value={this.state.pmcStatus}
                  onChange={this.onChange.bind(this)}
                />
              </div>

              <div className="col-6">
                <label>Degrees</label>
                <input
                  id="degrees"
                  className="form-control"
                  value={this.state.degrees}
                  onChange={this.onChange.bind(this)}
                />
              </div>
            </div>
            <div className="row px-5">
              <div className="col-6">
                <label>Experience</label>
                <input
                type='number'
                  id="experience"
                  className="form-control"
                  value={this.state.experience}
                  onChange={this.onChange.bind(this)}
                />
              </div>

              <div className="col-6">
                <label>Time Slot</label>
                <input 
                  className="form-control"
                  placeholder="9:00-15:00"
                  onChange={this.onChange.bind(this)}
                  value={this.state.selectedTime}
                 id='selectedTime'
                />
               
              
               
              </div>
            </div>
            <div className="row px-5">
              <div className="col-6">
                <label>Days List</label>
                <select
                  className="form-select"
                  onChange={this.onChange.bind(this)}
                  value={this.state.selectedDay}
                  id='selectedDay'
                  >
                {this.state.daysList.map(option=>(
                 
                  <option key={option} value={option}>{option}</option>
               
                ))}
                </select>
              </div>

              <div className="col-6">
                <label>Reviews</label>
                <input
                  id="reviews"
                  className="form-control"
                  value={this.state.reviews}
                  onChange={this.onChange.bind(this)}
                />
              </div>
            </div>
            <div className="row px-5">
              <div className="col-6">
                <label>About</label>
                <textarea
                type='text'
                  id="about"
                  className="form-control"
                  value={this.state.about}
                  onChange={this.onChange.bind(this)}
                />
              </div>

              <div className="col-6">
                <label>Standard</label>
                <select
                  className="form-select"
                  onChange={this.onChange.bind(this)}
                  value={this.state.selectedLevel}
                  id='selectedLevel'
                  >
                {this.state.standardArr.map(option=>(
                 
                  <option key={option} value={option}>{option}</option>
               
                ))}
                </select>
              </div>
            </div>
            <div className="row px-5">   
              <div className="col-6">
                <label>Tags</label>
                <input
                type='text'
                  id="tags"
                  className="form-control"
                  value={this.state.tags}
                  onChange={this.onChange.bind(this)}
                />
              </div>

              <div className="col-6">
                <label>Status</label>
                <select
                className="form-select"
                id="selectedStatus"
                value={this.state.selectedStatus}
                onChange={this.onChange.bind(this)}
                >
                  {this.state.status.map(item=>(
                    <option key={item} value={item}>{item}</option>
                  ))}
                  
                </select>
              </div>
            </div>
   <div className="text-end mx-5 mb-0 mt-4"><button className=" btn btn-success btn-sm " onClick={this.onPlusClick.bind(this)}>Add</button></div>

{this.state.hospitalArr.map((item,index)=>(
   <div className="row "> 
   {/* <div className="col-1"></div>         */}
   <div className="col-6  " style={{paddingLeft:'60px'}}>
     <label>Hospital</label>
     <input
     type='text'
       id="hospital"
       className="form-control"
       value={this.state.hospital}
       onChange={this.onHospitalChange.bind(this,index)}
     />
   </div>

   {/* <div className="col-5">
     <label>Hospital Address</label>
     <textarea
       id="hospitalAddress"
       className="form-control"
       value={this.state.hospitalAddress}
       onChange={this.onHospitalChange.bind(this)}
     />
   </div> */}

 </div>
))}
         

            <div className="row text-center m-5">
              <div className="col-4 " style={{ marginLeft: "390px" }}>
                <button
                  className="btn btn-sm text-center w-50 btn-dark "
                  onClick={this.onClick.bind(this, this.state.docId)}
                >
                  Save
                </button>
              </div>
            </div>         
          </div>
        )}

        <div className="row">
          <div className="col-3">
            <button
              className="btn btn-sm btn-success mb-3"
              onClick={this.onAddClick.bind(this)}
            >
              Add New Doctor
            </button>
          </div>
        </div>
        <Table dark>
          <thead>
            <tr>
              <th>Doc Id</th>
              <th>Doc Name</th>
              <th>Speciality</th>
              <th>Price Range</th>
              <th>Response Time</th>
              <th>Rating</th>
              <th>Experience</th>
              <th>Standard</th>
              <th>Status</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.addDept.map((item, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{item.docName}</td>
                <td>{item.speciality}</td>
                <td>{item.fee}</td>
                <td>{item.responceTime}</td>
                <td>{item.rating}</td>
                <td>{item.experience}</td>
                <td>{item.selectedLevel}</td>
                <td>{item.selectedStatus}</td>
                <td>
                  <Link to='' className="mx-2">
                  <i
                    className=" text-decoration-none text-white fas fa-solid fa-edit "
                    onClick={this.editClick.bind(this, item, index)}
                  ></i></Link>
                  <Link to=''>
                  <i
                    class="fas fa-solid fa-trash  text-decoration-none text-white"
                    onClick={this.deleteClick.bind(this, item, index)}
                  ></i></Link>
                 
                </td>
                <td></td>

              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
