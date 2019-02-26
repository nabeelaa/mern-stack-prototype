import React, { Component } from "react";
import Popup from "reactjs-popup";
import "survey-react/survey.css";
import * as Survey from "survey-react";
import * as widgets from "surveyjs-widgets";

export default class PersonalityModal extends Component {
  componentWillMount() {
    widgets.sortablejs(Survey);
  }

  json = {
    title: "Media Consumption",
    showProgressBar: "bottom",
    goNextPageAutomatic: true,
    showNavigationButtons: true,
    pages: [
      {
        questions: [
          {
            type: "radiogroup",
            name: "fav_color",
            title: "What's your favorite color?",
            choices: [
              "red",
              "purple",
              "black",
              "white",
              "yellow",
              "blue",
              "green",
              "orange"
            ]
          }
        ]
      },
      {
        questions: [
          {
            type: "radiogroup",
            name: "least_fav_color",
            title: "What's your least favorite color?",
            choicesOrder: "random",
            choices: [
              "red",
              "purple",
              "black",
              "white",
              "yellow",
              "blue",
              "green",
              "orange"
            ]
          }
        ]
      },
      {
        questions: [
          {
            type: "radiogroup",
            name: "bright_dark",
            title: "Do you like bright or dark colors?",
            choices: ["Bright", "Dark"]
          }
        ]
      },
      {
        questions: [
          {
            type: "text",
            name: "excites",
            title: "What excites you?"
          }
        ]
      },
      {
        questions: [
          {
            type: "text",
            name: "fear",
            title: "What causes you fear?"
          }
        ]
      },
      {
        questions: [
          {
            type: "radiogroup",
            name: "intr_extr",
            title: "Are you an introvert or extrovert?",
            choices: ["Introvert", "Extrovert"]
          }
        ]
      },
      {
        questions: [
          {
            type: "checkbox",
            colCount: 3,
            name: "most_like",
            title: "Which are you most like?",
            choices: [
              "Executive",
              "Performer",
              "Idealist",
              "Visionary",
              "Guardian",
              "Protection",
              "Giver",
              "Doer",
              "Artist",
              "Inspirer",
              "Thinker",
              "Nurturer",
              "Caregiver",
              "Scientists",
              "Mechanic",
              "Duty/Fulfiller"
            ]
          }
        ]
      }
    ],
    completedHtml: "<p>Competed!</p>"
  };

  //Define a callback methods on survey complete
  onComplete(survey, options) {
    //Write survey results into database
    console.log("Survey results: " + JSON.stringify(survey.data));
  }

  render() {
    // Survey.StylesManager.applyTheme("winter");
    var model = new Survey.Model(this.json);

    return (
      <div>
        {" "}
        <Popup
          trigger={
            <a href="#" onClick="">
              <span />
            </a>
          }
          modal
          closeOnDocumentClick
        >
          <span> </span>
          <Survey.Survey model={model} onComplete={this.onComplete} />
        </Popup>
      </div>
    );
  }
}
