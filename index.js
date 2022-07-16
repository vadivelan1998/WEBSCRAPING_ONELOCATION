const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
   await page.goto("https://food.grab.com/sg/en/");
   await page.type("#location-input", "manilla");
   await page.click(".ant-btn.submitBtn___2roqB.ant-btn-primary");
   await page.setRequestInterception(true);
  //  await page.on("request", (request) => {
  //    // handle request here
  //    console.log(request._response);
  //  });
  // await page.on("response", async (response) => {
  //   console.log(await response);
  //  // console.log(await response._request._resourceType);
  //   // if (response._request._resourceType == "image") {
  //   //   console.log(await response._url);
  //   // }

  //   // if (response.url().includes("https://portal.grab.com/foodweb/v2/search")) {
  //     // console.log(await response.json());
  //   // }
  // });
//await page.goto("https://food.grab.com/sg/en/");
//   await page.goto("https://food.grab.com/sg/en/", {
//     waitUntil: "networkidle2",
//   });
//  await page.waitForTimeout(10000);

//   await page.screenshot({ path: "myimg.png" });
//   await page.type("#location-input", "manilla");
//   await page.click(".ant-btn.submitBtn___2roqB.ant-btn-primary");
//   await page.setRequestInterception(true);
//   await page.on("request", (request) => {
//     // handle request here
//     console.log(request)
//   });
  // const [response] = await Promise.all([page.waitForResponse(response => response.url().includes("/foodweb/v2/search"))])
  // const dataObj = await response.json();
  // console.log(dataObj)
  // // let res = await page.waitForResponse((response) =>
  //   response.url().includes("https://portal.grab.com/foodweb/v2/search")
  // );
  // console.log(res);
//   await page.on("response", async (response) => {
//     console.log(response)
//     if (response.url() == "https://portal.grab.com/foodweb/v2/search") {
//       console.log(await response.json());
//     }
//    });
//  await page.goto("https://food.grab.com/sg/en/", {
//    waitUntil: "load",
//    timeout: 0,
//  });
  await browser.close();
})();
