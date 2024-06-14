

import { createSignal } from 'solid-js';

const AddProduct = () => {
  const [pname,setPname]=createSignal("");
  const [isOpen,setIsOpen]=createSignal(true);
  const [name,setproductname]=createSignal("");
  const [prices,setroductprices]=createSignal(0.0);
  const [quantity,setroductquantity]=createSignal(0);

  const  handleAddProduct=()=>{
    console.log("Sending....")
    fetch("http://localhost:5000/add/product",{
    method: 'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name:name(),
      price:price(),
      quantity:quantity()
    })
  }).then(response=>response.json()).then((res)=>{
    
    console.log(res)
  }).catch((e)=>{
    console.log(e)
  })
  }
  return(
    <>
     {isOpen() && <div class="w-full h-screen bg-[rgba(0,0,0,0.7)] fixed flex justify-center items-center ">
      <div class="w-[500px] h-atuo bg-white  rounded-lg pb-4 overflow-hidden">
      <div class="flex items-center w-full h-10 bg-gray-300 font-semibold justify-between px-4">
         <h1>Add Product</h1>
         <button class='bg-red-500 text-white px-2.5 py-1 border rounded-full ' onclick={()=>{setIsOpen(false)}}>X</button>
       </div>
       <div class="px-4 my-4">
         <input type="text" class=" border-2 rounded-md w-full px-2 py-2" placeholder="enter product name" />
       </div>
       <div class="px-4 my-4">
         <input type="text" class=" border-2 rounded-md w-full px-2 py-2" placeholder="enter product prices" />
       </div>
       <div class="px-4 my-4">
         <input type="text" class=" border-2 rounded-md w-full px-2 py-2" placeholder="enter product quantity" />
       </div>
       <div  class="flex justify-center pt-2">
        <button class=" border-2 rounded-md  hover:bg-sky-400  px-4 py-1" onClick={handleAddProduct}> Add product </button>
       </div>
      </div>
     </div>}
     <div class="w-full h-screen">
      <div class="w-full h-32 bg-red-200 flex justify-end">
        <button onClick={()=>{setIsOpen(true)}}>Add product</button>
      </div>
      <div class="w-full bg-orange-200 h-32">
      <div class="container mx-auto p-4">
      <table class="min-w-full bg-white">
        <thead>
          <tr class="">
            <th class="py-2 px-4">Actions</th>
            <th class="py-2 px-4">Quantity</th>
            <th class="py-2 px-4">Price</th>
            <th class="py-2 px-4">Updated Date</th>
            <th class="py-2 px-4">Added Date</th>
            <th class="py-2 px-4">Name</th>
            <th class="py-2 px-4">Image</th>
          </tr>
        </thead>
        <tbody>
            <tr  class="border-b text-center">  
              <td class="py-2 px-4 flex space-x-2 justify-center">
                <button
                  class="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">
                  Add Stock
                </button>
                <button
                  class="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
                  Delete
                </button>
              </td>
              <td class="py-2 px-4">quantity</td>
              <td class="py-2 px-4">price</td>
              <td class="py-2 px-4">updatedDate</td>
              <td class="py-2 px-4">addedDate</td>
              <td class="py-2 px-4">name</td>
              <td class="py-2 px-4">
                <img src="" alt="test" class="w-16 h-16 object-cover"/>
              </td>
            </tr>
        </tbody>
      </table>
    </div>
      </div>

      
     </div> 
     </> 	
	);
};
export default AddProduct;



		  
              
               
               
                 
                 
                 
                 
               