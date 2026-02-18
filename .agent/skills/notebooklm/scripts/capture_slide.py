#!/usr/bin/env python3
"""
NotebookLM Slide Capture Automation
Automates the process of capturing clean screenshots of slides from the Studio panel.
"""

import argparse
import sys
import time
import os
from pathlib import Path
from patchright.sync_api import sync_playwright

# Add parent directory to path
sys.path.insert(0, str(Path(__file__).parent))

from auth_manager import AuthManager
from notebook_manager import NotebookLibrary
from browser_utils import BrowserFactory, StealthUtils


def capture_slide(notebook_url: str, document_name: str, page_number: int, output_path: str, headless: bool = True):
    """
    Navigate to a NotebookLM notebook, open a specific document in Studio, 
    go to a page, and take a clean screenshot.
    """
    auth = AuthManager()
    if not auth.is_authenticated():
        print("⚠️ Not authenticated. Run: python auth_manager.py setup")
        return False

    print(f"🚀 Starting slide capture automation...")
    print(f"📚 Notebook: {notebook_url}")
    print(f"📄 Document: {document_name}")
    print(f"🔢 Page: {page_number}")

    playwright = None
    context = None
    
    try:
        playwright = sync_playwright().start()
        context = BrowserFactory.launch_persistent_context(playwright, headless=headless)
        page = context.new_page()
        
        print("  🌐 Opening notebook...")
        page.goto(notebook_url, wait_until="domcontentloaded")
        
        # Wait for page to load
        time.sleep(5)
        
        # 1. Ensure 'Studio' tab is active
        print("  📂 Switching to Studio tab...")
        try:
            studio_tab = page.get_by_role("tab", name="Studio")
            if studio_tab.is_visible():
                studio_tab.click()
            else:
                # Try clicking by text if role not found
                page.get_by_text("Studio", exact=True).click()
            time.sleep(2)
        except Exception as e:
            print(f"  ⚠️ Could not switch to Studio tab: {e}")

        # 2. Find and click document in Studio (right panel)
        print(f"  🔍 Looking for '{document_name}' in Studio panel...")
        try:
            # Use a more targeted selector for the document titles in the list
            doc_element = page.get_by_text(document_name, exact=False).first
            doc_element.scroll_into_view_if_needed()
            time.sleep(1)
            
            if doc_element.is_visible():
                print(f"  ✅ Found document entry. Clicking...")
                doc_element.click()
            else:
                raise Exception("Document not visible after scroll")
        except Exception as e:
            print(f"  ⚠️ Targeted find failed: {e}. Trying broad sweep...")
            # Broad search across all role='button' or similar
            found = False
            for selector in ["div[role='button']", "span", "div"]:
                elements = page.query_selector_all(selector)
                for el in elements:
                    try:
                        text = el.inner_text()
                        if document_name.lower() in text.lower():
                            print(f"  ✅ Found document in {selector}. Clicking...")
                            el.scroll_into_view_if_needed()
                            el.click()
                            found = True
                            break
                    except:
                        continue
                if found: break
            
            if not found:
                page.screenshot(path="debug_not_found.png")
                raise Exception(f"Could not find document '{document_name}' in Studio panel.")

        time.sleep(3)

        # 3. Start slideshow for clean view
        print("  🎥 Starting slideshow for clean capture...")
        # The slideshow button often looks like a play icon or has 'Present' text
        success_slideshow = False
        selectors = [
            "button[aria-label='Present']",
            "button[aria-label='Start slideshow']",
            "text='Present'",
            "text='Start slideshow'"
        ]
        
        for sel in selectors:
            try:
                btn = page.query_selector(sel) if not sel.startswith("text=") else page.get_by_text(sel[5:], exact=False)
                if btn and btn.is_visible():
                    btn.click()
                    success_slideshow = True
                    break
            except: continue
            
        if not success_slideshow:
            print("  ⚠️ Common selectors failed. Attempting coordinate click...")
            # From previous interaction, coordinate around 895, 46
            page.mouse.click(895, 46) 
            success_slideshow = True # Assume it works
        
        time.sleep(3)

        # 3. Navigate to the specific slide/page
        print(f"  🔢 Navigating to page {page_number}...")
        # Simple approach: Press right arrow N-1 times
        for _ in range(page_number - 1):
            page.keyboard.press("ArrowRight")
            time.sleep(1)

        # 4. Capture clean screenshot of the slide element
        print(f"  📸 Capturing clean screenshot...")
        # Target the main slide image/content
        # In slideshow mode, there's usually a clear container or img
        slide_img = page.query_selector("img.slide-image") # Example class, needs verification
        if not slide_img:
            # Fallback to a generic large img in the middle
            slide_img = page.query_selector("div.slideshow-view img")
        
        # Final fallback: Capture the whole viewport if specific element not isolated perfectly
        # but the slideshow mode itself should be clean enough.
        
        # Extract the absolute path for output
        abs_output_path = os.path.abspath(output_path)
        os.makedirs(os.path.dirname(abs_output_path), exist_ok=True)
        
        if slide_img:
            slide_img.screenshot(path=abs_output_path)
        else:
            page.screenshot(path=abs_output_path)
            
        print(f"  ✅ Screenshot saved to: {abs_output_path}")
        return True

    except Exception as e:
        print(f"  ❌ Error during capture: {e}")
        return False
    finally:
        if context:
            context.close()
        if playwright:
            playwright.stop()


def main():
    parser = argparse.ArgumentParser(description='Capture clean slide screenshots from NotebookLM Studio')
    parser.add_argument('--notebook-url', help='NotebookLM notebook URL')
    parser.add_argument('--notebook-id', help='Notebook ID from library')
    parser.add_argument('--doc-name', required=True, help='Name of the document in Studio panel')
    parser.add_argument('--page', type=int, default=1, help='Page number to capture')
    parser.add_argument('--output', required=True, help='Output path for the screenshot')
    parser.add_argument('--show-browser', action='store_true', help='Show browser')

    args = parser.parse_args()

    # Resolve notebook URL
    notebook_url = args.notebook_url
    if not notebook_url and args.notebook_id:
        library = NotebookLibrary()
        notebook = library.get_notebook(args.notebook_id)
        if notebook:
            notebook_url = notebook['url']
        else:
            print(f"❌ Notebook '{args.notebook_id}' not found")
            return 1

    if not notebook_url:
        library = NotebookLibrary()
        active = library.get_active_notebook()
        if active:
            notebook_url = active['url']
        else:
            print("❌ No notebook URL or ID provided, and no active notebook set.")
            return 1

    success = capture_slide(
        notebook_url=notebook_url,
        document_name=args.doc_name,
        page_number=args.page,
        output_path=args.output,
        headless=not args.show_browser
    )

    return 0 if success else 1


if __name__ == "__main__":
    sys.exit(main())
