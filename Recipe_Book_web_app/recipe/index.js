const slides = document.querySelectorAll(".slide")
const length = 2;

let count = 0;

slides.forEach(
  (slide, index) => {
    slide.style.left = `${index * 100}%`
  }
)
const gonext = () => {
  if (count < length) {
    count++;
    slideimage()
  }

}
const goprev = () => {
  if (count != 0) {
    count--;
    slideimage()
  }

}

const slideimage = () => {
  slides.forEach(
    (slide) => {
      slide.style.transform = `translateX(-${count * 100}%)`

    }
  )
}

//popup
function showPopup() {
  document.getElementById('popup').style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
  // document.getElementById('popup').classList.add('active');
}

function hidePopup() {
  document.getElementById('popup').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
  // document.getElementById('popup').classList.remove('active');

}

function chocolate() {
  document.getElementById('cpopup').style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
  // document.getElementById('popup').classList.add('active');
}

function hchocolate() {
  document.getElementById('cpopup').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
  // document.getElementById('popup').classList.remove('active');

}

function schocolate() {
  document.getElementById('spopup').style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
  // document.getElementById('popup').classList.add('active');
}

function shchocolate() {
  document.getElementById('spopup').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
  // document.getElementById('popup').classList.remove('active');

}

let feedbackbtn=document.getElementById("feedbac");
let feedback=document.getElementById("feedback");
let feedbacktext=document.getElementById("feedis");

feedbackbtn.onclick= function ()
{
  if(feedback.style.display!=="none")
  {
  feedback.style.display="none"
  feedbacktext.style.display="block"
  feedbackbtn.textContent="resubmit";
  }
  else{
    feedback.style.display="block"
  feedbacktext.style.display="none"
  feedbackbtn.textContent="resubmit";

  }
  var params={
    from_name :  "ankush",
    // email_id : document.getElementById("email_id").value,
    message : document.getElementById("message").value

  }
  emailjs.send("service_cjt97xg","template_ux280jm",params).then(function(res){
    alert(" thank you for your feedback your id is succesfully sibmited it willl added to this website soon ");
  }) 
  

}

let feedback1= document.getElementById("feedback1");

feedbac1.onclick= function ()
{
  if(feedback1.style.display!=="none")
  {
  // feedback.style.display="none"
  document.getElementById("feedis1").style.display = "block";
  document.getElementById("feedback1").style.display = "none";
  feedbac1.textContent="resubmit";
  }
  else{
    document.getElementById("feedis1").style.display = "none";
    document.getElementById("feedback1").style.display = "block";
    feedbac1.textContent="submit";

  }

}


    // let title= document.getElementById("title")

    // function feesum()
    // {
     
    // }    
  




