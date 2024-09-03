const loadData=async(searchText)=>{
    const res= await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data=await res.json()
    const phone=data.data;
    //console.log(phone);
    displayPhone(phone);
}

function displayPhone(phone){
    const phoneContainer=document.getElementById('phone-container')
    phoneContainer.textContent='';
  const showAllContainer=document.getElementById('show-all-container');
  if(phone.length>10){
    showAllContainer.classList.remove('hidden');
  }
  else{
    showAllContainer.classList.add('hidden');
  }

    phone=phone.slice(0,12);
    
     phone.forEach(phone => {
        
      console.log(phone)
       // console.log(phones)
        const loadPhone=document.createElement('div')
        loadPhone.classList=`card bg-gray-400 p-4 shadow-xl`;
        loadPhone.innerHTML=`
        <figure>
        <img
          src="${phone.image}"
          alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">${phone.
            phone_name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
        `
        phoneContainer.appendChild(loadPhone);
    }); 
    toogleLoadingSpinner(false);
}
const handleClick=()=>{
  toogleLoadingSpinner(true);
  const searchValue=document.getElementById('search-field');
  const value=searchValue.value;
  console.log(value);
  loadData(value);
}
const toogleLoadingSpinner=(isLoding)=>{
  const loadingSpiner=document.getElementById('load-spinner');
if(isLoding){
  loadingSpiner.classList.remove('hidden');

}
else{
  loadingSpiner.classList.add('hidden');
}
}
const handleShowAll=()=>{
  console.log('show all button')
}