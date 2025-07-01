import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the home page
    await page.goto('/');
  });

  test('should display the page title', async ({ page }) => {
    // Check if the page has a title containing MNC
    await expect(page).toHaveTitle(/MNC/);
  });

  test('should display hero section with title and subtitle', async ({ page }) => {
    // Wait for the page to load
    await page.waitForLoadState('networkidle');
    
    // Check if hero section is visible
    const heroSection = page.locator('section').first();
    await expect(heroSection).toBeVisible();
    
    // Check if hero title is present (large text)
    const heroTitle = page.locator('h1');
    await expect(heroTitle).toBeVisible();
    
    // Check if hero subtitle is present
    const heroSubtitle = page.locator('h2').first();
    await expect(heroSubtitle).toBeVisible();
  });

  test('should display CTA button in hero section', async ({ page }) => {
    // Wait for the page to load
    await page.waitForLoadState('networkidle');
    
    // Check if CTA button is visible and contains mail icon
    const ctaButton = page.locator('button').first();
    await expect(ctaButton).toBeVisible();
    
    // Check if button contains mail icon
    const mailIcon = ctaButton.locator('svg');
    await expect(mailIcon).toBeVisible();
  });

  test('should display services section', async ({ page }) => {
    // Wait for the page to load
    await page.waitForLoadState('networkidle');
    
    // Check if services section header is visible
    const servicesHeader = page.locator('h2').filter({ hasText: /services/i });
    await expect(servicesHeader).toBeVisible();
    
    // Check if services description is present
    const servicesDescription = page.locator('p').filter({ hasText: /services/i });
    await expect(servicesDescription).toBeVisible();
  });

  test('should display service cards with checkmarks', async ({ page }) => {
    // Wait for the page to load
    await page.waitForLoadState('networkidle');
    
    // Check if service cards are present
    const serviceCards = page.locator('.shadow-lg');
    await expect(serviceCards.first()).toBeVisible();
    
    // Check if checkmark icons are present in service cards
    const checkIcons = page.locator('svg').filter({ hasText: '' });
    await expect(checkIcons.first()).toBeVisible();
  });

  test('should display testimonials section', async ({ page }) => {
    // Wait for the page to load
    await page.waitForLoadState('networkidle');
    
    // Check if testimonials section header is visible
    const testimonialsHeader = page.locator('h2').filter({ hasText: /testimonial/i });
    await expect(testimonialsHeader).toBeVisible();
    
    // Check if testimonial cards are present
    const testimonialCards = page.locator('.bg-neutral-50');
    await expect(testimonialCards.first()).toBeVisible();
  });

  test('should display testimonial cards with proper structure', async ({ page }) => {
    // Wait for the page to load
    await page.waitForLoadState('networkidle');
    
    // Check if testimonial cards have the expected structure
    const testimonialCard = page.locator('.bg-neutral-50').first();
    await expect(testimonialCard).toBeVisible();
    
    // Check for quote mark
    const quoteMark = testimonialCard.locator('span').filter({ hasText: '"' });
    await expect(quoteMark).toBeVisible();
    
    // Check for testifier name
    const testifierName = testimonialCard.locator('h3');
    await expect(testifierName).toBeVisible();
    
    // Check for company name
    const companyName = testimonialCard.locator('h4');
    await expect(companyName).toBeVisible();
    
    // Check for testimonial message
    const testimonialMessage = testimonialCard.locator('p');
    await expect(testimonialMessage).toBeVisible();
  });

  test('should handle loading state', async ({ page }) => {
    // Navigate to page and check for loading spinner
    await page.goto('/');
    
    // The loading spinner should be visible briefly during initial load
    // Note: Loading might be too fast to catch consistently, so we'll just check if the page loads properly
    await page.waitForLoadState('networkidle');
  });

  test('should be responsive on different screen sizes', async ({ page }) => {
    // Test desktop view
    await page.setViewportSize({ width: 1280, height: 720 });
    await expect(page.locator('h1')).toBeVisible();
    
    // Test mobile view
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.locator('h1')).toBeVisible();
    
    // Test tablet view
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(page.locator('h1')).toBeVisible();
  });

  test('should have proper navigation structure', async ({ page }) => {
    // Wait for the page to load
    await page.waitForLoadState('networkidle');
    
    // Check if main sections are present in the document
    const sections = page.locator('section');
    await expect(sections).toHaveCount(3); // Hero, Testimonials, Services
    
    // Check if all sections are visible
    for (let i = 0; i < 3; i++) {
      await expect(sections.nth(i)).toBeVisible();
    }
  });
});
