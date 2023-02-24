var Activity=document.querySelector("#Activity");
var Party_Name=document.querySelector("#Party_Name");
var Address=document.querySelector("#Address");
var City=document.querySelector("#City");
var State=document.querySelector("#State");
var Zip_Code=document.querySelector("#Zip_Code");

var pdfPreview=document.getElementById("pdf");
// var generatePDFButton=document.getElementById("Submit");

// function wholePdf(){
var doc = new jsPDF();
// doc.text(20, 20, "Name: ");
// doc.text(20, 30, "Email: ");


//counseling form start 
doc.setFontSize(8)
doc.text(10,50,"In thought of the risk of injury from participating in _______ _______(the 'Activite')");
doc.text(10,55,"Consideration of my right to take part in the Activity I ask Permission for myself, my heirs, moderators");
doc.text(10,60,"administrators, assigns duty or personal representative,knowingly and voluntarily enter into this");
doc.text(10,65,"Disclaimer and release and hereby waive any right, claim or cause of action of any kind arising from the I");
doc.text(10,70,"participate in the Activity,and also hereby publish and release forever _______________ Address");
doc.text(10,75,"at __________________, __________________, ___________________,");
doc.text(10,80,"______________, affiliates, officers, members, agents, attorneys, employees, volunteers");
doc.text(10,85,"members, heirs, representative, predecessors, successors and assigns, for any physical or psychological");
doc.text(10,90,"injury, including but not limited to illness,paralysis,death, damage, or emotional loss,which I may suffer");
doc.text(10,95,"as a result of direct consequences of my participation in the activity, including travel to and from an event");
doc.text(10,100,"related to the activity");

doc.setFontSize(8);
doc.text(10,110,"I AGREE THAT I AM DOING SO VOLUNTARILY AND SOLDLY AT MY OWN RISK BY PARTICIPATING IN THE");
doc.text(10,115,"ADVERTISED ACTIVITY. I AM AWARE OF THE RISKS INCLUDING, BUT NOT LIMITED TO, PHYSICAL OR");
doc.text(10,120,"PSYCHOLOGICAL INJURY, PAIN, SUFFERING, ILLNESS, deformities, TEMPORARY AND PERMANENT");
doc.text(10,125,"DISABILITY (INCLUDING PARALYSIS), Financial OR EMOTIONAL LOSS, AND DEATH ASSOCIATED WITH");
doc.text(10,130,"TRAVELING TO AND FROM AS WELL AS PERTICIPATING IN THIS I ACKNOWLEGDE THAT THESE INJURIES");
doc.text(10,135,"OR RESULTS COULD BE CAUSE BY MY OWN OR OTHER'S NEGLIGENCE, travel-related circumstances, or");
doc.text(10,140,"the state of activity location (S). In spite of this, I AGREE TO TAKE ALL RELATED RISKS, KNOWN AND");
doc.text(10,145,"KNOWN TO ME, ASSOCIATED WITH MY PARTICIPATION IN THIS ACTIVITY, INCLUDING TRAVEL TO,");
doc.text(10,150,"FROM, AND DURING THIS ACTIVITY.");

doc.setFontSize(8);
doc.text(10,160,"I agree to compensate and hold harmless from and against all claims, suits or actions of any kind against");
doc.text(10,165,"liability, damages,indemnification or by me or anyone on my behalf give, including attorneys and all");
doc.text(10,170,"costs involved, if any dispute arises under any claim brought by me or any other person on my behalf. If");
doc.text(10,175,"incurs any of these costs, I agree to reimburse.");

 doc.text(10,185,"I certify that ______________ and its directors, officers, volunteers, representative and agents");
 doc.text(10,190,"are not responsible for errors, omissions , act or omissions of any party or entity.");

 doc.text(10,200,"I understand that this activity may test a person s physical and mental limit and may contain the risk of");
 doc.text(10,205,"death, very serious injury, and loss of property. The dangers could be brought on by the terrain,");
 doc.text(10,210,"accommodationa, temperature, weather, dehydration, participant health, equipment, vehicular traffic,");
 doc.text(10,215,"and/or actions of others, such as competitors, volunteers, spectators, coaches, event officials, and event");
 doc.text(10,220,"monitors, and/or event organizers,");

 doc.text(10,230,"I acknowledge that I have read this 'waiver and liberation' carefully and fully understood that this is the");
 doc.text(10,235,"liberation of liability.I exempt and release the proceedings of _______________ and all its");
 doc.text(10,240,"subsidiaries, managers, members, agents, lawyers, employees, volunteers, heirs, heirs, representatives,");
 doc.text(10,245,"predecessors, successors, and customers. I explicitly agree to do so. Otherwise, we waive the right to");
 doc.text(10,250,"take legel action against _________________ for personal injury or property");



 doc.text(10,260,"I understand that I am financially responsible for any expenses related to any medical care or treatment");
 doc.text(10,265,"that I might need.I am aware of the necessity of having my own health insurance.");

 doc.text(10,275,"I understand and agree to be held liable for any and all cost associated with any willful, negligent, or");
 doc.text(10,280,"reckless activities by myself or members of my family that cause damage to equipment or facilities.");

 doc.text(10,290,"THIS WAIVER AND RELEASE OF LIABILITY Generally Applies Through My Involvement IN THE Event");
 doc.text(10,295,"Throughtout This INITIAL EVENT OF PARTICIPATION AND ALL SUCCESSIVE EVENTS OF PARTICIPATION.");
