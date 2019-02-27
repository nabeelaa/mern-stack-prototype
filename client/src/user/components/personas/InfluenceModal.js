import React, { Component } from "react";
import Popup from "reactjs-popup";
import "survey-react/survey.css";
import * as Survey from "survey-react";
import * as widgets from "surveyjs-widgets";

export default class InfluenceModal extends Component {
  componentWillMount() {
    widgets.sortablejs(Survey);
  }

  json = {
    title: "Influence/Culture",
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
            title: "Do influencers influence your decision?",
            choices: ["yes", "no"]
          }
        ]
      },
      {
        questions: [
          {
            type: "checkbox",
            name: "types_purchases",
            isRequired: true,
            title:
              "What types of purchases are your friends most likely to influence your purchasing decisions?",
            choicesOrder: "random",
            choices: ["Food/Beverages", "Clothing", "Music", "TV"]
          }
        ]
      },
      {
        questions: [
          {
            type: "rating",
            name: "brand_awarenes",
            hasOther: true,
            isRequired: true,
            title:
              "How important is it you that a brand is culturally inclusive and aware (scale 1-10)",
            minRateDescription: "Not Important",
            maxRateDescription: "Very Important"
          }
        ]
      },
      {
        questions: [
          {
            type: "radiogroup",
            name: "boycott_brand",
            isRequired: true,
            title:
              "If a brand is culturally insensitive with a product, would you boycott them?",
            choices: ["Yes", "No"]
          }
        ]
      },
      {
        questions: [
          {
            type: "radiogroup",
            name: "cul_soc_pol",
            isRequired: true,
            title:
              "Do you like brands that care about culture society and politics?",
            choices: ["Culture", "Society", "Politics"]
          }
        ]
      },
      {
        questions: [
          {
            type: "text",
            name: "cultural_trends",
            isRequired: true,
            title: "What cultural trends interest you the most?"
          }
        ]
      }
      //   {
      //     questions: [
      //       {
      //         type: "radiogroup",
      //         name: "ad_placement",
      //         isRequired: true,
      //         title:
      //           "On which social platform do you find ads to be most/ least annoying?",
      //         choices: ["Facebook", "Instagram"]
      //       }
      //     ]
      //   },
      //   {
      //     questions: [
      //       {
      //         type: "radiogroup",
      //         name: "tuneout",
      //         isRequired: true,
      //         title:
      //           "When viewing or engaging with content would you prefer to see a short ad at the beginning or a short ad in the middle of the video?",
      //         choices: ["Beginning", "End"]
      //       }
      //     ]
      //   }
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
