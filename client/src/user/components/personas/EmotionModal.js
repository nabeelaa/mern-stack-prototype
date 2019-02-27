import React, { Component } from "react";
import Popup from "reactjs-popup";
import * as Survey from "survey-react";
import "survey-react/survey.css";
var Remarkable = require("remarkable");
var md = new Remarkable();

export default class EmotionModal extends Component {
  json = {
    title: "Emotion",
    showProgressBar: "bottom",
    goNextPageAutomatic: true,
    showNavigationButtons: false,
    pages: [
      {
        questions: [
          {
            type: "rating",
            name: "heart_warming",
            hasOther: true,
            isRequired: true,
            title:
              "Rank how much you like heart-warming content ![Hugging](https://101clipart.com/wp-content/uploads/17/Cartoon%20People%20Hugging%2013.jpg) ",
            minRateDescription: "Not at all",
            maxRateDescription: "A lot"
          }
        ]
      },
      {
        questions: [
          {
            type: "rating",
            name: "happy",
            hasOther: true,
            isRequired: true,
            title:
              "Rank how much you like happy content ![Smile](https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/155/smiling-face-with-smiling-eyes_1f60a.png) ",
            minRateDescription: "Not at all",
            maxRateDescription: "A lot"
          }
        ]
      },
      {
        questions: [
          {
            type: "rating",
            name: "dark",
            hasOther: true,
            isRequired: true,
            title:
              "Rank how much you like dark content ![Menacing](https://cdn.pixabay.com/photo/2014/08/25/09/26/monster-426996_1280.jpg) ",
            minRateDescription: "Not at all",
            maxRateDescription: "A lot"
          }
        ]
      },
      {
        questions: [
          {
            type: "rating",
            name: "meaningful",
            hasOther: true,
            isRequired: true,
            title:
              "Rank how much you like meaningful content ![Meaningful](https://cdn.pixabay.com/photo/2017/07/02/17/03/rays-2464986_1280.jpg) ",
            minRateDescription: "Not at all",
            maxRateDescription: "A lot"
          }
        ]
      },
      {
        questions: [
          {
            type: "rating",
            name: "sad",
            hasOther: true,
            isRequired: true,
            title:
              "Rank how much you like sad content ![Sad](https://cdn.pixabay.com/photo/2015/10/09/06/46/chimpanzee-978809_960_720.jpg) ",
            minRateDescription: "Not at all",
            maxRateDescription: "A lot"
          }
        ]
      },
      {
        questions: [
          {
            type: "rating",
            name: "culturally_insensitive",
            hasOther: true,
            isRequired: true,
            title:
              "Rank how much you like culturally insensitive content ![Culturally Insensitive](https://cdn.pixabay.com/photo/2014/04/02/10/26/attention-303861_1280.png) ",
            minRateDescription: "Not at all",
            maxRateDescription: "A lot"
          }
        ]
      },
      {
        questions: [
          {
            type: "rating",
            name: "politically_correct",
            hasOther: true,
            isRequired: true,
            title:
              "Rank how much you like politically correct content ![Politically Correct](https://cdn.pixabay.com/photo/2014/09/10/17/29/handshake-440959_1280.jpg) ",
            minRateDescription: "Not at all",
            maxRateDescription: "A lot"
          }
        ]
      },
      {
        questions: [
          {
            type: "rating",
            name: "sexl",
            hasOther: true,
            isRequired: true,
            title:
              "Rank how much you like sexual content ![Sexl](https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/146/revolving-hearts_1f49e.png) ",
            minRateDescription: "Not at all",
            maxRateDescription: "A lot"
          }
        ]
      },
      {
        questions: [
          {
            type: "rating",
            name: "political",
            hasOther: true,
            isRequired: true,
            title:
              "Rank how much you like political content ![Political](https://cdn.pixabay.com/photo/2015/04/13/15/09/capitol-720677_1280.jpg) ",
            minRateDescription: "Not at all",
            maxRateDescription: "A lot"
          }
        ]
      },
      {
        questions: [
          {
            type: "rating",
            name: "religious",
            hasOther: true,
            isRequired: true,
            title:
              "Rank how much you like religious content ![Religious](https://cdn.pixabay.com/photo/2017/08/10/22/34/candles-2628473_1280.jpg) ",
            minRateDescription: "Not at all",
            maxRateDescription: "A lot"
          }
        ]
      },
      {
        questions: [
          {
            type: "rating",
            name: "nostalgic",
            hasOther: true,
            isRequired: true,
            title:
              "Rank how much you like nostalgic content ![Nostalgic](https://cdn.pixabay.com/photo/2014/10/23/16/58/phone-499991_1280.jpg) ",
            minRateDescription: "Not at all",
            maxRateDescription: "A lot"
          }
        ]
      },
      {
        questions: [
          {
            type: "rating",
            name: "food-related",
            hasOther: true,
            isRequired: true,
            title:
              "Rank how much you like food-related content ![Food](https://cdn.pixabay.com/photo/2017/12/10/14/47/piza-3010062_1280.jpg) ",
            minRateDescription: "Not at all",
            maxRateDescription: "A lot"
          }
        ]
      },
      {
        questions: [
          {
            type: "rating",
            name: "cultural",
            hasOther: true,
            isRequired: true,
            title:
              "Rank how much you like cultural/ethnic content ![Cultural](https://cdn.pixabay.com/photo/2014/04/03/11/50/drama-312318_1280.png) ",
            minRateDescription: "Not at all",
            maxRateDescription: "A lot"
          }
        ]
      },
      {
        questions: [
          {
            type: "rating",
            name: "factual",
            hasOther: true,
            isRequired: true,
            title:
              "Rank how much you like factual content ![Factual](https://cdn.pixabay.com/photo/2016/08/20/09/46/magnifying-glass-1607160_1280.jpg) ",
            minRateDescription: "Not at all",
            maxRateDescription: "A lot"
          }
        ]
      },
      {
        questions: [
          {
            type: "rating",
            name: "romantic",
            hasOther: true,
            isRequired: true,
            title:
              "Rank how much you like romantic content ![Romantic](https://cdn.pixabay.com/photo/2015/05/11/14/51/heart-762564_1280.jpg) ",
            minRateDescription: "Not at all",
            maxRateDescription: "A lot"
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
  onTextMarkdown(survey, options) {
    //convert the mardown text to html
    var str = md.render(options.text);
    //remove root paragraphs <p></p>
    str = str.substring(3);
    str = str.substring(0, str.length - 5);
    //set html
    options.html = str;
  }

  render() {
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
          <Survey.Survey
            model={model}
            onTextMarkdown={this.onTextMarkdown}
            onComplete={this.onComplete}
          />
        </Popup>
      </div>
    );
  }
}
