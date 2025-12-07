import json
import os

file_path = r'c:\Users\FixSwift Computers\Desktop\pp\saimirsain-portfolio\public\r\registry.json'

with open(file_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

items_to_remove = ['wheel-picker', 'wheel-picker-block-01', 'wheel-picker-block-02']

data['items'] = [item for item in data['items'] if item['name'] not in items_to_remove]

with open(file_path, 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2)

print("Successfully removed items from registry.json")
