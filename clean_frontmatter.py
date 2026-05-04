import os
import glob
import re

for root, dirs, files in os.walk('.'):
    if '.git' in root or '_site' in root:
        continue
    for file in files:
        if file.endswith('.md'):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            if content.startswith('---'):
                # Extract frontmatter
                parts = content.split('---', 2)
                if len(parts) >= 3:
                    fm = parts[1]
                    # remove layout, lang, permalink, alt_url lines
                    fm = re.sub(r'^(layout|lang|permalink|alt_url):.*$\n?', '', fm, flags=re.MULTILINE)
                    # if fm is empty or only whitespace, remove entirely
                    if not fm.strip():
                        new_content = parts[2].lstrip()
                    else:
                        new_content = f"---{fm}---" + parts[2]
                    
                    if new_content != content:
                        with open(path, 'w', encoding='utf-8') as f:
                            f.write(new_content)
