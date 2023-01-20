
    // final way
    let arr = [4,85,6,1,444,45,74,87,47,547,4,7,447,487,16,8,8,698];
    let resultV1 =arr.filter((shivam)=> shivam%2===0);
    console.log("@SY - ", resultV1);

    // 2nd way
    let resultsV2 =arr.filter((data)=>{
        if(data>300 && data%2===0){
            return data;
        }
    })
    console.log("@SY - ",resultsV2);

    let resultsV3 =arr.filter((data)=>data>300 && data%2===0);
    console.log(resultsV3);

    const profiles = [
    {
      name: "ankit",
      active: true,
    },
    {
      name: "ankit",
      active: true,
    },
    {
      name: "rahul",
      active: false,
    },
    {
      name: "shivam",
      active: true,
    },
    {
      name: "mitesh",
      active: false,
    },
  ];

  let resultsV4=profiles.filter((data)=>{
    data.active
        return data;
    }

  );
  console.log(resultsV4)

// <!-- xx
// Vidhya Skill School8:16 AM
// https://codeshare.io/9OdkN8
// Vidhya Skill School8:24 AM
// https://i.stack.imgur.com/ufv6k.png
// Mahesh Patidar8:27 AM
// const name = ["Mahehs", "Satyam", "Shivam", "Raja", "Anirudha", "Shankar"];

//   const nameFilter = name.filter((data) => data === "Rakesh");
//   console.log("AF  LN 61:", nameFilter);
// Mahesh Patidar8:30 AM
// const name = ["Mahehs", "Satyam", "Shivam", "Raja", "Anirudha", "Shankar"];

//   const nameFilter = name.filter((data) => data === "Satyam" || "Mahesh");
//   console.log("AF  LN 61:", nameFilter);
// Vidhya Skill School8:31 AM
// const nameFilter = name.filter((data) => data === "Satyam" || data === "Mahesh");
// Vidhya Skill School8:32 AM
// const nameFilter = name.filter((data) => ["Satyam", "Mahesh"].includes(data));
// Vidhya Skill School8:43 AM
// const profiles = [
//     {
//       name: "ankit",
//       active: true,
//     },
//     {
//       name: "ankit",
//       active: true,
//     },
//     {
//       name: "rahul",
//       active: false,
//     },
//     {
//       name: "shivam",
//       active: true,
//     },
//     {
//       name: "mitesh",
//       active: false,
//     },
//   ];
// const filterProfiles = [
//     {
//       name: "ankit",
//       active: true,
//     },
//     {
//       name: "ankit",
//       active: true,
//     },
//     {
//       name: "shivam",
//       active: true,
//     },
//   ];
// Vidhya Skill School8:45 AM
// const result = profiles.filter((data)=>{
//     // write your logic here
//   })
// Vidhya Skill School9:12 AM
// Boolean(true)
// Boolean(false)
// const resultsV4 = profiles.filter((data) => data.active);
// Vidhya Skill School9:14 AM
// if(data.active === true){...}
// if(data.active){...}
// 1 === 1 ? true : false
// 1 === 1
// data > 10 ? true : false
// data > 10
// I'm an Engineer | FullStack | Cohort 8
//     x -->