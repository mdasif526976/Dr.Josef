import { toast } from 'react-hot-toast';

const ReviewModal = ({setModalData,modalData,refetch}) => {
    const {_id,service,details} = modalData;
    const censel=()=>{
        setModalData(null)
    }

    const updateReview=(event)=>{
     event.preventDefault();
     const details = event.target.detail.value;
     console.log(details)
     const id = _id;
        fetch(`https://assignment-11-server-site-chi.vercel.app/update/${id}`,{
            method:'PUT',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify({details:details})
        })
        .then(res=> res.json())
        .then(data=>{
            if(data.modifiedCount > 0){
                toast.success('Edit Review SuccessFully')
                refetch()
                censel('')
             }
        })
   
    }            
    return (
        <div>

<input type="checkbox" id="edit-text" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">{service}</h3>
    <form onSubmit={updateReview}>
    <p className="py-4">Enter Here & Change your review!!</p>
    <input type="text" name='detail' placeholder="Type here" required defaultValue={details} 
    className="input input-bordered input-lg w-full max-w-xs" />
    <div className="modal-action justify-around">
     <button className='btn-primary btn' type='submit' >Confirm</button>
     <button className='btn' onClick={censel}>Cancel</button>
    </div>
    </form>
  </div>
</div>
        </div>
    );
};

export default ReviewModal;