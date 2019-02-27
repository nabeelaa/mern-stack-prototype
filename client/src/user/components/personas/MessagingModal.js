import React, { Component } from "react";
import Popup from "reactjs-popup";
import "survey-react/survey.css";
import * as Survey from "survey-react";
import * as widgets from "surveyjs-widgets";

export default class MessagingModal extends Component {
  componentWillMount() {
    widgets.sortablejs(Survey);
  }

  json = {
    title: "Messaging/Format",
    showProgressBar: "bottom",
    goNextPageAutomatic: true,
    showNavigationButtons: true,
    pages: [
      {
        questions: [
          {
            type: "radiogroup",
            name: "messaging",
            isRequired: true,
            title: "Do you enjoy long-form or short-form messaging?",
            choices: ["long-form", "short-form"]
          }
        ]
      },
      {
        questions: [
          {
            type: "radiogroup",
            name: "notified",
            isRequired: true,
            title:
              "Do you like to be notified by brands about updates or new offerings?",
            choicesOrder: "random",
            choices: ["Yes", "No"]
          }
        ]
      },
      {
        questions: [
          {
            type: "radiogroup",
            name: "engagment",
            isRequired: true,
            title:
              "When engaging with an ad or content, would you prefer to follow a link to access content or be able to download ?",
            choices: ["follow a link to access contents", "be able to download"]
          }
        ]
      },
      {
        questions: [
          {
            type: "sortablelist",
            name: "more_engaging_rank",
            isRequired: true,
            title: "Rank what is more engaging for you?",
            isRequired: true,
            choices: [
              "Content",
              "infographics",
              "listicles",
              "quizzes",
              "blog-post",
              "e-book"
            ]
          }
        ]
      },
      {
        questions: [
          {
            type: "radiogroup",
            name: "free",
            isRequired: true,
            title:
              "Would you download something for free (whitepaper, etc.) if it were valuable information?",
            choices: ["Yes", "No"]
          }
        ]
      },
      {
        questions: [
          {
            type: "radiogroup",
            name: "likely",
            isRequired: true,
            title:
              "How likely are you to click on an ad if it interrupts your video content?",
            choices: ["Likely", "Not Likely"]
          }
        ]
      },
      {
        questions: [
          {
            type: "radiogroup",
            name: "ad_placement",
            isRequired: true,
            title:
              "On which social platform do you find ads to be most/ least annoying?",
            choices: ["Facebook", "Instagram"]
          }
        ]
      },
      {
        questions: [
          {
            type: "radiogroup",
            name: "tuneout",
            isRequired: true,
            title:
              "When viewing or engaging with content would you prefer to see a short ad at the beginning or a short ad in the middle of the video?",
            choices: ["Beginning", "End"]
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
