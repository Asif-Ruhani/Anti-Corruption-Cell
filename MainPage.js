
// Create public complain dynamically (for example)
const PublicComplain = () => {
    console.log('Sign in button is clicked');
    const PublicComplainDiv = document.getElementById('PublicComplain');
    for (let i = 0; i < 20; i++) {
        const EachComplainDiv = document.createElement('div');
        EachComplainDiv.className = 'EachComplain'; // Corrected this line
        EachComplainDiv.innerHTML = `
            <h1>Public complain ${i}</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse delectus maxime vel reprehenderit amet Voluptas minima alias vitae explicabo cumque, ab a adipisci sint eligendi, non sed iste itaque libero et doloremque maiores deleniti est tempora soluta illo cupiditate velit magnam aliquid. Animi fuga nostrum</p>
        `;
        PublicComplainDiv.appendChild(EachComplainDiv);
    }
}



const MyComplain = () =>{
  const MyComplain=document.getElementById('MyComplain');
  const MyComplains=document.getElementById('MyComplains');

  for( let i=0; i<8;i++){
    const Complain=document.createElement('div');
    Complain.className='MyEachComplain';
    Complain.innerHTML=`
            <h1>My complain ${i}</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse delectus maxime vel reprehenderit amet Voluptas minima alias vitae explicabo cumque, ab a adipisci sint eligendi, non sed iste itaque libero.</p>
    `;
       MyComplains.appendChild(Complain);
       MyComplain.appendChild(MyComplains);
  }
}