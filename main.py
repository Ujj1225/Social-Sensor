# Read to Understand code better!
# keyword is the terminology and news is filtered with reference to this keyword.
# content finds all the news like everything available on the news portal
# printed_content stores all the content that has been printed 
# filtered_content is the content that contains keyword
# i is the iterative news like every news one by one

import requests
from bs4 import BeautifulSoup

url = "https://english.onlinekhabar.com/"
result = requests.get(url)
soup = BeautifulSoup(result.text, "lxml")
content = soup.find_all("div", class_ = "ok-post-contents")

printed_content = set()
 
for i in content:
    keyword = 'PatAn'
    filtered_content = i.h2.a.string.strip().lower()
    # Here, .strip() is used to make comparision without taking whitespace in account
    # And, .lower() is used to make all the content to lower case so the comparision is case-insensitive

    if(keyword.lower() in filtered_content) and (filtered_content not in printed_content):
        print(i.h2.a.string)
        printed_content.add(filtered_content)  
