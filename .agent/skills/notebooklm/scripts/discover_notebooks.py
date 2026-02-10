#!/usr/bin/env python3
import sys
import time
from pathlib import Path
from patchright.sync_api import sync_playwright

# Add parent directory to path
sys.path.insert(0, str(Path(__file__).parent))

from auth_manager import AuthManager
from browser_utils import BrowserFactory

def discover_notebooks(query: str = None, headless: bool = True):
    auth = AuthManager()
    if not auth.is_authenticated():
        print("⚠️ Not authenticated. Run: python auth_manager.py setup")
        return None

    print(f"🔍 Searching for notebooks...")
    
    playwright = None
    context = None
    
    try:
        playwright = sync_playwright().start()
        context = BrowserFactory.launch_persistent_context(playwright, headless=headless)
        page = context.new_page()
        
        page.goto("https://notebooklm.google.com/", wait_until="networkidle")
        
        # Wait for the list of notebooks to appear
        # The selector for notebook cards might vary, but they usually have a specific class or ARIA label
        print("  ⏳ Waiting for notebook list...")
        
        # Attempt to wait for common elements
        page.wait_for_selector("div[role='listitem']", timeout=15000)
        
        # Get all notebook cards
        cards = page.query_selector_all("div[role='listitem']")
        print(f"  ✓ Found {len(cards)} notebooks in total.")
        
        results = []
        for card in cards:
            try:
                # Find title - usually an <h2> or similar inside the card
                title_el = card.query_selector("h2") or card.query_selector(".notebook-title") or card.query_selector("[title]")
                title = title_el.inner_text().strip() if title_el else "Unknown Title"
                
                # Find link
                link_el = card.query_selector("a")
                href = link_el.get_attribute("href") if link_el else ""
                
                if href and not href.startswith("http"):
                    href = "https://notebooklm.google.com" + href
                
                if not query or query.lower() in title.lower():
                    results.append({"title": title, "url": href})
            except Exception as e:
                continue
                
        return results

    except Exception as e:
        print(f"  ❌ Error: {e}")
        return None
    finally:
        if context: context.close()
        if playwright: playwright.stop()

if __name__ == "__main__":
    search_query = sys.argv[1] if len(sys.argv) > 1 else None
    list_only = "list" in sys.argv
    
    found = discover_notebooks(search_query)
    if found:
        print("\n" + "=" * 60)
        print(f"LIST: Notebooks found ({len(found)})")
        print("=" * 60)
        for i, nb in enumerate(found, 1):
            print(f"{i}. {nb['title']}")
            print(f"   URL: {nb['url']}")
        print("=" * 60)
    else:
        print("No notebooks found.")
