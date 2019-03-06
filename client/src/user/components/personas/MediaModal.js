import React, { Component } from "react";
import Popup from "reactjs-popup";
import "survey-react/survey.css";
import * as Survey from "survey-react";
import * as widgets from "surveyjs-widgets";

export default class MediaModal extends Component {
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
            name: "watch_content",
            isRequired: true,
            title: "Where do you spend most of your time watching content?",
            choices: ["home-based", "platform-based"]
          }
        ]
      },
      {
        questions: [
          {
            type: "radiogroup",
            name: "click_targeted_ad",
            isRequired: true,
            title: "What will make you click a targeted ad?",
            choicesOrder: "random",
            choices: [
              "It's aesthetics",
              "It's messaging",
              "To see someone that looks like you",
              "If it's in video",
              "If you can participate",
              "If it's an image"
            ]
          }
        ]
      },
      {
        questions: [
          {
            type: "radiogroup",
            name: "outdoor_ad",
            isRequired: true,
            title: "Does outdoor advertising make you want to buy the product?",
            choices: ["Yes", "No"]
          }
        ]
      },
      {
        questions: [
          {
            type: "sortablelist",
            name: "fav_socialmedia",
            isRequired: true,
            title: "Rank your favorite social media platforms",
            choices: [
              "Facebook",
              "Instagram",
              "Twitter",
              "Snapchat",
              "Reddit",
              "Linkedin"
            ]
          }
        ]
      },
      {
        questions: [
          {
            type: "radiogroup",
            name: "fav_ott",
            isRequired: true,
            title: "Rank your favorite OTT channels",
            choices: ["Yes", "No"]
          }
        ]
      },
      {
        questions: [
          {
            type: "radiogroup",
            name: "tv_sm",
            isRequired: true,
            title:
              "Do you find ads/commercials on television OR social media more effective?",
            choices: ["Ads/commercials on TV", "Social Media"]
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
              "What’s most likely to make you tune out of an ad or disengage w/ a piece of content?",
            choices: ["Video", "Social Image"]
          }
        ]
      }
    ],
    completedHtml: "<p>Competed!</p>"
  };

  //Define a callback methods on survey complete
  onComplete(survey, options) {
    //Write survey results into database
    const mediaModelQs = {
      watch_content: survey.data.watch_content,
      click_targeted_ad: survey.data.click_targeted_ad,
      outdoor_ad: survey.data.outdoor_ad,
      fav_socialmedia: survey.data.fav_socialmedia,
      fav_ott: survey.data.fav_ott,
      tv_sm: survey.data.tv_sm,
      tuneout: survey.data.tuneout
    };
    console.log(
      "Survey results: " + JSON.stringify(mediaModelQs.watch_content)
    );
  }

  render() {
    // Survey.StylesManager.applyTheme("winter");
    var model = new Survey.Model(this.json);

    return (
      <div>
        {" "}
        <Popup
          trigger={
            // eslint-disable-next-line
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
