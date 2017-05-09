//Higher order functions
function hazardWarningCreator(typeOfWarning){
  let warningCounter = 0;
  return function(location){
    warningCounter += 1;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}! `);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
  };
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const floodWarning = hazardWarningCreator('Flood in your Area');
const murderWarning = hazardWarningCreator('MURDER!!!');

rocksWarning('Main St and Pacific Ave');
rocksWarning('Centinela Ave and Olympic Blvd');

floodWarning('Main St and Pacific Ave');
floodWarning("Centinela Ave and Olympic Blvd");

murderWarning('Main St and Pacific Ave');
murderWarning("Centinela Ave and Olympic Blvd");
