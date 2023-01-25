import { Page, test, expect} from "@playwright/test";


test.describe('KB Homepage Check', () => {


    test('KB Homepage Assertion', async ({ page }) => {
      
        await page.goto('https://www.kbstar.com/');




        // const locator = page.getByRole('img', { name: '인터넷 납세서비스 국세청홈택스' });
        // expect(locator).toHaveScreenshot('https://hometax.speedycdn.net/img/pop_bg/yrs_logo.png');
    

        
        await expect(page).toHaveURL('https://obank.kbstar.com/quics?page=C019088&amp;QSL=F');
        await page.locator('#').click();
    });
  


    //a href="https://obank.kbstar.com/quics?page=C019088&amp;QSL=F"

    // test('Button Click', async ({ page }) => {
    //   await page.locator('#skipNav').click();

    // });


  });