//counseling from end

// doc.setFontSize(20);
// doc.setFont("helvetica", "bold");
// doc.text(20,110,"Decendt Information");

/* Heading start */
doc.setFontSize(18);
 doc.setFont("helvetica", "bold");
doc.text(40,30,"Waiver And Release of Liability");
/* Heading end */

  

var pdfData = doc.output();

var pdfBlob = new Blob([pdfData], {
    type: "application/pdf"
});
var objectURL = URL.createObjectURL(pdfBlob);


pdfPreview.innerHTML = "";
pdfPreview.innerHTML = "<embed src='" + objectURL + "' type='application/pdf' width='500px' height='300px'>";

 function main_checking(value){
    var doc_1 = new jsPDF();
    // doc_1.text(20, 20, "Name: ");
    // doc_1.text(20, 30, "Email: ");
 
//Start of Example
    doc_1.setFontSize(8)
    if(Activity.value !=""){
      doc_1.text(10,50,"In thought of the risk of injury from participating in "+`${Activity.value}`+" (the 'Activite')");
    }
    else{
doc_1.text(10,50,"In thought of the risk of injury from participating in _______________(the 'Activite')");
}

doc_1.text(10,55,"Consideration of my right to take part in the Activity I ask Permission for myself, my heirs, moderators");
doc_1.text(10,60,"administrators, assigns duty or personal representative,knowingly and voluntarily enter into this");
doc_1.text(10,65,"Disclaimer and release and hereby waive any right, claim or cause of action of any kind arising from the I");

doc_1.setFontSize(8)
if(Party_Name.value !=""){
    doc_1.text(10,70,"participate in the Activity,and also hereby publish and release forever "+`${Party_Name.value}`+" Address");
}
   else{
 doc_1.text(10,70,"participate in the Activity,and also hereby publish and release forever _______________ Address");
}

if(Address.value !=""){
doc_1.text(10,75,"at "+`${Address.value}`+ ", __________________, ___________________,");
}
 else{
doc_1.text(10,75,"at __________________, __________________, ___________________,");
 }

 if(City.value !=""){
doc_1.text(10,75," __________________, "+`${City.value}`+", ___________________,");
}
else{
doc_1.text(10,75," __________________, __________________, ___________________,");
}

if(State.value !=""){
doc_1.text(70,75," __________________, __________________,"+`${State.value}`);
}
else{
doc_1.text(10,75," __________________, __________________, ___________________,");
}


if(Zip_Code.value !=""){
doc_1.text(10,80,`${Zip_Code.value}`+", affiliates, officers, members, agents, attorneys, employees, volunteers");
}
else{
doc_1.text(10,80,"______________, affiliates, officers, members, agents, attorneys, employees, volunteers");
}
doc_1.text(10,85,"members, heirs, representative, predecessors, successors and assigns, for any physical or psychological");
doc_1.text(10,90,"injury, including but not limited to illness,paralysis,death, damage, or emotional loss,which I may suffer");
doc_1.text(10,95,"as a result of direct consequences of my participation in the activity, including travel to and from an event");
doc_1.text(10,100,"related to the activity");
//End of Example    
    doc_1.setFontSize(18);
    doc_1.setFont("helvetica", "bold");
    doc_1.text(55,30,"Waiver And Release of Liability");
   


       var pdfData = doc_1.output();

    var pdfBlob = new Blob([pdfData], {
        type: "application/pdf"
    });

        var objectURL =URL.createObjectURL(pdfBlob);
    
    pdfPreview.innerHTML = "";
    pdfPreview.innerHTML = "<embed src='" + objectURL + "' type='application/pdf' width='500px' height='300px'>";
 }

 Activity.addEventListener("change",function(e){
    main_checking();
})
 Party_Name.addEventListener("change",function(e){
    main_checking();
}) 
 Address.addEventListener("change",function(e){
    main_checking();
 })
  City.addEventListener("change",function(e){
    main_checking();
 })
  State.addEventListener("change",function(e){
     main_checking();
 })
  Zip_Code.addEventListener("change",function(e){
     main_checking();
 })