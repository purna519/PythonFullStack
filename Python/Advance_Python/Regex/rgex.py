# Regex (short for Regular Expressions) is like a superpower that helps you find patterns in text.

# Find emails
# Check phone numbers
# Search for specific words or patterns
# Validate passwords 
# Extract dates, names, etc. 

# | Symbol | Meaning                           | Example Match                     |      |                       |
# | ------ | --------------------------------- | --------------------------------- | ---- | --------------------- |
# | `.`    | Any character (except newline)    | `a.c` → `"abc", "a-c"`            |      |                       |
# | `\d`   | Digit (0-9)                       | `\d` → `1`, `9`, etc              |      |                       |
# | `\w`   | Word character (a-z, A-Z, 0-9, _) | `\w` → `"a"`, `"5"`               |      |                       |
# | `\s`   | Space (space, tab, newline)       |                                   |      |                       |
# | `+`    | One or more                       | `\d+` → `123`, `9`                |      |                       |
# | `*`    | Zero or more                      | `a*` → `""`, `"aaa"`              |      |                       |
# | `?`    | Zero or one                       | `colou?r` → `"color"`, `"colour"` |      |                       |
# | `{n}`  | Exactly n times                   | `\d{3}` → `123`                   |      |                       |
# | `      | `                                 | OR                                | `cat | dog`→`"cat"`or`"dog"` |
# | `[]`   | One of the characters inside      | `[aeiou]` → vowels                |      |                       |
# | `^`    | Start of string                   | `^Hello` → starts with "Hello"    |      |                       |
# | `$`    | End of string                     | `world$` → ends with "world"      |      |                       |


import re

# pattern1 = r"\d{3}-\d{3}-\d{3}"
# match1 = "939-248-360"
# text1 = re.search(pattern1,match1)

# if text1:
#     print("Match Found : ",text1.group())

pattern1 = r"\w+@gmail\.com"
match1 = "Purna591@gmail.com"
test1 = re.search(pattern1, match1)


if test1:
    print("Match Found : ",test1.group())
else:
    print("Not Found")
