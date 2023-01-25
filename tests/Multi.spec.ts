import { test, expect, Page } from '@playwright/test';


 // beforeAll hook은 최초 딱 한번 실행. initialize 작업 등을 수행
  test.beforeEach(async ({ browser, contextOptions, page }) => {
    const browserContext = await browser.newContext(contextOptions);
    // 페이지 생성
    page = await browserContext.newPage();

    // 링크로 이동
    await page.goto('https://www.google.com/');

  });


test.describe('구글 홈페이지 접속 시나리오', () => {


    test('홈페이지 확인', async ({ page }) => {
        // await expect(page).toHaveURL('naver.com');

    });
  

    test('로그인 버튼 클릭', async ({ page }) => {
      
        await page.getByRole('button', { name: '검색' }).click();
    });


  });
