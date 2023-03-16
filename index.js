const records = [
    { year: 2022, result: "L" },
    { year: 2021, result: "W" },
    { year: 2020, result: "L" },
    { year: 2019, result: "W" }
  ];

function superbowlWin(records) {
    const winRecord = records.find(record => record.result === "W");
    return winRecord ? winRecord.year : undefined;
  }
  
console.log(superbowlWin())