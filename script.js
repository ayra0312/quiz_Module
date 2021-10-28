var questions=[
    {
      question:"what is Ayra's nick name",
      options:["sweety","nanu","gunnu","manu"],
      right_ans:"gunnu",
    },
    {
      question:"who is Ayra's best friend",
      options:["riya","nandini","akshita","Lakshay"],
      right_ans:"nandini",
    },
    {
      question:"Ayra's favourite sport?",
      options:["basketball","cricket","foootball","hockey"],
      right_ans:"basketball",
    },
    {
      question:"what would Ayra like to do in her free time",
      options:["read","coding","movie","music"],
      right_ans:"music",
    },
    {
      question:"Ayra's favourite destination",
      options:["goa","leh","rajasthan","chennai"],
      right_ans:"rajasthan",
    },
  
  ];
  var score=0;
  
  var question_container = document.getElementById("question_container");
  var title = document.getElementById("title");
  var options = document.getElementById("options");
  var result = document.getElementById("result");
  var submit = document.getElementById("submit");
  var next = document.getElementById("next");
  var ansSheet = document.getElementById("ansSheet");
  
  
  
  function createQuestion(){
  var question = questions[0];
  title.innerText = question.question;
  question.options.forEach(function(option, index)
  {
    var radio=document.createElement("input");
    radio.setAttribute("type","radio");
    radio.setAttribute("name","option");
     radio.setAttribute("value",option);
  
    var label=document.createElement("label");
    label.innerText=option;
  
    var list_item=document.createElement("li");
    list_item.appendChild(radio);
    list_item.appendChild(label);
  
    options.appendChild(list_item);
  })}
  
  createQuestion();
  submit.addEventListener("click", function(event){
    var options=document.getElementsByName("option");
  
    var checked_ans="";
  
    options.forEach(function(option, index)
    {
      if(option.checked)
      {
        checked_ans=index;
      }
    })
  
    var selected_option=options[checked_ans].value;
    var is_right=questions[0].right_ans===selected_option;
    
    if(is_right)
    {
      submit.style.display="none";
      result.innerText="Correct";
      result.classList.add("Correct");
      next.style.display="block";
      score++;
    }
    else{
       submit.style.display="none";
      result.innerText="InCorrect";
      result.classList.add("InCorrect");
      next.style.display="block";
  
    }
  })
  next.addEventListener("click",function()
  {
    result.setAttribute("class","");
    result.innerText="";
    options.innerHTML="";
    next.style.display="none";
    submit.style.display="block";
    questions.shift();
    if(questions.length)
    {
  
    createQuestion();
    }else
    {
    showAns();
    ansSheet.style.display="block";
    question_container.style.display="none";
    }
  })
  
  function showAns()
  {
    var label=document.createElement("label");
    label.innerText="your current score is "+score;
  
    ansSheet.appendChild(label);
    var list=document.createElement("ol");
  
    questions.forEach(function(question){
      var list_item=document.createElement("li");
      list_item.innerText=question.right_ans;
      list.appendChild("list_item");
    })
    ansSheet.appendChild(list);
  }