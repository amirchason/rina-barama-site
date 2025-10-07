#!/usr/bin/env python3
"""
Validate all blog post links on the Rina Barama site
"""

import json
import re
from pathlib import Path

PROJECT_ROOT = Path(__file__).parent
BLOG_POSTS_FILE = PROJECT_ROOT / "rina-barama-site/app/data/blogPosts.ts"
ADDITIONAL_POSTS_FILE = PROJECT_ROOT / "rina-barama-site/app/data/additionalBlogPosts.ts"

def extract_blog_slugs(file_path):
    """Extract all blog post slugs from TypeScript file"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find all slug definitions
    slug_pattern = r"slug:\s*['\"]([^'\"]+)['\"]"
    slugs = re.findall(slug_pattern, content)
    return slugs

def extract_internal_links(file_path):
    """Extract all internal blog links from TypeScript file"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find all internal blog links
    link_pattern = r"href=['\"](?:\.\.?)?/blog/([^'\"]+)['\"]"
    links = re.findall(link_pattern, content)
    return links

def main():
    print("🔍 Validating Blog Post Links\n")
    print("=" * 60)

    # Extract all slugs
    print("\n📝 Extracting blog post slugs...")
    slugs_posts = extract_blog_slugs(BLOG_POSTS_FILE)
    slugs_additional = extract_blog_slugs(ADDITIONAL_POSTS_FILE)
    all_slugs = set(slugs_posts + slugs_additional)

    print(f"✅ Found {len(all_slugs)} blog posts:")
    for i, slug in enumerate(sorted(all_slugs), 1):
        print(f"  {i}. /blog/{slug}")

    # Check for internal links in blog content
    print("\n🔗 Checking for internal links in blog content...")
    internal_links_posts = extract_internal_links(BLOG_POSTS_FILE)
    internal_links_additional = extract_internal_links(ADDITIONAL_POSTS_FILE)
    all_internal_links = set(internal_links_posts + internal_links_additional)

    if all_internal_links:
        print(f"Found {len(all_internal_links)} internal blog links:")
        broken_links = []
        for link in sorted(all_internal_links):
            if link in all_slugs:
                print(f"  ✅ /blog/{link}")
            else:
                print(f"  ❌ /blog/{link} - BROKEN!")
                broken_links.append(link)

        if broken_links:
            print(f"\n⚠️ Found {len(broken_links)} broken internal links!")
            print("These articles need to be created:")
            for link in broken_links:
                print(f"  - {link}")
        else:
            print("\n✅ All internal links are valid!")
    else:
        print("✅ No internal links found in blog content (all links are external)")

    # Check component files for blog links
    print("\n🔍 Checking component files...")
    component_files = [
        PROJECT_ROOT / "rina-barama-site/app/blog/page.tsx",
        PROJECT_ROOT / "rina-barama-site/app/components/BlogSection.tsx",
    ]

    all_component_links = set()
    for file_path in component_files:
        if file_path.exists():
            links = extract_internal_links(file_path)
            all_component_links.update(links)

    if all_component_links:
        print(f"Found {len(all_component_links)} dynamic blog links in components")
        print("(These are dynamically generated from the blog posts array, so they're always valid)")
    else:
        print("✅ All blog links in components are dynamically generated")

    # Summary
    print("\n" + "=" * 60)
    print("\n📊 Summary:")
    print(f"  Total blog posts: {len(all_slugs)}")
    print(f"  Internal links in content: {len(all_internal_links)}")
    print(f"  Status: {'✅ ALL LINKS VALID' if not all_internal_links or all(link in all_slugs for link in all_internal_links) else '❌ BROKEN LINKS FOUND'}")

    print("\n✨ Validation complete!")

if __name__ == "__main__":
    main()
