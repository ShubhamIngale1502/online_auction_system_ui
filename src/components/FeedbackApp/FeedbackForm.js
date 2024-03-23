
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function FeedbackForm (){

    const {register,handleSubmit,reset} = useForm()
    const nav = useNavigate()

    function submitFeedback(data){
        axios.post('http://127.0.0.1:8000/fb/feedback/',data).then(
            (result)=>{
                console.log(result);
                alert("Feedback Added")
                reset()
                nav('/form')
            }
        )
    }
    return(
        <div className='container w-80' style={{backgroundColor:"rgba(145, 53, 19, 0.978)"}}>
          <h2 className='text-center'><u>Feedback Form</u></h2>
            <form onSubmit={handleSubmit(submitFeedback)} className="g-3 p-3 mx-auto text-dark fs-4">
  <div className="row">
    <div className='col-md-3'>
      <label for="email" className="form-label fs-3">Email:</label>
    </div>
    <div className='col-md-9'>
      <input type="email" className="form-control" id="email"{...register('email')}/>
    </div>
  </div>
  <br/>
  
  <div className="row">
  <div className='col-md-3'>
    <label for="response" className="form-label w-50 fs-3">Response:</label>
  </div>
  <div className='col-md-9'>
    <textarea className="form-control" id="response"{...register('response')}/>
  </div>
  </div>
  <br/>
  
  <div className="col-12 text-center">
    <button type="submit" className="btn btn-dark btn-outline-secondary col-5">Add Response</button>
  </div>
</form>
        </div>
    )
    
}
export default FeedbackForm

