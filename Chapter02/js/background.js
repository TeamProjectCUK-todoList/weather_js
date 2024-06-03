//이미지 파일 배열
const images =[
    "1.JPG",
    "2.JPG",
    "3.JPG",
    "4.JPG",
    "5.JPG",
    "6.JPG",
    "7.JPG",
    "8.JPG",
    "9.JPG",
    "10.JPG",
    "11.JPG",
    "12.JPG",
    "13.JPG",
    "14.JPG",
    "15.JPG",
    "16.JPG",
    "17.JPG",
    "18.JPG",
    "19.JPG",
    "20.JPG",
    "21.JPG",
    "22.JPG",
    "23.JPG",
    "24.JPG",
    "25.JPG",
];

//랜덤 이미지
const chosenImage = images[Math.floor(Math.random() * images.length)];

//html에 이미지 추가하기
//html 에 element 생성하기
const bgimage = document.createElement("img");

bgimage.src = `img/${chosenImage}`;

//html의 body에 추가하기
//body에 html을 추가하겠다
document.body.appendChild(bgimage);