import React, { Component } from "react";
// import logo from "../logo.svg";
import * as Survey from "survey-react";


export class ItemQuestions extends Component  {
 //Define Survey JSON
 json = {
    "pages": [
     {
      "name": "page1",
      "elements": [
        {
        "type": "text",
        "name": "itemname",
        "title": "What item would you like to get rid of? "
        },
        {
        "type": "rating",
        "name": "question1",
        "title": "How important is this item to you"
       },
       {
        "type": "rating",
        "name": "question2",
        "title": "How much would you cry if you lost it?"
       },
       {
        "type": "rating",
        "name": "question3",
        "title": "How much would you cry if you lost it?"
       }
      ]
     }
    ],
    "showCompletedPage": false
   }
   
  
   //Define a callback methods on survey complete
   onComplete(survey) {
    //Write survey results into database
    console.log("Survey results: " + JSON.stringify(survey.data));
    console.log((survey.data)); //lets play with this to see how we can choose just the integer itself
    
    //This counts the number of questions

    var q1 = (survey.data.question1);
    var q2 = (survey.data.question2);
    var q3 = (survey.data.question3);
    console.log("Answers to questions: " + q1, q2, q3);

    var totalOfQuestionScores = q1 + q2 + q3;
    var averageOfQuestions = totalOfQuestionScores / 3;
    console.log("Average" + averageOfQuestions);

    document.getElementById("yourScore").innerHTML = "<h3>Your score for <strong>" + survey.data.itemname + "</strong> is " + averageOfQuestions +"</h3>";
    


   }
   render() {
    //Create the model and pass it into react Survey component
    //You may create survey model outside the render function and use it in your App or component
    //The most model properties are reactive, on their change the component will change UI when needed.
    var model = new Survey.Model(this.json);
    return (<Survey.Survey model={model} onComplete={this.onComplete}/>);
    /*
    //The alternative way. react Survey component will create survey model internally
    return (<Survey.Survey json={this.json} onComplete={this.onComplete}/>);
    */
    //You may pass model properties directly into component or set it into model
    // <Survey.Survey model={model} mode="display"/>
    //or 
    // model.mode="display"
    // <Survey.Survey model={model}/>
    // You may change model properties outside render function. 
    //If needed react Survey Component will change its behavior and change UI.
   }
}

export default ItemQuestions;