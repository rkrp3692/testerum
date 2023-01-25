import {Page,expect,test} from '@playwright/test'

test.describe('Hometax Hompage Check', () => {
    test('Homepage Assertion', async ({ page }) => {
        await page.goto('https://www.hometax.go.kr/ui/pp/yrs_index.html?isCdn=Y&ST1BOX=1&ND2BOX=1');


        const locator = page.getByRole('img', { name: '인터넷 납세서비스 국세청홈택스' });
        expect(locator).toHaveScreenshot('https://hometax.speedycdn.net/img/pop_bg/yrs_logo.png');
        await page.locator('#RD3BOX').click();      //div id
    });
  

    // test('Hometax Homepage Assertion', async ({ page }) => {
    // // await expect(page.locator("#content > div.wrap_my_home > div.wrap_title_box > h1 > strong")).toContainText("ㅁㄴㅇ");
    // const locator = page.getByRole('img', { name: '인터넷 납세서비스 국세청홈택스' });
    // await expect(locator).toHaveScreenshot('https://hometax.speedycdn.net/img/pop_bg/yrs_logo.png');
    // });


    // test('Button Click', async ({ page }) => {
    //     // await expect(page.locator("#content > div.wrap_my_home > div.wrap_title_box > h1 > strong")).toContainText("ㅁㄴㅇ");
    //     await page.locator('#RD3BOX').click();      //div id
    //     });

  });
