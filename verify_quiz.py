import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={'width': 1280, 'height': 800})

        # Start the dev server in the background
        process = await asyncio.create_subprocess_shell(
            "npm run dev",
            stdout=asyncio.subprocess.PIPE,
            stderr=asyncio.subprocess.PIPE
        )

        # Wait for server to be ready
        for _ in range(30):
            try:
                await page.goto("http://localhost:3000/quiz", timeout=5000)
                break
            except:
                await asyncio.sleep(2)

        await page.wait_for_timeout(2000)
        await page.screenshot(path='/home/jules/verification/screenshots/quiz_page.png')
        print("Quiz page screenshot captured")

        process.terminate()
        await browser.close()

if __name__ == "__main__":
    if not os.path.exists('/home/jules/verification/screenshots'):
        os.makedirs('/home/jules/verification/screenshots')
    asyncio.run(main())
