const { default: axios } = require("axios");
//import axios from "axios"

var wTopCloth = document.getElementsByClassName('clothName2');
var wTopCloth = document.getElementsByClassName('clothName2');


    // axios.post('http://localhost:3000',
    // {
    //     "userData": { //사용자 정보
    //         "reqCode":"T", // api사용(K) or  테스트용(T)
    //         "weatherCode":1 //날씨코드
    //     }
    // })
    // .then(res => {
    //     console.log(res);
    // })
    // .catch(err => {
    //     console.log(err);
    // });

    axios.post('http://localhost:3000/', {
        "userData": { //사용자 정보
            "reqCode":"T", // api사용(K) or  테스트용(T)
            "weatherCode":1 //날씨코드
        }
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
