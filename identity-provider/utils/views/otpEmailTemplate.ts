/*
 * Devspace IIT(ISM) Dhanbad
 *
 * This software and related documentation are owned by Devspace IIT(ISM) Dhanbad.
 * Unauthorized copying, reproduction, or modification via any medium is strictly prohibited.
 * Proprietary and confidential. All rights reserved.
 */

export default (otp: string): string => {
  return `
<style>
  .topLogo {
      color: #6699ff;
      font-size:60%;
      font-family: "Lucida Console";
  }
  .header {
      background-color:white;
      margin: auto;
      width:395px;
      height:450px;
      border-radius:7px;
  }
  .headerTitle {
      background-color:#6699ff;
      color:white;
      margin:auto;
      border-radius:7px;
      border: 5px solid white;
      padding:20px;
      width:345px;
      height:60px;
      font-family:"Lucida Console";
  }
  .accessCode {
      background-color:white;
      color: grey;
      padding: 20px;
      margin: auto;
      width: 350px;
      height: 150px;
  }
  .subject {
      font-size:70%;
      background-color: white;
      color: black;
      padding:20px;
      margin:auto;
      width:350px;
      font-family:"Lucida Console";
  }
  .funFact {
      background-color:white;
      color:black;
      padding:5px;
      border-radius:7px;
      border:2px solid #6699ff;
      margin:auto;
      width:380px;
      font-family:"Lucida Console";
      font-size:80%;
  }
  .formatFact {
      border-radius:7px;
      border:6px solid #f2f2f2;
  }
  .footer {
      font-family:"Lucida Console";
      font-size:70%;
  }
  
</style>

<div class="main">

<!-- The top Logo division -->
<div class="topLogo">
  <h1 align="center">Byte Learning</h1>
</div>  <!--  /topLogo  -->

<div class="header">
  <div class="headerTitle">
      <h2 align="center">Welcome to Byte!</h2>

      
  </div> <!-- /headerTitle -->
  <div class="accessCode">
      <p align="center">
          <br /> BOTS Unique Access Code is
      </p>
      <h1 align="center">${otp}</h1>
      
  </div> <!-- /accessCode -->
  
  
      <div class="subject">
          <h3>Hey,</h3>
          <p>
             Wowwee!! Thanks for registering and enrolling in the online test series by ©Byte Private Ltd. You are the coolest person in all the land(and we have met a lot of cool people).</p>
            <p>Before you get started, learn your unique access code.
          </p>
          
      </div> <!-- subject -->
  
</div> <!-- /header -->
<div class="formatFact">
<div class="funFact">
  <h3 align="center" style="color:green">
      #Fun Fact
  </h3>
  <p align="center">
      The harder something is to remember,<br /> the harder it is to forget.
  </p>
</div> <!--  /funFact -->
</div>  <!-- format Fact --> 
<div class="footer">
 <p align="center" style="color:grey">
     Sent by Byte • <a href="https://m.youtube.com/channel/UCpGBKM23z09HFHclrCzuIjw" style="text-decoration:none"> Subscribe </a>
     <br />
     Saharanpur, 247001, Uttar Pradesh, India
 </p>
 
</div> <!--  /footer -->


</div>  <!--  /main  --> 
`;
};
